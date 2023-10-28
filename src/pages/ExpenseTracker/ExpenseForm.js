import React, { useState } from 'react';
import './ExpenseForm.css'; // Import your custom CSS file

function ExpenseForm({ section, selectedSubsection, onSubsectionSelected, onExpenseSubmit }) {
  const [formData, setFormData] = useState({
    particulars: '',
    billNo: '',
    billDate: '',
    amount: '',
    sectionInCharge: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an expense object with the form data
    const expense = {
      particulars: formData.particulars,
      billNo: formData.billNo,
      billDate: formData.billDate,
      amount: parseFloat(formData.amount), // Convert to float
      sectionInCharge: formData.sectionInCharge,
      subsection: selectedSubsection ? selectedSubsection.name : '',
    };

    // Pass the expense object to the onExpenseSubmit function
    onExpenseSubmit(expense);

    // Clear form fields after submission
    setFormData({
      particulars: '',
      billNo: '',
      billDate: '',
      amount: '',
      sectionInCharge: '',
    });
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="particulars">Particulars:</label>
          <input
            type="text"
            name="particulars"
            value={formData.particulars}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subsection">Subsection:</label>
          <select
            name="subsection"
            value={selectedSubsection ? selectedSubsection.name : ''}
            onChange={(e) => {
              const selectedSubsection = section.subsections.find(
                (subsection) => subsection.name === e.target.value
              );
              onSubsectionSelected(selectedSubsection);
            }}
            required
          >
            <option value="" disabled>Select a Subsection</option>
            {section.subsections.map((subsection, index) => (
              <option key={index} value={subsection.name}>
                {subsection.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="billNo">Bill No:</label>
          <input
            type="text"
            name="billNo"
            value={formData.billNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="billDate">Bill Date:</label>
          <input
            type="date"
            name="billDate"
            value={formData.billDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Bill Amount (in Rupees):</label>
          <input
            type="number"
            step="0.01"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sectionInCharge">Section In-Charge:</label>
          <input
            type="text"
            name="sectionInCharge"
            value={formData.sectionInCharge}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className='button-17'>Submit Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;


