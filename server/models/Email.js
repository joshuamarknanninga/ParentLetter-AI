import mongoose from "mongoose";
const emailSchema = new mongoose.Schema({ studentName:String, guardianName:String, teacherName:String, subject:String, emailType:String, tone:String, language:String, body:String }, { timestamps:true });
export default mongoose.models.Email || mongoose.model("Email", emailSchema);
