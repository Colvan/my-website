import React from "react";
import "./contactpage.styles.css";
import Form from "react-bootstrap/form";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }
  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      disabled: true,
    });
    const { name, email, message } = this.state;
  };

  render() {
    return (
      <div>
        <header className="talkhead">Let's Talk</header>
        <p className="personalDetails">
          Email: yoniborisenco@gmail.com
          <br />
          Phone: +972-549-172-709
        </p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="full-name" className="full-name">
              Full Name
            </Form.Label>
            <Form.Control
              className="nameinput"
              id="full-name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email" className="email">
              Email
            </Form.Label>
            <Form.Control
              className="emailinput"
              id="email"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message" className="message">
              Message
            </Form.Label>
            <Form.Control
              className="messageinput"
              id="message"
              as="textarea"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </Form.Group>
          <button
            className="send"
            type="submit"
            variant="primary"
            disabled={this.state.disabled}
          >
            Send
          </button>
          {this.state.emailSent === true && (
            <p className="emailSSent">Email Sent</p>
          )}
          {this.state.emailSent === false && (
            <p className="emailNSent">Email Not Sent</p>
          )}
        </Form>
      </div>
    );
  }
}

export default ContactPage;
