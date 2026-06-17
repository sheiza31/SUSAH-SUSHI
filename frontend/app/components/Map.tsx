'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { MapProps } from '../hooks/UseHome';

const defaultIcon = typeof window !== 'undefined' ? L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
}) : undefined;

export default function Map({ center = [-6.2088, 106.8456], zoom = 15 }: MapProps) {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${center[0]},${center[1]}&travelmode=driving`;
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="relative w-full h-full min-h-[350px] lg:min-h-120 rounded-3xl overflow-hidden shadow-lg border border-neutral-200 z-0">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={defaultIcon}>
          <Popup>
            <div className="text-center font-sans">
              <h3 className="font-bold text-base text-neutral-800">Susah Sushi 🍣</h3>
              <p className="text-xs text-neutral-500 mt-1">
              Universitas Neheun
              </p>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Petunjuk Arah
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <a
        href={googleMapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="directions-button"
        className="absolute bottom-4 right-4 z-1000 flex items-center gap-2 bg-white hover:bg-blue-600 text-neutral-800 hover:text-white px-4 py-2.5 rounded-xl shadow-lg border border-neutral-200 hover:border-blue-600 font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 group"
      >
        <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.27-1.5c.35-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.86 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5z" />
        </svg>
        <span>Petunjuk Arah</span>
        <svg className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  );
}
