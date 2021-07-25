class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url} target="_blank" class="btn btn-primary block mb-4">View Profile</a>
          </div>

          <div class="col-md-9">
          <span class="badge bg-primary position-relative">
          Public Repos:
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${user.public_repo}
              <span class="visually-hidden">Number of Public Repos = ${user.public_repo} </span>
            </span>
          </span>

          <span class="badge bg-success position-relative">
          Public Gists:
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${user.public_gists}
              <span class="visually-hidden">Number of public gists = ${user.public_gists}</span>
            </span>
          </span>

          <span class="badge bg-warning position-relative">
          Followers:
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              ${user.followers}
              <span class="visually-hidden">Number of followers = ${user.followers}</span>
            </span>
          </span>

          <span class="badge bg-info position-relative">
          Following:
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              ${user.following}
              <span class="visually-hidden">Number of people following = ${user.following}</span>
            </span>
          </span>
          <br><br>

          <ul class="list-group">
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Username: ${user.login}</li>
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: <a href="${user.blog}" class="text-primary" target="_blank">${user.blog}</a></li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
            <li class="list-group-item">Hireable: ${user.hireable}</li>
            <li class="list-group-item">Last seen: ${user.updated_at}</li>
            <li class="list-group-item">Bio: ${user.bio}</li>
          </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user Repos
  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge bg-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    //Output repos
    document.getElementById('repos').innerHTML = output;
  }

  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    //Add classes
    div.className = className;
    //Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div,search);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }

  // Clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}