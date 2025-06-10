import { useEffect, useRef } from 'react';
import { Card } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import L from 'leaflet';

function OpacityController({ opacity, setOpacity, showTileLayer, setShowTileLayer }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      L.DomEvent.disableClickPropagation(containerRef.current);
      L.DomEvent.disableScrollPropagation(containerRef.current);
    }
  }, []);

  return (
    <Card
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '5px',
        zIndex: 1000,
        width: 250
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label>Độ mờ của bản đồ: {opacity}%</label>
        <span
          onClick={() => setShowTileLayer(!showTileLayer)}
          style={{ cursor: 'pointer', fontSize: 18 }}
          title={showTileLayer ? "Ẩn bản đồ" : "Hiện bản đồ"}
        >
          {showTileLayer ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </span>
      </div>
      {showTileLayer && (
        <>
          <input
            type="range"
            min={0}
            max={100}
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </>
      )}
    </Card>
  );
}

export default OpacityController;
