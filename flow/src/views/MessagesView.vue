<template>
  <div class="messages-wrapper">
    <!-- Top Navigation Bar -->
    <nav class="top-nav">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/settings">Settings</router-link></li>
        <li><router-link to="/messages">Messages</router-link></li>
        <li><router-link to="/create-poll">Create Poll</router-link></li>
        <li><router-link to="/notifications">Notifications</router-link></li>
      </ul>
    </nav>

    <!-- Chat Layout -->
    <div class="chat-layout">
      <!-- Sidebar Chat List -->
      <aside class="chat-sidebar">
        <h2>Chats</h2>
        <ul>
          <li
            v-for="(chat, index) in chats"
            :key="index"
            :class="{ active: activeChatIndex === index }"
            @click="setActiveChat(index)"
          >
            <div class="chat-avatar">{{ chat.name.charAt(0) }}</div>
            <span class="chat-name">{{ chat.name }}</span>
          </li>
        </ul>
      </aside>

      <!-- Chat Area -->
      <main class="chat-main" v-if="activeChat">
        <header class="chat-header">
          <h2>{{ activeChat.name }}</h2>
        </header>

        <div class="messages-scroll">
          <div
            v-for="(msg, index) in activeChat.messages"
            :key="index"
            :class="['message-bubble', msg.type]"
          >
            {{ msg.text }}
          </div>
        </div>

        <div class="chat-input-area">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Type your message..."
            @keyup.enter="sendMessage"
          />
          <button @click="sendMessage">Send</button>
        </div>
      </main>
    </div>
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
          messages: [{ text: 'Check out this new poll!', type: 'received' }],
        },
        {
          name: 'Charlie',
          messages: [{ text: 'Long time no see!', type: 'received' }],
        },
      ],
      activeChatIndex: 0,
      newMessage: '',
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
.messages-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: white;
  font-family: 'Segoe UI', sans-serif;
}

/* Top Nav Bar */
.top-nav {
  width: 100%;
  background-color: #111;
  padding: 1rem;
  border-bottom: 2px solid crimson;
}
.top-nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.top-nav li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  transition: background 0.3s;
}
.top-nav li a:hover {
  background-color: crimson;
}

/* Chat layout */
.chat-layout {
  flex-grow: 1;
  display: flex;
  overflow: hidden;
}

/* Sidebar */
.chat-sidebar {
  width: 25%;
  background-color: #111;
  padding: 1rem;
  border-right: 2px solid crimson;
  box-sizing: border-box;
  overflow-y: auto;
}
.chat-sidebar h2 {
  color: crimson;
  margin-bottom: 1rem;
}
.chat-sidebar ul {
  list-style: none;
  padding: 0;
}
.chat-sidebar li {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 10px;
  cursor: pointer;
  background-color: #222;
  transition: background 0.3s;
}
.chat-sidebar li:hover {
  background-color: #333;
}
.chat-sidebar li.active {
  background-color: crimson;
}
.chat-avatar {
  width: 40px;
  height: 40px;
  background-color: #888;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #000;
  margin-right: 0.75rem;
  font-size: 1.2rem;
  background: #fff;
}
.chat-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
}

/* Main Chat Area */
.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #000;
}

/* Header */
.chat-header {
  padding: 1rem;
  border-bottom: 1px solid crimson;
  background-color: #111;
}
.chat-header h2 {
  margin: 0;
  color: crimson;
}

/* Messages */
.messages-scroll {
  flex-grow: 1;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.message-bubble {
  max-width: 70%;
  padding: 0.8rem 1.2rem;
  border-radius: 18px;
  font-size: 1rem;
  line-height: 1.4;
  word-wrap: break-word;
}
.message-bubble.sent {
  background-color: crimson;
  color: white;
  align-self: flex-end;
}
.message-bubble.received {
  background-color: #333;
  color: white;
  align-self: flex-start;
}

/* Input Area */
.chat-input-area {
  padding: 1rem;
  border-top: 1px solid #222;
  display: flex;
  gap: 0.75rem;
}
.chat-input-area input {
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #333;
  background-color: #222;
  color: white;
  font-size: 1rem;
}
.chat-input-area button {
  background-color: crimson;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}
.chat-input-area button:hover {
  background-color: #ff5f7a;
}
</style>
