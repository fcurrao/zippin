
import * as React from 'react';
import MapContainerComponent from '../MapsContainer/MapsContainer.tsx';
import DriverList from '../DriverList/DriverList.tsx'; 
import './Home.css'

export const Home = () => {
    return (<>
        <div className="home-container"> 
                <DriverList></DriverList> 
                <MapContainerComponent></MapContainerComponent>
            </div> 
    </>
    );
};