import { useContext, useState, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import myContext from "../../../context/data/myContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/FirebaseConfig";

export default function AdminLogin() {
    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //* Login Function
    const login = async () => {
        if(!email || !password) {
            return toast.error("Fill all required fields");
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login Success');
            localStorage.setItem('admin', JSON.stringify(result));
            navigate('/dashboard');
        } catch (error) {
            toast.error('Login Failed');
            console.log(error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ display: 'flex', justifyItems:'center', position:'relative', alignItems:'center', height:'100vh', left:'30rem'}}>
            {/* Card */}
            <Card
                className="w-full max-w-[24rem]"
                style={{
                    background: mode === 'dark' ? 'teal' : 'rgb(226, 232, 240)',
                    width: '100%',
                    maxWidth:'24rem'
                }}
            >
                {/* CardHeader */}
                <CardHeader
                    color="blue"
                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                    style={{
                        background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'teal',
                        width: '40vh', margin:'0', display:'grid', placeItems:'center', paddingTop:'2rem', paddingBottom:'2rem', paddingLeft:'1rem', paddingRight:'1rem', textAlign:'center'
                    }}
                >
                    <div className="text-white" style={{marginBottom:'1rem', borderRadius:'9999px', borderWidth:'1px', borderColor:'rgb(255 255 255 / 0.1)', backgroundColor:'rgb(255 255 255 / 0.1)' }}>
                        <div className=" flex justify-center" style={{display:'flex', justifyContent:'center'}}>
                            {/* Image */}
                            <img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" className="h-20 w-20" />
                        </div>
                    </div>

                    {/* Top Heading */}
                    <Typography variant="h4" style={{
                        color: mode === 'dark' ? 'teal' : 'rgb(226, 232, 240)'
                    }}>
                        Admin Login
                    </Typography>
                </CardHeader>

                {/* CardBody */}
                <CardBody>
                    <form className=" flex flex-col gap-4" style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                        {/* First Input */}
                        <div>
                            <Input
                                type="email"
                                label="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {/* Second Input */}
                        <div>
                            <Input
                                type="password"
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/* Login Button */}
                        <Button
                            onClick={login}
                            style={{
                                background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'hsl(160.58823529411765, 37.777777777777786%, 17.64705882352941%)',
                                color: mode === 'dark' ? 'hsl(160.58823529411765, 37.777777777777786%, 17.64705882352941%)' : 'rgb(226, 232, 240)'
                            }}
                        >
                            Login
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}
