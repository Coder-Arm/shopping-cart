import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard';



const CartPage = () => {
  const cartState = useSelector(state => state.cart);
   console.log('cartState',cartState)
  const navigate = useNavigate();
  return (
    <>
    <header className="flex justify-between p-4 border-2 border-b-zinc-800 ">
        <div className="text-xl font-bold italic">Apna Cart</div>
        <button className="bg-orange-500 pt-2 pb-2 pl-4 pr-4 rounded-md font-semibold text-white"
        onClick={() => navigate('/')}
        >Go Back</button>
    </header>
    <main>
      {
        cartState.length > 0 && <div className='grid grid-cols-4 mt-8 gap-8 p-2'>
        {
          cartState .map((item) => {
            return <ProductCard key={item.id} inCart={true} id={item.id} title={item.title} thumbnail={item.thumbnail} price={item.price} rating={item.rating}/>
        })
        }
        </div>
      }
    </main>
    
    </>
  )
}

export default CartPage