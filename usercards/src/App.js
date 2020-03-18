import React from "react";
import MyCard from "./Components/MyCard";
import FollowersCards from "./Components/FollowersCards";
import { Container } from "./Components/Styles";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Container>
                <MyCard />
                <FollowersCards />
            </Container>
        );
    }
}

export default App;
