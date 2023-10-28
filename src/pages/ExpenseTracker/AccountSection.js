import React from 'react';

function AccountSection({ section, onSectionSelected }) {
  return (
    <div>
      <label>
        Select Account Section:
        <select onChange={(e) => onSectionSelected(e.target.value)}>
          <option value="" disabled>Select an Account Section</option>
          {section.map((section, index) => (
            <option key={index} value={section.name}>
              {section.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default AccountSection;
