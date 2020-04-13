import React from 'react';

export default class Judge extends React.Component {
    constructor() {
     super()
   
     this.state = {stars: 0, available: false}
    }
   
    applaud() {
        const applaud = true
      //Send this applaud status to Kid.js
      this.props.jabClickho(applaud)
    }
   
    provideStars() {
      const {stars} = this.state;
      const {updateStars} = this.props
      const newStars = stars + 1
      updateStars(newStars)
      this.setState({stars: stars + 1})
    }
    
    //should component se ager return falsey value huwi to state k update per render nahi chaley ga
    //should component render se pehle chalta hai
    shouldComponentUpdate(nextProp,nextState){
      // const {stars} = this.state
      const {stars} = nextState

      return stars <= 5

      // if(stars >= 5 ) {
      //   return false;
      // }
      // return true;
    }
    render() {
      const {stars, available} = this.state;
   
      return (
        <div>
          <button type="button" onClick={this.applaud.bind(this)}>
           Appreciate performance
          </button>
          <br/>
          <button type="button" onClick={this.provideStars.bind(this)}>
           Provide stars
          </button>
          <br/>
          Kid is available: {available}
          <br/>
          Stars gained: {stars}
        </div>
      );
    }
   }
   