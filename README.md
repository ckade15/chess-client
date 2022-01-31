# Important ReactJS hooks:

## State hook: 
```const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Click me</button>
const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
```

## Effect hook (serves as componentDidMount or componentDidUpdate):
```useEffect(() => {
   document.title = `You clicked ${count} times`;
})
```

## useReducer hook:
   Lets you manage local state of complex components with reducer<br>
```const [todos, dispatch] = useReducer(todosReducer);```

## Hook rules
1. Only call hooks from the top level (don't call hooks from loops)