import React from 'react';
import Api_Fetch from './Api_Fetch';
import Api_AsyncAwait from './Api_AsyncAwait';
import Api_Axios from './Api_Axios';

function TongHopApi() {
  return (
    <div>
      <h2 style={{ color: '#28a745' }}>Phần 2: Tương tác API</h2>
      <Api_Fetch />
      <Api_AsyncAwait />
      <Api_Axios />
    </div>
  );
}
export default TongHopApi;