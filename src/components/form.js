import { useState } from "react";

function Form() {
    const [inputOne, setInputOne] = useState('')
    const [inputTwo, setInputTwo] = useState('')

    function handleChangeOne(event) {
        setInputOne(event.target.value)
    }

    function handleChangeTwo(event) {
        setInputTwo(event.target.value)
    }

    function handleClick() {
        console.log("You have submitted a from. These are the values submitted: ");
        console.log("Name: ", inputOne)
        console.log("Age: ", inputTwo)
    }

    return (
        <div>
            <p>input one: {inputOne}</p>
            <p>input two: {inputTwo}</p>
            <label>Name</label>
            <input type="text" onChange={handleChangeOne} /><br />
            <label>Age</label>
            <input type="text" onChange={handleChangeTwo} /><br />
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
