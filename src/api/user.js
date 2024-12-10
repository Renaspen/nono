import { ENV } from "../utils/costants";
import { authFetch } from "../Lib/AuthFetch";

async function getMe(){
    try {
        const url = `${ENV.API_URL}/${ENV.ENPOINTS.USER_ME}`;
        const response= await Authfetch(url);
        const params={
            Authorization:"beare"
        };
        if (response.status != 200)throw response;
        return await response.json(); 
    } catch (error) {
        throw error;
    }
}
export const userCtrl = {
    getMe,
}