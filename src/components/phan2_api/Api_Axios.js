import React, { useState } from 'react';
import axios from 'axios'; // Nhớ import axios

function Api_Axios() {
  const [photos, setPhotos] = useState([]);

  const handleGetClick = async () => {
    try {
      // Axios trả về object có chứa field 'data' sẵn luôn
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=3');
      setPhotos(res.data); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h3>3. Axios (Thư viện)</h3>
      <button onClick={handleGetClick}>Lấy 3 ảnh</button>
      
      <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
        {photos.map(photo => (
          <img key={photo.id} src={photo.thumbnailUrl} alt="demo" width="50" />
        ))}
      </div>
    </div>
  );
}
export default Api_Axios;