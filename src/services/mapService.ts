import L, { DivIcon } from 'leaflet';
import '../App.css';
 
export const createCustomIcon = (color: string | undefined): DivIcon => {
    return L.divIcon({
        className: 'custom-icon',
        html: `
            <div class="markIcon">
                <div style="background-color: ${color ? color : 'black'}; border-radius: 50%; width: 12px; height: 12px;"></div>
                <div class="effectMark" style="background: ${color ? color : 'black'};"></div>
            </div>
        `,
        iconSize: [13, 13] as [number, number]
    });
};
