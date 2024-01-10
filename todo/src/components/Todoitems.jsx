import react from 'react';

const Todoitems = (props)=>{
    return (
        <li className='todo-item'>
        <span>
        {props.complited ? <></> : <input type='checkbox'/>}
        <span className='todo-tem-text'>{props.text}</span>
        </span>
        <p>...</p>
        </li>
    );
}

export default Todoitems;