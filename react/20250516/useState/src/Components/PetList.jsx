import { useState } from "react";

export default function PetList() {

  const [pets, setPets] = useState(
    [
      { name: "벨라", species: "고양이", age: "5", id: 111 },
      { name: "루시", species: "강아지", age: "3", id: 112 },
      { name: "데이지", species: "토끼", age: "2", id: 113 },
      { name: "몰리", species: "고양이", age: "1", id: 114 },
      { name: "매기", species: "강아지", age: "6", id: 115 }
    ]
  );

  const [pet, setPet] = useState({name:'', age:'', species:'', id:116});

  const handleAdd = (e) => {
    e.preventDefault();
    setPets([...pets, pet]);

    setPet({name:'', age:'', species:'', id:pet.id + 1});
  }

  function handleInput() {
    setPet({
      name: document.getElementById('name').value,
      species: document.getElementById('species').value,
      age: document.getElementById('age').value,
      id: pet.id
    });
  }

  function Pets() {
    return (
      <ul>
        {pets.map((pet) => {
          return (
            <li key={pet.id}>{pet.name}는 {pet.species}입니다 그리고 {pet.age}살 입니다.</li>
          )})}
      </ul>
    );
  }

  return (
    <div>
      <fieldset>
          <legend>새로운 애완동물을 추가하세요!</legend>
          <form action="#">
            <label htmlFor="name">
              <input name="name" id="name" value={pet.name} placeholder="이름" onChange={handleInput}></input>
            </label>
            <label htmlFor="species">
              <input name="species" id="species" value={pet.species} placeholder="species" onChange={handleInput}></input>
            </label>
            <label htmlFor="age">
              <input name="age" id="age" value={pet.age} placeholder="나이" onChange={handleInput}></input>
            </label>
            <button onClick={handleAdd}>추가하기</button>
          </form>
        </fieldset>
        <Pets />
    </div>
  );
}