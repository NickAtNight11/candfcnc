import { useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Navigate, useLocation } from 'react-router-dom'


function ProtectedRoute({ children }) {
    const [comp, setComp] = useState(null);
    const auth = getAuth();
    const location = useLocation();
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setComp(children);
            console.log(user);
        } 
        else {
            setComp(<Navigate to="/login" state={{ from: location }} replace />)
            console.log(user);
        }  
    });

    return comp;
}

export default ProtectedRoute