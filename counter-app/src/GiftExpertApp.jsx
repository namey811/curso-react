import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Vegeta']);

   const onAddCategory = (Newcategory)=>{
        if( categories.includes(Newcategory)) return;
        setCategories([Newcategory, ...categories]);
        //console.log(categories);
   }

  return (
    <>
    <h1>GiftExpertApp</h1>
    
    <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
    />


    { 
        
        categories.map( category => (
            <GifGrid 
                key={category}
                category={category}
            />
        )) 
    }

    </>
  )
}
