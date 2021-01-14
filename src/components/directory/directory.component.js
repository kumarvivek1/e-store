import React, { useState } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import "./directory.styles.scss"

const Directory = () => {
    const section = [
  {
    title: 'hats',
    imageUrl: 'https://www.neweracap.com/medias/sys_master/MLB/MLB/h04/h1c/9699437183006/MLBCityPatch-1000x1000.jpg',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://carriagecleaners.net/wp-content/uploads/2016/01/LeatherJackets-600x300.jpg',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://images.freekaamaal.com/post_images/1557483847.PNG',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://cdn.aarp.net/content/dam/aarp/entertainment/Styles-and-Trends/2016/12/1140-ljj-when-smart-women-buy-stupid-things-holiday-shopping.imgcache.rev14d8093ac08068c2d14e7077ce95a25a.jpg',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://img.etimg.com/thumb/msid-63502945,width-650,imgsize-161146,,resizemode-4,quality-100/shopaholics-anonymous-indian-men-shop-more-women-lag-behind-with-a-37-5-per-cent-share.jpg',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }
];

    const [sections, setSections] = useState(section)
    
    
    return (
        <div className="directory-menu">
            {
                sections.map(({title,imageUrl,id,size}) => {
                    return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                })
            }
        </div>
    )
}
export default Directory