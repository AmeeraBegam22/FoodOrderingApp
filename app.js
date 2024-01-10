import React from "react"
import  ReactDOM  from "react-dom/client";

const element = React.createElement('h1', {}, 'Hello world from React');
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
