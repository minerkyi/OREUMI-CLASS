import BlogCard from "./Components/BlogCard";
import NormalCard from "./Components/NormalCard";
import ProductCard from "./Components/ProductCard";
import UserCard from "./Components/UserCard";

export default function App4() {
  return (
    <div style={{backgroundColor: '#eee', padding: '20px'}}>
      <div style={{display: 'flex', gap: '20px', marginBottom: '5px'}}>
        <NormalCard type="product" />
        <NormalCard type="user" />
        <NormalCard type="blog" />
      </div>
      <div style={{display: 'flex', gap: '20px', marginBottom: '5px'}}>
        <ProductCard />
        <UserCard />
        <BlogCard />
      </div>
    </div>
  );
}