import React, { useState } from 'react'

const Test9 = () => {
    const [message, setmessage] = useState('');
    const onClickEnter = () => setmessage('안녕하세요 라고 합니다 test 9 ');
    const onClickleave = () => setmessage('갑니다 ~~~ test9');
    const [color, setcolor] = useState('black')
  return (
    <div className='App'>
    <button onClick={ onClickEnter }>입실</button>
    <button onClick={ onClickleave }>퇴실</button>
    <hr />
    <h1 style = {{ color }}>{ message }</h1>

    <button onClick={ () => setcolor('gold') }>그음</button>
    <button onClick={ () => setcolor('gray') }>으은</button>
    <button onClick={ () => setcolor('brown') }>도옹</button>




    </div>
  )
}

export default Test9