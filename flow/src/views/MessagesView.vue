<!-- src/views/Messages.vue -->
<template>
    <div class="messages-container">
      <!-- Left Nav (20%) -->
      <aside class="left-nav">
        <h2>Menu</h2>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>
          <li><router-link to="/messages">Messages</router-link></li>
          <li><router-link to="/create-poll">Create Poll</router-link></li>
          <li><router-link to="/notifications">Notifications</router-link></li>
        </ul>
      </aside>
  
      <!-- Center (60%): Direct Messages area -->
      <main class="main-content">
        <h1>Direct Messages</h1>
  
        <div class="chat-container">
          <!-- Chat list on the left side of the center content -->
          <div class="chat-list">
            <h2>Chats</h2>
            <ul>
              <li
                v-for="(chat, index) in chats"
                :key="index"
                :class="{ active: activeChatIndex === index }"
                @click="setActiveChat(index)"
              >
                {{ chat.name }}
              </li>
            </ul>
          </div>
  
          <!-- Chat messages on the right side of the center content -->
          <div class="chat-messages" v-if="activeChat">
            <h2>{{ activeChat.name }}</h2>
            <div class="messages-list">
              <div
                v-for="(msg, msgIndex) in activeChat.messages"
                :key="msgIndex"
                :class="['message', msg.type]"
              >
                {{ msg.text }}
              </div>
            </div>
            <div class="message-input">
              <input
                v-model="newMessage"
                type="text"
                placeholder="Type your message..."
                @keyup.enter="sendMessage"
              />
              <button @click="sendMessage">Send</button>
            </div>
          </div>
        </div>
      </main>
  
      <!-- Right (20%): Trending Polls or Topics -->
      <aside class="right-trending">
        <h2>Trending</h2>
        <div
          class="trend-item"
          v-for="(trend, tIndex) in trending"
          :key="tIndex"
        >
          {{ trend }}
        </div>
      </aside>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MessagesView',
    data() {
      return {
        chats: [
          {
            name: 'Alice',
            messages: [
              { text: 'Hey, how are you?', type: 'received' },
              { text: "I'm good, thanks!", type: 'sent' },
            ],
          },
          {
            name: 'Bob',
            messages: [
              { text: 'Check out this new poll!', type: 'received' },
            ],
          },
          {
            name: 'Charlie',
            messages: [
              { text: 'Long time no see!', type: 'received' },
            ],
          },
        ],
        activeChatIndex: 0,
        newMessage: '',
        trending: [
          'Favorite Movie Franchise Poll',
          '2024 Election Poll',
          'Which JS Framework? Poll',
        ],
      }
    },
    computed: {
      activeChat() {
        return this.chats[this.activeChatIndex] || null
      },
    },
    methods: {
      setActiveChat(index) {
        this.activeChatIndex = index
        this.newMessage = ''
      },
      sendMessage() {
        if (!this.newMessage.trim()) return
        this.activeChat.messages.push({
          text: this.newMessage,
          type: 'sent',
        })
        this.newMessage = ''
      },
    },
  }
  </script>
  
  <style scoped>
  /* Root container: 3 columns (20/60/20) */
  .messages-container {
    display: flex;
    min-height: 100vh;
    background-color: #000; /* black background */
    color: white;
  }
  
  /* Left column (20%) */
  .left-nav {
    width: 20%;
    background-color: #111; /* slightly lighter black */
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
  
  /* Center (60%) */
  .main-content {
    width: 60%;
    padding: 1rem;
    box-sizing: border-box;
    border-right: 2px solid crimson;
  }
  .main-content h1 {
    color: crimson;
    margin-bottom: 1rem;
  }
  
  /* Chat container with two sections: chat list and messages */
  .chat-container {
    display: flex;
    gap: 1rem;
  }
  .chat-list {
    width: 35%;
    background-color: #222;
    border: 1px solid crimson;
    border-radius: 8px;
    padding: 1rem;
  }
  .chat-list h2 {
    margin-bottom: 1rem;
  }
  .chat-list ul {
    list-style: none;
    padding: 0;
  }
  .chat-list li {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: background 0.2s;
    background-color: #333;
    border-radius: 4px;
  }
  .chat-list li:hover {
    background-color: #444;
  }
  .chat-list li.active {
    background-color: crimson;
  }
  
  .chat-messages {
    flex: 1;
    background-color: #222;
    border: 1px solid crimson;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }
  .chat-messages h2 {
    margin: 1rem;
    color: #fff;
  }
  .messages-list {
    flex-grow: 1;
    padding: 0 1rem 1rem;
    overflow-y: auto;
  }
  .message {
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 8px;
    max-width: 60%;
    word-wrap: break-word;
  }
  .message.received {
    background-color: #444;
    align-self: flex-start;
  }
  .message.sent {
    background-color: crimson;
    color: #fff;
    align-self: flex-end;
  }
  .message-input {
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
  }
  .message-input input {
    flex: 1;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #333;
    background: #333;
    color: #fff;
  }
  .message-input button {
    background-color: crimson;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .message-input button:hover {
    background-color: #ff5f7a;
  }
  
  /* Right column (20%) */
  .right-trending {
    width: 20%;
    padding: 1rem;
    box-sizing: border-box;
  }
  .right-trending h2 {
    color: crimson;
    margin-bottom: 1rem;
  }
  .trend-item {
    background-color: #222;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid crimson;
    color: #fff;
  }
  </style>
  