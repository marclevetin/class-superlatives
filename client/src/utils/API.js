import axios from "axios";

export default {
  getSuperlatives: function() {
    return axios.get("/api/superlatives");
  },
  getSuperlative: function(id) {
    return axios.get("/api/superlatives/" + id);
  },
  deleteSuperlative: function(id) {
    return axios.delete("/api/superlatives/" + id);
  },
  saveSuperlative: function(payload) {
    return axios.post("/api/superlatives", payload);
  },
  updateSuperlative: function(id, payload) {
    const update = { '$set': { person: payload.person, words: payload.words } }
    return axios.put('/api/superlatives/' + id, update, { new: true })
  },
  incrementVote: function(id) {
    const update = { $inc: {count: 1} }
    return axios.put('/api/superlatives/' + id, update)
  }
};
