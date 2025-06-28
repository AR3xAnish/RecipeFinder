const call = async()=>{
    try {
        const key="83ece5f93e12436999614d298bbb9305"
        const food = await fetch("https://api.spoonacular.com/recipes/random?number=10&apiKey="+key)
        .then((res)=>res.json())
        .then((data)=>{
            console.log("called");
            // console.log(data)
            return data.recipes
        }).then((data)=>{
            const eData = data.map((obj)=>{
                return ({
                    id: obj.id,
                    img: obj.image,
                    title: obj.title,
                    Time: obj.readyInMinutes,
                    isVeg: obj.vegetarian,
                    ingredients: obj.extendedIngredients,
                    summary: obj.summary
                })   
            })
            return eData 
        })
        .catch((err)=>console.log(err))
        return food
    } catch (error) {
        console.log(error);  
    } 
}
const data = await call()
console.log(data);

// console.log(eData);

export default data
