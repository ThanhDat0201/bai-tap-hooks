import React, { useState } from 'react';

function ApiAsyncAwait() {
  const [posts, setPosts] = useState([]);

  // Hàm gọi API kiểu Async/Await (Hiện đại)
  const handleGetClick = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  return (
    <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
      <h3>2. Async / Await</h3>
      <button onClick={handleGetClick}>Lấy 5 bài viết</button>
      
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default ApiAsyncAwait; 