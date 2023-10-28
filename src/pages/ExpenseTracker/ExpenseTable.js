import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function ExpenseTable({ section, selectedSubsection, expenses, onUpdateExpense, onDeleteExpense }) {
  const [editableIndex, setEditableIndex] = useState(null);
  const [updatedExpense, setUpdatedExpense] = useState({
    particulars: '',
    billNo: '',
    billDate: '',
    amount: 0,
    sectionInCharge: '',
  });

  const handleEditClick = (index) => {
    setEditableIndex(index);
    setUpdatedExpense(expenses[index]);
  };

  const handleSaveClick = () => {
    onUpdateExpense(updatedExpense);
    setEditableIndex(null);
    setUpdatedExpense({
      particulars: '',
      billNo: '',
      billDate: '',
      amount: 0,
      sectionInCharge: '',
    });
  };

  const handleDeleteClick = (expenseId) => {
    onDeleteExpense(expenseId);
  };

  return (
    <div>
      <h3>Expense Table</h3>
      <Table>
        <Thead>
          <Tr>
            <Th>Particulars</Th>
            <Th>Bill No</Th>
            <Th>Bill Date</Th>
            <Th>Bill Amount (Rupees)</Th>
            <Th>Section In-Charge</Th>
            <Th>Total Amount Spent (Rupees)</Th>
            <Th>Balance (Rupees)</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {expenses.map((expense, index) => (
            <Tr key={index}>
              <Td>
                {editableIndex === index ? (
                  <input
                    type="text"
                    value={updatedExpense.particulars}
                    onChange={(e) =>
                      setUpdatedExpense({
                        ...updatedExpense,
                        particulars: e.target.value,
                      })
                    }
                  />
                ) : (
                  expense.particulars
                )}
              </Td>
              <Td>
                {editableIndex === index ? (
                  <input
                    type="text"
                    value={updatedExpense.billNo}
                    onChange={(e) =>
                      setUpdatedExpense({
                        ...updatedExpense,
                        billNo: e.target.value,
                      })
                    }
                  />
                ) : (
                  expense.billNo
                )}
              </Td>
              <Td>
                {editableIndex === index ? (
                  <input
                    type="text"
                    value={updatedExpense.billDate}
                    onChange={(e) =>
                      setUpdatedExpense({
                        ...updatedExpense,
                        billDate: e.target.value,
                      })
                    }
                  />
                ) : (
                  expense.billDate
                )}
              </Td>
              <Td>
                {editableIndex === index ? (
                  <input
                    type="number"
                    value={updatedExpense.amount}
                    onChange={(e) =>
                      setUpdatedExpense({
                        ...updatedExpense,
                        amount: e.target.value,
                      })
                    }
                  />
                ) : (
                  expense.amount
                )}
              </Td>
              <Td>
                {editableIndex === index ? (
                  <input
                    type="text"
                    value={updatedExpense.sectionInCharge}
                    onChange={(e) =>
                      setUpdatedExpense({
                        ...updatedExpense,
                        sectionInCharge: e.target.value,
                      })
                    }
                  />
                ) : (
                  expense.sectionInCharge
                )}
              </Td>
              <Td>{calculateTotalAmountSpent(expenses, index)}</Td>
              <Td>{calculateBalance(expenses, index, selectedSubsection)}</Td>
              <Td>
                {editableIndex === index ? (
                  <>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={() => setEditableIndex(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                    <button onClick={() => handleDeleteClick(expense.id)}>Delete</button>
                  </>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );

  // Calculate total amount spent for all previous enTries
  function calculateTotalAmountSpent(expenses, currentIndex) {
    let total = 0;
    for (let i = 0; i <= currentIndex; i++) {
      total += expenses[i].amount;
    }
    return total;
  }

  // Calculate The balance for The selected subsection based on previous enTries
  function calculateBalance(expenses, currentIndex, selectedSubsection) {
    const totalAmountSpent = calculateTotalAmountSpent(expenses, currentIndex);
    return selectedSubsection.budget - totalAmountSpent;
  }
}

export default ExpenseTable;
