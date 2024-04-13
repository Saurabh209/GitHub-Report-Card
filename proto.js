let promise = fetch('https://api.github.com/users/Saurabh209/repos');
promise.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})