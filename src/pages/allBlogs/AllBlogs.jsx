import { useContext } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';

function AllBlogs() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <Layout>
            <section className="body-font" style={{color:'#4b5563'}}>
                <div style={{position:'relative', width:'100%', height:'100vh', paddingLeft:'1.25rem',paddingRight:'1.25rem', paddingTop:'2.5rem',paddingBottom:'2.5rem', marginLeft:'auto', marginRight:'auto', maxWidth:'80rem'}}>
                     {/* Top Heading  */}
                    <div style={{marginBottom:'1.25rem'}}>
                         <h1 style={{ color: mode === 'dark' ? 'white' : 'black', textAlign:'center', fontSize:'1.5rem', lineHeight:'2rem', fontWeight:'700'}}>
                             All Blogs
                         </h1>
                         <div className='card' style={{position:'relative', width:'20rem', height:'20rem', left:'10rem', bottom:'10px', top:'40px'}}>

                             {/* Card 1  */}
                            <div className="p-4 md:w-1/3" style={{position:'absolute', padding:'1rem'}} >
                             <div
                                style={{
                                    background: mode === 'dark'
                                        ? 'hsl(155.17241379310346, 32.58426966292136%, 17.45098039215686%)'
                                        : 'white',
                                    borderBottom: mode === 'dark'
                                        ?
                                        ' 4px solid rgb(226, 232, 240)'
                                        : ' 4px solid hsl(163.44827586206895, 32.58426966292136%, 17.45098039215686%)',
                                        height:'100%', cursor:'pointer', borderRadius:'12px', overflow:'hidden'
                                }}
                                className={`shadow-lg  hover:-translate-y-1 hover:shadow-gray-400
                                ${mode === 'dark'
                                    ? 'shadow-gray-700'
                                    : 'shadow-xl'
                                    } `} 
                            >
                                 {/* Blog Thumbnail  */}
                                <img style={{width:'100%'}} src={'https://india.spartacodingclub.com/static/image/bg_hero.png'} alt="blog" />

                                {/* Top Items  */}
                                <div style={{padding:'1.5rem'}}>
                                    {/* Blog Date  */}
                                    <h2 style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' #9ca3af',
                                            letterSpacing:'0.1rem', fontSize:'12px', lineHeight:'16px', fontWeight:'500'
                                    }}>
                                        {'20 Jun 2024'}
                                    </h2>

                                    {/* Blog Title  */}
                                    <h1 style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' #111827',
                                            fontSize:'18px', lineHeight:'28px', fontWeight:'700', marginBottom:'0.75rem'
                                    }}>
                                        {'👇 Join Today 👇!'}
                                    </h1>

                                    {/* Blog Description  */}
                                    <p style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)',
                                            lineHeight:'1.625', marginBottom:'0.75rem'
                                    }}>
                                       <a href='https://india.spartacodingclub.com/'>1K+ Students Enrolled! 
                                       <p>Launch Your Global Tech Career</p></a> 
                                    </p>
                                </div>
                            </div>
                         </div>

                         </div>

                         <div className='card' style={{position:'absolute', width:'20rem', height:'20rem', left:'30rem', top:'7rem'}}>

                            {/* Card 2  */}
                            <div className="p-4 md:w-1/3" style={{position:'absolute', padding:'1rem'}} >
                             <div
                                style={{
                                    background: mode === 'dark'
                                        ? 'rgb(30, 41, 59)'
                                        : 'white',
                                    borderBottom: mode === 'dark'
                                        ?
                                        ' 4px solid rgb(226, 232, 240)'
                                        : ' 4px solid rgb(30, 41, 59)',
                                        height:'100%', borderRadius:'12px', overflow:'hidden'
                                }}
                                className={`shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                ${mode === 'dark'
                                    ? 'shadow-gray-700'
                                    : 'shadow-xl'
                                    } `} 
                            >
                                 {/* Blog Thumbnail  */}
                                <img style={{width:'100%'}} src={'https://miro.medium.com/v2/resize:fit:1358/0*m35FOyZtw1I3I_F_.png'} alt="blog" />

                                {/* Top Items  */}
                                <div style={{padding:'1.5rem'}}>
                                    {/* Blog Date  */}
                                    <h2 style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' #9ca3af',
                                            letterSpacing:'0.1rem', fontSize:'12px', lineHeight:'16px', fontWeight:'500', marginBottom:'0.25rem'
                                    }}>
                                        {'20 Jun 2024'}
                                    </h2>

                                    {/* Blog Title  */}
                                    <h1 style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(17, 39, 29)',
                                            fontSize:'18px', lineHeight:'28px', fontWeight:'700', marginBottom:'0.75rem'
                                    }}>
                                        {'React Introduction'}
                                    </h1>

                                    {/* Blog Description  */}
                                    <p style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' hsl(140.68965517241378, 32.58426966292136%, 17.45098039215686%)',
                                            lineHeight:'1.625', marginBottom:'0.75rem'
                                    }}>
                                        <a href='https://teamsparta.notion.site/1-Introduction-to-React-3c2304a11b5a413ba0679a8e22015181'><b>A JavaScript library for building user interfaces </b> how the official documentation describes it This is how we can build UIs with something called React.</a>
                                    </p>
                                </div>
                            </div>
                         </div>

                        </div>

                        <div className='card' style={{position:'absolute', width:'20rem', height:'30rem', right: '10rem', bottom:'10px', top:'7rem'}}>

                            {/* Card 3  */}
                            <div className="p-4 md:w-1/3" style={{position:'absolute', padding:'1rem'}} >
                             <div
                                style={{
                                    background: mode === 'dark'
                                        ? 'rgb(30, 41, 59)'
                                        : 'white',
                                    borderBottom: mode === 'dark'
                                        ?
                                        ' 4px solid rgb(226, 232, 240)'
                                        : ' 4px solid rgb(30, 41, 59)',
                                        height:'100%', cursor:'pointer', borderRadius:'12px', overflow:'hidden'
                                }}
                                className={`shadow-lg  hover:-translate-y-1 hover:shadow-gray-400
                                ${mode === 'dark'
                                    ? 'shadow-gray-700'
                                    : 'shadow-xl'
                                    } `} 
                            >
                                 {/* Blog Thumbnail  */}
                                <img style={{width:'100%'}} src={'https://miro.medium.com/v2/resize:fit:1118/1*DgxUH1Fx69u0GJhv_s_H4g.png'} alt="blog" />

                                {/* Top Items  */}
                                <div style={{padding:'1.5rem'}}>
                                    {/* Blog Date  */}
                                    <h2 className="title-font" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' #9ca3af',
                                            letterSpacing:'0.1rem', fontSize:'12px', lineHeight:'16px', fontWeight:'500', marginBottom:'0.25rem'
                                    }}>
                                        {'20 Jun 2024'}
                                    </h2>

                                    {/* Blog Title  */}
                                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(17, 39, 25)',
                                            fontSize:'18px', lineHeight:'28px', fontWeight:'700', marginBottom:'0.75rem'
                                    }}>
                                        {'Lecture List'}
                                    </h1>

                                    {/* Blog Description  */}
                                    <p className="leading-relaxed mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)',
                                            lineHeight:'1.625', marginBottom:'0.75rem'
                                    }}>
                                        <a href='https://teamsparta.notion.site/Lecture-List-a86296d9026b472c9306b35942414630'>99 Video Lectures! <p>
                                       <b> Learn for Free </b> </p>
                                       Learn with Sparta, <p>100% Online, Self-paced</p></a>
                                    </p>
                                </div>
                            </div>
                         </div>

                        </div>
                    </div>
                </div>
            </section >
        </Layout >
    )
}

export default AllBlogs