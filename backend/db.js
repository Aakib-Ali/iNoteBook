// const mongoose = require('mongoose');
// const mongoURI="mongodb://localhost:27017"
// const connectToMongoo = () =>{
//     mongoose.connect(mongoURI, () =>{
//         console.log("DB Connected ot mongo succesfully")
//     })
// }
// module.exports = connectToMongoo;

const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("DB Connected to MongoDB successfully");
};

module.exports = connectToMongo;
