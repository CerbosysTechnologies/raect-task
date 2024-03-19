import React, { useState, useEffect } from 'react';

const Mostpositive = () => {
  const [sentimentData, setSentimentData] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
      fetch('http://3.227.101.169:8020/api/v1/sample_assignment_api_5/', {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`, // Encode username and password as base64
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setSentimentData(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    } else {
      console.error('No username or password available');
    }
  }, []);

  return (
    <div
      style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '0.5rem',
        padding: '1rem',
        background: '#fff',
        marginTop: '1rem',
      }}
    >
      <h2>Sentiment Analysis</h2>
      <div>Community Feedback</div>
      <h1 className="dashboard-head">Mostly Positive</h1>
      {sentimentData && (
        <div>
          <p>Negative: {sentimentData.negative}</p>
          <p>Positive: {sentimentData.positive}</p>
          <p>Neutral: {sentimentData.neutral}</p>
        </div>
      )}
    </div>
  );
};

export default Mostpositive;
