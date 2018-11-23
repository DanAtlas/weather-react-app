import React, { Component } from 'react';

const Form = props => (
  <form className="form-container" onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="City..."/>
    <button className="btn">Get Weather</button>
  </form>
);

export default Form;