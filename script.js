const navbar = document.querySelector('.navbar');
const toggleSwitch = document.getElementById('toggleSwitch');
const button = document.querySelector('.button');
const usernameInput = document.querySelector('.username');
const usernameValidation = document.querySelector('.usernameValidation');
const mainContainer = document.querySelector('.mainContainer');
let username;
let userProfile;
let aboutSection;


function main(){
mainContainer.classList.add('ContainerVisible');
const leftArea = document.createElement("div");
leftArea.classList.add('leftArea');
mainContainer.appendChild(leftArea);

userProfile = document.createElement('div');
userProfile.classList.add('userProfile');
leftArea.appendChild(userProfile);




const rightArea = document.createElement('div');
rightArea.classList.add('rightArea');
mainContainer.appendChild(rightArea);





  let promise = fetch(`https://api.github.com/users/${username}`);
  promise.then((response)=>{
    if(response.status!==200){
      throw new Error('No such user found');
    }
    return response.json();
  }).then((responseData)=>{
    const image = document.createElement('img');
    image.src=responseData.avatar_url;
    image.classList.add('imageConfig');
    userProfile.appendChild(image);
})
.catch((error)=>{
  console.log(error);
})

}

function onclick(){
  username = usernameInput.value.trim();
  if(username === ''){
    alert("Kya bhoot ko search kr rha h ?? username to fill krle bhai pehle");
  } else {
  main();
  }
  

}
button.addEventListener('click', onclick);





