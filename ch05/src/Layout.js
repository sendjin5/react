import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Layout = () => {

    const navi = useNavigate();
    const goback = () => {
        navi(-1);
    };

    const gohome = () => {
        navi('/', {replace : true});
    };
    const goarticles = () => { navi('/articles', {replace : true});
    };

    
  return (
    <div>
        <header style={{ background: 'darkcyan', padding: 20, fontSize: 24}}>
            <button onClick={gohome}>홈으로</button>
            <button onClick={goback}>뒤로</button>
            <button onClick={goarticles}>게시판</button>
            <ul>
            <li style={{float: 'right'}}>
                <Link to="/login"> Login </Link>   
                <Link to="/mypage"> Mypage </Link>   
                <Link to="*"> Notfound </Link>   
            </li>
        </ul>
        </header>

        <main>
            <Outlet/>

        </main>

    </div>
  )
}

export default Layout