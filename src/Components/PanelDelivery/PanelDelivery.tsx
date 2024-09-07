import React from 'react';
import { Point } from '../../Interfaces/Point.tsx';

const PanelDeliveryComponent = ({ handleLocateClick, setHandleModal, points, handleModal }: { handleLocateClick: (lat: number, long: number) => void; setHandleModal: (value: boolean) => void; points: Point[]; handleModal: boolean; }) => {

    return (
        <>
            <button className="btn-black" onClick={() => setHandleModal(!handleModal)}>
                {handleModal ? 'Cerrar' : <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"/></svg>}
            </button>
            {handleModal && (
                <div className="list-right-bar">
                    {points.map((point, index) => (
                        <li  key={point.id} className="checkbox-label">
                            <label onClick={() => handleLocateClick(point.lat, point.long)} htmlFor={`point-${index}`}>
                                <span style={{ color: point.color, cursor: 'pointer' }} title={point.direccion}>
                                    [{point.id}] {point.name} <svg xmlns="http://www.w3.org/2000/svg" height='17px' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                </span>
                                {point.driver && (
                                    <span className="check-driver" style={{ color: point.color }}>
                                        → {point.driver} ✅
                                    </span>
                                )}
                            </label>
                        </li>
                    ))}
                </div>
            )}
        </>
    );
};

export default PanelDeliveryComponent;
