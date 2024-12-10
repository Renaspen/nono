import { View, Text } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { homeBannerCtrl } from "../../../api/home-banner";
import { findFocusedRoute } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { productBanners } from "../../../components/productBanner";
import { LayoutAnimation } from "react-native";
import { gridProducts } from "../Auth/gridProducts/gridProducts";
export function HomeScreen(){
    const {logOut}=useAuth();
    const [banners,setbanners]=useState(null);
    useEffect(()=>{
        first 
        return()=>{
            second
        }
    },[])
    const getBanners=async()=>{
        try {
            const response=await homeBannerCtrl.getAll();
            setbanners(response?.data||null)
            console.log(response);
        } catch (error) {
            Toast.show("error al obtener los banners",{
                position:Toast.positions.CENTER,
            });
        }
    };
    return(
        <LayoutAnimation.basic>
           {banners && <productBanners banner={banners}/>}
           <gridProducts title="new products" prduct={products} />
        </LayoutAnimation.basic>
    )
}