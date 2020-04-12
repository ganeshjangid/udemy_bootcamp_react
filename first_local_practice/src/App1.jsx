import React from "react";
import Card from "./cards";
import contacts from "./contacts";

function createCard(contacts){
  return  <Card 
  key={contacts.id}
  name={contacts.name}
  img={contacts.img}
  number={contacts.number}
  email={contacts.email}
  />
}

  function App() {
    return (
      <div>
        <h1 className="heading">My Contacts</h1>
        {contacts.map(createCard)}
        {/* <Card
          name={contacts[0].name}
          img={contacts[0].img}
          number={contacts[0].number}
          email={contacts[0].email}
        />
        <Card
          name={contacts[1].name}
          img={contacts[1].img}
          number={contacts[1].number}
          email={contacts[1].email}
        />
        <Card
          name={contacts[2].name}
          img={contacts[2].img}
          number={contacts[2].number}
          email={contacts[2].email}
        /> */}
      </div>
    );
  }

  export default App;