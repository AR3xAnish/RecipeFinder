import { createSlice,createAsyncThunk, asyncThunkCreator } from "@reduxjs/toolkit";


//Asyn thunk to fetch data
export const fetchData = createAsyncThunk('data/fetchData',async()=>{
        const key="83ece5f93e12436999614d298bbb9305"
        const food = await fetch("https://api.spoonacular.com/recipes/random?number=25&apiKey="+key)
        const data = await food.json()
        const cleaned = data.recipes.map((obj)=>({
            id: obj.id,
            img: obj.image,
            title: obj.title,
            Time: obj.readyInMinutes,
            isVeg: obj.vegetarian,
            ingredients: obj.extendedIngredients,
            summary: obj.summary
        }))
        
        // console.log(cleaned);
        
        return cleaned 
        
    })
console.log(fetchData);


const dataSlice = createSlice({
    name: 'foodData',
    initialState: {
        items:[],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers:(builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload // ✅ Save fetched data into store
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }

})


export default dataSlice.reducer