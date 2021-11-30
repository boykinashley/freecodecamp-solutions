class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange = (event) => {
    this.setState({input: event.target.value})
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}

        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <p>{this.state.input}</p>
      </div>
    );
  }
};