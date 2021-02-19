import React, { Fragment, Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Success"/>
          <div style={styles.container}>
            <h1>Thank you for your submission</h1>
            <p>You will receive an email confirming your submission.</p>
          </div>
        </Fragment>
      </MuiThemeProvider>
    )
  }
}


const styles = {
  container: {
    padding: '1rem 2rem'
  }
}

export default Success
