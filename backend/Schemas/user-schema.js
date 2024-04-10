import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  images: [
    {
      type: Object, //base 64 image(s)
      default: null,
    },
  ],
  profileInfo: {
    //profile bio
    interests: {
      type: String,
      default: "I have no interests.",
    },

    //Other stuff can go here
  },
});

const UsersDB = new mongoose.model("User", userSchema);

export default UsersDB;
