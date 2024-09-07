import React, { useState, useContext } from 'react';
import { DataContext } from '../../context/DataContext.tsx';
import MapsComponent from '../Maps/Maps.tsx';
import PanelDeliveryComponent from '../PanelDelivery/PanelDelivery.tsx';
import './MapsContainer.css';


const MapContainerComponent = () => {
    const [handleModal, setHandleModal] = useState<boolean>(false);
    const [mapPosition, setMapPosition] = useState<[number, number]>([-34.62115, -58.45723]);  
    const [mapZoom, setMapZoom] = useState<number>(12); 
    const { points } = useContext(DataContext) || { points: [] }; 

    // funcion para setear el centrado y zoom cuando se selecciona algun point en PanelDeliveryComponent
    const handleLocateClick = (lat: number, long: number) => {
        setMapPosition([lat, long]);
        setMapZoom(15); 
    };

    return (
        <>
            <MapsComponent
                position={mapPosition}
                zoom={mapZoom}
                points={points}
            />
            <PanelDeliveryComponent 
            handleLocateClick={handleLocateClick}
            setHandleModal={setHandleModal}
            points={points}
            handleModal={handleModal}
            />
         
        </>
    );
};

export default MapContainerComponent;
