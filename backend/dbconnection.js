const mongoose=require("mongoose")

const DBconnection=()=>{
    mongoose.connect(process.env.DB_CONNECT_URL).then(()=>{
        console.log("DB success full connect")
    }).catch((err)=>{
        console.log("connect error please check me",err)
    })
}

module.exports=DBconnection
