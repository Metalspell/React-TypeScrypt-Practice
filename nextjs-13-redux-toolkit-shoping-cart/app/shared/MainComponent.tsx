import React from 'react'
import { ProductsList } from '@/store/data'
import ProductItem from "@/app/shared/ProductItem"

type Props = {}

const MainComponent = (props: Props) => {
  return (
    <div className='flex flex-wrap gap-4 p-4'>
      {ProductsList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default MainComponent