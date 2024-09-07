import React, { useState,  useContext } from 'react';
import { DataContext } from '../../context/DataContext.tsx';
import PopupComponent from '../PopUp/Popup.tsx';
import { Driver } from '../../Interfaces/Driver.tsx'; 
import './DriverList.css';

export const DriverList = () => {
  const [selectedDriver , setSelectedDriver ] = useState<Driver>();
  const [modal, setModal] = useState<boolean>(false);
  const { drivers } = useContext(DataContext) || { drivers: [] };
 

  // funcion que cierra y abre el modal(Pop Up) y si se pasa props del driver, manda a Pop Up component el thisDriver como  thisDriverFromPanelList
  const toggleModal  = (driver?: Driver) => {
    if (driver) {
      setSelectedDriver(driver)
    }
    setModal(!modal);
  };

  return (
    <>
      <ul className="list-drivers-container" >
        {drivers.map((driver) => (
          <li className="list-drivers" style={{ color: driver.color }} key={driver.id} >
            <button
              onClick={() => toggleModal(driver)} className="driver-circle" title={driver.name}>
              <div className="effect" style={{ borderColor: driver.color }} />
              <img src={driver.img} alt={driver.name} className="driver-image" />
            </button>
            <span className="name-driver" >{driver.name}</span>
          </li>
        ))}
      </ul>

      {modal && (
        <PopupComponent
          text="Seleccione Entregas"
          toMap={false}
          modal={modal}
          handleModal={toggleModal}
          thisDriverFromPanelList={selectedDriver}
        />
      )}
    </>
  );
};

export default DriverList;
