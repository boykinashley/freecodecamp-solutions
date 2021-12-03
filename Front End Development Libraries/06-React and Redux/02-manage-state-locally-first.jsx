class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      messages: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange = (event) => {
    this.setState({input: event.target.value})
  }

  submitMessage = () => {
    this.setState(state => ({
      messages: [...state.messages, state.input],
      input: ""
    }))
  }

  render() {

    const messages = this.state.messages.map((message, key) => {
      return <li key={key}>{message}</li>
    })
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>Send</button>
        <ul>
          {messages}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};