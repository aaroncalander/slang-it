import React from "react";

const Form = props => (
  <form onSubmit={props.getSlang}>
    <input type="text" name="definition" placeholder="Slang..." />
    <button>Slang It</button>
  </form>
);

export default Form;