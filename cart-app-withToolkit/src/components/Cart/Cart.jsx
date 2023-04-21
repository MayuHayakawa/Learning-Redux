import { useState } from 'react';
import { addItem, removeItem } from './cartSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { useRef } from "react";
// import { v4 as uuidv4 } from "uuid";
// import styled from 'styled-components';

// const ItemListContainer = styled.div`
//     display: flex;
// `

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const [ data, setData ] = useState({
        id: "",
        name: "",
        price: ""
    });

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem(data));
        setData({
            id: "",
            name: "",
            price: ""
        });
    };

    return(
        <div>
            {cart.map((item) => (
                <div key={item.id}>
                    <h5>{item.name}</h5>
                    <button onClick={() => handleRemove(item.id)}>Delete</button>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    value={data.id}
                    type="text"
                    name="id"
                    id="itemId"
                    />
                <input 
                    onChange={handleChange}
                    value={data.name}
                    type="text"
                    name="name"
                    id="itemName"
                />
                <input 
                    onChange={handleChange}
                    value={data.price}
                    type="number"
                    name="price"
                    id="itemPrice"
                />
                <button>Submit</button>
            </form>
        </div>

    )
//     const dispatch = useDispatch();
//     const items = useSelector((state) => state.cart.items);
//     const useRefItem = useRef(null);
//     const useRefPrice = useRef(null);
    
//     const handleAdd = () => {
//         let item = {
//             id: uuidv4(),
//             name: useRefItem.current.value,
//             price: useRefPrice.current.value
//         }
//         dispatch(addItem(item));
//         useRefItem.current.value = "";
//         useRefPrice.current.value = "";
//     }

//     console.log(items);

//   return (
//     <div>
//         <div>
//             <input type="text" placeholder='enter item name' ref={useRefItem}/>
//             <input type="number" placeholder="enter item price" ref={useRefPrice} />
//             <button onClick={() => handleAdd()}>Add item</button>
//         </div>
//         <div>
//             {items.map(item => {
//                 return(
//                     <ItemListContainer key={item.id}>
//                         <h3>{item.name} - {item.price}</h3>
//                         <button onClick={() => dispatch(removeItem(item.id))}>remove</button>
//                     </ItemListContainer>
//                 )
//             })}
//         </div>
//     </div>
//   )
}

export default Cart