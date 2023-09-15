//props(구조할당) 클래스처럼 묶어서 사용할 때
//default로 진행되며, index.js에서 다른 값을 넣어주게되면 바뀜
const Test5 = (props) => {
  return (
    <div className="App">
      <h2>나의 이름은 {props.nam} 이다.</h2>
      <h2>나이는 {props.age} 이다.</h2>
      <h2>사는 곳은 {props.addr} 이다.</h2>
    </div>
  )
}

Test5.defaultProps = {
  nam: '사이다',
  age: 41,
  addr: '인천시 계산동'
}

export default Test5