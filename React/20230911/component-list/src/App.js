import React, { useState } from 'react';
import Hello from './components/Hello';
import HelloProps from './components/HelloProps';
import Time from './components/Time';
import Resume from './components/Resume';
import ColorText from './components/ColorText';

function App() {
    let [like, setLike] = useState(0);
    const [likeToggle, setLikeToggle] = useState(true);

    function clickLike() {
        // like += 1;
        setLike(like + 1);
        setLikeToggle((prev) => !prev);
        console.log(like);
    }
    return (
        <div>
            <button onClick={clickLike}>
                like <span>{like}</span>
            </button>
            {likeToggle ? <p>like</p> : null}
            <Hello name="oh" />
            <Time />
            <HelloProps name="kyuyoung" age={30} someFunc={() => 'aswesome!!!'} someJSX={<img src="https://picsum.photos/id/237/200/300" />} someArr={[1, 2, 3, 4]} someObj={{ one: 1 }} />
            <Resume aboutObj={{ name: 'oh', hobby: '영화', food: '피자', color: 'yellow' }} />
            <ColorText color="aqua" />
            <ColorText color="gold" />
            <ColorText color="seagreen" />
        </div>
    );
}
export default App;
