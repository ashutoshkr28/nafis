// import mongoose from "mongoose";

// export const ConnectDB = async () => {
//     await mongoose.connect('mongodb+srv://mdnafissir:NafisAkbar@28@cluster0.lhlsg.mongodb.net/nafissirchhaurahi')
//     console.log("DB Connected")
// }

// import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config();

// export const ConnectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
//         });
//         console.log("DB Connected");
//     } catch (error) {
//         console.error("DB Connection Error:", error.message);
//         process.exit(1); // Exit the application if unable to connect
//     }
// };


// check error final update


// import mongoose from "mongoose";

// export const ConnectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://mdnafissir:NafisAkbar@28@cluster0.lhlsg.mongodb.net/nafissirchhaurahi');
//     console.log("DB Connected");
//   } catch (error) {
//     console.error("DB Connection Error:", error);
//   }
// };
