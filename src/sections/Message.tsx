import axios from 'axios';
import React, { FormEvent } from 'react';
import Section from "../components/Section";

type PROP_TYPES = {}
type STATE_TYPES = {
  email:string
  message:string
}

class Message extends React.Component<PROP_TYPES, STATE_TYPES> {

  constructor(props: PROP_TYPES) {
    super(props)

    this.state = {
      email: "",
      message: "",
    }
  }

  sendMessage(e: FormEvent<HTMLFormElement>): boolean {
    e.preventDefault()

    const {email, message} = this.state;
    if (!email) {
      alert("Please, set your email")
    } else if (!message) {
      alert("Please, set your message")
    } else {
      var data = new FormData();
      data.append('email', email);
      data.append('message', message);
      
      axios.post("/api/send_mail.php", data)
        .then(res => {
          alert("Your message was sent. Soon I'll get in touch")
        })
        .catch(error => {
          alert("Something went wrong.\n\nPlease, try to manually send a email to contact@luan-dev.com")
        })
    }

    return false
  }

  render(): React.ReactNode {
    return (
      <Section id="message">
        <h1>Me mande uma mensagem!</h1>
        <form id="form-contato" onSubmit={(e) => {this.sendMessage(e)}}>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="email">Seu email</label>
              <input 
                type="text" 
                className="form-control" 
                id="email"
                name="email"
                placeholder="email@exemplo.com" 
                max="100" 
                onChange={(e) => {this.setState({email: e.target.value})}}
              />
            </div>
          </div>
  
          <div className="row">
            <div className="form-group col">
              <label htmlFor="message-text">Sua mensagem</label>
              <textarea 
                className="form-control" 
                id="menssage-text" 
                name="menssage-text" 
                placeholder="Preciso de um desenvolvedor fullstack Laravel..." 
                rows={6} 
                maxLength={5000} 
                onChange={(e) => {this.setState({message: e.target.value})}}
              />
            </div>
          </div>
  
          <div className="row">
            <div className="d-flex justify-content-center mt-3 col">
              <button type="submit" className="btn btn-submit">
                Enviar
                <i className="long-arrow">
                  <div className="horizontal-rectangle"/>
                  <div className="top-inclined-rectangle"/>
                  <div className="bottom-inclined-rectangle"/>
                </i>
              </button>
            </div>
          </div>
        </form>
      </Section>
    );
  }
};

export default Message;
