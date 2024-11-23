const User = require('./model'); // Adjust the path if necessary

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, number, gender, location } = req.body;
        // Validate presence of required fields
        if (!name || !number || !gender || !location) {
            return res.status(400).json({ error: "All fields are required." });
          }
          
    const user = new User({
      name,
      number,
      gender,
      location,
    });

    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
};






