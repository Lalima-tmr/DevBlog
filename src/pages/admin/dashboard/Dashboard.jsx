import { useContext, useEffect } from 'react'
import Layout from '../../../components/layout/Layout'
import myContext from '../../../context/data/myContext';
import { Button } from '@material-tailwind/react';
import { Link, useNavigate  } from 'react-router-dom';

function Dashboard() {
    const context = useContext(myContext);
    const { mode, getAllBlog } = context;

    const navigate = useNavigate();

    //* Logout Function 
    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <div style={{paddingTop:'2.5rem', paddingBottom:'2.5rem'}}>
                <div
                    className="lg:justify-center lg:gap-10 lg:px-0"
                    style={{width:'100%', height: '10rem', position: 'relative', display:'flex', justifyContent:'center', marginTop:'0.3rem', flexWrap:'wrap', gap:'0.5rem', paddingLeft:'1rem', paddingRight:'1rem', marginBottom:'2rem'}}>
                    <div className="left" style={{position: 'absolute',justifyContent:'flex-start'}}>
                        <img
                            style={{width:'10rem', height:'10rem', objectFit:'cover', borderRadius:'9999px', borderWidth:'2px', padding:'4px', borderColor:'#db2777'}} 
                            src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'} alt="profile"
                        />
                    </div>
                    <div className="right" style={{position: 'absolute',display:'block', marginLeft:'20.5rem'}}>
                        <h1
                            style={{ color: mode === 'dark' ? 'white' : 'black', fontWeight:'700', fontSize:'1.5rem', lineHeight:'2rem', textAlign:'center', marginBottom:'8px'}}
                        >
                            Lalima Singh
                        </h1>

                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black', fontWeight:'600', marginLeft:'6rem'}} >
                            Software Developer
                        </h2>
                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black', fontWeight:'600', marginLeft:'6rem'}}>lalimak05@gmail.com
                        </h2>
                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black', fontWeight:'500',  marginLeft:'6rem'}} className="font-semibold">
                            <span>Total Blog : </span>  15
                        </h2>
                        <div style={{position:'relative' ,display:'flex', gap:'8px', marginTop:'0.5rem',  marginLeft:'3rem'}}>
                            <Link to={'/createblog'}>
                                <div style={{position:'absolute', marginBottom:'8px', marginLeft:'1rem'}}>
                                    <Button
                                        style={{
                                            background: mode === 'dark'
                                                ? 'rgb(226, 232, 240)'
                                                : 'teal',
                                            color: mode === 'dark'
                                                ? 'black'
                                                : 'white',
                                            borderRadius:'0.8rem',
                                            paddingLeft:'2rem',
                                            paddingRight:'2rem',
                                            paddingTop:'0.5rem',
                                            paddingBottom:'0.5rem'
                                        }}
                                    >
                                        Create Blog
                                    </Button>
                                </div>
                            </Link>
                            <div style={{ marginInlineStart:'10rem', marginBottom:'8px'}}>
                                <Button
                                    onClick={logout}
                                    style={{
                                        background: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : 'teal',
                                        color: mode === 'dark'
                                            ? 'black'
                                            : 'white', 
                                        borderRadius:'0.8rem',
                                        paddingLeft:'2rem',
                                        paddingRight:'2rem',
                                        paddingTop:'0.5rem',
                                        paddingBottom:'0.5rem'
                                    }}
                                >
                                    Logout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line  */}
                <hr className={`border-2
                    ${mode === 'dark'
                            ? 'border-gray-300'
                            : 'border-gray-400'}`
                    }
                />

                {/* Table  */}
                <div className="" style={{height:'100vh', width:'100%'}}>
                    <div style={{position:'relative', width:'100%', display:'flex', paddingLeft:'1rem',paddingRight:'1rem', marginLeft:'auto', marginRight:'auto', marginTop:'1.25rem', marginBottom:'1.25rem', maxWidth:'80rem'}}>
                        <div style={{border:'2px solid rgb(30, 41, 59)', position:'relative', width:'100%', overflowX:'auto'}}>
                            {/* table  */}
                            <table style={{width:'100%', borderWidth:'2px', borderColor:'rgb(255 255 255)', fontSize:'14px', lineHeight:'20px', textAlign:'left', color:'6b7280'}}>
                                {/* thead  */}
                                <thead
                                    style={{
                                        background: mode === 'dark'
                                            ? 'white'
                                            : 'hsl(144.82758620689654, 32.58426966292136%, 17.45098039215686%)',
                                            width: '100%',
                                            fontSize:'12px', lineHeight:'16px',
                                    }}>
                                    <tr>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'0.75rem',paddingBottom:'0.75rem'}} scope="col">
                                            S.No
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'0.75rem',paddingBottom:'0.75rem'}} scope="col">
                                            Thumbnail
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'0.75rem',paddingBottom:'0.75rem'}} scope="col">
                                            Title
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'0.75rem',paddingBottom:'0.75rem'}} scope="col">
                                            Category
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'0.75rem',paddingBottom:'0.75rem'}} scope="col">
                                            Date
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'0.75rem',paddingBottom:'0.75rem'}} scope="col">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                {/* tbody  */}
                                {getAllBlog.length > 0
                                    ? <> {getAllBlog.map((item, index) => {
                                            const {thumbnail, date} = item;
                                            console.log(item)
                                            return (
                                                    <tbody key={index} style={{width:'100%'}}>
                                                        <tr style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white', width: '100%', marginLeft:'1.5rem', borderBottomWidth:'2px'}}>
                                                            {/* S.No   */}
                                                            <td style={{ color: mode === 'dark' ? 'white' : 'black', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'1rem',paddingBottom:'1rem'}}>
                                                            {index + 1}.
                                                            </td>

                                                            {/* Blog Thumbnail  */}
                                                            <th style={{ color: mode === 'dark' ? 'white' : 'black', width: '10rem', height: '10rem', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'1rem',paddingBottom:'1rem', fontWeight:'500'}} scope="row">
                                                                {/* thumbnail  */}
                                                                <img style={{width:'4rem', borderRadius:'0.5rem'}} 
                                                                src={thumbnail} alt="thumbnail" />
                                                            </th>

                                                            {/* Blog Title  */}
                                                            <td style={{ color: mode === 'dark' ? 'white' : 'black', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'1rem',paddingBottom:'1rem'}}>
                                                            {item.blogs.title}
                                                            </td>

                                                            {/* Blog Category  */}
                                                            <td style={{ color: mode === 'dark' ? 'white' : 'black', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'1rem',paddingBottom:'1rem'}} >
                                                            {item.blogs.category}
                                                            </td>

                                                            {/* Blog Date  */}
                                                            <td style={{ color: mode === 'dark' ? 'white' : 'black', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'1rem',paddingBottom:'1rem'}}>
                                                            {date}
                                                            </td>

                                                            {/* Delete Blog  */}
                                                            <td style={{ color: mode === 'dark' ? 'white' : 'black', paddingLeft:'1.5rem',paddingRight:'1.5rem', paddingTop:'1rem',paddingBottom:'1rem'}}>
                                                                <button style={{borderRadius:'0.5rem', paddingLeft:'1rem', paddingRight:'1rem', fontWeight:'700', paddingTop:'0.25rem',paddingBottom:'0.25rem', color:'#ffffff', backgroundColor:'#ef4444'}}>
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                 )
                                        })}</>
                                    :
                                    <>
                                <h1>Not Found</h1>
                                </>
                               }
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Dashboard