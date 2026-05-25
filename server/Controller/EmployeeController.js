import { Employee } from "../Model/EmployeeModel.js";



// Create(Injiza)
export const insert = async(req,res)=>{
try {
        const {
          employeeNumber,
          firstName,
          lastName,
          telephone,
          address,
          email,
          position,
          hireDate,
          departmentId,
        } = req.body;

        await Employee.create({
          employeeNumber,
          firstName,
          lastName,
          telephone,
          address,
          email,
          position,
          hireDate,
          departmentId,
        });

        return res.json({success:true,message:"Employee Create Successfull"})
} catch (error) {
    res.json({success:false,message:error.message})
}
}

// Read(Soma)
export const get = async(req,res)=>{
    try {
        const employee = await Employee.find().populate("departmentId");
        return res.json({success:true,employee})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

// Update(Hindura)
export const update = async(req,res)=>{
    try {
                const {
                  employeeNumber,
                  firstName,
                  lastName,
                  telephone,
                  address,
                  email,
                  position,
                  hireDate,
                  departmentId,
                } = req.body;
                const {id} = req.params

                await Employee.findByIdAndUpdate(
                  { _id: id },
                  {
                    employeeNumber,
                    firstName,
                    lastName,
                    telephone,
                    address,
                    email,
                    position,
                    hireDate,
                    departmentId,
                  },
                );

                return res.json({success:true,message:"Employeeee Update Succeessfull"})
    } catch (error) {
        res.json({message:error.message})
    }
}


export const remove = async(req,res)=>{
    try {
        const {id} =req.params
        await Employee.findByIdAndDelete({_id:id})
        return res.json({success:true,message:"Delete Employee"})
    } catch (error) {
        res.json({message:error.message})
    }
}