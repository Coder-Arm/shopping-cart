import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import { useDispatch } from 'react-redux';
import { manageCart,removefromCart } from '../Slices/cartSlice';
import { toast } from 'react-toastify';
const ProductCard = ({title,thumbnail,price,rating,id,inCart}) => {
    const dispatch = useDispatch();

   function handleCart(){
    if(!inCart){
     dispatch(manageCart({id,title,thumbnail,price,rating}))
     toast.success('Added successfully! ')
    }  
    else{
      dispatch(removefromCart({id}))
      toast.error('Removed successfully! ')
    } 
   }


  return (
    <div className='border-2 border-zinc-600 rounded-md p-2 flex flex-col justify-between'>
        <img src={thumbnail}/>
        <p className='text-center'>{title}</p>
        <div className='flex justify-between mt-4 '>
            <span className='text-xl'>{price}$</span>
            <span className='flex items-center'>{rating}<GradeIcon color='primary'/></span>
        </div>
        <button className='bg-zinc-800 text-white p-2 mt-2 hover:bg-slate-700' onClick={handleCart}>{!inCart ? 'Add to Cart' : 'Remove'}</button>
    </div>
  )
}

export default ProductCard