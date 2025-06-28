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
      
      <div className='flex flex-wrap'>
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
