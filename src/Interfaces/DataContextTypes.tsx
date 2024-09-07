import { Point } from './Point.tsx';
import { Driver } from './Driver.tsx';

export interface DataContextType {
  points: Point[];
  setPoints: (points: Point[]) => void;
  drivers: Driver[];
  setDrivers: (drivers: Driver[]) => void;
}


