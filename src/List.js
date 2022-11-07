import Alert from 'react-bootstrap/Alert';
import React, { useState} from "react";

function App() {
    const [list, setList] = useState([1,2])

    const alerts = list.map((item) => {
        return <Alert dismissible onClose={true} severity="info">{item}</Alert>
    })

    return (
        <div>
            {alerts}
        </div>
    );
}

export default App;