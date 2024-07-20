import { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'teal' : '#106161'}}>

            {/* Hero Section  */}
            <div style={{width:'100%',marginLeft:'auto',marginRight:'auto', alignItems: 'center', justifyContent: 'center',display:'flex', paddingLeft:'1.25rem', paddingRight:'1.25rem', paddingTop:'6rem', paddingBottom:'6rem', flexDirection:'column'}}>
                {/* Main Content  */}
                <main>
                    <div style={{textAlign:'center'}}>
                        <div style={{marginBottom:'8px'}}>
                            {/* Image  */}
                            <div style={{display:'flex', justifyContent: 'center'}}>
                                <img src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="" />
                            </div>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white',fontSize:'20px',lineHeight:'28px', fontWeight:'200', marginLeft:'auto',marginRight:'auto'}}>
                            Here are some blogs and tutorials contributed.
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection