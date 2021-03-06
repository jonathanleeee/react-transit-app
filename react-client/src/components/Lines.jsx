import React from 'react';
import $ from 'jquery';
import data from '../sample_data.js';

// const OptionItems = ({line}) => ( 
//   <option>{line}</option>
// ); 


class Lines extends React.Component {

  // const lines = data.sampleLines.map((l,i) => (
  //   <OptionItems key={i} line={l}/>
  // ));
constructor(props) {
  super(props);
  this.state = {
    lines: [],
    stops: [],
    currentId: 1
  };
  this.url = "http://localhost:3000/api/lines";
  this.stopUrl = "http://localhost:3000/api/lines/";
  this.handleChange = this.handleChange.bind(this);
}



handleErrors(res) {
  if(!res.ok){
    throw Error(res.status);
  }
  return res.json();
}

// getServiceLinesFromJSON(data) {
//   let lineArray = data.map((num) => {
//     return num.name;
//   });
//   return lineArray;
// }
  

printError(error) {
  console.log(error);
}

getStopsFromJSON(data) {
  let stopArray = []
  for (var i = 0; i < data.length; i++) {
    stopArray.push(data[i].name);
  }
  return stopArray;
}

handleChange(event) {
  this.setState({currentId: event.target.value});
  this.resetStops();
}

resetStops() {
  fetch(this.stopUrl + this.state.currentId)
  .then(this.handleErrors)
  .then(this.getStopsFromJSON)
  .then((stopArray) => {
    this.setState({stops: stopArray})
  })
  .catch(this.printError)
}

componentDidMount() {
  fetch(this.url)
  .then(this.handleErrors)
  // .then(this.getServiceLinesFromJSON)
  .then((lineArray) => {
    this.setState({lines: lineArray})
  })
  .catch(this.printError)


  this.resetStops();
}




render() {
    return (
      <div className="lines-view">
        <div className="selections">
          Choose a line:
          <select value={this.state.currentId} onChange={this.handleChange}>
            {this.state.lines.map((l,i) => <option value={l.id} key={i}>{l.name}</option>)}
          </select>
        </div>
        <div className="lines-stop-list">
          <ul>
            {this.state.stops.map((l,i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Lines;


    // const todos = this.state.todos.map((t, i) => (
    //   <TodoItem key={i} text={t} /> // passing the props
    // ));

    //           <option>{data.sampleLines[0]}</option>
    //       <option>Hardcoded Line B</option>
    //       <option>Hardcoded Line C</option>
    //       <option>Hardcoded Line D</option>
    //       <option>Hardcoded Line E</option>