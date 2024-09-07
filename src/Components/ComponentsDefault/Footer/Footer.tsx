import * as React from 'react'; 
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div className="footer-container"  >
                Created by <a  className='footer-link' href="https://github.com/fcurrao"> fcurrao</a> <a href="https://github.com/fcurrao">
                    <svg  fill="black" height="30" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </a>
               <a className='noResp' href="https://ar.linkedin.com/in/federicocurrao"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" fill='black' viewBox="0 0 50 50" className="text-white">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg></a>
            </div>
        </>
    );
};
