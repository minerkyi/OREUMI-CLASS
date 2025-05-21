import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App2() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products/1">상품정보</Link></li>
          <li><Link to="/products/1/notice">상품공지사항</Link></li>
          <li><Link to="/cart">장바구니</Link></li>
          <li><Link to="/users">사용자</Link></li>
          <li><Link to="/users/coupon">사용자쿠폰</Link></li>
          <li><Link to="/users/question">사용자문의</Link></li>
          <li><Link to="/users/notice">사용자공지사항</Link></li>
        </ul>
      </nav>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:id" element={<Products />} />
        <Route path="/products/:id/notice" element={<ProductsNotice />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/users" element={<Users />}>
          <Route index element={<Coupon />} />
          <Route path="question" element={<Question />} />
          <Route path="notice" element={<UsersNotice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return <h1>Home page</h1>;
}

function Products(){
  return <h1>Products Detail page</h1>
}

function ProductsNotice() {
  return <h1>Products Notice page</h1>;
}

function Cart(){
  return <h1>Cart page</h1>;
}

function Users(){
  return (
    <>
      <h1>Users page</h1>
      <Outlet />
    </>
  );
}

function Coupon(){
  return <h2>Coupon page</h2>;
}

function Question(){
  return <h2>Question page</h2>;
}

function UsersNotice(){
  return <h2>Notice page</h2>;
}

export default App2;