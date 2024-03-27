import React, { useState } from 'react';
import './CancelForm.css'; // Import the CSS file

const CancelForm = () => {
  const [ticketNumber, setTicketNumber] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [reason, setReason] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!ticketNumber.trim()) {
      errors.ticketNumber = 'required';
      isValid = false;
    }

    if (!passengerName.trim()) {
      errors.passengerName = 'required';
      isValid = false;
    }

    if (!reason.trim()) {
      errors.reason = 'required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Implement cancellation logic here
      console.log('Ticket Number:', ticketNumber);
      console.log('Passenger Name:', passengerName);
      console.log('Reason:', reason);
      // Add logic to send cancellation request to the server, etc.
    }
  };

  return (
    <div className="cancel-form">
      <h2>Cancel Bus Ticket</h2>
      <form onSubmit={handleCancel}>
        <div>
          <label htmlFor="ticketNumber">Ticket Number:</label>
          <input
            type="text"
            id="ticketNumber"
            value={ticketNumber}
            onChange={(e) => setTicketNumber(e.target.value)}
          />
          {formErrors.ticketNumber && <span className="error">{formErrors.ticketNumber}</span>}
        </div>
        <div>
          <label htmlFor="passengerName">Passenger Name:</label>
          <input
            type="text"
            id="passengerName"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
          />
          {formErrors.passengerName && <span className="error">{formErrors.passengerName}</span>}
        </div>
        <div>
          <label htmlFor="reason">Reason for Cancellation:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          {formErrors.reason && <span className="error">{formErrors.reason}</span>}
        </div>
        <button type="submit">Cancel Ticket</button>
      </form>
    </div>
  );
};

export default CancelForm;
