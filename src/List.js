import Alert from 'react-bootstrap/Alert';
import React, { useState} from "react";
import TextField from '@mui/material/TextField'
import Button from 'react-bootstrap/Button'; 
import './styles.scss'; 

function App() {
    const [list, setList] = useState(['Homework', 'Dinner', 'Fitness']);
    const [inputText, setInputText] = useState('');

    function addItem() {
        setList([...list, inputText]);
        setInputText('');
    }

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function removeItem(item) {
        const newList = list.filter((i) => i !== item);

        setList(newList);
    }

    const alerts = list.map((item) => {
        return <Alert className="alert" dismissible onClose={() => removeItem(item)} severity="info">{item}</Alert>
    })

    return (
        <div>
            <Alert severity="info">
            <TextField id="standard-basic" value={inputText} label="To Do" variant="standard" onChange={handleChange}/>
            <Button variant="primary" onClick={() => addItem()}>Add</Button>{''}
            </Alert>
            {alerts}
        </div>
    );
}

export default App;