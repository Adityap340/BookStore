import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {signOut} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/';
    const handleLogout = () => {
        signOut().then(() => {
            alert('Logout successful');
            navigate(from, { replace: true });
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center rounded'>
            <button className='bg-red-600 text-white px-8 py-4' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout