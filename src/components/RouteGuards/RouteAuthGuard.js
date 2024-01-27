import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from 'react-redux';

import { setMessages } from "../../reducers/messageDispatcher"
import { useReduxAction } from "../../hooks/useReduxAction";



const RouteAuthGuard = ({
    children,
}) => {
    const dispatchError = useReduxAction(setMessages)
    const user = useSelector(state => state.auth.authUser);

    

   
    
    if (!user) {
        dispatchError({type:'error', text:'Моля, впишете се или се регистрирайте'});
        return <Navigate to="/login" />;
    }
  

    return children ? children : <Outlet />
};

export default RouteAuthGuard