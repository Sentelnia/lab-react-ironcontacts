import React from 'react';
import './App.css';
import contacts from './contacts.json';

/// contacts
let bestContact = contacts.splice(0, 5);

//pour ne pas retirer le meme contact cf fonction randomContact
let contactFilter = [...contacts]

///// iteration1//////
class App extends React.Component {
  state = {
    Contacts: bestContact,
  };

////////// iteration 2////////////
  randomContact = () => {
    let number = Math.round(Math.random() * contactFilter.length)
    let newContact = contactFilter[number];

    //ne pas retirer le meme contact
    contactFilter.splice(number,1)
    
    let contactsCopy = [...this.state.Contacts];
    contactsCopy.push(newContact);
    this.setState({
      Contacts: contactsCopy,
    });
  };

  ////////// iteration 3////////////
  byName = () => {
    let contactsCopy = [...this.state.Contacts];
    let contactSortName = contactsCopy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      Contacts: contactSortName,
    });
  };

  byPopularity = () => {
    let contactsCopy = [...this.state.Contacts];
    let contactSortPopularity = contactsCopy.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      Contacts: contactSortPopularity,
    });
  };


  //////// iteration 4///////////
  delete = id => {
    const contactsCopy = this.state.Contacts;
    const contactIndex = contactsCopy.findIndex(item => item.id === id);
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      Contacts: contactsCopy,
    })
  }
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.byName}>Name</button>
        <button onClick={this.byPopularity}>Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  {' '}
                  <img src={contact.pictureUrl} alt="profilPic" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={(e)=>this.delete(contact.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
