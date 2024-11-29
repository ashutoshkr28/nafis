// import { ConnectDB } from "@/lib/config/db"
// import BlogModel from "@/lib/models/BlogModel"

// const { NextResponse } = require("next/server")
// import {writeFile} from 'fs/promises'



//     const LoadDB = async () => {
//         await ConnectDB
//     }

//     LoadDB();
//     export async function GET(request){
//         console.log("Blog GET Hit")
//         return NextResponse.json({msg:"API Working"})
//     }

//     export async function POST(request){
         
//         const formData = await request.formData();
//         const timestamp = Date.now();

//         const image = formData.get('image'); 
//         const imageByteData = await image.arrayBuffer();
//         const buffer = Buffer.from(imageByteData);
//         const path = `./public/${timestamp}_${image.name}`
//         await writeFile(path,buffer);
//         const imgUrl = `/${timestamp}_${timestamp}`;
//         const blogData = {
//             title:`${formData.get('title')}`,
//             description:`${formData.get('description')}`,
//             category:`${formData.get('category')}`,
//             author:`${formData.get(author)}`,
//             image:`${formData.get(image)}`,
//             authorImg:`${formData.get(authorImg)}`
//         }

//         await BlogModel.create(blogData)
//         console.log("Blog Saved");
        
//         return NextResponse.json({success:true, msg: "Blog Added"})
        

//     }


// import { ConnectDB } from "@/lib/config/db";
// import BlogModel from "@/lib/models/BlogModel";
// import { NextResponse } from "next/server";
// import { writeFile } from "fs/promises";
// import formidable from "formidable";

// export const POST = async (request) => {
//     await ConnectDB();
//     const form = new formidable.IncomingForm();
//     form.uploadDir = "./uploads"; // Set your upload directory path
//     form.keepExtensions = true;

//     return new Promise((resolve, reject) => {
//         form.parse(request, async (err, fields, files) => {
//             if (err) {
//                 console.error(err);
//                 return reject(new NextResponse("Error parsing form data", { status: 500 }));
//             }

//             const { title, description, category, author, authorImg } = fields;

//             const image = files.image;
//             const timestamp = Date.now();
//             const imagePath = `./uploads/${timestamp}_${image.name}`;

//             // Save uploaded image
//             await writeFile(imagePath, image.file);

//             const blogData = {
//                 title: title,
//                 description: description,
//                 category: category,
//                 author: author,
//                 image: imagePath,
//                 authorImg: authorImg,
//             };

//             try {
//                 await BlogModel.create(blogData);
//                 return resolve(new NextResponse(JSON.stringify({ success: true, msg: "Blog Added" }), { status: 200 }));
//             } catch (error) {
//                 console.error("Error saving blog:", error.message);
//                 return reject(new NextResponse(JSON.stringify({ success: false, msg: "Failed to save blog", error: error.message }), { status: 500 }));
//             }
//         });
//     });
// };

// final code check some error


// import { ConnectDB } from "@/lib/config/db";
// import BlogModel from "@/lib/models/BlogModel";
// import { NextResponse } from "next/server";
// import { writeFile } from "fs/promises";
// import formidable from "formidable";

// export const POST = async (request) => {
//     await ConnectDB();

//     // Initialize the form with appropriate settings
//     const form = formidable({
//         uploadDir: "./uploads", // Set your upload directory path
//         keepExtensions: true,  // Keep file extensions (e.g., .jpg, .png)
//     });

//     return new Promise((resolve, reject) => {
//         form.parse(request, async (err, fields, files) => {
//             if (err) {
//                 console.error(err);
//                 return reject(new NextResponse("Error parsing form data", { status: 500 }));
//             }

//             // Extract fields from form
//             const { title, description, category, author, authorImg } = fields;

//             // Extract uploaded file
//             const image = files.image;
//             const timestamp = Date.now();
//             const imagePath = `./uploads/${timestamp}_${image.name}`;

//             // Save uploaded image to file system
//             try {
//                 await writeFile(imagePath, image.file);
//             } catch (error) {
//                 console.error("Error saving image:", error.message);
//                 return reject(new NextResponse("Error saving image", { status: 500 }));
//             }

//             // Prepare blog data to save
//             const blogData = {
//                 title: title,
//                 description: description,
//                 category: category,
//                 author: author,
//                 image: imagePath,
//                 authorImg: authorImg,
//             };

//             // Save the blog data into MongoDB
//             try {
//                 await BlogModel.create(blogData);
//                 return resolve(new NextResponse(JSON.stringify({ success: true, msg: "Blog Added" }), { status: 200 }));
//             } catch (error) {
//                 console.error("Error saving blog:", error.message);
//                 return reject(new NextResponse(JSON.stringify({ success: false, msg: "Failed to save blog", error: error.message }), { status: 500 }));
//             }
//         });
//     });
// };
