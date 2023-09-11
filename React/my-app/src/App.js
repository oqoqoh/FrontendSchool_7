import './App.css';

function App() {
    const name = 'oh';
    let now = {};

    let date = new Date();
    now.year = date.getFullYear();
    now.month = date.getMonth() + 1;
    now.date = date.getDate();
    now.hours = date.getHours();
    now.mins = date.getMinutes();
    now.seconds = date.getSeconds();
    console.log(now);
    // setInterval(() => {

    // }, 1000);

    let list = [
        { no: 1, area: '대전', visited: false },
        { no: 2, area: '부산', visited: true },
        { no: 3, area: '목포', visited: false },
        { no: 4, area: '제주도', visited: false },
    ];

    return (
        <div>
            <h1>hello world!</h1>

            <div>
                <p>{name}</p>
                <textarea readOnly maxLength={3} style={{ backgroundColor: 'aqua' }} />
            </div>

            <div>
                <p>{now.year}</p>
                <p>
                    {now.month} / {now.date}
                </p>
                <p>
                    {now.hours} : {now.mins} : {now.seconds}
                </p>
            </div>

            <ul className="ul-city">
                {list.map((city) => {
                    return city.visited ? (
                        <li key={city.no} className="on">
                            {city.area}
                        </li>
                    ) : (
                        <li key={city.no}>{city.area}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
