// Instantiating GitHub class from github.js file
const github = new Github;
// Init UI class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
      .then(data => {
       if(data.profile.message === 'Not Found') {
          //show alert. This will come from ui.js file
          ui.showAlert('User not found', 'alert alert-danger')

       } else {
          // show profile. This will come from ui.js file
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
       }
      })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});