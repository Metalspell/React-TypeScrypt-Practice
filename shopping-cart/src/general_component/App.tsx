import React from 'react'
import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@mui/material/Drawer';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/icons-material/Badge';
import { Wrapper } from './App.styles';
import Item from '../components/item/Item';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
}

const App = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);

  const getTotalItems = () => {

  }

  const addItemToCart = (item: CartItemType) => {

  }

  const removeItemFromCart = () => {

  }

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={()=> setCartOpen(false)}>
        Cart goes here
      </Drawer>
      <Grid container spacing={3}>
        {data?.map((item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} addItemToCart={addItemToCart} />
          </Grid>
        )))}
      </Grid>
    </Wrapper>
  );
}

export default App;
