import React, { Fragment, Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Enter User Details"/>
          <TextField 
          hintText="Enter Your First Name" 
          floatingLabelText="First Name" 
          onChange={handleChange}
          defaultValue={values.firstName}/>
          <br/>
          <TextField 
          hintText="Enter Your Last Name" 
          floatingLabelText="Last Name" 
          onChange={handleChange}
          defaultValue={values.lastName}/>
          <br/>
          <TextField 
          hintText="Enter Your Email" 
          floatingLabelText="Email" 
          onChange={handleChange}
          defaultValue={values.email}/>
          <RaisedButton 
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormUserDetails
