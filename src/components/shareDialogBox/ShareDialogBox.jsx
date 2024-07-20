import { Fragment, useContext, useState } from "react";
import {
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import myContext from "../../context/data/myContext";
import { AiOutlineShareAlt, AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

export default function ShareDialogBox() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode, } = context;
    return (
        <Fragment>
            <div className="ml-auto">
                <AiOutlineShareAlt onClick={handleOpen} style={{ color: mode === 'dark' ? 'white' : 'white', marginLeft:'auto'}} size={20} />
            </div>
            {/* Dialog  */}
            <Dialog className="right-[1em] w-[25em]  md:right-0 md:w-0 lg:right-0 lg:w-0" open={open} handler={handleOpen} style={{ background: mode === 'light' ? '#teal' : '#teal', color: mode === 'dark' ? 'white' : 'black', position:'relative'}}>
                {/* DialogBody  */}
                <DialogBody >
                    <div className="sm:mx-auto sm:mb-2" style={{display:'flex', justifyContent:'center', flexWrap:'wrap', marginLeft:'-0.5rem', marginRight:'-0.5rem', marginTop:'1rem', marginBottom:'0.5rem'}}>
                        {/* main  */}
                        <div className="">
                            <div style={{display:'flex', gap:'12px'}}>
                                {/* Linkedin Icon  */}
                                <div className="">
                                    <a href="">
                                        <AiFillLinkedin size={35} style={{
                                            color: mode === 'dark'
                                                ? 'white'
                                                : 'white'
                                        }} />
                                    </a>
                                </div>

                                {/* Instagram Icon  */}
                                <div className="">
                                    <a href="">
                                        <AiFillInstagram size={35} style={{
                                            color: mode === 'dark'
                                                ? 'white'
                                                : 'white'
                                        }} />
                                    </a>
                                </div>

                                {/* Github Icon  */}
                                <div className="">
                                    <a href="">
                                        <AiFillGithub size={35}
                                            style={{
                                                color: mode === 'dark'
                                                    ? 'white'
                                                    : 'white'
                                            }} />
                                    </a>
                                </div>

                                {/* Facebook Icon  */}
                                <div className="">
                                    <a href="">
                                        <AiFillFacebook size={35}
                                            style={{
                                                color: mode === 'dark'
                                                    ? 'white'
                                                    : 'white'
                                            }} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className=" text-center" style={{textAlign:'center'}}>
                        <h1 className=" text-gray-600">Powered By DevBlog...</h1>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}