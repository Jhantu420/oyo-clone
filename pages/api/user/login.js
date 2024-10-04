import User from "@/models/user-model";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import connectDB from "@/db";

export default async function login(req,res){
    if(req.method === 'POST'){
        await connectDB();
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({ msg: "Email & Password required" });
        }
        const emailExists = await User.findOne({ email });
        if (!emailExists){
            return res.status(400).json({ msg: "Register first" });
        }
        const passwordMatched = await bcrypt.compare(password, emailExists.password);
        if(!passwordMatched){
            res.status(400).json({msg:"Invalid Credentitials"})
        }
        const token = jwt.sign({ token: emailExists._id }, "weekend_trek", {
            expiresIn: "15d",
          });
        res.status(200).json({msg:"Login Successfully",token})

    }
}