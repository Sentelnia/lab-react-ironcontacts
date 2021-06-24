import React from 'react';
import './App.css';
import contacts from './contacts.json';
/// contacts
let bestContact = contacts.splice(0, 5);

///// iteration1//////




class App extends React.Component {

  state = {
    Contacts:bestContact 
  }
  render() {
   return(
    <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    </thead>
    <tbody>
    {bestContact.map(contact => (
      <tr key={contact.id}>
        <td> <img src={contact.pictureUrl}/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
      </tr>
    ))}
    </tbody>
  </table>
   )
    ;
  }
}

export default App;
