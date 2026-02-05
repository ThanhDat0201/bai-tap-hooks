import React, { useState } from 'react';
import TongHopHooks from './components/phan1_hooks/TongHopHooks';
import TongHopApi from './components/phan2_api/TongHopApi';

function App() {
  // State để nhớ xem đang chọn tab nào ('hooks' hoặc 'api')
  const [currentTab, setCurrentTab] = useState('hooks');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Bài Tập ReactJS - [Tên Bạn]</h1>
      
      {/* Khu vực Menu Button */}
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <button 
          onClick={() => setCurrentTab('hooks')}
          style={{ 
            padding: '10px 20px', 
            marginRight: '10px',
            backgroundColor: currentTab === 'hooks' ? '#007bff' : '#eee',
            color: currentTab === 'hooks' ? '#fff' : '#333',
            border: 'none', borderRadius: '5px', cursor: 'pointer'
          }}
        >
          Bài tập Hooks
        </button>

        <button 
          onClick={() => setCurrentTab('api')}
          style={{ 
            padding: '10px 20px',
            backgroundColor: currentTab === 'api' ? '#28a745' : '#eee',
            color: currentTab === 'api' ? '#fff' : '#333',
            border: 'none', borderRadius: '5px', cursor: 'pointer'
          }}
        >
          Bài tập API
        </button>
      </div>

      {/* Khu vực hiển thị nội dung theo điều kiện */}
      <div style={{ marginTop: '20px' }}>
        {currentTab === 'hooks' ? <TongHopHooks /> : <TongHopApi />}
      </div>
    </div>
  );
}

export default App;