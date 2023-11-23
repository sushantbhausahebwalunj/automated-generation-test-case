import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    default: "-",
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
   mobile: {
    type: Number,
    required: true,
  }
},
{
  timestamps: true,
});

const User = model("User", userSchema);

export default User;