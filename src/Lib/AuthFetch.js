import { storageCrtl } from "../api/storage";
import { fn } from "../utils/functions/functionIndex";

export async function authFetch(url,params){
    console.log("hola");
    const token = await storageCtrl.getToken();
    const logOut = async ()=> {await storageCtrl.removeToken()};
    if (!token) {
        logOut();
    } else {
        const response = fn.hasTokenExpired(token);
       if (fn.hasTokenExpired(token)){
        logOut();
       }else {
        const paramsTemp = {
            ...params,
            Headers: {
                ...params ?.Headers,
                Authorization: `Bearer $ {token}`,

            },
        };
        try{
            return await fecth(url,paramsTemp);
        }catch (error){
            throw error;
            logOut();
        }
       }
    }
} 

