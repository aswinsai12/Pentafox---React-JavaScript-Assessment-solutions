import { useMemo } from "react";

function App() {
const [count, setCount] = useState(0);
//adding cache to store rendering 
const items = useMemo(()=>[{id: 1, name: "A"}],[]); // This array is recreated every render

return (
<div>
<button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
<BigList items={items} />
</div>
);
}
//done