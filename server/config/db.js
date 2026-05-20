import mongoose from "mongoose";


const db_conn = async()=>{
    try {
        const db = process.env.MONG_URL 
        await mongoose.connect(db)
        console.log('database connected')
    } catch (error) {
        console.log('not connected')
        
    }
}
export default db_conn