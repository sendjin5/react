
const test2 = () => {
    const t1 = "어떤 음료수가 좋을까요";
    const t2 = '사이다';
  return (
    <div className="App">
        <h2 className="title">{t1}</h2>
        <h2 className="content">{t2 === '사이다' ? '사이다가 맞습니다.' : '아닙니다.'}</h2>
    </div>
  )
}

export default test2
