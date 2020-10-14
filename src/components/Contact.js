import  React from 'react';
import './Contact.css';


const name = "Zack Morrison";
const avatar = "https://randomuser.me/api/portraits/men/51.jpg"
const status = true; 

function Contact() {
    return (
        <figure className="Contact">
            <img className="avatar" src={avatar}/>
            <div className="status">
                <h4 className="name">{name}</h4>
                <span className="status-online"></span>
                <p className="status-text">{status ? "Online" : "Offline"}</p>
                
            </div>
        </figure>
    )
}

export default Contact;