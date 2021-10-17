import React, {Component} from 'react'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      input:"",
      countryList:[],
      errorMessage:""
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
      this.setState({
        errorMessage: "Invalid Country Code"
      })    
    }
  }

  resetPath(){
    this.setState({
      input:"",
      countryList: [],
      errorMessage: ""
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Find a Path</h1>
          <br/>
          <TextField
            variant="filled"
            type="text"
            placeholder="Type Country Code"
            value={this.state.input}
            onChange={e => this.updateInput(e.target.value)}
            />

          <Stack spacing={2} width="300px">
            <Button variant="outlined"
              onClick={() => this.findPath()}
            >
            Find Path
            </Button>

            <Button variant="contained"
              onClick={() => this.resetPath()}
            >
            Reset
            </Button>
          </Stack>

            <br/>

          {this.state.countryList.map((country) => 
            <li key={`${country}`}>{country}</li>)}

          <h2>{this.state.errorMessage}</h2>

          </div>
      </div>
    );
  }
}
//make UI prettier if time
export default App;
