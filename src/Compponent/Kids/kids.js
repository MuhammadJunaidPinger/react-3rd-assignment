import React from 'react';


class Kids extends React.Component {

    constructor(props) {
        super(props);
        this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false };
    }

    //Kia hum is ke bager Kid ko mazeed dance steps yad karwa sakte the?
    static getDerivedStateFromProps(props, state) {
        const { danceSteps, } = state
        const { furtherSteps, } = props
        //Props ke zarye state ko update karna
        return {
            //spread operator
            danceSteps: [...danceSteps, ...furtherSteps],
            //or
            //danceSteps = danceSteps.concat(furtherSteps)
            startedPerforming: !!furtherSteps.length,
            //startedPerforming: furtherSteps.length ? true : false
            emotion: props.applaud
        }
    }

    componentDidMount() {
        //Render ke baad chalta hai
        //Component ki zindagi me ek hi baar chalta hai
        //Is k ander initially koi kaam karwana ho to wo karwatay
        this.setState({
            danceSteps: ["step1", "step2"]
        })

    }
    // componentDidUpdate(prevProps) {
    //     const { stars } = this.state
    //     console.log('prevProps.stars--> componentDidUpdate')
    //     console.log(prevProps.stars) //4
    //     console.log('stars from componentDidUpdate')
    //     console.log(stars) //5
    //     if(prevProps.stars !== stars && stars === 5) {
    //         this.qualified()
    //     }
    // }

    qualified() {
        this.setState({ startedPerforming: false })
    }

    render() {

        const { dressColor, furtherSteps, applaud } = this.props;
        const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;
        console.log("kids.js danceSteps ---> ", danceSteps);
        console.log("furtherSteps ---> ", furtherSteps)
        console.log("Kids.js emotion --> ", emotion);
        console.log("kids.js applaud --> ", applaud);

        return (
            <div>
                <div>Task 1 Change dressColor</div>
                <div>dressColor: {dressColor}</div>
                <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
                <div>Task 2 console volume</div>
                <div>Task 3 console danceSteps</div>
                <div>Emotion: {emotion ? "happy" : "nervous"}</div>
                {startedPerforming &&
                    <div>
                        <div>Current Step: {danceSteps[currentStepIndex]}</div>
                        <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
                    </div>}
            </div>
        );
    }
}
Kids.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };

export default Kids;