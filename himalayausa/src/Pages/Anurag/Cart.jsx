import React, { useEffect, useState } from "react";
import {  HStack, VStack, Text, Box, Image, Button } from '@chakra-ui/react';
import styles from "./Cart.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart=()=>{

  const success = () => toast.success("Item Deleted from Cart");

    const [cartData, setCartData]= useState([])
    const navigate= useNavigate()

    const fetchCartFunction=()=>{
        axios.get(`https://my-himalayausa-project.herokuapp.com/cart`)
        .then((res)=>setCartData(res.data))
        .catch((err)=>console.log(err))
    }

    const handleProceedCheckout=()=>{
        alert("Procceding to checkout")
        navigate("/checkout");
        
    }

    const handleCartItemDelete=(id)=>{
        axios.delete(`https://my-himalayausa-project.herokuapp.com/cart/${id}`)
        success()
    }

    const handleChangeQuantity=(x, id, y)=>{
        
            axios.patch(`https://my-himalayausa-project.herokuapp.com/cart/${id}`,{
            count : y + x
        })
        fetchCartFunction()
    }

    let total_price = 0;
        
        for(let i=0; i<cartData.length; i++){
            total_price+= (cartData[i].Price * cartData[i].count);
        }

    useEffect(()=>{
        fetchCartFunction()
    },[cartData])

    return (
        <>
        <VStack padding="2%" w="100%" >
            <Box>
                <Text fontSize="4xl" fontWeight="semibold" >Shopping Cart</Text>
            </Box>
            <VStack w="100%" padding="3%"  >
                {
                    cartData.length>0 && cartData.map(({Img, Name, id, Price, count})=>{
                        return(
                            <div className={styles.cartBox_any} >
                                <Button color="grey" bg="white" onClick={()=>handleCartItemDelete(id)} >🗑</Button>

                                <Box bg="#f6f6f6" ><Image src={Img} /></Box>

                                <Box fontSize="2xl" textAlign="left" ><Text>{Name}</Text></Box>

                                <Box><Text fontSize="2xl" color="grey" >$ {Price}</Text></Box>

                                <HStack>
                                    <Button onClick={()=>{if(count>1){handleChangeQuantity(-1, id, count)}}} >-</Button>
                                    <Text fontSize="2xl" color="grey">{count}</Text>
                                    <Button onClick={()=>{if(count<4){handleChangeQuantity(+1, id, count)}}} >+</Button>
                                </HStack>

                                <Box><Text fontSize="2xl" color="grey" >$ {(Price * count).toFixed(2)}</Text></Box>
                            </div>
                        )
                    })
                }
            </VStack>
            <HStack bg="#f6f6f6" w="100%" padding="3%" justifyContent="space-between" >
                <Box><Text fontSize="2xl" >Total Items : {cartData.length}</Text></Box>
                <Box><Text fontSize="2xl" >Total Amount: $ {total_price.toFixed(2)}</Text></Box>
                <Button size="lg" bg="#0D362B" color="white" onClick={handleProceedCheckout} >Proceed To Checkout</Button>
            </HStack>
        </VStack>
        <ToastContainer />
        </>
    )
}
export default Cart