const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://gofood:gofood@cluster0.jsjxg1q.mongodb.net/gofoodmern?retryWrites=true&w=majority"
//const mongoURI = "mongodb://gofood:gofood@ac-3hxla6x-shard-00-00.jsjxg1q.mongodb.net:27017,ac-3hxla6x-shard-00-01.jsjxg1q.mongodb.net:27017,ac-3hxla6x-shard-00-02.jsjxg1q.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-10saud-shard-0&authSource=admin&retryWrites=true&w=majority"

/*const mongoDB = async ()=>{
    try {
        mongoose.set('strictQuery', false)
       await mongoose.connect(mongoURI) 
        console.log('Mongo connected')
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray( function(err, data){
            if(err) console.log(err);
            else {
                global.food_items = data;
                console.log(global.food_items)
            }
        })
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
}*/
/*const mongoDB = async () =>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true},  async (err,result)=>{
        if(err) console.log("---",err)
        else{
            console.log("connected")
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray( function(err, data){
            if(err) console.log(err);
            else {
                global.food_items = data;
            }
        })
        }
    })
}*/
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

//const mongoose = require('mongoose')
//const mongoDbClient = require("mongodb").MongoClient
//const mongoURI ="mongodb+srv://gofood:gofood@cluster0.jsjxg1q.mongodb.net/gofoodmern?retryWrites=true&w=majority"
////const mongoURI = 'mongodb://<!#@!#@>:"!@!@"@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/Customer?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority' // Customer change url to your db you created in atlas
//// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
//module.exports = function (callback) {
//    //mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//        if (err) console.log("---" + err)
//        else {
//            // var database =
//            console.log("connected to mongo")
//            const foodCollection = await mongoose.connection.db.collection("food_items");
//            foodCollection.find({}).toArray(async function (err, data) {
//                const categoryCollection = await mongoose.connection.db.collection("Categories");
//                categoryCollection.find({}).toArray(async function (err, Catdata) {
//                    callback(err, data, Catdata);
//
//                })
//            });
//            // listCollections({name: 'food_items'}).toArray(function (err, database) {
//            // });
//            //     module.exports.Collection = database;
//            // });
//        }
//    })
//};

//const mongoDbClient = require("mongodb").MongoClient;
//const mongoURI = "mongodb+srv://gofood:gofood@cluster0.jsjxg1q.mongodb.net/gofoodmern?retryWrites=true&w=majority";
//
//module.exports = function(callback) {
//    mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async (err, client) => {
//        if (err) {
//            console.log("---" + err);
//            return callback(err);
//        }
//
//        console.log("Connected to MongoDB");
//
//        const db = client.db(); // Get the database instance
//
//        try {
//            const foodCollection = db.collection("food_items");
//            const categoryCollection = db.collection("Categories");
//
//            const foodData = await foodCollection.find({}).toArray();
//            const categoryData = await categoryCollection.find({}).toArray();
//
//            client.close(); // Close the connection
//
//            callback(null, foodData, categoryData);
//        } catch (error) {
//            console.error("Error fetching data from MongoDB:", error);
//            client.close();
//            callback(error);
//        }
//    });
//};
//