import React from 'react';
import Api_Fetch from './components/Api_Fetch';
import Api_AsyncAwait from './components/Api_AsyncAwait';
import Api_Axios from './components/Api_Axios';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Demo Gọi API trong React</h1>
      <p>Bấm nút trong từng khung để test dữ liệu trả về từ Server ảo.</p>
      
      {/* Hiển thị 3 component */}
      <Api_Fetch />
      <Api_AsyncAwait />
      <Api_Axios />
    </div>
  );
}

export default App;