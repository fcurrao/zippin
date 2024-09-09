import React, { useState, useContext, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'; 
import { createCustomIcon } from '../../services/mapService.ts';
import PopupComponent from '../PopUp/Popup.tsx';
import { Point } from '../../Interfaces/Point.tsx';
import 'leaflet/dist/leaflet.css';
import './Maps.css';

   // setea posicion y zoom cuando alguno de ellos cambia
   const MapUpdater = ({ position, zoom }: { position: [number, number]; zoom: number }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(position, zoom);
    }, [position, zoom, map]);
    return null;
};

const MapsComponent = ({ position, zoom, points }: { position: [number, number]; zoom: number; points:Point[] }) => {
    const [selectedLocation, setSelectedLocation] = useState<Point | null>(null);  
 
    return (
        <>
            <MapContainer className="map-container" center={position} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="https://www.zippin.com.ar/">Zippin</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {points.map((location) => (
                    <Marker key={location.id} position={[location.lat, location.long]} icon={createCustomIcon(location.color)}>
                        <Popup>
                            <div style={{ color: location.color }} >
                                <strong>{location.name}</strong>
                                <br /> {location.direccion} <br />
                                <span style={{ color: location.color || 'gray' }}>
                                    Driver: {location.driver || 'Sin Chofer asignado'}
                                </span> 
                                <button className='d-flex btn-asignar' onClick={() => { setSelectedLocation(location); }}>
                                <svg style={{marginRight: "5px"}} xmlns="http://www.w3.org/2000/svg"  height="25px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                                 Asignar  
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
                <MapUpdater position={position} zoom={zoom} />
            </MapContainer>
            {selectedLocation && (
                <PopupComponent
                    text={"Asignar a:"}
                    toMap={true}
                    modal={!!selectedLocation}
                    handleModal={() => setSelectedLocation(null)}
                    selectedLocation={selectedLocation}
                />
            )}
        </>
    );
};

export default MapsComponent;
