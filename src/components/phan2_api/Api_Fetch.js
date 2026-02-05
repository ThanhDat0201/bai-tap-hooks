import React, { useState } from 'react';

function Api_Fetch() {
  const [data, setData] = useState([]);

  // Hàm gọi API kiểu cũ (Promise chaining)
  const handleGetClick = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // Chuyển data về JSON
      .then(json => {
        setData(json); // Lưu vào state
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ border: '1px solid orange', padding: '10px', margin: '10px' }}>
      <h3>1. Fetch (.then)</h3>
      <button onClick={handleGetClick}>Lấy danh sách User</button>
      
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Api_Fetch;