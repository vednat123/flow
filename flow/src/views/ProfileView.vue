<template>
  <div class="home-container">
    <aside class="left-nav">
      <h2>Menu</h2>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/messages">Messages</router-link></li>
        <li><router-link to="/create-poll">Create Poll</router-link></li>
        <li><router-link to="/notifications">Notifications</router-link></li>
      </ul>
    </aside>

    <main class="main-timeline">
    <div class="profile-container">
      <div class="profile-header">
        <img :src="profile.photo" width="250" height="250">
        <div class="user-info">
          <h1> {{ profile.name }} </h1>
          <span class="username">@{{profile.username}}</span>
        </div>
      </div>
      <div class="profile-bio">
        <p>{{profile.bio}}</p>
      </div>
      <div class="profile-stats">
        <div class="stat">
          <span class="number">{{profile.posts}}</span>
          <span class="label"> Posts</span>
        </div>
        <div class="stat">
          <span class="number">{{profile.followers}}</span>
          <span class="label"> Followers</span>
        </div>
        <div class="stat">
          <span class="number">{{profile.following}}</span>
          <span class="label"> Following</span>
        </div>
        <button class="edit-profile-btn" @click="editProfile">
          Edit Profile
        </button>
      </div>
    </div>
    </main>

    <aside class="right-trending">
      <!-- Placeholder -->
    </aside>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  data(){
    return{
      profile:{
        photo: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
        name: "placeholder name",
        username: "username",
        bio: "bio",
        posts: 0,
        followers: 0,
        following: 0
      }
    }
  },
  methods: {
    editProfile(){
      console.log("edit me bananas")
    }
  }
};
</script>

<style scoped>

.profile-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #111;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
}

.user-info h1 {
  margin: 0;
  margin-left: 5px;
  font-size: 24px;
}

.username {
  color: #666;
  margin-left: 5px;
  font-size: 16px;
}

.profile-bio {
  margin-bottom: 20px;
}

.profile-stats {
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin-bottom: 20px;
}

.stat {
  text-align: center;
}

.number {
  display: block;
  font-weight: bold;
  font-size: 18px;
}

.label {
  color: #666;
}

.edit-profile-btn {
  padding: 8px 16px;
  background: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.edit-profile-btn:hover {
  background: #1557b0;
}

.home-container {
  display: flex;
  min-height: 100vh;
  background-color: #000;
  color: white;
}

.left-nav {
  width: 20%;
  background-color: #111;
  padding: 1rem;
  box-sizing: border-box;
  border-right: 2px solid crimson;
}
.left-nav h2 {
  margin-bottom: 1rem;
  color: crimson;
}
.left-nav ul {
  list-style: none;
  padding: 0;
}
.left-nav li {
  margin: 0.5rem 0;
}
.left-nav a {
  color: white;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background 0.3s;
}
.left-nav a:hover {
  background-color: crimson;
}

.main-timeline {
  width: 60%;
  padding: 1rem;
  box-sizing: border-box;
  border-right: 2px solid crimson;
}

.right-trending {
  width: 20%;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
