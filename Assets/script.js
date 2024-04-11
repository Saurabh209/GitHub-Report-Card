// let one = document.querySelector(".one")





// let username = 'Saurabh209';

// let Promise = fetch(`https://api.github.com/users/${username}`);

// Promise.then((response)=>{
//     if (response.status !== 200) {
//         throw new Error('Not 200 response');  
//     }
//     return response.json();


// }).then((data)=>{
//     let displayChart = document.createElement("iframe");
//     let displayStats = document.createElement("iframe");
//     displayChart.src=`https://github-readme-stats.vercel.app/api/?username=${username}&count_private=true&theme=tokyonight&showicons=true`;
//     displayStats.src=`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark`;
//     // displayStats.height=800;
//     displayChart.classList.add('statsConfig');
//     displayStats.classList.add("statsConfig");
//     one.appendChild(displayChart);
//     one.appendChild(displayStats);

//     console.log(data);
// })




const usernameInput = document.getElementById('usernameInput');
const submitButton = document.getElementById('submitButton');
const errorMessage = document.getElementById('errorMessage');

submitButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();

  if (username === '') {
    errorMessage.textContent = 'Please enter a username.';
  } else {
    errorMessage.textContent = '';
    console.log('Username:', username);
  }
});