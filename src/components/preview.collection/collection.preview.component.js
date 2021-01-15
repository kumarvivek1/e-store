import React from 'react'
import CollectionItem from '../collection-item/collection-item.components'

import './collection.preview.styles.scss'

const CollectionPreview = (props) => {
    const {title,items}=props
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item,index)=>index<4).map((item) => {
                        return (
                            <CollectionItem key={item.id} {...item}/>  
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CollectionPreview