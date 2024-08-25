const express=require('express');
const {userModel}=require("./models/Schema");
require("./db/connection");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
app.listen(3000,()=>{
    console.log("Server running on the port 3000");
})
app.get("/",async(req,res)=>{
    res.send("Success");
})

app.post("/postdata", async (req, res) => {
    const { id, name, type, category, amount, date } = req.body;
    try {
      // Parse the date field
      const recordDate = new Date(date);
      if (isNaN(recordDate.getTime())) {
        return res.status(400).json({ message: "Invalid date value" });
      }

      const check = await userModel.findOne({ id: id });
      const record = {
        type,
        category,
        amount,
        date: recordDate // Use the constructed Date object
      };
     

      if (check) {
        // User exists, push new record into the records array
        check.records.push(record);
        await check.save();
        res.status(200).json({ message: "Record added successfully", user: check });
      } else {
        // Create new user with the initial record
        const user = await userModel.create({
          id,
          name,
          records: [record],
        });
        res.status(200).json({ message: "User created successfully", user: user });
      }
    } catch (error) {
      res.status(500).json({ message: "Error creating the user" });
    }
});

 
  app.get("/getdata",async(req,res)=>{
    try {
        const user=await userModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:"user not getting"});
    }
     
  })

