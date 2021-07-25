"use strict";
class Github {
  constructor() {
    this.client_id = '2e2d7a160cab9775d427';
    this.client_secret = '4407a447b1909587ab47386dd460c68cd94050ea';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    
    return {
      profile : profile, // You can also use only one profile since both are the same in es6+ e.g profile.The same applies to repos
      repos
    }
    
  }
}