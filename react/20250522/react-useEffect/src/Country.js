import React, { useState } from "react";
import styled from "styled-components";

const data = [
  {
    "title": "France",
    "population": "200",
    "id": "1",
    "loc": "europe"
  },
  {
    "title": "Italy",
    "population": "300",
    "id": "2",
    "loc": "europe"
  },
  {
    "title": "England",
    "population": "400",
    "id": "3",
    "loc": "europe"
  },
  {
    "title": "America",
    "population": "500",
    "id": "4",
    "loc": "north-america"
  },
  {
    "title": "Korea",
    "population": "600",
    "id": "5",
    "loc": "asia"
  }
];

const Ul = styled.ul`
    list-style: none;
  `;
const Li = styled.li`
  border: 1px solid rgb(245, 241, 241);
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 20px;
`;
const Button = styled.button`
  margin: 30px 0;
  float: right;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(245, 241, 241);
  `;

function Country() {

  const [country, setCountry] = useState(data);

  const handleClick = (e) => {
    if(e.target.id === 'europe') {
      setCountry(data.filter((item) => item.loc === 'europe'));
    } else {
      setCountry(data);
    }
  };
  
  const CountryList = (props) => {
    return (
      <Ul>
        {props.data.map((item) => {
          return (
            <CountryItem key={item.id} item={item} />
          );
        })}
      </Ul>
    );
  };

  const CountryItem = (props) => {
    return (
        <Li>
          <p><strong>{props.item.title}</strong></p>
          <p>{props.item.population}</p>
        </Li>
    );
  };

  return (
    <>
      <h2>나라 목록</h2>
      <CountryList data={country} />
      <Button id="europe" onClick={handleClick}>유럽 목록</Button>
      <Button id="all" onClick={handleClick}>전체 목록</Button>
    </>
  );
}

export default Country;