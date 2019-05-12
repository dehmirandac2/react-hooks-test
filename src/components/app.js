import React, { Component, Fragment } from 'react';
import Contador from './contador';
import MultiplosStates from './multiplos-states';

class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>App React com Hooks</h1>
                <Contador />
                <MultiplosStates />
            </Fragment>
        )
    }
}

export default App;