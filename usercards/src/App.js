import React from "react";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>App</p>
                </header>
                <MyCard />
                <FollowersCards />
            </div>
        );
    }
}

export default App;
