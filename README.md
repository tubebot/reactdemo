# Simple React Progress Component

A simple step progress component demonstration using react.js

## Live Demo

to view the live demo; click [here](http://react-sandbox-callancarr.c9users.io)

## Features

1. Dynamic steps
1. Minimum of 2 nodes, maximum of 5.
1. Test output in console.

## How to use

You can create an instance of the component via

```javascript
ReactDOM.render(React.createElement(StepProgress, {
  nodes: ["design", "build", "launch"],
  default: 0
}), document.getElementById("hatch"))
```

You need to supply the component with two properties; an array of nodes to use as progress steps and a default starting node. The list of nodes will appear in the order they are provided to the component.
Interaction

To interact with the component click on one of the nodes to progress a step forward or a step backwards. You will only be able to progress sequentially (you cannot skip nodes).

## Installation

`npm install stepprogress`

includes .jsx files and .css files.