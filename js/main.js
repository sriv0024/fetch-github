function fetchUserData() {
    const username = document.getElementById('username').value.trim();

    if (username === '') {
      alert('Please enter a valid Github username');
      return;
    }

    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then(data => {
        displayUserInfo(data);
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  function displayUserInfo(user) {
    const resultElement = document.getElementById('result');

    // Clear previous results
    resultElement.innerHTML = '';

    // Display user information
    const infoParagraph = document.createElement('p');
    infoParagraph.innerHTML = `
      <strong>Username:</strong> ${user.login}<br>
      <strong>Name:</strong> ${user.name || 'N/A'}<br>
      <strong>Location:</strong> ${user.location || 'N/A'}<br>
      <strong>Public Repositories:</strong> ${user.public_repos}<br>
      <strong>Followers:</strong> ${user.followers}<br>
      <strong>Profile URL:</strong> <a href="${user.html_url}" target="_blank">${user.html_url}</a><br>
    `;
    resultElement.appendChild(infoParagraph);
  }