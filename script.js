// Variable Declaration 
const mainBody = document.querySelector("main");
const navbar = document.querySelector(".navbar");
const userField = document.querySelector(".navbar-search");
const toggleSwitch = document.getElementById("toggleSwitch");
const button = document.querySelector(".button");
const usernameInput = document.querySelector(".username");
const usernameValidation = document.querySelector(".usernameValidation");
const mainContainer = document.querySelector(".mainContainer");

const heading = document.querySelector("h1");

let username;
let userProfile;
let aboutSection;
let nameHolder;
let loginNameContainer;
let bioContainerValue;
let followers;
let following;


// Main code

function main() {
  const newBtn = document.createElement("button");
  newBtn.setAttribute("type", "submit");
  newBtn.classList.add('clearButon');
  newBtn.innerText = "Clear";
  userField.appendChild(newBtn);

  //button click area
  newBtn.addEventListener("click", () => {
    window.location.reload();
  });
  
  // Main Container
  mainContainer.classList.add("ContainerVisible");
  mainContainer.style.boxShadow='rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset '; 
  
  // left Area
  const leftArea = document.createElement("div");
  leftArea.classList.add("leftArea");
  mainContainer.appendChild(leftArea);

  userProfile = document.createElement("div");
  userProfile.classList.add("userProfile");
  leftArea.appendChild(userProfile);

  const nameContainer = document.createElement("div");
  nameContainer.classList.add('nameContainer');
  leftArea.appendChild(nameContainer);

  nameHolder = document.createElement('div');
  nameHolder.classList.add("nameHolder");
  nameContainer.append(nameHolder);

 

  loginNameContainer = document.createElement('div');
  loginNameContainer.classList.add("loginNameContainer");
  nameContainer.append(loginNameContainer);

  bioContainer = document.createElement('div');
  bioContainer.classList.add('bioContainer');
  leftArea.appendChild(bioContainer);

  bioContainerValue = document.createElement('div');
  bioContainerValue.classList.add('bioContainerValue');
  bioContainer.appendChild(bioContainerValue);

 
  //Followers section
  const followContainer = document.createElement('div');
  followContainer.classList.add('followContainer');
  bioContainerValue.appendChild(followContainer);


  followers = document.createElement('div');
  followers.classList.add('followers');

  const line = document.createElement('hr');
  line.classList.add('horizontalLine');
  

  following = document.createElement('div');
  following.classList.add('following');
  followContainer.appendChild(followers);
  followContainer.appendChild(line);
  followContainer.appendChild(following);

  //Followers section end

  const rightArea = document.createElement("div");
  rightArea.classList.add("rightArea");
  mainContainer.appendChild(rightArea);

  let promise = fetch(`https://api.github.com/users/${username}`);
  promise
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("No such user found");
      }
      return response.json();
    })
    .then((responseData) => {
      const image = document.createElement("img");
      image.src = responseData.avatar_url;
      image.classList.add("imageConfig");
      userProfile.appendChild(image);

      nameHolder.innerText=`${responseData.name}`;

      loginNameContainer.innerText=`(${responseData.login})`;

      followers.innerText=`Followers:${responseData.followers}`;
      following.innerText=`Following:${responseData.following}`;
    })
    .catch((error) => {
      console.log(error);
    });
}

function onclick() {
  username = usernameInput.value.trim();
  if (username === "") {
    alert("abe username to fill krle bkl");
  } else {
    button.remove();
    main();
  }
}

// Dark-Light Mode

function switcher() {
  console.log("working");
}

button.addEventListener("click", onclick);
toggleSwitch.addEventListener("click", switcher);
