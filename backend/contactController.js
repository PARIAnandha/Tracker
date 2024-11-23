const Contact = require('./Contact');

// GET all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error.message);
    res.status(500).json({ message: 'Server error while fetching contacts.' });
  }
};

// POST a new contact
exports.postContact = async (req, res) => {
  try {
    const { name, phone, location } = req.body;

    // Validate required fields
    if (!name || !phone || !location) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new contact
    const newContact = new Contact({
      name,
      phone,
      location,
    });

    // Save the contact to the database
    await newContact.save();

    res.status(201).json({ message: 'Contact added successfully', contact: newContact });
  } catch (error) {
    console.error('Error adding contact:', error.message);
    res.status(500).json({ message: 'Server error while adding contact.' });
  }
};
