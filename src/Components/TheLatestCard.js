import React from 'react'
import { NavLink } from 'react-router-dom'

const TheLatestCard = (props) => {
    const{imgUrl, title, description, articleid, category} = props
  return (
    <NavLink state={{title: title, img: imgUrl, description: description, category: category}} to={`/category/${articleid}`} className="link text">
    <div className='the-latest-card-container'>
        <div className='flex-box'>
        <div className='the-latest-cards'>
            <div >
                <img src={imgUrl} alt="" className='latest-img'/>
            </div>
            <div className='latest-data'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
        </div>
    </div>
    </NavLink>
  )
}

export default TheLatestCard