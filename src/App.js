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

  randomContact = () => {
    let number = Math.round(Math.random()*contacts.length)
    
    let newContact = contacts[number]
    let contactsCopy = [...this.state.Contacts]
    contactsCopy.push(newContact)
    this.setState({
      Contacts: contactsCopy
    })
    console.log(this.state.Contacts)
  }

  render() {
    console.log('render')
   return(
    <div>
    <button onClick={this.randomContact}>Add Random Contact</button>
      <table>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    </thead>
    <tbody>
    {this.state.Contacts.map(contact => (
      <tr key={contact.id}>
        <td> <img src={contact.pictureUrl} alt='profilPic'/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
      </tr>
    ))}
    </tbody>
  </table>
    </div>
    
   )
    ;
  }
}

export default App;
