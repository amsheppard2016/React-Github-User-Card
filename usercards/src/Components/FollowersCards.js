import React from "react";
import { Cards, Card, Name, Username } from "./Styles";

import axios from "axios";

class FollowersCards extends React.Component {
    state = {
        followersdata: [],
        followersusername: []
    };
    componentDidMount() {
        axios
            .get("https://api.github.com/users/amsheppard2016/followers")
            .then(data => {
                console.log(
                    "componenetdidmount:fetch:followerscard:followersdata",
                    data
                );
                this.setState({ ...this.state, followersdata: data });
                this.state.followersdata.data.forEach(user =>
                    axios
                        .get(`https://api.github.com/users/${user.login}`)
                        .then(data => {
                            this.setState({
                                ...this.state,
                                followersusername: [
                                    ...this.state.followersusername,
                                    data
                                ]
                            });
                        })
                        .catch(error => {
                            console.log("username data not returned", error);
                        })
                );
            })
            .catch(error => {
                console.log("data not returned", error);
            });
    }
    render() {
        return (
            console.log(
                "render,followersusername",
                this.state.followersusername
            ),
            (
                <Cards>
                    <h1>Follower's</h1>
                    {this.state.followersusername.map(user => {
                        return (
                            <Card key={user.data.id}>
                                <img alt="avatar" src={user.data.avatar_url} />
                                <div className="followers-card-info">
                                    <Name>{user.data.name}</Name>
                                    <Username>{user.data.login}</Username>
                                    <p>Location: {user.data.location}</p>
                                    <p>
                                        Profile:{" "}
                                        <a href={user.data.html_url}>
                                            {user.data.html_url}
                                        </a>
                                    </p>
                                    <p>Followers: {user.data.followers}</p>
                                    <p>Following: {user.data.following}</p>
                                    <p>Bio: {user.data.bio}</p>
                                </div>
                            </Card>
                        );
                    })}
                </Cards>
            )
        );
    }
}

export default FollowersCards;
