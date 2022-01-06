import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}


class App extends React.Component{
    constructor(props) {
        super(props);
        //only time we directly assign this.state 
        this.state = {lat: null}; //
        window.navigator.geolocation.getCurrentPosition(
            //setState to update the state
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }

    render(){
        return <div>Latitude: {this.state.lat}</div>
    }
};
ReactDOM.render(<App />, document.querySelector("#root"));
