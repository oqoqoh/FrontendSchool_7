import React, { useState } from 'react';

function UserItem({ user }) {
    const [toggle, setToggle] = useState(false);

    return (
        // 이벤트핸들러는 함수 자체가 전달 되어야함
        // 함수 실행결과가 들어가면 안됨, 함수 전체가 들어가야함
        // 그래서 익명함수로 감쌈
        <li onClick={() => setToggle(!toggle)}>
            {user.name}
            {toggle ? (
                <div>
                    <div>{user.email}</div>
                    <div>{user.job}</div>
                </div>
            ) : (
                ''
            )}
        </li>
    );
}
function UserList({ users }) {
    return (
        <ul>
            {users.map((item) => {
                return <UserItem key={item.id} user={item} />;
            })}
        </ul>
    );
}

export default function App3_1() {
    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' },
    ];
    return (
        <div>
            <h1>User List</h1>
            <UserList users={users} />
        </div>
    );
}
