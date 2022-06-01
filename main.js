const linksSocialMedia = {
    github: "wnicolass",
    youtube: "Nicholassw0",
    facebook: "nicolas.wanderley.92",
    instagram: "wnicholasss",
    twitter: "wNicholasss"
  }

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class');

      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
    }
  }

  changeSocialMediaLinks();

function getGitHubUserInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`;
    
     fetch(url).then(response => response.json()).then(data => {
        avatar.src = data.avatar_url;
        userName.textContent = data.name;
        bio.textContent = data.bio;
        userLink.href = data.html_url;
        userLogin.textContent = data.login;
     })
}

getGitHubUserInfos();