import React from 'react'
import { NavLink } from 'react-router-dom'

const EverywhereUseCards = (props) => {
    const{imgUrl, title, description, articleid, category} = props;
  return (
    <div className='everywhere-card-container'>
    <NavLink state={{title: title, img: imgUrl, description: description, category: category}} to={`/category/${articleid}`} className="link text">
        
        <div className='everywhere-cards'>
            <div className={articleid}>
                <div className='card-flex-box'>
                    <div className='img-div'>
                        <img src={imgUrl} alt="article pic" className='everywhere-img' />
                    </div>
                    <div className='desc-div'>
                        <h3 className='link'>{title}</h3>
                <p className='link'>{description}</p>
                    </div>
                    
                
                </div>
                
            </div>
        </div>
        
    </NavLink>
    </div>
  )
}

export default EverywhereUseCards