import React from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Slang from "./components/Slang";

// const API_KEY = "A7zQwTrAXZmshOpdBzj7jw5pApbhp1mcr7pjsnguRbd5yLTGcb";

class App extends React.Component {
  state = {
    definition: undefined,
    example: undefined,
    error: undefined
  }

  getSlang = async (e) => {
    e.preventDefault();
    const definition = e.target.elements.definition.value;
    const api_call = await fetch(`http://api.urbandictionary.com/v0/define?term=${definition}`);
    const data = await api_call.json();

  if (definition) {
    console.log(definition);
    this.setState({
      definition: data.list[0].definition,
      example: data.list[0].example,
      permalink: data.list[0].permalink,
      error: ""
    });
  } else {
    this.setState({
      definition: undefined,
      example: undefined,
      permalink: undefined,
      error: "Please enter a value."
    });
  }

}
render() {
  return (
    <div>
      <div className="col-xs-5 title-container">
        <Titles />
      </div>
      <div className="col-xs-7 form-container">
        <Form getSlang={this.getSlang}/>
        <Slang
          definition={this.state.definition}
          example={this.state.example}
          permalink={this.state.permalink}
          error={this.state.error}
        />
      </div>
    </div>
    )
  }
};

export default App;
