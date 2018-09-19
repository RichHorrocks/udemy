import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Rich', age: 29 },
            { name: 'Dave', age: 30 },
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Catface', age: 99 },
                { name: 'Dave', age: 30 },
            ]
        });
    }

    nameChangedHandler = (e) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: e.target.value, age: 99 },
                { name: 'Dave', age: 30 },
            ]
        });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            boder: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React app!</h1>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler("MonkeyMan")}>
                    Switch Name
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Catface')}
                    changed={this.nameChangedHandler}>
                    My Hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
