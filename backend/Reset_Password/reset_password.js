import app from "../app.js";
import bcrypt from "bcrypt";
import UsersDB from "../Schemas/user-schema.js";

//Reset/update the users password
app.put("/reset-password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    //Find user by email
    const user = await UsersDB.findOne({ email: email });

    //User not found
    if (!user) {
      return res.status(402).json({ message: "Could not find email" });
    }

    //hash the new password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    //update the old password with the new hashed password
    await UsersDB.updateOne({ email: email }, { password: hashedPassword });

    return res.status(200).json({ message: "Reset password Successfully" });
  } catch (error) {
    console.log("Error in forgot-password/reset: " + error);
    return res.status(404).json({ message: "Error when resetting password." });
  }
});
