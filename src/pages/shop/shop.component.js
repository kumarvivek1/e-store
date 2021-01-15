import React,{useState} from 'react'
import CollectionPreview from '../../components/preview.collection/collection.preview.component'
import {SHOP_DATA} from './shop.data'

const ShopPage = (props) => {
    const [collection, setCollection] = useState(SHOP_DATA)
    
    return (
        <div>
            {
                collection.map(({id,...item}) => {
                    return (
                        <CollectionPreview key={id} {...item} />
                    )
                })
            } 
        </div>
    )
}
export default ShopPage