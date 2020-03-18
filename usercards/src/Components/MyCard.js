import React from "react";
import { Cards, Card, Name, Username } from "./Styles";

class MyCard extends React.Component {
    state = {
        usercard: {}
    };
    componentDidMount() {
        fetch("https://api.github.com/users/amsheppard2016")
            .then(res => res.json())
            .then(data => {
                console.log(
                    "componenetdidmount:fetch:amsheppard2016:data",
                    data
                );
                this.setState({ usercard: data });
            })
            .catch(error => {
                console.log("data not returned", error);
            });
    }
    render() {
        return (
            // console.log("mycard, render,data", this.state.usercard),
            <Cards>
                <h1>My Github Card</h1>
                <Card>
                    <img alt="avatar" src={this.state.usercard.avatar_url} />
                    <div className="my-card-info">
                        <Name>{this.state.usercard.name}</Name>
                        <Username>{this.state.usercard.login}</Username>
                        <p>Location: {this.state.usercard.location}</p>
                        <p>
                            Profile:{" "}
                            <a href={this.state.usercard.html_url}>
                                {this.state.usercard.html_url}
                            </a>
                        </p>
                        <p>Followers: {this.state.usercard.followers}</p>
                        <p>Following: {this.state.usercard.following}</p>
                        <p>Bio: {this.state.usercard.bio}</p>
                    </div>
                </Card>
            </Cards>
        );
    }
}
export default MyCard;
