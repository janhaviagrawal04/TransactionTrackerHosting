
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://janhavia0801:ZK9JmDCaXB5j2Kyo@cluster0.ul5yt.mongodb.net/Transaction",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connected to DB");
}).catch((error)=>{
    console.log(`Error connecting to mongodb ${error}`);
})
