import React, { Component } from 'react';
import Header from '../Header/Header.js';
import City from '../City/City';
import styles from './App.scss';


class App extends Component {
  render() {
    return (
      <div className={styles.component}>
        <Header />
        <City />
      </div>
    );
  }
}

export default App;