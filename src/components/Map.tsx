'use client';
import { Circle, MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

type Props = {
  lat: number;
  long: number;
};

const Map = ({ lat, long }: Props) => {
  const fillMarker = { fillColor: 'hsl(var(--accent-foreground))', color: 'hsl(var(--accent-foreground))' };

  return (
    <MapContainer
      center={[lat, long]}
      zoom={12}
      zoomControl={false}
      scrollWheelZoom={false}
      className="h-full w-full z-0 bg-card"
      key={`${lat},${long}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Circle
        center={[lat, long]}
        pathOptions={fillMarker}
        radius={100}
      />
    </MapContainer>
  );
};

export default Map;
