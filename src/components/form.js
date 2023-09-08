import { useState } from "react";
import Paragraph from "./paragraph";

function Form() {
    const [name, setName] = useState('harry') // [variable, updaterFunction]
    const [age, setAge] = useState('')

    function handleChangeName(event) {
        setName(event.target.value)
    }

    function handleChangeAge(event) {
        setAge(event.target.value)
    }

    function handleClick() {
        console.log("You have submitted a form. These are the values submitted: ");
        console.log("Name: ", name)
        console.log("Age: ", age)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <label>Name</label>
            <input type="text" onChange={handleChangeName} /><br />
            <label>Age</label>
            <input type="text" onChange={handleChangeAge} /><br />
            <input type="submit" onClick={handleClick} />
        </div>
    )
}

export default Form;

// Event handler (success)
// State to store info

// const obj = {
//     name: 'Jarett',
//     age: 23,
// }

// const array = ['Jarrett', 23]

// console.log(obj.age)
// console.log(array[1])

// const {name, age} = obj
// let [listName, listAge] = array
