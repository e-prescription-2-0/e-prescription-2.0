import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from 'react-redux';

import { setMessages } from "../../reducers/messageDispatcher"
import { useReduxAction } from "../../hooks/useReduxAction";



const RouteDoctorGuard = ({
    children,
}) => {
    const dispatchError = useReduxAction(setMessages)
    const {role} = useSelector(state => state.auth.authUser);

    

   
    
    if (role !== 'doctor') {
        dispatchError({type:'error', text:'Нямате права за достъп до този ресурс'});
        return <Navigate to="/login" />;
    }
  

    return children ? children : <Outlet />
};

export default RouteDoctorGuard