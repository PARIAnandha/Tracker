import axios from 'axios'; // Correctly import axios

const URL = "http://localhost:5000"; // Base URL for your backend

// GET request function to fetch users
export const getData = async () => {
  try {
    const response = await axios.get(`${URL}/api/users`); // Endpoint to fetch users
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error.message);
    throw error;
  }
};

// POST request function to add a user
export const postData = async (data) => {
    try {

        const response = await axios.post(`${URL}/api/users`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error in POST request:", error.message);
        throw error;
      }
};


// POST request function to add a contact
export const contactpostData = async (data) => {
  try {
   
      const response = await axios.post(`${URL}/api/contacts`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error in POST request:", error.message);
      throw error;
    }
};