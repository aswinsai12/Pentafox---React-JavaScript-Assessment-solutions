// Current Data
const [todos, setTodos] = useState([
    {id:1,text:"Walk dog"}, //mapping
    {id:2,text:"Buy milk"}
]
);
// Current Render
{todos.map((todo) => (
<li key={todo.id}>
<input defaultValue={todo.text} />
<button onClick={() => removeTodo(todo.id)}>Delete</button>
</li>
))}
//done