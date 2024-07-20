import { useContext } from 'react';
import myContext from '../../context/data/myContext';

import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <footer className="body-font" style={{ background: mode === 'dark' ? 'teal' : 'hsl(180, 65.33333333333331%, 14.705882352941178%)', width: '100%', height: '9vh', display:'flex', position: 'relative'}}>

            <div className="container" style={{position: 'absolute', width: '15rem', height: '60%', left: '0.5rem', top:'15%%'}}>
                {/* logo  */}
                <img className='w-10' style={{position: 'absolute', height: '3rem', top: '0.3rem'}}
                        src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="logo"
                    />
            </div>
            <div className="container" style={{position: 'absolute', width: '15rem', height: '60%',  left: '40.5rem', textAlign: 'center', top:'40%'}}>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2023 DevBlog —
                    <a
                        href=" https://x.com/LalimaSingh15?t=4c-0ZIjeqoOn0Vl9sco7SQ&s=08 "
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @lali
                    </a>
                    </p>
            </div>
            <div className="container" style={{position: 'absolute', justifyContent: 'space-around', width: '15rem', height: '60%', right: '0', display:'flex', top:'40%'}}>
                <div>
                    {/* Icon 1  */}
                    <FaFacebookF />
                </div>
                <span>
                    {/* Icon 2  */}
                    <FaXTwitter />
                </span>
                <span>
                    {/* Icon 3  */}
                    <FaInstagram />
                </span>
                <span>
                    {/* Icon 4  */}
                    <FaLinkedinIn />
                </span>
            </div>
        </footer>
    );
}

export default Footer;
                    