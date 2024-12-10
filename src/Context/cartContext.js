import {useState, useEffect, createContext} from 'react';
import {cartCtrl} from '../api';
export const cartContext = createContext();
export function carProvider (props){
    const {children} = props;
    const [cart, setCart] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [reload,setReload] = useState(false);
    useEffect (()=>{
        retriveCart();
        countTotalProduct();

    },[reload] );
    const onReload =()=>setReload((prevState)=>!PrevState);
    const addCart = async(productId)=>{
        try {
            await cartCtrl.add(productId);
            onReload();
        } catch (error) {
            throw error;
        }
    };
    const retriveCart=async()=>{
        try {
            const response= await cartCtrl.getAll(); 
        } catch (error) {
            throw error;
        }
    }  
}