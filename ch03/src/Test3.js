import React, { useRef } from 'react'
//useRef: setter도 지원되지 않으며, 자체가 객체이다. 데이터 처리(.current 사용)는 되나 문서로 전달되지는 않는다. => 렌더링 필요(useState는 바로 렌더링됨=useRef도 함께 됨)




const Test3 = () => {
  return (
    <div>Test3</div>
  )
}

export default Test3
