import { addItem, removeItem } from './cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from 'styled-components';

const ItemListContainer = styled.div`
    display: flex;
`

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const useRefItem = useRef(null);
    const useRefPrice = useRef(null);
    
    const handleAdd = () => {
        let item = {
            id: uuidv4(),
            name: useRefItem.current.value,
            price: useRefPrice.current.value
        }
        dispatch(addItem(item));
        useRefItem.current.value = "";
        useRefPrice.current.value = "";
    }

    console.log(items);

  return (
    <div>
        <div>
            <input type="text" placeholder='enter item name' ref={useRefItem}/>
            <input type="number" placeholder="enter item price" ref={useRefPrice} />
            <button onClick={() => handleAdd()}>Add item</button>
        </div>
        <div>
            {items.map(item => {
                return(
                    <ItemListContainer key={item.id}>
                        <h3>{item.name} - {item.price}</h3>
                        <button onClick={() => dispatch(removeItem(item.id))}>remove</button>
                    </ItemListContainer>
                )
            })}
        </div>
    </div>
  )
}

export default Cart