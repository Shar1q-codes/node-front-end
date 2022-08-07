import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='head-container'>
            <div className='blog-title'>
                <span>The</span>
                <h1>Siren</h1>
            </div>
            <div className='navigations'>
                <ul type="none">
                    <li>
                    <NavLink
                style={({ isActive }) => {
                    return{
                        color:  isActive ? 'white' : 'black',
                        backgroundColor: isActive ? 'black' : 'white',
                    }
                }}
                className="link"
                to="/"
              >
                Home
              </NavLink>
                    </li>
                    <li><NavLink style={({ isActive }) => {
                    return{
                        color:  isActive ? 'white' : 'black',
                        backgroundColor: isActive ? 'black' : 'white',
                    }
                }} className="link" to="/bollywood">
                Bollywood
              </NavLink></li>
                    <li>
                    <NavLink style={({ isActive }) => {
                    return{
                        color:  isActive ? 'white' : 'black',
                        backgroundColor: isActive ? 'black' : 'white',
                    }
                }} className="link" to="/hollywood">
                Hollywood
              </NavLink>
                    </li>
                    <li>
                    <NavLink style={({ isActive }) => {
                    return{
                        color:  isActive ? 'white' : 'black',
                        backgroundColor: isActive ? 'black' : 'white',
                    }
                }} className="link" to="/food">
                Food
              </NavLink>
                    </li>
                    <li>
                    <NavLink style={({ isActive }) => {
                    return{
                        color:  isActive ? 'white' : 'black',
                        backgroundColor: isActive ? 'black' : 'white',
                    }
                }} className="link" to="/fitness">
                Fitness
              </NavLink>
                    </li>
                    <li><NavLink style={({ isActive }) => {
                    return{
                        color:  isActive ? 'white' : 'black',
                        backgroundColor: isActive ? 'black' : 'white',
                    }
                }} className="link" to="/technology">
                Technology
              </NavLink></li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Header