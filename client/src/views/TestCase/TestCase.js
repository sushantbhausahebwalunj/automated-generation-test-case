import React, { useState } from 'react';
import './TestCase.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const TestCaseForm = () => {
  const [formData, setFormData] = useState({
    code: '',
    specifications: '',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your test case generation logic here, such as sending data to a server
    console.log('Form data submitted:', formData);
    // Reset the form after submission
    setFormData({
      code: '',
      specifications: '',
      instructions: '',
    });
  };

  return (
    <>
    <Navbar />
    <div className="test-case-form">
      <h2>Generate Test Case</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="code">Code:</label>
          <textarea
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specifications">Specifications:</label>
          <textarea
            id="specifications"
            name="specifications"
            value={formData.specifications}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        <button type="submit" className="generate-btn">
          Generate Test Case
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default TestCaseForm;
