import Button from '@material-ui/core/Button'
// Types
import { CartItemType } from '../App'
// Styles
import { Wrapper } from './Item.styes'

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void
}

export const Item = ({item, handleAddToCart}: Props) => {
    return (
        <Wrapper>
            <div className='product'>
                <img src={item.image} alt={item.title} />
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <h3>${item.price}</h3>
                </div>
            </div>
            <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
        </Wrapper>
    );
}
