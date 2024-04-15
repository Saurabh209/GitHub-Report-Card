const list = document.querySelector(".list");

let promise1 = fetch('https://api.github.com/users/Saurabh209/repos');
promise1.then((response)=>{
    return response.json();
}).then((data)=>{
    const repositories=[];
    for(const repo of data){
        repositories.push(repo.name);
    }
    console.log(repositories[0]);
    for(let index=0; index<(repositories.length); index++){
        let repoHolder = document.createElement('div');
        let item = document.createElement('iframe');
        repoHolder.classList.add('repoHolder');
        item.classList.add('repoConfig')
        item.src=`https://github-readme-stats.vercel.app/api/pin/?username=Saurabh209&repo=${repositories[index]}&description_lines_count=1`;
        repoHolder.append(item);
        list.appendChild(repoHolder);

    }

});











//Function to fetch the user's repositories
// function fetchRepositories(username) {
//     return fetch(`https://api.github.com/users/${username}/repos`)
//       .then(response => response.json())
//       .then(data => {
//         const repositories = [];
//         for (const repo of data) {
//           repositories.push(repo.name);
//         }
//         return repositories;
//       });
//   }
  
//   // Call the function and log the repository names
//   fetchRepositories('Saurabh209')
//     .then(repositories => {
//       console.log('Repositories of Saurabh209:');
//       repositories.forEach(repo => console.log(repo));
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });

