import {useParams} from 'react-router-dom'




const data = {
    sangmin: {
        name: '최상민',
        description : '백앤드를 좋아하는 개발자',
        img: require ('./1.png')
    },
    yeun: {
        name: '신예은',
        description : '프론트앤드를 좋아하는 개발자',
        img: require ('./2.png')

    },
    sehoon: {
        name: '오세훈',
        description : '서울을 좋아하는 개발자',
        img: require ('./3.png')

    },
};


const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
    <h2>Profile</h2>
    <hr/>
    {profile ? (
        <div>
            <h3>{profile.name}</h3>
            <h3>{profile.description}</h3>
            <h3><img src={profile.img} /></h3>
        </div>
    ) : (
        <h3>해당 유저가 존재않지 않음</h3>
    )}
    </div>
  )
}

export default Profile