const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://gofood:gofood@cluster0.jsjxg1q.mongodb.net/.....?retryWrites=true&w=majority"

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
         
        //****** THIS WILL FETCH FOOD ITEMS ****
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray(async function(err, data)
        {
            if(err) console.log(err);
            else {
                global.food_items = data;
            }
        }); // Use await here to wait for the data
        
         
        //****** THIS WILL FETCH FOOD ITEMS ****
        const foodCategory =  mongoose.connection.db.collection("foodCategory")
           const catData = await foodCategory.find({}).toArray(async function (err,catData){
            if(err) console.log(err);
            else {
                global.food_items = catData;
            }
            })// Use await here to wait for the data
            
         global.food_items = data;
         global.foodCategory = catData;
       // console.log(global.food_items,global.foodCategory);
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
};
module.exports = mongoDB

