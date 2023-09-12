import React, { useState } from 'react';

function PetInput({ addList }) {
    const [name, setName] = useState();
    const [spec, setSpec] = useState();
    const [age, setAge] = useState();

    const submitHandler = () => {
        addList(name, spec, age);
        setName('');
        setSpec('');
        setAge('');
    };
    return (
        <>
            <input type="text" placeholder="이름" onChange={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder="종" onChange={(e) => setSpec(e.target.value)}></input>
            <input type="text" placeholder="나이" onChange={(e) => setAge(e.target.value)}></input>
            <button onClick={submitHandler}>ADD</button>
        </>
    );
}
function Pet({ pet }) {
    return (
        <li>
            {pet.name} / {pet.species} / {pet.age}
        </li>
    );
}
function PetList({ pets }) {
    return (
        <ul>
            {pets.map((pet) => (
                <Pet key={pet.id} pet={pet} />
            ))}
        </ul>
    );
}

export default function App4() {
    const data = [
        { name: '벨라', species: '고양이', age: '5', id: 111 },
        { name: '루시', species: '강아지', age: '3', id: 112 },
        { name: '데이지', species: '토끼', age: '2', id: 113 },
        { name: '몰리', species: '고양이', age: '1', id: 114 },
        { name: '매기', species: '강아지', age: '6', id: 115 },
    ];

    const [pets, setPets] = useState(data);
    const [id, setId] = useState(120);

    const addList = (name, spec, age) => {
        setId((prev) => prev + 1);

        let newPet = { name: name, species: spec, age: age, id: id };
        setPets((prev) => [...prev, newPet]);
    };
    return (
        <div>
            <h1>애완동물 정보 리스트</h1>
            <PetInput addList={addList} />
            <PetList pets={pets} />
        </div>
    );
}
