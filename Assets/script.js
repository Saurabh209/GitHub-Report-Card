const usernameInput = document.getElementById('username');
const searchBtn = document.getElementById('search-btn');
const userInfo = document.getElementById('user-info');
const profilePic = document.getElementById('profile-pic');
const fullName = document.getElementById('full-name');
const username = document.getElementById('username');
const bio = document.getElementById('bio');
const repos = document.getElementById('repos');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const repoList = document.getElementById('repo-list');
const repoDetails = document.getElementById('repo-details');
const repoName = document.getElementById('repo-name');
const repoDescription = document.getElementById('repo-description');
const repoLanguage = document.getElementById('repo-language');
const repoStars = document.getElementById('repo-stars');
const repoForks = document.getElementById('repo-forks');
const commitGraph = document.getElementById('commit-graph');

searchBtn.addEventListener('click', () => {
  const gitUsername = usernameInput.value.trim();
  if (gitUsername) {
    fetchGitHubUserData(gitUsername);
  }
});

async function fetchGitHubUserData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();

    if (response.ok) {
      displayUserData(userData);
      fetchRepositories(userData.repos_url);
      fetchCommitGraph(userData.login);
    } else {
      userInfo.classList.add('hidden');
      alert(`Error: ${userData.message}`);
    }
  } catch (error) {
    userInfo.classList.add('hidden');
    alert('Error fetching GitHub user data');
  }
}

function displayUserData(userData) {
  profilePic.src = userData.avatar_url;
  fullName.textContent = userData.name;
  username.textContent = `@${userData.login}`;
  bio.textContent = userData.bio || 'No bio available';
  repos.textContent = userData.public_repos;
  followers.textContent = userData.followers;
  following.textContent = userData.following;
  userInfo.classList.remove('hidden');
}

async function fetchRepositories(reposUrl) {
  try {
    const response = await fetch(reposUrl);
    const repos = await response.json();

    repoList.innerHTML = '';
    repos.forEach(repo => {
      const repoItem = document.createElement('li');
      repoItem.textContent = repo.name;
      repoItem.addEventListener('mouseenter', () => {
        showRepoDetails(repo);
      });
      repoItem.addEventListener('mouseleave', () => {
        hideRepoDetails();
      });
      repoList.appendChild(repoItem);
    });
  } catch (error) {
    alert('Error fetching GitHub repositories');
  }
}

function showRepoDetails(repo) {
  repoName.textContent = repo.name;
  repoDescription.textContent = repo.description || 'No description available';
  repoLanguage.textContent = repo.language || 'Unknown';
  repoStars.textContent = repo.stargazers_count;
  repoForks.textContent = repo.forks_count;
  repoDetails.classList.remove('hidden');
}

function hideRepoDetails() {
  repoDetails.classList.add('hidden');
}

async function fetchCommitGraph(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/events`);
    const events = await response.json();

    const commitData = events.filter(event => event.type === 'PushEvent')
      .map(event => ({
        date: new Date(event.created_at),
        count: event.payload.commits.length
      }));

    renderCommitGraph(commitData);
  } catch (error) {
    console.error('Error fetching commit graph data:', error);
  }
}

function renderCommitGraph(commitData) {
  const canvas = document.createElement('canvas');
  canvas.width = commitGraph.offsetWidth;
  canvas.height = commitGraph.offsetHeight;
  commitGraph.innerHTML = '';
  commitGraph.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const maxCommits = Math.max(...commitData.map(data => data.count));
  const barWidth = canvas.width / commitData.length - 10;

  commitData.forEach((data, index) => {
    const barHeight = (data.count / maxCommits) * canvas.height;
    const x = index * (barWidth + 10);
    const y = canvas.height - barHeight;

    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(x, y, barWidth, barHeight);

    ctx.font = '12px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText(data.count, x + barWidth / 2, y - 5);
  });
}