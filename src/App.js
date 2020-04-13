import React, { Component } from 'react';
import './App.css';
import Kids from "./Compponent/Kids/kids"
import Teacher from "./Compponent/Teacher/teacher"
import Judges from "./Compponent/Judges/judge"
class App extends Component {
  constructor(props) {
    super(props)

    this.updateSteps = this.updateSteps.bind(this)
    this.updateStars = this.updateStars.bind(this)
    this.state = {
      volume: 0,
      applaud: false
    }
  }

  static getDerivedStateFromProps() {
    return {
      volume: 5,
    }
  }
  updateSteps(furtherSteps) {
    this.setState({
      furtherSteps
    })
  }
  appriciate = ()=> {
    this.setState({
      applaud: true
    })
  }

  updateStars(stars){
    this.setState({
      stars
    })
  }
  render() {
    const { furtherSteps,applaud } = this.state
    console.log('App.js: this.state.furtherSteps', this.state.furtherSteps)
    console.log("volume --> ", this.state.volume);
    console.log("aap.js applaud -->", applaud)
    // console.log("aap.js providingStar -->", )
    return (

      <div className="App">
        <header className="App-header">

          <div>
            <h1>Kids Component</h1>
            <img width="180" height="150" src="https://cms-tc.pbskids.org/parents/expert-tips-and-advice/how-to-teach-frustration-tolerance-to-kids-hero.jpg?mtime=20181008030129" />
            <Kids dressColor="Blue" furtherSteps={furtherSteps} applaud={applaud}/>
          </div>

          <div>
            <h2>Teacher Component</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7GZEi52mUp4C_um05YPfzNgqkPkqBTAZB68dFNbsy9dxcirE-" />
            <br />
            <Teacher updateSteps={this.updateSteps} />
            <br /><br />

          </div>
          <div style={{ backgroundColor: 'brown' }}>
            <h1>Judge Component</h1>
            
            <img src="https://www.toledoblade.com/image/2019/10/07/1140x_a10-7_cTC/SOTELO08-6.jpg" width="150" />
            
            <Judges jabClickho={this.appriciate} updateStars={this.updateStars}/>
            <br /><br />
          </div>
        </header>

      </div>
    )
  }
}

export default App;
