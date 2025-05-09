import { UserModel } from "../../models/user.model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const saltRounds = 10;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashPassword,
      role: "USER",
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating user", error: error.message });
  }
};
