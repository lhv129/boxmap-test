import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import TileDebugger from './TileDebugger';
import FlippedYTileLayer from './FlippedYTileLayer';

function MapView({ opacity }) {
    return (
        <MapContainer center={[10.739065, 106.722934]} zoom={13} style={{ height: '100vh', width: '100%' }}>
            {/* Base OSM layer */}
            <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Custom Layer with flipped Y */}
            <FlippedYTileLayer opacity={opacity} />

            <Marker position={[10.739065, 106.722934]}>
                <Popup>Quận 7, TP. HCM</Popup>
            </Marker>
        </MapContainer>

    );
}

export default MapView;
