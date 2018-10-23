import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
  }

  componentWillReceiveProps(props) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', props);
  }

  // shouldComponentUpdate(props, state) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', props, state);
  //   return props.persons !== this.props.persons ||
  //     props.changed !== this.props.changed ||
  //     props.clicked !== this.props.clicked;
  //   //return true;
  // }

  componentWillUpdate(props, state) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', props, state);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] Inside render');
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(e) => this.props.changed(e, person.id)} />;
    });
  }
}

export default Persons;
