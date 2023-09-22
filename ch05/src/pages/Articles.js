import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Articles = () => {
    
    return (
        <div>
            <h1>글 목록</h1>
     <ul>

        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
          
        </ul>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

const ArticleItem = ({id}) => {
    const activeStyle = {
        color: "deeppink",
        fontSize: 24,
    };
    return(     //백틱사용
        <li>   
            <NavLink to={`/articles/${id}`} style={({isActive}) => (isActive ? activeStyle : undefined)}> 게시글 {id} 번째
            </NavLink>
        </li>
    )
}

export default Articles