import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import styled from 'styled-components';
import reset from 'styled-reset';

const ViewBg = styled.div`
    padding: 0;
    margin: 0;

    background: #5b2386;
`;

function App() {
    return (
        <ViewBg>
            <Header />
            <Main />
            <Footer />
        </ViewBg>
    );
}
export default App;
