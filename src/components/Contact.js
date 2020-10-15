import  React from 'react';
import './Contact.css';


function Contact(props) {
    return (
      <figure className="Contact">
        <img className="avatar" src={props.avatar} alt={props.character} />
        <div className="status">
          <h4 className="name">{props.name}</h4>
          <span
            className={props.online ? "status-online" : "status-offline"}
          ></span>
          <p className="status-text">{props.online ? "Online" : "Offline"}</p>
        </div>
      </figure>
    );
  }
  

export default Contact;