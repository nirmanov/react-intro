import React from 'react';

const Greetings = ({ firstName, lastName }) => (
<div>Hey you! {firstName} {lastName}!</div>
);

// const Greetings = (props) => <div>Hey you! {props.firstName} {props.lastName}!</div>;

// const Greetings = ({ firstName, lastName }) => <div>Hey you! {firstName} {lastName}!</div>

export default Greetings;