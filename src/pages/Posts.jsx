import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { fetchData } from '../App/dataSlice';
import { useDispatch,useSelector } from 'react-redux';

function Posts() {
  const dispatch = useDispatch()
  const {items,loading,error} = useSelector(state=>state.foodData)

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

  console.log("item:",items);
  
  return (
    <>
      
      <div className='w-full flex justify-around space-y-5 flex-wrap overflow-x-hidden p-3'>
        {
          items.map(food=> {
            return <Card key={food.id} img={food.img} title={food.title} Time={food.Time} isVeg={food.isVeg} ingredients={food.ingredients} summary={food.summary}/>
          })
        }
      </div>
      
    </>
  )
}

export default Posts
