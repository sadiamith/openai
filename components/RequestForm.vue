<template>
  <div>
    <b-field label="Enter Prompt">
      <b-input maxlength="100" type="textarea" v-model="messageArea"></b-input>
    </b-field>
    <b-button type="is-success" @click="sendMessage">submit message</b-button>
    <b-button type="is-primary" @click="clearStorage"
      >clear local storage</b-button
    >

    <h3 class="title is-5">Responses</h3>
    <div v-for="message in allMessageStore" :key="message">
      <div class="container">
        <p><b>Prompt:</b> {{ message.prompt }}</p>
        <p><b>Reply:</b> {{ message.reply }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import API from "~/mixins/API.js";
export default {
  mixins: [API],
  data: () => {
    return {
      messageArea: "",
      robotResponse: "",
      allMessageStore: [],
    };
  },
  mounted() {
    if (localStorage.allMessageStore) {
      this.allMessageStore = JSON.parse(localStorage.allMessageStore);
    }
  },
  watch: {
    allMessageStore(newMessage) {
      localStorage.allMessageStore = JSON.stringify(newMessage);
    },
  },
  methods: {
    async sendMessage() {
      const response = await this.apiPost("completions", this.messageArea);
      this.robotResponse = response;

      this.allMessageStore.push({
        prompt: this.messageArea,
        reply: this.robotResponse,
      });

      this.messageArea = "";

      localStorage.setItem("allMessage", JSON.stringify(this.allMessageStore));
      console.log(response);
    },
    clearStorage() {
      localStorage.clear();
    },
  },
};
</script>

<style scoped>
.title {
  margin-top: 1em;
}
.container {
  margin: 1em 0 1em 0;
  background-color: #e2e8d9;
  padding: 1em 1em;
  border-radius: 10px;
  box-shadow: 0 0 11px rgba(135, 132, 132, 0.2);
}
</style>
