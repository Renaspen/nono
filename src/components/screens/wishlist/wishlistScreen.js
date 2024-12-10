import { View, Text } from "react-native";
import { size } from 'lodash';
import { authFetch } from '../Auth/LoginForm';
import { ENV } from '../../../utils';
async function addWishList(userId,productId){
    try{
        const filterUser = `filter[user][id][$eq][0]=${userId}`;
        const url=`${ENV.API_URL}/${
            ENV.ENDPOINTS.WISHLIST
        }`;
        const params={
            method: "POST",
            headers: {"content-Type":"aplication/json"},
            body: JSON.stringify({
                data:{user:userId,
                    product:productId,
                },
            }),
        };
        const response=await authFetch(url,params);
        if (response.status !== 200 ) throw response;
        return await response.json();
        if(size(result.data)===0){
            return false;
        } return true;
    } catch (error){
        throw error;
    }
}
async function deleteWishlist (useId, productId){
    try{
        const dataFound= await checkWishlist(useId, productId)
        if (dataFound){
            console.log(dataFound);
            const url= `${ENV.API_URL}/${
            ENV.ENDPOINTS.WISHLIST
        }/${dataFound.id}`
        }
    } catch(error){
        throw error
    }
}
export const wishlistCtrl= {
   add: Wishlist,
   check: checkWishlist,

}