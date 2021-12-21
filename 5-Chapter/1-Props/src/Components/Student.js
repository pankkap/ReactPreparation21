import React from 'react';

function Student(props) {
    return (
        <div>
            <h1>This is Functional Component</h1>
            <h2>Props Recieved from Sender: {props.name}</h2>
        </div>
    );
}

export default Student;