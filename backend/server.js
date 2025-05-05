import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//Configure server
const app = express();

//Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//Data base connection
try {
  mongoose.connect(
    "mongodb://deepakbohara048:JmJroRdz5qtqYfKc@ac-zzqouwz-shard-00-00.ts9cgmf.mongodb.net:27017,ac-zzqouwz-shard-00-01.ts9cgmf.mongodb.net:27017,ac-zzqouwz-shard-00-02.ts9cgmf.mongodb.net:27017/?replicaSet=atlas-105fte-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Database connected successfulyy.");
} catch (error) {
  console.log("Could not connect to the database", error);
}

//4. Expose the port
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

//5. Make the attendance schema
const attendanceSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  time: { type: String, required: true },
});

//6. Make the table
const Attendance = mongoose.model("Attendance", attendanceSchema);

//7.Create attendance
app.post("/create-attendance", async (req, res) => {
  try {
    const newlyCreatedAttendance = await Attendance.create(req.body);
    return res.status(201).json({
      success: true,
      msg: "Your attendance has been recorded",
      data: newlyCreatedAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "some thing went wrong",
      data: null,
      error: error,
    });
  }
});

//8. Get all attendance
app.get("/get-all-attendance", async (req, res) => {
  try {
    const allAttendance = await Attendance.find();
    return res.status(200).json({
      succes: true,
      msg: "All attendance fetched successfully",
      data: allAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "some thing went wrong",
      data: null,
      error: error,
    });
  }
});

//9. Get single attendance
app.get("/get-single-attendance/:id", async (req, res) => {
  try {
    const singleAttendance = await Attendance.findById(req.params.id);
    if (!singleAttendance) {
      return res.status(404).json({
        success: false,
        msg: "The attendance you are looking does not exist",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Single attendance fetched successfully",
      data: singleAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "some thing went wrong",
      data: null,
      error: error,
    });
  }
});

//10.Update single attendance
app.patch("/update-single-attendance/:id", async (req, res) => {
  try {
    const updatedAttendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      success: true,
      msg: "Your attendance has been updated",
      data: updatedAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "some thing went wrong",
      data: null,
      error: error,
    });
  }
});

//11. Delete single attendance
app.delete("/delete-single-attendance/:id", async (req, res) => {
  try {
    const deletedAttendance = await Attendance.findByIdAndDelete(req.params.id);
    if(!deletedAttendance){
      return res.status(404).json({
        success:false,
        msg:"The attendance you are trying to delete does not exist",
        data:null,
      })
    }
    return res.status(200).json({
      success: true,
      msg: "Your attendance has been deleted",
      data: deletedAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "some thing went wrong",
      data: null,
      error: error,
    });
  }
});

//Staff management
//fullName,position,salary,age
