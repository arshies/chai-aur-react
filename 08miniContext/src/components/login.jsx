import {React , useState ,useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username , setUsername ] = useState('');
    const [password , setPassword ] = useState('');

    const {setUser} = useContext(UserContext);


    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password})

    }

    return (
        <div>
            <h2>login</h2>
            <input type="text" placeholder='user' value={username} onChange={(e)=> setUsername(e.target.value)} /> <br />
            <input type="text" placeholder='pass' value={password} onChange={(e)=> setPassword(e.target.value)} /> <br /><br />

            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login
