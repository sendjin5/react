//ref : (셀프) 참조용 => useRef

import React, { Component } from 'react'
import './Test4.css';

class Test4 extends Component {
    input = React.createRef();  //ref 생성
    state = {
        password : '',
        clicked : false,
        validated : false
    };
    handleChange = (e) => {
        this.setState({ password : e.target.value });};

    handbtnClick = (e) => {
        this.setState({
            clicked : true,
            validated : this.state.password === '1234' });
        this.input.current.focus();
    };

    render() {
    return (
      <div className='App'>
        <h2>폼 검증</h2>

        <input type='password' ref={ this.input } placeholder='비밀번호 입력' value={ this.state.password } onChange={ this.handleChange }
            className={ this.state.clicked ? this.state.validated ? 'success' : 'failure' : '' }/>
        <button onClick={ this.handbtnClick }> 검 거</button>

      </div>
    );
  };
}

export default Test4;