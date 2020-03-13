import React from "react";

class FollowersCards extends React.Component {
    componentDidMount() {
        fetch("https://api.github.com/users/${user}/followers")
            .then(res => res.json())
            .then(data => {
                console.log(
                    "componenetdidmount:fetch:user followers: data",
                    data
                );
            })
            .catch(error => {
                console.log("data not returned", error);
            });
    }
    render() {
        return (
            <div className="followers-cards">
                {/* <img src={image newUrl of user} />
                <div class="card-info">
                    <h3 class="name">{users name}</h3>
        <p class="newUsername">{users user name}</p>
        <p>Location: {users newLocation}</p>
        <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
                <p>Followers: {users newFollowers count}</p>
                <p>Following: {users newFollowing count}</p>
                <p>Bio: {users newBio}</p> */}
            </div>
        );
    }
}

export default FollowersCards;
