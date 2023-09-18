import React, { useState } from 'react'
//객체의 배열
const Test2 = () => {


    const [names, setnames] = useState([
        {id:1, text:'사이다'},
        {id:2, text:'콜라'},
        {id:3, text:'밀키스'},
        {id:4, text:'환타'},
        {id:5, text:'맥콜'}
    ]);
    const [input, setinput] = useState('');
    const [nextId, setnextId] = useState(6);        //6번째부터 추가하라라는 객체
    const onChange = (e) => {setinput(e.target.value);}
    const onClick = (e) => {
        const nextnames = names.concat({ //하나의 객체 생성
            id : nextId,
            text : input,
        })
        setnextId(nextId+1);    //아이디를 하나 증가
        setnames(nextnames);     //객체를 배열 증가
        setinput('');
    }


    
    const onRemove = (id) => {
        const nextnames = names.filter(data => data.id !== id);  //filter 반복 실행문
        setnames(nextnames) 
    }


    const nameList =names.map((data) => <li key={data.id} onDoubleClick={() => { onRemove(data.id)}}> : {data.text}</li>);

  return (
    <div className='App'>
        <input value={input} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul className='list'>{nameList}</ul>
    </div>
  )
}

export default Test2