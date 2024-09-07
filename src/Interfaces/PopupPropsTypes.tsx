
import { Point } from './Point.tsx'
import { Driver } from './Driver.tsx';

export interface PopupProps {
    modal?: boolean;
    toMap?: boolean;
    handleModal?: (driver?: Driver) => void;
    setModal?: boolean;
    nameDriver?: string;
    thisDriverFromPanelList?: Driver;
    text?: string;
    colorDrive?: string;
    selectedLocation?: Point;
    pointsDriver?: Point; 
}
