const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// MongoDB connection
mongoose.connect("mongodb+srv://nemo:nemo@cluster0.obbtw.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User schema and model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Item schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
});

const Item = mongoose.model("Item", itemSchema);

// JWT secret
const jwtSecret = "your_jwt_secret";

// Login endpoint
const Login_route = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).send("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).send("Invalid password");
  }

  const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: "1h" });
  res.json({ token });
};

// Register endpoint
const Register_route = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ $or: [{ username }, { email }] });

  if (user) {
    return res.status(400).send("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();

  // create a token and send it
  const token = jwt.sign({ userId: newUser._id }, jwtSecret, {
    expiresIn: "1h",
  });
  res.json({ token });
};

// Items endpoint
const Items_route = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// Create item endpoint
const Item_create = async (req, res) => {
  const { name, description, image, price } = req.body;
  const newItem = new Item({ name, description, image, price });
  await newItem.save();
  res.status(201).json(newItem);
};

// Update item endpoint
const Items_update = async (req, res) => {
  var { id } = req.params;

  const { name, description, image } = req.body;
 
  console.log(req.body, id)
  const item = await Item.findByIdAndUpdate(
    id,
    { name, description, image, },
    { new: true }
  );
  res.json(item);
};

// Delete item endpoint
const Items_delete = async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndDelete(id);
  res.status(204).send();
};

// ENDPOINTS
app.post("/login", Login_route);
app.post("/register", Register_route);
app.get("/items", Items_route);
app.post("/items", Item_create);
app.put("/items/:id", Items_update);
app.delete("/items/:id", Items_delete);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
