import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext.tsx';
import { useAssingPoints } from '../../Hooks/useAssingPoints.tsx';
import { Point } from '../../Interfaces/Point.tsx';
import { Driver } from '../../Interfaces/Driver.tsx';
import { PopupProps } from '../../Interfaces/PopupPropsTypes.tsx';
import './Popup.css';

const PopupComponent = ({ text, toMap, modal, handleModal, thisDriverFromPanelList, selectedLocation }: PopupProps) => {
    const [listToAssign, setListToAssign] = useState<boolean>(false);
    const { points , drivers} = useContext(DataContext) || { points:[], drivers: [], setPoints : () => {}, setDrivers : () => {}} ;
   
    // Utilizo el hook UseAssignPoints para poder utilizar la funcion globales de asignar choferes a las entregas(points)
    const {  handleCheckbox , nameByMapChecked, colorByMapChecked,selectedDriver } = useAssingPoints();

 
    // Cierra el pop up del modal y Restablece el estado de listToAssign
    const toggleModalAndListToAssign = (option:boolean) => {
        if (option) {
            setListToAssign(!listToAssign); 
        } else {
            handleModal && handleModal();
            setListToAssign(false);
        }
    };
    

    return (
        <>
            {/* Pop Up por DriverList (Panel) */}
            {modal && !toMap && (
                <div className="modal open">
                    <div className="modal-content" style={{ height: listToAssign ? '60%' : 'min-content' }}>
                        <button className="close-button" onClick={()=>toggleModalAndListToAssign(false)}>✖</button>
                        {!listToAssign ? (
                            <>
                                <h4><span style={{ color: thisDriverFromPanelList?.color }}>{thisDriverFromPanelList?.name}</span></h4>
                                <div className='points-container'>
                                    {thisDriverFromPanelList?.points.length! > 0 ? (
                                        thisDriverFromPanelList!.points.map((point:Point) => (
                                            <span key={point.id} style={{ color: thisDriverFromPanelList?.color }}>
                                                [{point.id}] {point.name} → {point.direccion}
                                            </span>
                                        ))
                                    ) : (
                                        <span>No tiene entregas asignadas</span>
                                    )}
                                </div>
                                <button className="next-button" onClick={()=>toggleModalAndListToAssign(true)}>Gestionar asignaciones</button>
                            </>
                        ) : (
                            <>
                                <h4>{text}<span> </span></h4>
                                <ul className='ul-list-menu'>
                                    {points.map((point:Point, index) => (
                                        <li key={point.id} className="checkbox-label">
                                            <input className="input-checkbox" type="checkbox" onChange={(e) => handleCheckbox(point, e, false, thisDriverFromPanelList!)} id={`point-${index}`} />
                                            <label className="label-checkbox" htmlFor={`point-${index}`}>
                                                <span className="" style={{ color: point.color }} title={point.direccion}> [{point.id}] {point.name} </span>
                                                {point.driver && (
                                                    <span className='check-driver' style={{ color: point.color }}>
                                                        → {point.driver} ✅
                                                    </span>
                                                )}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            )}
            {/* Pop Up por mapa */}
            {toMap && (
                <div className="modal open">
                    <div className="modal-content w40" >
                        <button className="close-button" onClick={()=>toggleModalAndListToAssign(false)}>✖</button>
                        <h4>{text} <span style={{ color: colorByMapChecked || selectedLocation?.color }} > {nameByMapChecked || selectedLocation?.driver} </span></h4>
                        <ul className='ul-list-map'>
                            {drivers.map((driver:Driver, index) => (
                                <li key={driver.id} className="checkbox-label">
                                    <input
                                        className="input-checkbox"
                                        value={`${driver.name}-${driver.color}`}
                                        checked={selectedDriver === `${driver.name}-${driver.color}`}
                                        type="checkbox"
                                        onChange={(e) => handleCheckbox(selectedLocation!, e, true,thisDriverFromPanelList!)}
                                        id={`driver-${index}`}
                                    />
                                    <label className="label-checkbox" htmlFor={`driver-${index}`}>
                                        <span style={{ color: driver.color }}>
                                            <img className="driver-image image-inPopUp" src={driver.img} alt={driver.name} title={driver.name} />
                                            {driver.name}
                                        </span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupComponent;
