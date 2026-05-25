import { User } from "../Model/UserModel.js"
import bcrypt from "bcryptjs"



export const register = async(req,res)=>{
    try {
        const {name,email,password} = req.body;


const EmailExist= await User.findOne({email})
if(EmailExist){
    return res.json({success:false,message:"emailExist arleady"})

}

const HashPassword= await bcrypt.hash(password,10)


        await User.create({ name, email, password:HashPassword });
        res.json({success:true,message:'User Created Succefull'})
    } catch (error) {
        return res.json({message:error.message})
    }
}


export const Login = async(req,res)=>{
    
    
    
    try {
        const{email,password}= req.body;
        const EmailExist = await User.findOne({email})
        if (!EmailExist){
            return res.json({success:false,message:"emailNotExist"})
        }
        const IsMatch = await bcrypt.compare(password,EmailExist.password);
        if (!IsMatch)
            {
            return res.json({ success: false, message: "emvald password" });
        }
    return res.json({ success: true, message: "login successfully" });
    
   
   
} catch (error) {

         return res.json({ message: error.message });

    }
}
