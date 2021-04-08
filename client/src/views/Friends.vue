<template>
  <div class="visi">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <article class="message box" v-if="form_friends">
          <div class="message-header">
            <p>Friend Management - {{ user.username }}</p>
            <button
              class="delete"
              aria-label="delete"
              @click="cancel()"
            ></button>
          </div>
          <div class="message-body gray">
            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Controls</th>
              </tr>
              <tr v-for="(l, k) in list" :key="k" class="list-style">
                <td class="">{{ l.firstname }} {{ l.lastname }}</td>
                <td class="">{{ l.username }}</td>

                <td>
                  <button
                    class="button is-primary is-small"
                    v-if="l.status === 'new'"
                    @click="ask(k)"
                  >
                    Ask
                  </button>
                  <button
                    class="button is-primary is-small"
                    v-if="l.status === 'asked'"
                    @click="confirm(k)"
                  >
                    Approve
                  </button>
                  <span v-if="l.status === 'confirmed'">Confirmed</span>
                  <span v-if="l.status === 'waiting'">Waiting</span>
                </td>
              </tr>
            </table>
            <div class="control">
              <nav class="level">
                <div class="level-left">
                  <button class="button is-primary" @click="refresh()">
                    Refresh
                  </button>
                  <button class="button " @click="cancel()">
                    Exit
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
//import { delete } from 'vue/types/umd';
//let axios = require("axios").default;
import { GetFriendList, GetList, PatchConfirmFriend, PostNewFriendAsk, SetList } from "../models/friends.js";

export default {
  name: "friends",
  data() {
    return {
      list: this.makeList(),
      show_friends: this.form_friends,
    };
  },
  props: {
    //newsfeed: Boolean,
    form_friends: Boolean,
    focusNews: Function,
    backend_port: Number,
    backend_url: String,
    user: Object,
    //classOption: Function
  },
  computed: {},
  watch: {
    list: function () {
      //this.makeList();
      //this.$forceUpdate();
      console.log("----");
      console.log(this.list);
    },
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    ask: async function (num) {

      const user_id = this.$root.user.id;

      SetList(this.list);
      this.list = await PostNewFriendAsk(num, user_id);
      this.list = GetList();
     
    },
    confirm: async function (num) {
      
      SetList(this.list);
      this.list = await PatchConfirmFriend(num);

      
    },
    refresh: function () {
      this.list = this.makeList();
    },
    makeList: async function () {

      const user_id = this.$root.user.id;
      

      let l = await GetFriendList(user_id, this.$root.user.username);
      //console.log(response);
      
      this.list = l;
      return l;
    },
    cancel: function () {
      this.focusNews();
    },
  },
};
</script>
<style scoped>
.list-style,
td,
th {
  border: 3px solid black;
  border-collapse: collapse;
  border-left: 3px solid black;
  width: 100%;
}
</style>