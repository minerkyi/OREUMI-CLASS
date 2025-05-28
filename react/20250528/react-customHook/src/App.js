import { useMouseLocation } from './useMouseLocation';
import { useScroll } from './useScroll';
import { useScrollObserver } from './useScrollObserver';

function App() {

  const mouseLocation = useMouseLocation();

  // const isBottom = useScroll();
  const isBottom = useScrollObserver();

  console.log(isBottom);

  return (
    <div style={{width: '200px', height: '1200px', backgroundColor: mouseLocation.x > 200 ? 'teal' : 'hotpink'}}>
      {mouseLocation.x} / {mouseLocation.y}
    </div>
  );
}
export default App;
