import React from 'react';
import ApiFetch from './Api_Fetch';
import ApiAsyncAwait from './Api_AsyncAwait';
import ApiAxios from './Api_Axios';

function TongHopApi() {
  return (
    <div>
      <h2 style={{ color: '#28a745' }}>Phần 2: Tương tác API</h2>
      <ApiFetch />
      <ApiAsyncAwait />
      <ApiAxios />
    </div>
  );
}
export default TongHopApi;