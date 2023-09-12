import React, { useState } from 'react';
import Login from './components/Login';
import LanderPage from './components/LanderPage';
import Modal from './components/Modal';

export default function AppLogin() {
    const [login, setLogin] = useState(false);
    const [modal, setModal] = useState(true);
    const handleLogin = (flag) => {
        setLogin(flag);
    };
    return (
        <>
            login ? <LanderPage /> : <Login handleLogin={handleLogin} />
            {modal && <Modal setModal={setModal} />}
        </>
    );
}
