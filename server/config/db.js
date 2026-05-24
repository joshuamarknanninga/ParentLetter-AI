import mongoose from "mongoose";
export async function connectDb(uri){ if(!uri || uri.includes("optional")) return; try{ await mongoose.connect(uri); console.log("MongoDB connected"); } catch(err){ console.warn("MongoDB connection skipped:", err.message); }}
