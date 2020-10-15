import React from 'react';
import Contact from'./components/Contact.js';
import ContactList from './components/ContactList';


const contacts = [
  {name: 'Peter alter', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', online: false, key: 1},
  {name: 'Bessie Long', avatar: 'https://randomuser.me/api/portraits/women/22.jpg', online: true, key: 2},
  {name: 'Mae Alvarez', avatar: 'https://randomuser.me/api/portraits/women/64.jpg', online: false, key: 3},
  {name: 'Ching John', avatar: 'https://randomuser.me/api/portraits/men/90.jpg', online: false, key: 4},
  {name: 'Nicky Larson', avatar: 'https://randomuser.me/api/portraits/women/41.jpg', online: true, key: 5}
]


function App() {
  return (
    <div className="App">
      <ContactList contacts={contacts}/>
    </div>
  );
}



export default App;
