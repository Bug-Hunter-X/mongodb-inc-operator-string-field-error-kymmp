# MongoDB $inc Operator Error with String Field

This repository demonstrates an uncommon error in MongoDB related to the incorrect usage of the `$inc` operator.  The `$inc` operator is designed for incrementing numeric fields. Attempting to use it with a string field will result in an error or unexpected behavior.

## Bug Description
The bug involves using the `$inc` operator to increment a field that is of type string. MongoDB will not be able to perform a numerical increment on a string value.

## Solution
The correct approach involves ensuring that the field you're incrementing is of the correct data type (number).  You can either modify the schema to use a numeric type or handle the type conversion before updating the document using the `$inc` operator.