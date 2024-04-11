const navbar = document.querySelector('.navbar');
const toggleSwitch = document.getElementById('toggleSwitch');
const button = document.querySelector('.button');
const usernameInput = document.querySelector('.username');
const usernameValidation = document.querySelector('.usernameValidation');
const mainContainer = document.querySelector('.mainContainer');
let username;
function main(){
  mainContainer.classList.add('ContainerVisible');

  let promise = fetch(`https://api.github.com/users/${username}`);
  promise.then((response)=>{
    if(response.status!==200){
      throw new Error('No such user found');
    }
    return response.json();
  }).then((responseData)=>{
    console.log(responseData.login);
    console.log(responseData.bio);
})







}

function onclick(){
  username = usernameInput.value.trim();
  if(username === ''){
    console.log("error");
  } else {
  main();
  }
  

}
button.addEventListener('click', onclick);





