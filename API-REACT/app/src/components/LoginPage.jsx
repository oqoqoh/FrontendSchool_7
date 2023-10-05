import React, { useState } from 'react';

export default function LoginPage({ handlePage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (email, password) => {
        try {
            const baseUrl = `https://api.mandarin.weniv.co.kr`;
            const reqPath = '/user/login';
            const loginData = {
                user: { email: email, password: password },
            };
            const reqUrl = baseUrl + reqPath;

            const res = await fetch(reqUrl, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(loginData),
            });
            const json = await res.json();
            console.log(json);
            const token = json.user.token;
            console.log(token);
            localStorage.setItem('token', token);
        } catch (error) {
            alert('로그인에 실패했습니다.');
        }
    };

    const inputEmail = (e) => {
        setEmail(e.target.value);
    };
    const inputPassword = (e) => {
        setPassword(e.target.value);
    };
    const submitLogin = (e) => {
        e.preventDefault();
        login(email, password);
    };
    return (
        <div>
            <h1>로그인</h1>
            <section>
                <h2> email / pwd </h2>
                <form onSubmit={submitLogin}>
                    <input type="text" placeholder="id" value={email} onChange={inputEmail} />
                    <input type="text" placeholder="password" value={password} onChange={inputPassword} />
                    <button>login</button>
                    <button type="button" onClick={handlePage}>
                        sign up
                    </button>
                </form>
            </section>
        </div>
    );
}
