const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

// use this for function in Server.js for server connection

// const startServer = async () => {
//   try {
//     await connectDb();
//     app.listen(PORT, () => {
//       console.log(`Server is running on PORT : ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();
