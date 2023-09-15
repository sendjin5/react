import { Component } from 'react'
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Test5 from './Test5';


//함수형 되기 전 진행방식 
class Test4 extends Component {
  render() {
    return (
        <div className='App'>
            <Test1 />     
            <Test2 />
            <Test3 />
            <Test5 />

        </div>
        );
    }   
}

export default Test4