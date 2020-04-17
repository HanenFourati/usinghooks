import React,{useState, useEffect} from 'react'
import UseInput from './UseInput.js'
import Nav from './Nav.js'
function WithHooks () {
            let  [count, setCount] = useState(0)
            let [fruit, setFruit] = useState('banana')
            let [todos, setTodos] = useState({ text: 'Learn Hooks' })
            const [value, setValue] = UseInput();
            useEffect (() => {
                document.title= "Clicked "+count+"times"
            })
             return (
             <div>
                 <Nav/>
                 <p>with</p>
                 <button onClick={() => setCount(count+1)}>{count}</button>
                 <button onClick={() => setFruit('orange')}>{fruit}</button>
                 <button onClick={() => setTodos({text: "ddd"})}>{todos.text}</button>
                 <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
             </div>
             )
}
export default WithHooks