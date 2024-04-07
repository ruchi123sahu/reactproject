import React, {useState} from "react";
function DataBinding(){
    const [data, setData] = useState({
        name: "mohan",
        age: 25
    })
    const handlechange=(Event)=>{
        let value = Event.target.value;
        setData({
            ...data,name:value
        });
    }
    return (
        <div>
            <h2>data binding</h2>
            <h4>
                one way binding: {data.name}-{ data.age}
            </h4>
            <div>
                <input type='text'
                value={data.name}
                onChange={handlechange} />
            </div>
        </div>
    )
}
export default DataBinding;