import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext.tsx';
import { Point } from '../Interfaces/Point.tsx';
import { Driver } from '../Interfaces/Driver.tsx';

export const useAssingPoints = () => {
    const { points, drivers, setPoints, setDrivers } = useContext(DataContext) || { points: [], drivers: [], setPoints: () => {}, setDrivers: () => {} };
      
    const [colorByMapChecked, setColorByMapChecked] = useState<string>("");
    const [nameByMapChecked, setNameByMapChecked] = useState<string>("");
    const [selectedDriver, setSelectedDriver] = useState<string | null>(null);


    // Actualiza Drivers a nivel global (choferes)
    const updateDrivers = (name: string, point: Point, checked: boolean, thisDriverFromPanelList?: Driver) => {
        setDrivers(drivers.map((d: Driver) => {
            if (d.name === name) {
                const updatedPoints = checked
                    ? [...d.points.filter((p: Point) => p.id !== point.id), point].sort((a, b) => a.id - b.id)
                    : d.points.filter((p: Point) => p.id !== point.id);

                return {
                    ...d,
                    points: updatedPoints,
                    driver: checked ? thisDriverFromPanelList?.name || "" : "",
                };
            } else if (checked) {
                const updatedPoints = d.points.filter((p: Point) => p.id !== point.id);
                return {
                    ...d,
                    points: updatedPoints,
                };
            }
            return d;
        }));
    };


    // Actualiza Points a nivel global (entregas)
    const updatePoints = (point: Point, color: string, name: string, checked: boolean) => {
        setPoints(points.map((p: Point) =>
            p.id === point.id
                ? {
                    ...p,
                    driver: checked ? name : "",
                    color: checked ? color : ""
                }
                : p
        ));
    };


    // Función que selecciona/deselecciona los puntos para los drivers
    const handleCheckbox = (point: Point, event: React.ChangeEvent<HTMLInputElement>, toMap: boolean, thisDriverFromPanelList: Driver) => {
        const checked = event.target.checked;
        const [name, color] = toMap ? event.target.value.split('-') : [thisDriverFromPanelList?.name || "", thisDriverFromPanelList?.color || ""];

        // Actualiza los estados locales del PopUp si es por mapa
        if (toMap) {
            setSelectedDriver(checked ? event.target.value : null);
            setNameByMapChecked(checked ? name : " ");
            setColorByMapChecked(checked ? color : "black"); 
            point.driver = (checked ? name : " ");
        }

        // Actualiza las variables globales
        updateDrivers(name, point, checked, thisDriverFromPanelList);
        updatePoints(point, color, name, checked);
    };

    // exporto lo necesario
    return { handleCheckbox , nameByMapChecked, colorByMapChecked,selectedDriver};
};
