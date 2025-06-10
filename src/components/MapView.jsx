import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import OpacityController from './OpacityController';
import FlippedYTileLayer from './FlippedYTileLayer';
import TileDebugger from './TileDebugger';
import { useState, useRef } from 'react';
import CustomPopup from './CustomPopup';

function MapView() {
    const [opacity, setOpacity] = useState(30);
    const [showTileLayer, setShowTileLayer] = useState(false);
    const markerRef = useRef(null);

    const handleShowLayer = () => {
        setShowTileLayer(true);

        // Đóng popup
        if (markerRef.current) {
            markerRef.current.closePopup(); // ← chuẩn cách Leaflet
        }
    };

    return (
        <MapContainer center={[10.739065, 106.722934]} zoom={13} minZoom={12} maxZoom={16} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {showTileLayer && (
                <FlippedYTileLayer opacity={opacity} />
            )}

            <OpacityController
                opacity={opacity}
                setOpacity={setOpacity}
                showTileLayer={showTileLayer}
                setShowTileLayer={setShowTileLayer}
            />

            <Marker position={[10.739065, 106.722934]} ref={markerRef}>
                <Popup>
                    <CustomPopup handleShowLayer={handleShowLayer} />
                </Popup>
            </Marker>

            <TileDebugger />

        </MapContainer>
    );
}

export default MapView;
