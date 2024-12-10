import {useState, useEffect, createContext} from "react";
import { storageCrtl } from "../api/storage";
import { userCtrl } from "../api/user";
export const authContext = createContext();
export function authProvider(props){
    const {children} =props;
    const {user,setUser} = useState(null);
    const {loading,setLoading} = useState(true); 
    useEffect(()=>{
        retrieveSesion();
    },[]);
    const retrieveSesion = async ()=>{
        const token = await storageCrtl.getToken();
        console.log("token", token);
        setLoading (false);
    };
    const login = async (token)=> {
        try{
            await storageCtrl.setToken(token);
            const response = await userCtrl.getMe();
            setUser(response);
            setLoading(false);
            console.log(response);
        }catch(error){
            setLoading(false);
            console.error(error);
        }
    }
    const data ={
        user,
        login,
        logOut:()=>console.log("logout"),
        updateUser:()=>console.log("update user"),
    };
    if(loading) return null;
    return <authContext.Provider value={date}>
        {children}
    </authContext.Provider>
  
}