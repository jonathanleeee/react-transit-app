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
    lines: []
  };
  this.url = "http://localhost:3000/api/lines";
}



handleErrors(res) {
  if(!res.ok){
    throw Error(res.status);
  }
  return res.json();
}

getServiceLinesFromJSON(data) {
  let lineArray = []
  for (var i = 0; i < data.length; i++) {
    lineArray.push(data[i].name);
  }
  return lineArray;
}
  

printError(error) {
  console.log(error);
}

componentDidMount() {
  fetch(this.url)
  .then(this.handleErrors)
  .then(this.getServiceLinesFromJSON)
  .then((lineArray) => {
    this.setState({lines: lineArray})
  })
  .catch(this.printError)
}




render() {
    return (
      <div className="lines-view">
        <div className="selections">
          Choose a line:
          <select>
            {this.state.lines.map((l,i) => <option key={i}>{l}</option>)}
          </select>
        </div>
        <div className="lines-stop-list">
          <ul>
            <li>Hardcoded Stop 1</li>
            <li>Hardcoded Stop 2</li>
            <li>Hardcoded Stop 3</li>
            <li>Hardcoded Stop 4</li>
            <li>Hardcoded Stop 5</li>
            <li>Hardcoded Stop 6</li>
            <li>Hardcoded Stop 7</li>
            <li>Hardcoded Stop 8</li>
            <li>Hardcoded Stop 9</li>
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