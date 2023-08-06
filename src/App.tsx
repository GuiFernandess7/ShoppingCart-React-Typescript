import {useState} from 'react'
import {useQuery} from 'react-query'
// Components
import { Item } from './Item/Item'
import { Navbar } from './Navbar/Navbar'
import LinearProgress  from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
// Styles
import { Wrapper} from './App.styles';
//import './App.css'

export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json()


export const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])

  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products', 
    getProducts)

  const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ack: number, items) => ack + items.amount, 0)

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isInCart = prev.find(item => item.id === clickedItem.id)
      if (isInCart){
        return prev.map(item => (
          item.id === clickedItem.id
            ? {...item, amount: item.amount + 1}
            : item
        ))
      }
      return [...prev, {...clickedItem, amount: 1}]
    })
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, {...item, amount: item.amount - 1}]
        } else {
          return [...ack, item]
        }
      }, [] as CartItemType[])
    ))
  }

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong ...</div>

  console.log(data)
  return (
    <Wrapper>
      <Navbar
        cartItems={cartItems}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        getTotalItems={getTotalItems}
      />

      {/* <Drawer anchor='right' 
      open={cartOpen} 
      onClose={() => 
      setCartOpen(false)}>
        <Cart 
        cartItems={cartItems}
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}/>
      </Drawer> */}

      <Grid container spacing={1}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={3}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}


