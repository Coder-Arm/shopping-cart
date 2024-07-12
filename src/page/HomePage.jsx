import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { manageProducts } from "../Slices/productsSlice";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
   const productsState = useSelector(state => state.products);
   const carState = useSelector(state => state.cart);
   console.log('productsState',productsState)
   const dispatch = useDispatch()
  const navigate = useNavigate();

    useEffect(() => {
    
      async function fetchData(){
        const response = await axios.get('https://dummyjson.com/products')
        const products = response.data.products;
        console.log(products);
        dispatch(manageProducts(products));
      } 
      fetchData()
    
    },[])
  
  return (
    <>
    <header className="flex justify-between p-4 border-2 border-b-zinc-800 ">
        <div className="text-xl font-bold italic">Apna Shop</div>
        <button className="bg-orange-500 pt-2 pb-2 pl-4 pr-4 rounded-md relative"
        onClick={() => navigate('/cart')}
        ><ShoppingCartIcon sx={{color : 'white'}}/>
        <div className="flex items-center p-2 bg-orange-500 rounded-full absolute top-[-10px] right-[-5px]">
        <span className="text-white text-xs">{carState.length}</span>
        </div>
        </button>
    </header>
    <main className="mt-8">
        <div className="flex justify-center">
        <input placeholder="Search product" className="w-[30%] p-2 border-2 border-zinc-800 rounded-md"/>
        </div>
      {
        productsState && <div className="grid grid-cols-4 mt-8 gap-8 p-2">
          {
            productsState.map((item) => {
                return <ProductCard key={item.id} id={item.id} inCart={false}  title={item.title} thumbnail={item.thumbnail} price={item.price} rating={item.rating}/>
            })
          }
        </div>
      }
    </main>
    </>
    
  )
}

export default HomePage