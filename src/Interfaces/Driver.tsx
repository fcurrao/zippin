
import { Point } from "./Point.tsx";

export interface Driver {
  id: number;
  name: string;
  color: string;
  img: string;
  points: Point[];
}
