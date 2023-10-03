const APIURL = "https://api.github.com/users/"
const displayArea = document.getElementById("displayArea")

const getUser = async (username) => {
    const response = await fetch(APIURL + username)
    const data = await response.json()
    console.log(data);

    const card = `
    <div class="imgSide">
         <div class="image">
           <img src="${data.avatar_url}" alt="panda img">
         </div>
    </div>
<div class="textSide">
    <div class="userName">
        <p>${data.name}</p>
    </div>
    <span class="nullSpan">
        ${data.bio}
    </span>
    <div class="userInfo">
        <li>${data.followers} <b>Followers</b></li>
        <li>${data.following} <b>Following</b></li>
        <li>17 <b>Repos</b></li>
    </div>
</div>`

displayArea.innerHTML = card;
 
}


getUser("ashishsingh-30")