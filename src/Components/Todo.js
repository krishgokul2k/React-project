import './Css/Todo.css'
import { useState,useRef, useEffect} from 'react';
import TodoItem from './TodoItem';

let count = 0;
const Todo = () => { 

    const [todos,setTodos] = useState([]);
    const [itemCount,setCount] = useState(0);
    // const [newTask,setTask] = useState('');
    const inputRef = useRef(null);

    // const deleteTodo = (no) =>{
    //     let data = JSON.parse(localStorage.getItem("todos"));
    //     data = data.filter((todo)=>todo.no!==no);
    //     setTodos(data);
    //  }

    const add = () =>{
        // if(newTask.trim() !== '')
        // {
        //     setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
        //     inputRef.current.value = "";
        //     setTask('');
        //     locaItem("todos_count",count)
        // }
        // else{
        //     alert("you must write something!");
        // }
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
        inputRef.current.value = "";
        localStorage.setItem("todos_count",count)
        setCount(itemCount+1);
    }
    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count = localStorage.getItem("todos_count");
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            console.log(todos);
            localStorage.setItem("todos",JSON.stringify(todos));
        },100);
    },[todos])
    
    // 
     const clearAllTask = () => {
        setTodos([]);
     };
  return (

     <>
         <div className='container'>
             <div className='todo-app'>
                 <h1>Daily To Do List</h1>
                 <input ref={inputRef} type="text" placeholder="Add new List Item" className='todo-input'/>
                 <button onClick={add} className='todo-btn'>Add</button>
                 <div className='todo-list'>
                    {todos.map((item,index)=>{
                        return <TodoItem key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
                    })}  
                </div> 
                 <hr style={{display:todos.length > 0?'block':'none'}}/>
                 <span style={{display:todos.length > 0?'block':'none'}} className="item">{itemCount} item  selected</span>
                 <span onClick={clearAllTask} style={{display:todos.length > 0?'block':'none'}} className="clear">Clear All</span>  
             </div>
         </div>

     </>
     
     // <div className='container'>
     //   <div className='todo'>
     //      <div className='todo-header'>To-Do List</div>
     //      <div className="todo-add">
     //           <input type="text" placeholder='Add Your Task'className="todo-input"/>
     //           <div className="todo-btn">Add</div>
     //      </div>
     //      <div className="todo=list">

     //      </div>
     //   </div>
     // </div>  
  )
}

export default Todo
