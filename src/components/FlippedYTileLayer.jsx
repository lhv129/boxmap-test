import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

function FlippedYTileLayer({ opacity }) {
    const map = useMap();
    const layerRef = useRef(null);

    useEffect(() => {
        // Tạo lớp tile mới với Y lật ngược
        const FlippedTileLayer = L.TileLayer.extend({
            getTileUrl: function (coords) {
                const z = this._getZoomForUrl();
                const x = coords.x;
                const y = Math.pow(2, z) - 1 - coords.y; // lật y lại
                return `/quan72023/${z}/${x}/${y}.png`;
            }
        });

        const flippedLayer = new FlippedTileLayer('', {
            opacity: opacity / 100, // chuyển sang 0.0 - 1.0
            attribution: 'Custom tiles',
            zIndex: 1000,
            errorTileUrl: '/not-found.png',
            tileSize: 256,
        });

        flippedLayer.addTo(map);
        layerRef.current = flippedLayer;

        return () => {
            map.removeLayer(flippedLayer);
        };
    }, [map]);

    // Cập nhật opacity khi prop thay đổi
    useEffect(() => {
        if (layerRef.current) {
            layerRef.current.setOpacity(opacity / 100); // chuyển sang 0.0 - 1.0
        }
    }, [opacity]);

    return null;
}

export default FlippedYTileLayer;
