import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatTwo/>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default App;