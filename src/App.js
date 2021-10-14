import React, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      input:"",
      countryList:[]
    }
    this.map = new Map();
    this.map.set('USA', ['USA'])
    this.map.set('MEX', ['USA', 'MEX'])
    this.map.set('CAN', ['USA', 'CAN'])
    this.map.set('GTM', ['USA', 'MEX', 'GTM'])
    this.map.set('BLZ', ['USA', 'MEX', 'BLZ'])
    this.map.set('SLV', ['USA', 'MEX', 'GTM', 'SLV'])
    this.map.set('HND', ['USA', 'MEX', 'GTM', 'HND'])
    this.map.set('NIC', ['USA', 'MEX', 'GTM', 'HND', 'NIC'])
    this.map.set('CRI', ['USA', 'MEX', 'GTM', 'HND', 'NIC', 'CRI'])
    this.map.set('PAN', ['USA', 'MEX', 'GTM', 'HND', 'NIC', 'CRI', 'PAN'])
  }

  updateInput(value){
    this.setState({
      input: value
    })
  }

  findPath(){
    var path = this.map.get(this.state.input)
    if(path){
      this.setState({
        countryList: path
      })
    }
    else{
      console.log("error") //display error message if time
    }
  }

  resetPath(){
    this.setState({
      input:"",
      countryList: []
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          Add an Item...
          <br/>
          <input
            type="text"
            placeholder="Type Country Code"
            value={this.state.input}
            onChange={e => this.updateInput(e.target.value)}
            />
            <button
              onClick={() => this.findPath()}
            >
            Find Path
            </button>

            <button
              onClick={() => this.resetPath()}
            >
            Reset
            </button>

            <br/>

          {this.state.countryList.map((country) => 
            <li key={`${country}`}>{country}</li>)}

          </div>
      </div>
    );
  }
}
//make UI prettier if time
export default App;
