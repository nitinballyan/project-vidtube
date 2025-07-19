// ✅ Load .env before anything else
 import dotenv from "dotenv";
dotenv.config();

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";




// Upload Function
const uploadOnCloudinary = async (localFilePath) => {
   

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
  try {
    if (!localFilePath) {
      console.error("❌ No file path provided for upload");
      return null;
    }

    console.log("📤 Uploading file to Cloudinary:", localFilePath);

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("✅ Uploaded to Cloudinary:", response.url);
    return response;

  } catch (error) {
    console.error("❌ Upload error:", error.message);

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Delete file if upload fails
    }

    return null;
  }
};

// Export
export { uploadOnCloudinary };