import app from "../app.js";
import bcrypt from "bcrypt";
import UsersDB from "../Schemas/user-schema.js";
//User logging in
app.get("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    //Find the user in the database
    const user = await UsersDB.findOne({ email: email.toLowerCase() });

    //User not found
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email or password is incorrect." });
    }

    //Compare the passwords
    //Because the passwords are encrypted, we need to decrypt it to compare
    const passwordMatch = await bcrypt.compare(password, user.password);

    //Incorrect password
    if (!passwordMatch) {
      return res
        .status(201)
        .json({ message: "Email or password is incorrect." });
    }
    const userData = {
      id: user._id,
    };

    // Login is correct
    return res.status(200).json({ userData: userData });
  } catch (error) {
    console.log("Error when logging in: " + error);
    return res.status(401).json({ message: "Error when logging in: " + error });
  }
});

//User is registering
app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    //Check to see a user is already registered with this email
    const existingUser = await UsersDB.findOne({ email: email });

    //Another user has already registered with this email
    if (existingUser) {
      return res.status(409).json({
        error: "Email address already exists",
        message:
          "The email address you provided is already registered. Please use a different email address.",
      });
    }

    //Validated in front-end. If there's an off-chance they sneaked by the validation,
    //compare the two passwords
    if (password !== confirmPassword) {
      return res.status(401).json({
        error: "Passwords do not match",
        message: "The passwords you entered do not match.",
      });
    }

    //Encrypt the password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    //New user, matching the schema needed for users document
    const newUser = new UsersDB({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });
    //Save the user to the DB
    await newUser.save();

    return res.status(201).json({ message: "Registered Successfully" });
  } catch (error) {
    console.log("Something happened when registering a user: " + error);
    return res
      .status(400)
      .json({ error: "Something went wrong when registering a user:" + error });
  }
});
