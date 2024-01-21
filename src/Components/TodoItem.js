import './Css/TodoItem.css'
import untick from './Assests/untick..png';
import tick from './Assests/tick..png';
const TodoItem = ({no,display,text,setTodos}) => {

  const toogle = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i = 0;i < data.length;i++){
      if(data[i].no===no) {
        if(data[i].display==="") {
          data[i].display = "line-through";
        }
        else
        {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  }
  return (
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toogle(no)}}>
          {display===""?<img src={untick} alt='' width={30} height={30}/>:<img src={tick} width={30} height={30}/>}
           <div className='todoitems-text'>{text}</div>
        </div>
    </div>
  )
}

export default TodoItem
