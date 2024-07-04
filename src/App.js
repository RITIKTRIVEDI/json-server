import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
  const [data, setData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/data', data);
      console.log(response.data); // Log the created data
      // Reset form or update UI as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={data.name} 
          onChange={handleChange} 
          className="form-control" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={data.email} 
          onChange={handleChange} 
          className="form-control" 
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default App;
