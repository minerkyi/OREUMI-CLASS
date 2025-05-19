import { useState } from "react";
import Home from "./Home";
import Login from "./Login";

const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: 1234,
};

function App() {
    const [isLogin, setIsLogin] = useState(false);

    return <div className="App">{isLogin ? <Home setIsLogin={setIsLogin} /> : <Login userInfo={user} setIsLogin={setIsLogin} />}</div>;
}

export default App;