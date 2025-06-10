import { Slider, Card } from 'antd';

const OpacityControl = ({opacity, setOpacity}) => {

  return (
    <Card
      style={{
        position: 'absolute',
        top: 100,
        right: 80,
        width: 250,
        zIndex: 1000,
      }}
      title='Độ mờ của bản đồ'
    >
      <Slider
        min={0}
        max={100}
        value={opacity}
        onChange={setOpacity}
      />
    </Card>
  );
};

export default OpacityControl;
