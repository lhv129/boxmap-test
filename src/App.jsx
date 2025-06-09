
import './App.css'
import 'leaflet/dist/leaflet.css';
import MapView from './components/MapView';
import OpacityController from './components/OpacityController';
import { useState } from 'react';


function App() {

  const [opacity, setOpacity] = useState(30);



  return (
    <>
      <div>
        <MapView opacity={opacity}/>
        <OpacityController opacity={opacity} setOpacity={setOpacity}  />
      </div>
    </>
  )
}

export default App
