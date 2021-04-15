import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FirstMethod from './firstMethod';
import SecondMethod from './secondMethod';

function App() {
    return (
        <Router>
            <div className="App container mx-auto relative">
                <div className="flex text-4xl my-20 font-bold justify-center px-44">
                    <h1 className="pr-44">
                        <Link to="/test2/first">First Method</Link>
                    </h1>
                    <h1>
                        <Link to="/test2/second">Second Method</Link>
                    </h1>
                </div>

                <Switch>
                    <Route exact path="/faraz3/first">
                        <FirstMethod />
                    </Route>
                    <Route exact path="/faraz3/second">
                        <SecondMethod />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
