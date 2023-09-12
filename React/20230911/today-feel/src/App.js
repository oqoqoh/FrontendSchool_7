import { useState } from 'react';
import FeelsList from './components/FeelsList';
import TodayFeels from './components/TodayFeels';

function App() {
    const [todayFeeling, setTodayFeeling] = useState();
    const getFeels = (val) => {
        setTodayFeeling(val);
    };
    return (
        <div>
            <h1>오늘의 기분을 선택해주세요</h1>
            <FeelsList getFeels={getFeels} />
            <TodayFeels todayFeeling={todayFeeling} />
        </div>
    );
}
export default App;
