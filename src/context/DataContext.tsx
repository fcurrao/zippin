import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useFetchData } from "../Hooks/useFetchData.tsx";
import { Error } from "../Components/ComponentsDefault/Error/Error.tsx";
import { DataContextType } from '../Interfaces/DataContextTypes.tsx';
import { Point } from '../Interfaces/Point.tsx';
import { Driver } from '../Interfaces/Driver.tsx';

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [points, setPoints] = useState<Point[]>([]);

  // asignacion de variables de entorno
  const urlDrivers = import.meta.env.VITE_URL_DRIVERS;
  const urlPoints = import.meta.env.VITE_URL_POINTS;

  // constantes traidas del custom hook (quien consume services)
  const { data: dataDrivers, loading: loadingDrivers, error: errorDrivers } = useFetchData(urlDrivers);
  const { data: dataPoints, loading: loadingPoints, error: errorPoints } = useFetchData(urlPoints);

  // guardo en los estados la respuesta de los 'fetch'
  useEffect(() => {
    if (dataDrivers && dataPoints) {
      setDrivers(dataDrivers);
      setPoints(dataPoints);
    }
  }, [dataDrivers, dataPoints]);

  // manejo de loading
  if (loadingDrivers || loadingPoints) {
    return <div style={{ marginTop: '25%' }}>Loading...</div>;
  }

  // manejo de errores
  if (errorDrivers || errorPoints) {
    return <Error title="Error en la peticion" subtitle={errorDrivers || errorPoints} />
  }

  return (
    <DataContext.Provider value={{ points, setPoints, drivers, setDrivers }}>
      {children}
    </DataContext.Provider>
  );
};


