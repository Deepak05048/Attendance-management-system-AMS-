import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AttendanceCard() {
  const [fullName, setFullName] = useState("");
  const [time, setTime] = useState("");

  const createattendance = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("https://attendance-management-system-ams.onrender.com/create-attendance", {
        fullName: fullName,
        time: time,
      });
      toast.success("Attendance Created Successfully");

      setFullName("");
      setTime("");
      fetchAllAttendance()
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("Failed to take your attendance");
    }
  };
  //Fetch all attendance
  const [attendances, setAttendances] = useState(null);
  const fetchAllAttendance = async () => {
    try {
      const res = await axios.get("https://attendance-management-system-ams.onrender.com/get-all-attendance");
      console.log(res.data.data);
      setAttendances(res.data.data);
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("Unable to fetch all attendance");
    }
  };

  useEffect(() => {
    fetchAllAttendance();
  }, []);

  //Delete attendance
  const deleteAttendance = async (_id) => {
    try {
      const res=await axios.delete(`https://attendance-management-system-ams.onrender.com/delete-single-attendance/${_id}`);
      toast.success("Delete Success");
      fetchAllAttendance();
    } catch (error) {
      console.log("Something went wrong",error);
      toast.error("Delete Failed");
    }
  };

  // console.log(fullName);
  // console.log(time);

  return (
    <div>
      {/* Attendance create form */}
      <form
        onSubmit={createattendance}
        className="w-4/12 border border-gray-200 p-8 space-y-2 shadow-xl mx-auto"
      >
        <p>
          {fullName} {time}
        </p>

        <div className="flex flex-col">
          <label htmlFor="full-Name">Full Name</label>
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
            type="text"
            id="full-name"
            placeholder="Enter your full name"
            className="border border-gray-200 outline-none px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="time">Time</label>
          <input
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
            type="text"
            id="time"
            placeholder="Enter your entry time"
            className="border border-gray-200 outline-none px-2"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-violet-600 text-white px-6 py-1.5 rounded-md"
          >
            Create Attendance
          </button>
        </div>
      </form>
      {/* Attendance Table */}

      {attendances?.map((eachAttendance, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          <p>{index+1}</p>
          <p>{eachAttendance.fullName}</p>
          <p>{eachAttendance.time}</p>
           <p>{eachAttendance._id}</p>
          <button onClick={()=>deleteAttendance(eachAttendance._id)} className="text-white bg-red-500 px-2 py-1 text-xs">Delete</button>
        </div>
      ))}
    </div>
  );
}
