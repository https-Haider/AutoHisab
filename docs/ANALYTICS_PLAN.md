# Analytics Plan

Plan date: 12 October 2026

## Purpose and guardrails

Analytics should answer whether visitors reach the calculators, successfully interact with them, and continue to useful guidance. It must not collect calculator values, vehicle names, email addresses, phone numbers, or other user-entered data. AutoHisab has no advertising or cross-site tracking requirement.

## Current production configuration

Google Analytics 4 loads only when `NEXT_PUBLIC_GA_ID` is a valid `G-...` value. The linked Vercel project has this variable scoped to Production, and the live site emits measurement ID `G-NY2QJKW9ZH`. The value is intentionally configured in Vercel rather than committed to source.

Before accepting a deployment, confirm the page source contains the expected `googletagmanager.com/gtag/js?id=...` request and matching `gtag('config', ...)` value. Then use GA4 Realtime or DebugView to verify receipt; source inspection proves configuration, not data ingestion.

## Measurement questions

- Which calculator and guide landing pages attract useful organic traffic?
- Do visitors change the illustrative defaults before using a result?
- Which validation problems prevent a result from appearing?
- Do guide readers continue to a calculator?
- Does mobile engagement differ materially from desktop?

## Proposed event vocabulary

Implement these only after consent/privacy requirements are reviewed. Send categorical context, never raw form values.

- `calculator_view`: `calculator_type` (`fuel` or `ownership`).
- `calculator_interaction`: `calculator_type`, `field_group` (for example `driving`, `vehicle_a`, `vehicle_b`, `duration`).
- `calculator_result_view`: `calculator_type`, `duration_years` for ownership only, and `used_example_defaults` as a boolean.
- `calculator_validation_error`: `calculator_type`, `field_name`, and `error_type`; never send the invalid value.
- `calculator_reset`: `calculator_type`.
- `guide_to_calculator_click`: `guide_slug`, `calculator_type`.

Avoid firing an event on every keystroke. Prefer the first meaningful change per field group and a result event only after a valid state transition or explicit future submit action.

## Core reporting

- Landing pages: sessions, engaged sessions, engagement rate, and organic search source.
- Calculator funnel: calculator view → interaction → valid result.
- Content assist: guide landing → calculator click → calculator interaction.
- Quality: validation-error rate by field and device category.
- Retention proxy: returning users and repeat calculator sessions, interpreted cautiously because privacy controls affect identification.

No numeric conversion target should be invented before a baseline exists. Collect at least four representative weeks, annotate releases, then set targets from observed behavior.

## Release validation

1. Confirm `NEXT_PUBLIC_GA_ID` exists only in intended Vercel environments.
2. Confirm a production build with no valid ID emits no Google Analytics script.
3. Confirm the deployed page source contains one loader and one matching configuration call.
4. Check browser console and network requests for failures.
5. Verify a visit in GA4 Realtime or DebugView from a permitted test browser.
6. Confirm the privacy page still accurately describes measurement.

Steps 1–3 can be checked from code and deployment output. Steps 4–5 require a browser and access to the correct GA4 property.
