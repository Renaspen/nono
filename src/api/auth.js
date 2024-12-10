import { ENV } from "../utils/costants";
async function register(email,username,password) {
    try{
        const url=`${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`;
        const params={
            method: "POST",
            headers:{
                "content-type": "aplication/json"
            },
            body:JSON.stringify({
                email,username,password
            }),
        };
        const response= await fetch(url,params);
        if (response.status !== 200)throw response;
        return await response.json();
    }catch(error){
        throw error;
    }
}
async function login(email, password){
    try{
        const url=`${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`;
        const params ={
            method: "POST",
            headers: {"Content-Type":"aplication/json",},
            body: JSON.stringify({
                identifier: email,
                password,
            }),
        };
        const response= await fetch(url, params);
        if (response.status !== 200)throw response;
        return await response .json();
    }catch(error){
        throw error;
    }
}
export const authCtrl={
    register,
    login
};