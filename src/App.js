import React, {Component} from 'react'
import { Grid, TextField, Typography, Stack, Button } from '@mui/material';

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
        errorMessage: "Invalid Country Code",
        countryList:[],
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
      <Grid container direction="column" alignItems="center" justify="center" style= {{marginTop: "150px"}}>

        <Typography variant="h4" color="primary" style = {{ marginBottom: "1em"} }>
          Find a Path
        </Typography>

        <TextField
          variant = "outlined"
          label="Type Country Code"
          value = {this.state.input}
          onChange={e => this.updateInput(e.target.value)}
          style = {{ marginBottom: "2em"} }
        />

        <Stack spacing={2} width="200px" style = {{ marginBottom: "1em"} }>
          <Button variant="contained"
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

        <Typography variant="h7" color="red" style = {{ marginBottom: "1em"} }>
          <b>{this.state.errorMessage}</b>
        </Typography>

        <Typography variant="h6" >
          { this.state.countryList.map((country) => 
             <li key={`${country}`}>{country}</li>)
          }
        </Typography>
        
      </Grid>
    );
  }
}
export default App;
