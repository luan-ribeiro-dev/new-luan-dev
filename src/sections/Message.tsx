import React, { ChangeEvent, FormEvent } from 'react';
import Section from "../components/Section";

type PROP_TYPES = {}
type STATE_TYPES = {
  name:string
  email:string
  message:string
}

class Message extends React.Component<PROP_TYPES, STATE_TYPES> {

  constructor(props: PROP_TYPES) {
    super(props)

    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }

  handleChange(e: ChangeEvent) {
    console.log(e)
  }

  sendMessage(e: FormEvent<HTMLFormElement>): boolean {
    e.preventDefault()

    console.log(this.state)

    return false
  }

  render(): React.ReactNode {
    return (
      <Section id="message">
        <h1>Send me a message<span className="green-text">!</span></h1>
        <form id="form-contato" onSubmit={this.sendMessage}>
          <div className="row">
            <div className="form-group col-md-6 col-sm-12">
              <label htmlFor="name">Your name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name"
                name="name"
                placeholder="Enter your name"
                max="100" 
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <label htmlFor="email">Your email</label>
              <input 
                type="text" 
                className="form-control" 
                id="email"
                name="email"
                placeholder="Enter your email" 
                max="100" 
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
  
          <div className="form-group">
            <label htmlFor="message-text">Your message</label>
            <textarea 
              className="form-control" 
              id="menssage-text" 
              name="menssage-text" 
              placeholder="Ex. Laravel software needed" 
              rows={6} 
              maxLength={5000} 
              onChange={this.handleChange.bind(this)}
            />
          </div>
  
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-submit">
              Send
              <i className="long-arrow">
                <div className="horizontal-rectangle"/>
                <div className="top-inclined-rectangle"/>
                <div className="bottom-inclined-rectangle"/>
              </i>
            </button>
          </div>
        </form>
      </Section>
    );
  }
};

export default Message;
