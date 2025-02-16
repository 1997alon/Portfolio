import { useEffect } from 'react';
import { people } from './peopleData.js';

function Person({ person }) {
  return (
    <li key={person.id}>
      <h1>Name: {person.name}</h1>
      <h2>Age: {person.age}</h2>
      <h2>Profession: {person.profession}</h2>
    </li>
  );
}

export default function People({ condition, onUpdatePeople }) {
  const con = people.filter(person => condition(person));

  // Only call onUpdatePeople when the filtered list changes
  useEffect(() => {
    onUpdatePeople(con);
  }, [con, onUpdatePeople]);  // Dependency array: will run when `con` changes

  return (
    <ul>
      {con.map(person => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  );
}
