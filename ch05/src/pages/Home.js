import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <h2>Home</h2>
        <ul>
            <li>
                <Link to="/about"> Intro </Link>   
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/profile/sangmin"> sangmin </Link> 
            </li>
            <li>
                <Link to="/profile/yeun"> yeun </Link>   
            </li>
            <li>
                <Link to="/profile/sehoon"> sehoon </Link>   
            </li>
        </ul>
    </div>
  )
}

export default Home