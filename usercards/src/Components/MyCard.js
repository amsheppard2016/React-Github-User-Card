import React from "react";

class MyCard extends React.Component {
    componentDidMount() {
        fetch("https://api.github.com/users/amsheppard2016")
            .then(res => res.json())
            .then(data => {
                console.log(
                    "componenetdidmount:fetch:amsheppard2016:data",
                    data
                );
            })
            .catch(error => {
                console.log("data not returned", error);
            });
    }
    render() {
        return (
            <div className="my-card">
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
export default MyCard;

{
    /* <div class="card">
    <img src={image newUrl of user} />                                              ("src", response.data.avatar_url)
  <div class="card-info">
        <h3 class="name">{users name}</h3>                                               response.data.name
        <p class="newUsername">{users user name}</p>                                    response.data.login
        <p>Location: {users newLocation}</p>                                         response.data.location
        <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>     ("href", response.data.html_url)
    </p>
    <p>Followers: {users newFollowers count}</p>                                        response.data.followers
    <p>Following: {users newFollowing count}</p>                                        response.data.following
    <p>Bio: {users newBio}</p>                                                          response.data.bio
</div>
</div > */
}
