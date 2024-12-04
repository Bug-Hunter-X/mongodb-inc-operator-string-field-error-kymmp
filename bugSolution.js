```javascript
// Correct usage of $inc operator with a numeric field
db.collection.updateOne({"_id": 1}, {"$inc": {"numericValue": 1}});

// Alternative: Handling the type conversion before update
//If numericValue is string in the DB
 db.collection.findOneAndUpdate( { "_id": 1 },
   { $inc: { numericValue: 1 } },
   { returnOriginal: false }
 ).then(result => {
   console.log(result);
 })
```