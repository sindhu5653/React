import { useState } from "react";

const Page=()=>{
    const [formData, setFormData]=useState({
        name:"",
        age:"",
        place:"",
    });

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }


return (
    <div>
        <h3>{formData.name}</h3>
        <h3>{formData.age}</h3>
        <h3>{formData.place}</h3>
    <input type="text" name="name" placeholder="Enter your Name" onChange={handleChange}/>
    <input type="text" name="age" placeholder="Enter your Age" onChange={handleChange}/>
    <input type="text" name="place" placeholder="Enter your Place" onChange={handleChange} />
    </div>
)
}

export default Page;