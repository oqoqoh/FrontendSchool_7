import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/signup" element={<Signup></Signup>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
