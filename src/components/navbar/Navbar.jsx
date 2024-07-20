import React from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Avatar,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import SearchDialog from "../searchDialog/SearchDialog";
import ShareDialogBox from "../shareDialogBox/ShareDialogBox";

export default function Nav() {
    const [openNav, setOpenNav] = React.useState(false);

    const context = useContext(myContext);
    const { mode, toggleMode } = context;


    // All NavList 
    const navList = (
        <ul className="lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6" style={{position: 'relative', width:'15rem', marginBottom:'1rem', marginTop:'0.5rem', display:'flex', flexDirection:'column'}}>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white', position: 'absolute', left:'0'}}
            >
                <Link to={'/'} style={{display:'flex', alignItems:'center'}}>
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white', position: 'absolute', left:'5rem'}}
            >
                <Link to={'/allblogs'} style={{display:'flex', alignItems:'center'}}>
                    Blogs
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white', position: 'absolute', right:'0'}}
            >
                <Link to={'/adminlogin'} style={{display:'flex', alignItems:'center'}}>
                    Admin Login
                </Link>
            </Typography>
        </ul>
    );

    return (
        <>
            {/* Navbar  */}
            <Navbar
                className="lg:px-8 lg:py-2"
                style={{ background: mode === 'dark' ? 'teal' : 'hsl(180, 65.33333333333331%, 14.705882352941178%)', position: 'sticky', inset:'0px', zIndex:'20', height:'9vh', maxWidth:'100', borderStyle:'none', paddingTop:'0.5rem', paddingBottom:'0.5rem', paddingLeft:'1rem', paddingRight:'1rem'}}>

                {/* Desktop View  */}
                <div className="text-blue-gray-900" style={{position: 'absolute', width: '20rem',height:'10vh', left:'1rem', display:'flex', alignItems:'center', justifyContent:'space-between'}}>

                    {/* Home Page Link  */}
                    <Link to={'/'}>
                        <Typography
                            as="a"
                            style={{ color: mode === 'dark' ? 'white' : 'white', marginRight:'1rem', cursor:'pointer', paddingTop:'6px', paddingBottom:'6px', fontSize:'20px', lineHeight:'28px', fontWeight:'700', display:'flex', gap:'0.5rem', alignItems:'center'}}
                        >
                            {/* Logo Image  */}
                            <img
                                style={{position: 'absolute', height: '3rem', top:'0.5rem', width:'40px'}}
                                src='https://cdn-icons-png.flaticon.com/128/3685/3685253.png'
                            />
                           
                        </Typography>
                    </Link>
                    </div>

                    {/* All Items  */}
                    <div style={{position: 'absolute', display: 'flex', justifyContent: 'space-around', width: '35rem', height: '10vh', right:'0', alignItems:'center'}}>

                        {/* Navlist  */}
                        <div className="hidden lg:block" style={{width:'15rem', display:'flex', top: '0.5rem'}}>
                            {navList}
                        </div> 

                        {/* Search Icon */}
                        <div style={{top: '0.5rem'}}>
                            <SearchDialog/>
                        </div>

                        {/* Share Icon */}
                        <div className="hidden lg:block" style={{top: '0.5rem'}}>
                            <ShareDialogBox/>
                        </div>

                        {/* Admin Profile Pic */}
                        <div style={{right:'0', top: '1.5rem'}}>
                            <Link to={'/dashboard'}>
                                <div className="" style={{width: '2.5rem',height: '3rem',top:'2.5rem'}}>
                                    <Avatar
                                        key={1}
                                        src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'}
                                        alt="avatar"
                                        withBorder={true}
                                        className="p-0.5 text-red-500 w-10 h-10"
                                        style={{
                                            border:
                                                mode === 'dark'
                                                    ?
                                                    '0 solid rgb(226, 232, 240)'
                                                    :
                                                    '0 solid teal',
                                            
                                        }}
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* dark And Light Button */}
                        <div>
                            {mode === 'light'
                                ?
                                <>
                                    {/* Light Button  */}
                                    <IconButton onClick={toggleMode} className=" lg:inline-block rounded-full" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                        </svg>
                                    </IconButton>
                                </>
                                :
                                <>
                                    {/* Dark Button  */}
                                    <IconButton onClick={toggleMode} className=" lg:inline-block rounded-full" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>
                                    </IconButton>
                                </>}
                        </div>
                      </div>

                        {/* Mobile Toggle  */}
                        <div style={{position: 'absolute', width: '1rem', right: '0', display:'none'}}>
                            <IconButton
                                className="ml-auto h-10 w-10 text-inherit rounded-lg lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                                style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black', marginLeft:'auto', height:'40px', width:'40px', borderRadius:'0.5rem'}}
                            >
                                {openNav ?
                                    (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            className="h-6 w-6"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )
                                    :
                                    (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                            </IconButton>
                        </div>
            </Navbar>
        </>
    );
}