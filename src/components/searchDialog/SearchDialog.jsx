import { Fragment, useContext, useState } from "react";
import {
    Dialog,
    DialogBody,
    Input,
} from "@material-tailwind/react";
import myContext from "../../context/data/myContext";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router";

export default function SearchDialog() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode, searchkey, setSearchkey, getAllBlog } = context;

    const naviagte = useNavigate();
    return (
        <Fragment>
            {/* Search Icon  */}
            <div onClick={handleOpen}>
                <AiOutlineSearch size={20} color="white" />
            </div>
            {/* Dialog  */}
            <Dialog className=" relative right-[1em] w-[25em]  md:right-0 md:w-0 lg:right-0 lg:w-0" open={open} handler={handleOpen} style={{ background: mode === 'light' ? 'rgb(47, 66, 59)' : 'rgb(47, 66, 48)', color: mode === 'dark' ? 'white' : 'black', position:'relative', left:'9rem', width:'25em'}}>
                {/* Dialog Body  */}
                <DialogBody >
                    <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                        {/* Input  */}
                        <Input
                            color="white"
                            type="search"
                            label="Type here..."
                            value={searchkey}
                            onChange={(e) => setSearchkey(e.target.value)}
                            className=" bg-[rgb(44,71,64)]"
                            name="searchkey"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                        />
                    </div>

<                   div className="flex justify-center flex-wrap  sm:mx-auto sm:mb-2 -mx-2  mt-4 mb-2 " style={{display:'flex', justifyContent:'center', flexWrap:'wrap', marginLeft:'auto', marginRight:'auto', marginBottom:'0.5rem', marginTop:'1rem'}}>
                        {
                            getAllBlog.filter((obj) => obj.blogs.title.toLowerCase().includes(searchkey)).map((item, index) => {

                                return (
                                    <div key={index} className="p-2 sm:w-1/4 w-full " style={{padding:'0.5rem', width:'100%'}}>
                                        <div onClick={() => naviagte(`/bloginfo/${item.id}`)} className=" container cursor-pointer mx-auto px-4 bg-gray-200 p-2 rounded-lg " style={{width:'100%', cursor:'pointer', marginLeft:'auto', marginRight:'auto', paddingLeft:'1rem', paddingRight:'1rem', padding:'0.5rem', borderRadius:'0.5rem'}}>
                                            {/* Blog Thumbnail  */}
                                            <img className="w-20 mb-2 rounded-lg" style={{width:'5rem', marginBottom:'0.5rem', borderRadius:'0.5rem'}}
                                                src={item.thumbnail} alt="" />
                                            {/* Blog Date  */}
                                            <p className="w-40 text-sm" style={{width:'10rem', fontSize:'14px', lineHeight:'20px'}}>{item.date}</p>
                                            {/* Blog Title  */}
                                            <h1>{item.blogs.title}</h1>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>

                    {/* Heading  */}
                    <div className=" text-center" style={{textAlign:'center'}}>
                        <h1 className=" text-gray-600" style={{color:'gray'}}>Powered By DevBlog</h1>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}