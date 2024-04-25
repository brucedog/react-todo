import React from 'react';

interface Props {
    addTodo: AddTodo;
}

export const AddTodo: React.FC<Props> = ({addTodo}) => {
    const [text, setText] = React.useState('');

    return(
    <form>
        <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}/>
        <button
            className='btn btn-primary btn-sm m-2'
            type='submit'
        onClick={(e) =>{
            e.preventDefault();
            addTodo(text);
            setText('');
        }}>Add Todo</button>
    </form>
    );
};