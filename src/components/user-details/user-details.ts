import { Component } from '@angular/core';

/**
 * Generated class for the UserDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsComponent {

  private user = {
    "login": "defunkt",
    "id": 2,
    "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/defunkt",
    "html_url": "https://github.com/defunkt",
    "followers_url": "https://api.github.com/users/defunkt/followers",
    "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
    "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
    "organizations_url": "https://api.github.com/users/defunkt/orgs",
    "repos_url": "https://api.github.com/users/defunkt/repos",
    "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
    "received_events_url": "https://api.github.com/users/defunkt/received_events",
    "type": "User",
    "site_admin": true,
    "name": "Chris Wanstrath",
    "company": "@github ",
    "blog": "http://chriswanstrath.com/",
    "location": "San Francisco",
    "email": null,
    "hireable": true,
    "bio": "🍔 ",
    "public_repos": 107,
    "public_gists": 273,
    "followers": 16840,
    "following": 208,
    "created_at": "2007-10-20T05:24:19Z",
    "updated_at": "2018-03-21T18:41:18Z"
  };

  constructor() {
    console.log('Hello UserDetailsComponent Component');
  }

}
