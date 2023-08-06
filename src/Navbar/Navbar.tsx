import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Drawer from '@material-ui/core/Drawer';
import { StyledButton} from '../Navbar/Navbar.styles';
import { Cart } from '../Cart/Cart';

export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
}


type CartProps = {
  cartItems: CartItemType[],
  handleAddToCart: (clickedItem: CartItemType) => void,
  handleRemoveFromCart: (id: number) => void
  cartOpen: boolean
  setCartOpen: (opened: boolean) => void
  getTotalItems: (items: CartItemType[]) => void
}

export const Navbar = ({ cartItems, handleAddToCart, handleRemoveFromCart, setCartOpen, cartOpen}: CartProps) => {

  return (
    <AppBar>
      <Toolbar>

        <Typography color="initial">
          Shopping Cart
        </Typography>

        <div style={{ marginLeft: 'auto'}}>
          <StyledButton onClick={() => setCartOpen(true)}> 
            <Badge badgeContent={cartItems.length} color='error'>
              <AddShoppingCartIcon />
            </Badge>
          </StyledButton>
        </div>
        
      </Toolbar>

      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
