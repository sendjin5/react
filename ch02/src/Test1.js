//이벤트(event) : 사용자가 특정 요소를 건드리는 사건
//종류 : Mouse, Keyboard, Form, Touch, File, Image, Video
//React는 해당 개체(특정 요소)의 성격에 따라 무수히 많은 이벤트를 지원
//http://facebook.github.io/react/docs/events.html

import React, { Component } from 'react'


class Test1 extends Component {
    render() {
        return (
        <div className='App'>Test1
            <h1>이벤트 짜잔 ~</h1>
            <input type='text' name='message' class="message" placeholder='메세지 입력' onChange={(e) => {
                //</div>console.log(e.target.value)}
                        this.setState({message : e.target.value})}}/>
            <button onClick={() => { this.setState({message:''})}}>지우기</button>
            <button onClick={() => {
                if(this.setState.message === "사이다"){
                    alert("사이다 정답입니다.")
                }else{alert("사이다가 아닙니다.")}
                }}>확인</button>

        </div>
        )
    }
}

export default Test1