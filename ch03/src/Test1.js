import React from 'react'

const Test1 = () => {
    const names = ['사이다','콜라','환타','밀키스','맥콜'];
    const nameList = names.map((data) => <li>{data}</li>)
  return (
    <div className='App'>

        <ul>{nameList}</ul>
    </div>
  )
}

export default Test1