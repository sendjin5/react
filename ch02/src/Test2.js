import React, {useState} from 'react'

const Test2 = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    })
    const {username, message} = form;       //객체 폼 분리
    //이벤트 기술
    const onChange = (e) => {
    setTimeout(() =>  console.log(e), 500);
    const nextForm = {...form, [e.target.name] : e.target.value    //폼 객체
    }; setForm(nextForm);}
    const onClick = () => {
        alert(`당신의 이름은 : ${username}, 메세지는 ${message}`)
        setForm({
            username : '',
            message : ''
        });
    };
    const onKeypress = (e) => {
        if(e.key === 'Enter'){
            onClick();
        }
    };
  return (
    <div className='App'>
        <h1>Test 2(복수의 컨트롤 이벤트)</h1>
        <input type='text' name='username' placeholder='이름이요' value={ username } onChange={ onChange } />
        <input type='text' name='message' placeholder='메세지요' value={ message } onChange={ onChange } onKeyPress={ onKeypress }/>
        <button onClick={ onClick }>버튼</button>

    </div>
  )
}

export default Test2