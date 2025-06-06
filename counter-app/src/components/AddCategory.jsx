import { useState } from "react"



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target})=>{
       // console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim() <= 1) return;
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
        
        
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar gifts"
            value={inputValue}
            onChange={ onInputChange }
        />

    </form>
    
    
  )
}
