import React, { useState, useEffect, useReducer, useRef, useMemo, useCallback } from 'react';

// --- 1. USE STATE (Đếm số) ---
function Bai1_UseState() {
  const [count, setCount] = useState(0);
  return (
    <div style={styles.box}>
      <h3>1. useState: Bộ đếm</h3>
      <p>Số hiện tại: <b>{count}</b></p>
      <button onClick={() => setCount(count + 1)}>Tăng số</button>
    </div>
  );
}

// --- 2. USE EFFECT (Đổi tiêu đề tab) ---
function Bai2_UseEffect() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Bạn đã bấm ${count} lần`;
  }, [count]);

  return (
    <div style={styles.box}>
      <h3>2. useEffect: Nhìn lên Tab trình duyệt</h3>
      <button onClick={() => setCount(count + 1)}>
        Bấm để đổi Title ({count})
      </button>
    </div>
  );
}

// --- 3. USE REDUCER (Tăng/Giảm phức tạp) ---
function reducer(state, action) {
  switch (action.type) {
    case 'up': return { count: state.count + 1 };
    case 'down': return { count: state.count - 1 };
    default: return state;
  }
}

function Bai3_UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div style={styles.box}>
      <h3>3. useReducer: Quản lý state</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'up' })} style={{marginRight: 5}}>Tăng (+)</button>
      <button onClick={() => dispatch({ type: 'down' })}>Giảm (-)</button>
    </div>
  );
}

// --- 4. USE REF (Tự focus input) ---
function Bai4_UseRef() {
  const inputRef = useRef(null);
  
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={styles.box}>
      <h3>4. useRef: Focus Input</h3>
      <input ref={inputRef} placeholder="Nhập gì đó..." />
      <button onClick={handleFocus} style={{marginLeft: 5}}>Focus vào ô này</button>
    </div>
  );
}

// --- 5. USE MEMO (Tính toán nặng) ---
function Bai5_UseMemo() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  // Giả lập tính toán nặng, chỉ chạy lại khi num đổi
  const squared = useMemo(() => {
    return num * num;
  }, [num]);

  const themeStyle = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
    padding: '5px',
    marginTop: '5px'
  };

  return (
    <div style={styles.box}>
      <h3>5. useMemo: Tính bình phương</h3>
      <input 
        type="number" 
        value={num} 
        onChange={e => setNum(parseInt(e.target.value) || 0)} 
      />
      <div style={themeStyle}>Kết quả: {squared}</div>
      <button onClick={() => setDark(!dark)} style={{marginTop: 5}}>Đổi màu nền</button>
    </div>
  );
}

// --- 6. USE CALLBACK (Tối ưu render) ---
const ChildButton = React.memo(({ onClick }) => {
  console.log("Child Button Rendered"); // Mở F12 để kiểm tra
  return <button onClick={onClick} style={{marginTop: 5}}>Nút con (Xem Console)</button>;
});

function Bai6_UseCallback() {
  const [count, setCount] = useState(0);

  // Hàm này được "nhớ", không bị tạo mới khi component cha render lại
  const handleClick = useCallback(() => {
    console.log("Đã bấm nút con");
  }, []);

  return (
    <div style={styles.box}>
      <h3>6. useCallback: Tối ưu function</h3>
      <p>Cha render: {count}</p>
      <button onClick={() => setCount(count + 1)}>Re-render cha</button>
      <br />
      <ChildButton onClick={handleClick} />
    </div>
  );
}

// --- COMPONENT CHÍNH ---
function TongHopHooks() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Bài tập tổng hợp 6 Hooks</h1>
      <p>Sửa file <code>src/App.js</code> để thấy kết quả này.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <Bai1_UseState />
        <Bai2_UseEffect />
        <Bai3_UseReducer />
        <Bai4_UseRef />
        <Bai5_UseMemo />
        <Bai6_UseCallback />
      </div>
    </div>
  );
}

// CSS đơn giản (viết kiểu object trong JS)
const styles = {
  box: {
    border: '2px solid #007bff',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#f9f9f9'
  }
};

export default TongHopHooks; 