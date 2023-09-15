import logo from './logo.svg';
import './App.css';


//test1 컴포넌트 생성

//7 style {} 표현식 , {{}} 객체
function Test1() {
    const name = '사이다';
    const param = undefined;
    const style = {
        backgroundColor: "darkcyan", 
        color: "white",
        fontSize: "32px",
        fontWeight:"bold",
        padding: 10
    }

  return (
    <div className="App">
      <h2 className='title'>{name} Hi~ cider~~</h2>
      <h3 className='item_tit'>{name === '사이다' ? '맞고' : '아니다' }</h3>
      <h3 className='item_tit'>{param || <span>뭐쥬</span>}</h3>
      <h4 style= {style}> 내부 스타일 적용</h4>
      <div style={{
        color: "red", fontSize: "100px"
      }}>{name} 인라인 스타일 </div>
      <p className='comment'>test1</p>
    </div>
  );
}

export default Test1;
