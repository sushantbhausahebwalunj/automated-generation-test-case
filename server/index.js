import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import User from './models/User.js';


const app = express();
app.use(express.json());

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL);
  if (conn) {
    console.log(`MongoDB connected`);
  }
};


// POST /signup
app.post("/signup", async (req, res) => {
  const {
    name,
    email,
    password,
    mobile,
  } = req.body;

  const user = new User({
    name: name,
    email: email,
    password: password,
    mobile: mobile,
  });

  try {
    const savedUser = await user.save();

    res.json({
      success: true,
      data: savedUser,
      message: "Signup successful"
    })
  }
  catch (e) {
    res.json({
      success: false,
      message: e.message
    })
  }
});

// POST /login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Please provide email and password"
    })
  }

  const user = await User.findOne({
    email: email,
    password: password
  }).select("name email mobile")

  if(user){
    return res.json({
      success: true,
      data: user,
      message: "Login successful"
    });
  }else{
    return res.json({
      success: false,
      message: "Invalid credentials"
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
  connectDB();
});