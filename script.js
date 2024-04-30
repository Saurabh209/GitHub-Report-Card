// Variable Declaration 
const mainBody = document.querySelector("main");
const navbar = document.querySelector(".navbar");
const userField = document.querySelector(".navbar-search");
const toggleSwitch = document.getElementById("toggleSwitch");
const button = document.querySelector(".button");
const usernameInput = document.querySelector(".username");
const usernameValidation = document.querySelector(".usernameValidation");
const mainContainer = document.querySelector(".mainContainer");
const navRight = document.querySelector(".navRight");
const heading = document.querySelector("h1");

//public variables
let username;
let userProfile;
let aboutSection;
let nameHolder;
let loginNameContainer;
let bioContainerValue;
let followers;
let following;
let statusReportData;
let repoCount;
let repoHolder;
// Main code

function main() {
 
  let promise = fetch(`https://api.github.com/users/${username}`);
  promise
    .then((response) => {
      if (response.status !== 200) {
        // const head = document.createElement('div');
        // mainContainer.innerHTML=" ";
        // head.classList.add("head");
        // mainContainer.classList.add('mainContent')
        // head.innerText=`No Such user found with username:${username}`;
        // mainContainer.append(head);
        mainContainer.innerHTML=`<div class="main_wrapper">
        <div class="main">
          <div class="antenna">
            <div class="antenna_shadow"></div>
            <div class="a1"></div>
            <div class="a1d"></div>
            <div class="a2"></div>
            <div class="a2d"></div>
            <div class="a_base"></div>
          </div>
          <div class="tv">
            <div class="cruve">
              <svg
                xml:space="preserve"
                viewBox="0 0 189.929 189.929"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                class="curve_svg">
                <path
                  d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
              C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                ></path>
              </svg>
            </div>
            <div class="display_div">
              <div class="screen_out">
                <div class="screen_out1">
                  <div class="screen">
                    <span class="notfound_text">404 User not found</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="lines">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
            </div>
            <div class="buttons_div">
              <div class="b1"><div></div></div>
              <div class="b2"></div>
              <div class="speakers">
                <div class="g1">
                  <div class="g11"></div>
                  <div class="g12"></div>
                  <div class="g13"></div>
                </div>
                <div class="g"></div>
                <div class="g"></div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="base1"></div>
            <div class="base2"></div>
            <div class="base3"></div>
          </div>
        </div>
        <div class="text_404">
          <div class="text_4041">4</div>
          <div class="text_4042">0</div>
          <div class="text_4043">4</div>
        </div>
      </div>`;
      
      throw new Error("No such user found");

      }
      return response.json();
    })
    .then((responseData) => {

       // const newBtn = document.createElement("button");
  // newBtn.setAttribute("type", "submit");
  // newBtn.classList.add('clearButon');
  // newBtn.innerText = "Clear";
  // userField.appendChild(newBtn);


  mainContainer.innerHTML=" ";


  //button click area

  // const button = false;
  
  // if(button==true){
    
  // }else{
  
  // const downloadbtn = document.createElement('button');
  // downloadbtn.classList.add("button");
  // downloadbtn.innerText="Download";
  // navRight.prepend(downloadbtn);
  // button = true;
  // }
 






  // Main Container
  mainContainer.classList.add("ContainerVisible");
  mainContainer.style.backgroundColor='white'
  mainContainer.style.boxShadow='rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset '; 
  
  // left Area
  const leftArea = document.createElement("div");
  leftArea.classList.add("leftArea");
  mainContainer.appendChild(leftArea);

  userProfile = document.createElement("div");
  userProfile.classList.add("userProfile");
  leftArea.appendChild(userProfile);

  
  const image = document.createElement("img");
  image.src = responseData.avatar_url;
  image.classList.add("imageConfig");
  userProfile.appendChild(image);


  const nameContainer = document.createElement("div");
  nameContainer.classList.add('nameContainer');
  leftArea.appendChild(nameContainer);

  nameHolder = document.createElement('div');
  nameHolder.innerText=`${responseData.name}`;
  nameHolder.classList.add("nameHolder");
  nameContainer.append(nameHolder);

 

  loginNameContainer = document.createElement('div');
  loginNameContainer.innerText=`(${responseData.login})`;
  loginNameContainer.classList.add("loginNameContainer");
  nameContainer.append(loginNameContainer);

  bioContainer = document.createElement('div');
  bioContainer.classList.add('bioContainer');
  leftArea.appendChild(bioContainer);


  //Followers section
  const followContainer = document.createElement('div');
  followContainer.classList.add('followContainer');
  bioContainer.appendChild(followContainer);

  followers = document.createElement('div');
  followers.innerText=`Followers:${responseData.followers}`;
  followers.classList.add('followers');
  followContainer.appendChild(followers);

  const line = document.createElement('hr');
  line.classList.add('horizontalLine');
  followContainer.appendChild(line);

  following = document.createElement('div');
  following.innerText=`Following:${responseData.following}`;
  following.classList.add('following');
  followContainer.appendChild(following);

  //Followers section end

  const hr2 = document.createElement('hr');
  hr2.classList.add("hr2");
  bioContainer.append(hr2);


  // Bio Section
  const bioSection = document.createElement("div");
  bioSection.classList.add("bioSection");
  bioContainer.append(bioSection);

  if(responseData.bio!=null){
      bioSection.innerHTML=`<b>Bio: </b>${responseData.bio}`;
    }else{
      bioSection.innerHTML=`<b>Bio:</b>Empty`;
    }

    //Company section
    const hr3 = document.createElement('hr');
    hr3.classList.add("hr3");
    bioContainer.append(hr3);

    const company = document.createElement("div");
    bioContainer.append(company);

    if(responseData.company!=null){

      company.classList.add("company");
      const companyLogo = document.createElement('img');
      companyLogo.src="company.png";
      companyLogo.classList.add("companyLogo");
      company.append(companyLogo);

      const companyName = document.createElement("div");
      companyName.classList.add("companyName");
      companyName.innerHTML=`${responseData.company}`;
      company.append(companyName); 
    }


    // Address
    if(responseData.location!=null){
    const location = document.createElement("div");
    location.classList.add("location");
    bioContainer.append(location);

    const locationLogo = document.createElement("img");
    locationLogo.src="location.png";
    locationLogo.classList.add("locationLogo");
    location.append(locationLogo);

    const locationName = document.createElement("div");
    locationName.classList.add("locationName"); 
    locationName.innerHTML=`${responseData.location}`;

    location.append(locationName);

    }


    // Account Links
    const linkedin = document.querySelector




  //Right Container
  const rightArea = document.createElement("div");
  rightArea.classList.add("rightArea");
  mainContainer.appendChild(rightArea);

  repoCountHolder = document.createElement('div');
  repoCountHolder.classList.add('repoCountHolder');
  repoCount = document.createElement('div');
  repoCount.classList.add('repoCount');
  repoCount.innerHTML=`<a href ="https://github.com/${username}?tab=repositories">Total Repositories: ${responseData.public_repos}</a>`;
  repoCountHolder.append(repoCount);
  rightArea.append(repoCountHolder);
  const statusReport = document.createElement('div');
  statusReport.classList.add('statusReport');
  
  rightArea.appendChild(statusReport);



  let promise1 = fetch(`https://api.github.com/users/${username}/repos`);
  promise1.then((res)=>{
    return res.json();
  }).then((recivedData)=>{
    const repositories=[];
    for(const repo of recivedData){
      repositories.push(repo.name);
    }
    // console.log(repositories.length);


    if(repositories.length>12){
      mainContainer.style.width='1374px';
      // statusReport.style.overflow="scroll";
      for(let index = 0; index<12; index++){
        repoHolder = document.createElement('div');
      let item = document.createElement('iframe');
        repoHolder.classList.add('repoHolder');
        item.classList.add('repoConfig');
        item.src=`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repositories[index]}&description_lines_count=1`;
        repoHolder.append(item);
        statusReport.append(repoHolder);





      // repoHolder = document.createElement('div');
      // repoHolder.classList.add('manualRepoHolder');
      // let repoData =`${repositories[index]}`;
      // repoHolder.append((repoData));
      // statusReport.append(repoHolder);
      
    
    }


    }else{
      mainContainer.style.width='1374px';
    for(let index =0; index<(repositories.length); index++){
      repoHolder = document.createElement('div');
      let item = document.createElement('iframe');
      repoHolder.classList.add('repoHolder');
      item.classList.add('repoConfig');
      item.src=`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repositories[index]}&description_lines_count=1`;
      repoHolder.append(item);
      statusReport.append(repoHolder);
    }};


  });

  const horizontalLine = document.createElement('hr');
  rightArea.append(horizontalLine);
  const visualStatusArea = document.createElement("div");
  visualStatusArea.classList.add("visualStatusArea");
  rightArea.append(visualStatusArea);

  const upperVisualStatusArea = document.createElement('div');
  upperVisualStatusArea.classList.add("upperVisualStatusArea");
  visualStatusArea.append(upperVisualStatusArea);

  const upperVisualStatusArea_Left = document.createElement('div');
  upperVisualStatusArea_Left.classList.add("upperVisualStatusArea_Left");
  const languageReport = document.createElement('iframe');
  languageReport.classList.add("languageReport");
  languageReport.src=`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&date_format=j%20M%5B%20Y%5D&card_width=486"`;
  upperVisualStatusArea_Left.append(languageReport);
  upperVisualStatusArea.append(upperVisualStatusArea_Left);

  const upperVisualStatusArea_Right = document.createElement('div');
  upperVisualStatusArea_Right.classList.add("upperVisualStatusArea_Right");
  const contributionReport = document.createElement('iframe');
  contributionReport.classList.add("contributionReport");
  contributionReport.src=`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=minimal`;
  upperVisualStatusArea_Right.append(contributionReport);
  upperVisualStatusArea.append(upperVisualStatusArea_Right);

  const lowerVisualStatusArea = document.createElement('div');
  lowerVisualStatusArea.classList.add("lowerVisualStatusArea");
  visualStatusArea.append(lowerVisualStatusArea);

  const lowerVisualStatusArea_Left = document.createElement("div");
  lowerVisualStatusArea_Left.classList.add("lowerVisualStatusArea_Left");
  const gitStats0 = document.createElement("iframe");
  gitStats0.classList.add("gitStats0");
  gitStats0.src=`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage`;
  lowerVisualStatusArea_Left.append(gitStats0);
  lowerVisualStatusArea.append(lowerVisualStatusArea_Left);

  const lowerVisualStatusArea_Mid = document.createElement("div");
  lowerVisualStatusArea_Mid.classList.add("lowerVisualStatusArea_Mid");
  const gitStats1 = document.createElement("iframe");
  gitStats1.classList.add("gitStats1");
  gitStats1.src=`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=donut`;
  lowerVisualStatusArea_Mid.append(gitStats1);
  lowerVisualStatusArea.append(lowerVisualStatusArea_Mid);

  const lowerVisualStatusArea_Right = document.createElement("div");
  lowerVisualStatusArea_Right.classList.add("lowerVisualStatusArea_Right");
  const gitStats2 = document.createElement("iframe");
  gitStats2.classList.add("gitStats2");
  gitStats2.style.overflow = "hidden"; 
  // gitStats2.setAttribute('seamless', '');
  gitStats2.src=`https://ssr-contributions-svg.vercel.app/_/${username}?chart=3dbar&gap=0.6&scale=3&flatten=0&animation=fall&animation_duration=2&animation_delay=0.02&weeks=30&theme=totacolor&height=100`;
  lowerVisualStatusArea_Right.append(gitStats2);
  lowerVisualStatusArea.append(lowerVisualStatusArea_Right);

  

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
    // button.remove();
    main();
  }
}

// Dark-Light Mode

function switcher() {
  console.log("working");
}

button.addEventListener("click", onclick);
toggleSwitch.addEventListener("click", switcher);
