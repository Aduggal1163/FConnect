import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const withAuth= (WrappedComponent)=>{
    const AuthComponent=(props)=>{
        const router=useNavigate();
        const isAuthenticated=()=>{
            if(localStorage.getItem("token"))
            {
                return true;
            }
                return false;
        }
        useEffect(()=>{
                if(!isAuthenticated())
                {
                    router("/auth")
                }
            },[router])// eslint-disable-line react-hooks/exhaustive-deps
            return <WrappedComponent {...props}/>
        }
        return AuthComponent;
    }
export default withAuth;