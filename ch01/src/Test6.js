//비구조 분할

const Test6 = (props) => {
    const {nam, age, addr} = props; //객체 구조 분할
    //const[nam, age, addr] = props; //배열 구조 분할

 return (
    <div className="App">
      <h2>나의 이름은 {nam} 이다.</h2>
      <h2>나이는 {age} 이다.</h2>
      <h2>사는 곳은 {addr} 이다.</h2>
    </div>
  )
}

export default Test6