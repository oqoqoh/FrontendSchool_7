import useMouseLocation from './Hooks/useMouseLocation';
import useScroll from './Hooks/useScroll';

function App() {
    const mouseLocation = useMouseLocation();
    const scrollFlag = useScroll();

    return (
        <div style={{ height: '300vh', backgroundColor: scrollFlag ? 'gray' : 'white' }}>
            <div style={{ height: 100, width: 100, backgroundColor: mouseLocation.x > 100 ? 'royalblue' : 'hotpink' }}></div>
        </div>
    );
}
export default App;
