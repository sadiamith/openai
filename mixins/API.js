import axios from "axios";
export default {
  methods: {
    async apiRequest(type, endpoint, data) {
      const headers = {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      };

      const api =
        "https://api.openai.com/v1/engines/text-curie-001/" + endpoint;

      const payload = {
        prompt: "",
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };

      if (type === "post") {
        payload.prompt = data;
      }

      try {
        const response = await axios.post(api, payload, { headers });
        return response.data.choices[0].text;
      } catch (error) {
        console.log(error);
      }
    },

    async apiPost(endpoint, data) {
      const response = await this.apiRequest("post", endpoint, data);
      return response;
    },

    async apiGet(endpoint) {
      const response = await this.apiRequest("get", endpoint);
      return response;
    },
  },
};
