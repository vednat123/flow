<template>
  <div class="messages-container">
    <!-- Left Sidebar (menu) -->
    <SidebarMenu />

    <!-- Middle Chat Area -->
    <main class="main-timeline" v-if="activeChat">
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

    <!-- Right Sidebar (chat list) -->
    <aside class="right-sidebar">
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
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue';

export default {
  name: 'MessagesView',
  components: {
    SidebarMenu,
  },
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
    };
  },
  computed: {
    activeChat() {
      return this.chats[this.activeChatIndex] || null;
    },
  },
  methods: {
    setActiveChat(index) {
      this.activeChatIndex = index;
      this.newMessage = '';
    },
    sendMessage() {
      if (!this.newMessage.trim()) return;
      this.activeChat.messages.push({
        text: this.newMessage,
        type: 'sent',
      });
      this.newMessage = '';
    },
  },
};
</script>

<style scoped>
.messages-container {
  display: flex;
  min-height: 100vh;
  background-color: #000;
  color: white;
  font-family: 'Segoe UI', sans-serif;
}

/* Middle Chat Column OVERWRITES main.css main-timeline*/
.main-timeline {
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 1rem;
  border-bottom: 1px solid crimson;
  background-color: #111;
}

.chat-header h2 {
  margin: 0;
  color: crimson;
}

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

/* Right Sidebar (chat list) */
.right-sidebar {
  width: 20%;
  background-color: #111;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
}

.right-sidebar h2 {
  color: crimson;
  margin-bottom: 1rem;
}

.right-sidebar ul {
  list-style: none;
  padding: 0;
}

.right-sidebar li {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 10px;
  cursor: pointer;
  background-color: #222;
  transition: background 0.3s;
}

.right-sidebar li:hover {
  background-color: #333;
}

.right-sidebar li.active {
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
</style>
