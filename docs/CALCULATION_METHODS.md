# Calculation Methods

## Fuel calculator

- Monthly litres = monthly distance km ÷ km/L.
- Monthly fuel cost = monthly litres × PKR/L.
- Annual fuel cost = monthly fuel cost × 12.
- Fuel cost per kilometre = PKR/L ÷ km/L.

Monthly distance and fuel price allow zero; fuel efficiency must be greater than zero. All values must be finite and non-negative.

## Ownership comparison

Both vehicles use the same annual distance, petrol price, and duration of exactly 3 or 5 years.

- Annual fuel cost = (annual distance km ÷ vehicle km/L) × PKR/L.
- Total fuel cost = annual fuel cost × years.
- Total maintenance = annual maintenance × years.
- Total insurance = annual insurance × years.
- Total taxes and fees = annual taxes and fees × years.
- Depreciation = purchase price − expected resale value.
- Total ownership cost = depreciation + total fuel + total maintenance + total insurance + total taxes/fees + one-time costs.
- Average monthly cost = total ownership cost ÷ (years × 12).
- Cost per kilometre = total ownership cost ÷ (annual distance × years).
- Difference = absolute difference between both total ownership costs.

### Input assumptions and validation

Purchase price, fuel efficiency, annual distance and petrol price must be positive. Maintenance, insurance, taxes/fees, resale value, and one-time costs may be zero. Negative, blank, non-finite, or over-limit values are invalid. Resale value may not exceed purchase price in this simplified depreciation model.

Supported planning ranges are up to PKR 1 billion for each money input, 200,000 km annual distance, 100 km/L fuel efficiency, and PKR 10,000/L. These are validation boundaries, not claims about normal market values.

### Sample calculation

For a three-year example with purchase price Rs 5,000,000, resale Rs 3,500,000, 15,000 km/year, 12 km/L, Rs 280/L, Rs 120,000 annual maintenance, Rs 100,000 annual insurance, Rs 25,000 annual taxes/fees and Rs 50,000 one-time costs:

- Annual fuel = (15,000 ÷ 12) × 280 = Rs 350,000.
- Three-year fuel = Rs 1,050,000.
- Depreciation = Rs 1,500,000.
- Maintenance = Rs 360,000; insurance = Rs 300,000; taxes/fees = Rs 75,000.
- Total = 1,500,000 + 1,050,000 + 360,000 + 300,000 + 75,000 + 50,000 = Rs 3,335,000.

### Rounding and edge cases

Calculations retain JavaScript number precision. Money is rounded to zero decimals for display and per-kilometre results to at most two decimals; the unrounded values drive comparisons. Equal totals produce a tie. Zero optional costs do not invalidate a result. Division by zero is prevented through positive distance and efficiency validation.

### Limitations

This is a simplified cash-purchase model. It excludes financing, inflation, investment opportunity cost, parking, tolls, and unpredictable repairs. It assumes constant annual driving, efficiency, recurring costs, and fuel price. Resale values and future costs remain uncertain.
