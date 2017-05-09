import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchData } from './actions'

import { connect } from 'react-redux';

class App extends Component {
  fetchData = () => {
    this.props.fetchData()
  }
  render() {
    console.log("this.props", this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux 4 ways</h2>
        </div>
        <button onClick={this.fetchData}>
          Get Data
        </button>
        {
          this.props.appData.isFetching &&
          <div>
            Loading...
          </div>
        }
        {
          (this.props.appData.data.length > 0)&&
          this.props.appData.data.map((item, index) => 
            <div>
              <p>Name: {item.name}</p>
              <p>Age: {item.age}</p>
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  appData: state.appData
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
