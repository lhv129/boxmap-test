import { AiFillEye } from "react-icons/ai";

function CustomPopup({ handleShowLayer }) {
  return (
    <div style={{
      width: '300px',
    }}>
      <div style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        display: 'inline-block',
        marginBottom: '8px'
      }}>
        Còn hiệu lực
      </div>

      <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
        <img
          src="/get-static-map.jpg" // Thay bằng đường dẫn ảnh thực tế
          alt="Kế hoạch sử dụng đất"
          style={{ width: '150px', borderRadius: '4px' }}
        />
      </div>

      <div style={{ marginBottom: '8px' }}>
        <a
          href="#"
          style={{
            color: '#007bff',
            fontWeight: 'bold',
            fontSize: '14px',
            textDecoration: 'none'
          }}
        >
          Kế Hoạch Sử Dụng Đất Năm 2023 Quận 7, TP Hồ Chí Minh
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#555' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <AiFillEye />448
        </div>
        <div>24/11/2023</div>
        <button onClick={handleShowLayer} style={{ color: '#007bff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Mở xem</button>
      </div>
    </div>
  );
}

export default CustomPopup;