import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRcodeReader = () => {
  const [data, setData] = useState('No result');
  const [parsedData, setParsedData] = useState(null);

  const handleResult = (result, error) => {
    if (!!result) {
      setData(result?.text);
      try {
        const jsonData = JSON.parse(result.text);
        setParsedData(jsonData);
      } catch (e) {
        console.error("Failed to parse JSON:", e);
        setParsedData(null);
      }
    }

    if (!!error) {
      console.info(error);
    }
  };

  return (
    <>
      <QrReader
        onResult={handleResult}
        style={{ width: '100%' }}
      />
      <p>Scan the QR code</p>
      {parsedData && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>Event Details</h3>
          <p><strong>College Name:</strong> {parsedData.collegeName}</p>
          <p><strong>Event:</strong> {parsedData.event}</p>
          <p><strong>Team Name:</strong> {parsedData.teamName}</p>
          <p><strong>Team Leader:</strong> {parsedData.teamLeader}</p>
          <p><strong>Team Leader Mobile:</strong> {parsedData.teamLeaderMobile}</p>
          <p><strong>Team Leader Email:</strong> {parsedData.teamLeaderEmail}</p>
          <p><strong>Check-in Time:</strong> {parsedData.checkin}</p>
          <p><strong>Number of Team Members:</strong> {parsedData.teamMembers}</p>
          {parsedData.extraField && <p><strong>Extra Field:</strong> {parsedData.extraField}</p>}
        </div>
      )}
    </>
  );
};

export default QRcodeReader;
