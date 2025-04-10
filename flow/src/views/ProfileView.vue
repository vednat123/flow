<script setup>
import { useLoggedIn } from '@/stores/storeAccounts'
import { ref } from 'vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import TrendingPolls from '@/components/TrendingPolls.vue'

const userStore = useLoggedIn()
const isEditing = ref(false)

const profile = ref({
  photo: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
  name: "",
  username: "",
  bio: "No Bio Yet.",
  posts: 0,
  followers: 0,
  following: 0
})
const originalProfile = ref(null)

const startEditing = () => {
  originalProfile.value = { ...profile.value }
  isEditing.value = true
}

const saveProfile = () => {
  console.log("Saving profile:", profile.value)
  isEditing.value = false
  originalProfile.value = null
}

const cancelEditing = () => {
  profile.value = { ...originalProfile.value }
  isEditing.value = false
  originalProfile.value = null
}
</script>

<template>
  <div class="home-container">
    <SidebarMenu />
    <main class="main-timeline">
      <div class="profile-container">
        <div class="profile-header">
          <img :src="profile.photo" width="250" height="250">
          <div class="user-info">
            <h1>{{ userStore.user }}</h1>
            <span class="username">@{{ userStore.user.replace(/\s+/g, '') }}</span>
          </div>
        </div>
        <div class="profile-bio">
          <template v-if="!isEditing">
            <p>{{ profile.bio }}</p>
          </template>
          <template v-else>
            <textarea 
              v-model="profile.bio" 
              class="bio-editor"
              placeholder="Enter your bio"
            ></textarea>
          </template>
        </div>
        <div class="profile-stats">
          <div class="stat">
            <span class="number">{{ profile.posts }}</span>
            <span class="label">Posts</span>
          </div>
          <div class="stat">
            <span class="number">{{ profile.followers }}</span>
            <span class="label">Followers</span>
          </div>
          <div class="stat">
            <span class="number">{{ profile.following }}</span>
            <span class="label">Following</span>
          </div>
          <div class="profile-actions">
            <template v-if="!isEditing">
              <button class="theme-button" @click="startEditing">
                Edit Profile
              </button>
            </template>
            <template v-else>
              <button class="theme-button" @click="saveProfile">
                Save
              </button>
              <button class="theme-button cancel-btn" @click="cancelEditing">
                Cancel
              </button>
            </template>
          </div>
        </div>
        <div class="profile-edit-form" v-if="isEditing">
          <div class="form-group">
            <label>Profile Photo URL</label>
            <input 
              v-model="profile.photo"
              type="text" 
              placeholder="Enter photo URL"
            >
          </div>
        </div>
      </div>
    </main>
    <TrendingPolls />
  </div>
</template>

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

.bio-editor {
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #333;
  background: #222;
  color: white;
  resize: vertical;
}

.profile-stats {
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
  margin-right: 20px;
}

.number {
  display: block;
  font-weight: bold;
  font-size: 18px;
}

.label {
  color: #666;
}

.profile-actions {
  display: flex;
  gap: 10px;
}

.cancel-btn {
  background: #666;
  color: white;
}

.cancel-btn:hover {
  background: #555;
}

.profile-edit-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #333;
  background: #222;
  color: white;
}
</style>