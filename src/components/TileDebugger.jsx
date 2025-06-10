import { useMapEvents } from 'react-leaflet';
import L, { tileLayer } from 'leaflet';

function TileDebugger() {
    useMapEvents({
        click(e) {
            const lat = e.latlng.lat;
            const lng = e.latlng.lng;
            const zoom = e.target.getZoom();

            // Tính tile x, y theo zoom
            const tileX = Math.floor((lng + 180) / 360 * Math.pow(2, zoom));
            const tileY = Math.floor(
                (1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2 * Math.pow(2, zoom)
            );

            console.log(`Zoom: ${zoom}, X: ${tileX}, Y: ${tileY}`);
        }
    });

    return null;
}

export default TileDebugger;
