const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ status: false, message: "All files are require" });

    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "No record existed" });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "The password is incorrect" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" }
    );

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "strict", 
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json({ message: "Success", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.Signup = async (req, res) => {
  try {
    const { firstName, lastName , email, phone , password } = req.body;

    
    const existingUser = await User.findOne({ email });

    if (!firstName || !lastName || !email || !phone || !password)
      return res
        .status(400)
        .json({ status: false, message: "All fields are required" });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

   
    const user = await User.create({
      firstName, 
      lastName,  
      email,
      phone,     
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.Logout = (req, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });
  res.status(201).json({ status: true, message: "Logout Successfull" });
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "not accessible , try again later" });
  }
};

