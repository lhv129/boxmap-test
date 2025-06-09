import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MapView({opacity}) {

    console.log(opacity);

    return (
        <>
            <MapContainer center={[10.739605, 106.722934]} zoom={13} style={{ height: '100vh', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[10.739605, 106.722934]}>
                    <Popup>
                        Quận 7, TP. HCM
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}

export default MapView;
