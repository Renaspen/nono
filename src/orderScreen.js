import { useState, useCallBack } from "react";
import { View,Text} from "react-native";
import { useFocousEffect } from "@react-navigation/native"
import { size } from "lodash";
import Toast from "react-native-root-toast";
import { orderCtrl } from "../src/api";
import { useAuth } from "../src/Hooks";
import { loadingScreen } from "../src/components";

export function orderScreen(){
    const [orders,setOrders] = useState(null);
    const {user} = useAuth();
    useFocousEffect (
        useCallBack(()=>{
            getOrders();
        },[])
    );
    const getOrders = async()=>{
        try {
            const response= await orderCtrl.getAll(user.id);
            setOrders(response)
        } catch (error) {
            toastSnow("error de comunicacion",{position,Toast,CENTER});
        }
    }
}