import React from 'react';
import Button from 'react-bootstrap/Button'; 
import './styles.scss'; 
import Listen from './List.js'


function App() {
    return (
        <div>
            <h2>Welcome to To Do App</h2>
            <p>Morning, nice day for fishing ain't it?</p>
            {/* <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button> <Button variant="link">Link</Button> */}

            <Listen/>
        </div>
    );
}
    
export default App;