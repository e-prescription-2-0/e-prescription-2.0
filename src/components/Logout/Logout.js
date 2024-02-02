import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchLogoutUser } from "../../reducers/auth";
import { useReduxAction } from "../../hooks/useReduxAction";




const Logout = () => {

    const dispatchClearAuthUser = useReduxAction(fetchLogoutUser) 
   
    useEffect(() => {
      
        dispatchClearAuthUser()
            
    }, [dispatchClearAuthUser])


    return <Navigate to='/' />

}


export default Logout