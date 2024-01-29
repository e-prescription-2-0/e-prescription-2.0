import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from 'react-redux';

import { setMessages } from "../../reducers/messageDispatcher"
import { useReduxAction } from "../../hooks/useReduxAction";



const RouteLoggedUserGuard = ({
    children,
}) => {
    const dispatchError = useReduxAction(setMessages)
    const user = useSelector(state => state.auth.authUser);

    

   
    
    if (user) {
        dispatchError({type:'error', text:'Вече сте вписан!'});
        return <Navigate to="/prescriptions" />;
    }
  

    return children ? children : <Outlet />
};

export default RouteLoggedUserGuard