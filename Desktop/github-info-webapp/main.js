
    const getUserDetails = async (username)=>{
      try {
        const api_url = 'https://api.github.com/users/';
        const response = await fetch(api_url + username);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        console.log(data);
        createUserCard(data);
      } catch (error) {
        displayError(error.message);
      }
    }
  
    const createUserCard = async(user)=> {
      const main = document.getElementById('main');
      console.log(user.login);
      main.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
            <h3 class="mt-3">${user.login || 'No Name Provided'}</h3>
            <p>${user.bio || 'No bio available.'}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Followers:</strong> ${user.followers} | <strong>Following:</strong> ${user.following}</li>
              <li class="list-group-item"><strong>Repositories:</strong> ${user.public_repos}</li>
              <li class="list-group-item"><strong>Twitter:</strong> ${user.twitter_username ? `<a href="https://twitter.com/${user.twitter_username}" target="_blank">@${user.twitter_username}</a>` : 'Not Available'}</li>
              <li class="list-group-item"><strong>Location:</strong> ${user.location || 'Not Available'}</li>
            </ul>
          </div>
        </div>
      `;
    }
  
    const displayError = (message)=> {
      const main = document.getElementById('main');
      main.innerHTML = `<div class="alert alert-danger text-center">${message}</div>`;
    }

  
  
  const form = document.getElementById('form');
  const search = document.getElementById('search');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value.trim();
    if (user) {
      getUserDetails(user);
      search.value = '';
    }
  });
  
  // Initialize with your GitHub profile
  window.onload = () => getUserDetails('your-github-username');
  