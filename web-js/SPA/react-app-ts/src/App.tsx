import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function normalizeLength(value: string, length: number = 20) {
    return value.substring(0, length);
}

function uuidv4() {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
        // eslint-disable-next-line no-mixed-operators
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function ListItem(props: { title: string, done: boolean, toggle: any }) {
    return <li>
        <input type="checkbox" checked={props.done} onChange={props.toggle} />
        {normalizeLength(props.title)}
    </li>
}

function AddTodo(props: { add: any }) {
    const [text, setText] = useState("");

    const onTextChange = (e: any) => {
        setText(e.target.value)
    }

    return <div>
        <input type="text" onChange={onTextChange}></input>
        <button onClick={() => props.add(text)} >Add todo</button>
    </div>
}


function ToDoList() {
    const [todos, setTodos] = useState([
        { id: "a682e644b1984f338d8fe1116df9e3a3", done: true, title: "Labore amet in incididunt ipsum nostrud irure anim ea ex adipisicing ipsum non laborum esse." },
        { id: "27deaaa97c27453fa51b3d7ef16ac093", done: true, title: "Esse ullamco pariatur adipisicing mollit est qui id ut." },
        { id: "00c5acdddbe744a79be51c12966c87f9", done: false, title: "Qui " },
        { id: "c8ace44089234aa8934c5f88d153d36c", done: true, title: "Ex Lorem excepteur est anim exercitation." },
        { id: "ea59a7b734164b98ade35c6396a209bf", done: false, title: "Laborum ut labore est anim sint commodo pariatur labore nisi non non exercitation Lorem commodo eiusmod." },
        { id: "44bad25145914e67a1c486bb21a768f4", done: true, title: "Laborum cillum nisi nostrud anim aliquip veniam cillum." },
        { id: "5327051bf56c413d92588996e897b02d", done: false, title: "Tempor minim esse cupidatat officia tempor voluptate cupidatat reprehenderit consectetur reprehenderit voluptate occaecat." },
    ]);

    const toggleTodo = (id: string) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, done: !todo.done }
                    : { ...todo }
            )
        );
    };

    const addTodo = (text: string) => {
        setTodos([...todos, { id: uuidv4(), title: text, done: false }]);
    }
    
    return (
        <div>
            <AddTodo add={(v: string) => addTodo(v)} />
            <ul>
                {todos.map((item, index) => {
                    return <ListItem key={index} title={item.title} done={item.done} toggle={() => toggleTodo(item.id)} />
                })}
            </ul>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <ToDoList />
        </div>
    );
}

export default App;