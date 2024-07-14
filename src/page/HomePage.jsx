import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import {useSelector } from "react-redux";
import { useGetProductsQuery } from "../Slices/productsApiSlice";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";
const HomePage = () => {
   const {data,isLoading,isError} = useGetProductsQuery();
   console.log('products',data)
   const [filteredData,setfilteredData] = useState(data?.products);
   console.log('filteredData',filteredData)
   const [term,setTerm] = useState('');
   const cartState = useSelector(state => state.cart);
  const navigate = useNavigate();


    useEffect(() => {
     if(data?.products.length > 0){
      setfilteredData(data.products);
     }
    
    },[data])
   
    useEffect(() => {
      const filteredData = data?.products.filter(item => item.title.toLowerCase().includes(term.toLowerCase().trim()));
      setfilteredData(filteredData)
    },[term])
   

  return (
    <>
    <header className="flex justify-between items-center p-4 border-2 border-b-zinc-800 ">
        <div className="text-3xl font-bold italic">Apna Shop</div>
        <button className="bg-orange-500 pt-2 pb-2 pl-4 pr-4 rounded-md relative"
        onClick={() => navigate('/cart')}
        ><ShoppingCartIcon sx={{color : 'white'}}/>
        <div className="flex items-center p-2 rounded-full absolute top-[-10px] right-[-2px]">
        <span className="text-white">{cartState.length}</span>
        </div>
        </button>
    </header>
    <main className="mt-8">
        <div className="flex justify-center">
        <input placeholder="Search product" className="w-[30%] p-2 border-2 border-zinc-800 rounded-md" value={term} onChange={(e) => setTerm(e.target.value)}/>
        </div>
        {
          
          isLoading && <div className="flex justify-center mt-24">

            <FidgetSpinner
            visible={true}
            height="150"
            width="150"
            ariaLabel="fidget-spinner-loading"
            backgroundColor="#5d5656"
            ballColors={['#000000','#000000','#000000']}
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
            />
          </div>
        }
      {
        filteredData?.length>0 && <div className="grid grid-cols-4 mt-8 gap-8 p-2">
          {
            filteredData.map((item) => {
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