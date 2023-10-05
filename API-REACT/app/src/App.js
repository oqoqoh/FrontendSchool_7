import { useState } from 'react';
import JoinPage from './components/JoinPage';
import LoginPage from './components/LoginPage';

function App() {
    const [page, setPage] = useState(true);
    const [myInfo, setMyInfo] = useState({});
    const handlePage = () => {
        setPage((prev) => !prev);
    };
    const getMyInfo = async () => {
        const token = localStorage.getItem('token');
        const baseUrl = `https://api.mandarin.weniv.co.kr`;
        const reqUrl = baseUrl + '/user/myinfo';
        const res = await fetch(reqUrl, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();

        setMyInfo(json.user);
    };
    return (
        <div>
            <button type="button" onClick={getMyInfo}>
                내 정보 불러오기
            </button>
            <div>이름: {myInfo.username}</div>
            <div>팔로워: {myInfo.followerCount}</div>
            <div>팔로잉: {myInfo.followingCount}</div>
            {page ? <LoginPage handlePage={handlePage} /> : <JoinPage handlePage={handlePage} />}
        </div>
    );
}
export default App;
