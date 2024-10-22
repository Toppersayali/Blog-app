// const mongoose = require('mongoose');
// const colors = require('colors');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI); // No options needed
//     console.log(`Connected to Mongodb Database: ${mongoose.connection.host}`.bgMagenta.white);
//   } catch (error) {
//     console.log(`MONGO Connect Error: ${error}`.bgRed.white);  

//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.error(`MONGO Connect Error: ${error.message}`.red);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
