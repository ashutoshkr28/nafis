// import mongoose from "mongoose";

// const Schema = new mongoose.Schema({
//     title:{
//         type: String,
//         required:true
//     },
//     description:{
//         type: String,
//         required:true
//     },
//     category:{
//         type: String,
//         required:true
//     },
//     author:{
//         type: String,
//         required:true
//     },
//     image:{
//         type: String,
//         required:true
//     },
//     authorImg:{
//         type: String,
//         required: true
//     },
//     date:{
//         type:Date,
//         default:Date.now()
//     }
// })


// const BlogModel = mongoose.model.blog || mongoose.model("blog", Schema)


// export default BlogModel;



// // final code check some error 

// // import mongoose from "mongoose";

// // const BlogSchema = new mongoose.Schema({
// //     title: {
// //         type: String,
// //         required: true
// //     },
// //     description: {
// //         type: String,
// //         required: true
// //     },
// //     category: {
// //         type: String,
// //         required: true
// //     },
// //     author: {
// //         type: String,
// //         required: true
// //     },
// //     image: {
// //         type: String,
// //         required: true
// //     },
// //     authorImg: {
// //         type: String,
// //         required: true
// //     },
// //     date: {
// //         type: Date,
// //         default: Date.now // Use function reference for dynamic default value
// //     }
// // });

// // // Use `mongoose.models` to avoid OverwriteModelError
// // const BlogModel = mongoose.models.blog || mongoose.model("blog", BlogSchema);

// // export default BlogModel;
