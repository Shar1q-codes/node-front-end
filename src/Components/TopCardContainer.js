import React from 'react'
import { NavLink } from 'react-router-dom'

const TopCardContainer = (props) => {
  const{imgUrl, title, description, articleid, category} = props;
  return (
    <div className='top-card-container'>
      <NavLink state={{title: title, img: imgUrl, description: description, category: category}} to={`/category/${articleid}`} className="link text">
        <div className='left-container'>
          <img src={imgUrl} alt="" className='top-img' />
          <p className='top-img-txt'>{title}</p>
        </div>
        </NavLink>
        <div className='right-container'>
        <NavLink to='/category/1'>
            <div className='top-img'>
            <img src="https://images.indianexpress.com/2022/06/jugjugg-jeeyo-box-office.jpg" alt="" className='right-img' />
          <p className='top-img-txt'> Jugjugg Jeeyo: Neetu Kapoor captures the raw anguish of a loveless marriage in one scene, everything else is just noise</p>
            </div>
          </NavLink>
            <NavLink to="/category/1">
            <div className='bot-img'>
            <img src="https://images.indianexpress.com/2022/06/johny-depp.jpg?resize=450,250" alt="" className='right-img bot-img' />
          <p className='top-img-txt'>Johnny Depp’s spokesperson clears the air on actor’s return to Pirates of the Caribbean franchise</p>
            </div>
            </NavLink>
        </div>
        
    </div>
  )
}

export default TopCardContainer