// Cube.js configuration options: https://cube.dev/docs/config

// NOTE: third-party dependencies and the use of require(...) are disabled for
// CubeCloud users by default.  Please contact support if you need them
// enabled for your account.  You are still allowed to require
// @cubejs-backend/*-driver packages.

module.exports = {
};


/*
Total Sales Amount = sum(FactInternetSales[SalesAmount])
Total Quantity = sum(FactInternetSales[OrderQuantity])
Average Unit Price = DIVIDE([Total Sales Amount],[Total Quantity],blank())

Total Sales Amount - LY = CALCULATE([Total Sales Amount],SAMEPERIODLASTYEAR(DimDate[FullDateAlternateKey]))
Total Quantity - LY = CALCULATE([Total Quantity],SAMEPERIODLASTYEAR(DimDate[FullDateAlternateKey]))
Average Unit Price - LY = CALCULATE([Average Unit Price],SAMEPERIODLASTYEAR(DimDate[FullDateAlternateKey])


PVM Price(Rev) = [Total Quantity - LY] * ([Average Unit Price]-[Average Unit Price - LY])
PVM Vol(Rev) = [Average Unit Price - LY]*([Total Quantity]-[Total Quantity - LY])
PVM Mix(Rev) = ([Average Unit Price]-[Average Unit Price - LY])*([Total Quantity]-[Total Quantity - LY])
*/