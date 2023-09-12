import React, { useState } from 'react';

export default function App3() {
    const data = [
        { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' },
    ];
    const [userList, setUserList] = useState(data);
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {userList.map((user) => {
                    return (
                        <li key={user.id} onClick={() => setToggle((prev) => !prev)}>
                            {user.name}
                            {toggle ? (
                                <>
                                    <p>{user.email}</p>
                                    <p>{user.job}</p>
                                </>
                            ) : null}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
