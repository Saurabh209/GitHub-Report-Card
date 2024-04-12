const mainBody = document.querySelector('main');
const navbar = document.querySelector('.navbar');
const userField = document.querySelector('.navbar-search')
const toggleSwitch = document.getElementById('toggleSwitch');
const button = document.querySelector('.button');
const usernameInput = document.querySelector('.username');
const usernameValidation = document.querySelector('.usernameValidation');
const mainContainer = document.querySelector('.mainContainer');

let username;
let userProfile;
let aboutSection;


function main(){
const newBtn = document.createElement('button');
newBtn.setAttribute('type','submit');
newBtn.setAttribute('class','button');
newBtn.innerText='Clear';
userField.appendChild(newBtn);

newBtn.addEventListener('click',()=>{
  window.location.reload();

})


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
    alert("abe username to fill krle bkl");
  } else {
    button.remove();
  main();
  }
  

}
button.addEventListener('click', onclick);





