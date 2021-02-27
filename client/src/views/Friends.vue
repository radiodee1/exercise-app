<template>
  <div class="visi">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <article class="message box" v-if="form_friends">
          <div class="message-header">
            <p>Friend Management</p>
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
                    v-if="l.status == 'new'"
                    @click="ask(k)"
                  >
                    Ask
                  </button>
                  <button
                    class="button is-primary is-small"
                    v-if="l.status == 'waiting'"
                    @click="confirm(k)"
                  >
                    Approve
                  </button>
                  <span v-if="l.status == 'confirmed'">Confirmed</span>
                  <span v-if="l.status == 'asked'">Waiting</span>
                </td>
              </tr>
            </table>
            <div class="control">
              <nav class="level">
                <div class="level-left">
                  <button class="button is-primary" @click="refresh()">
                    Refresh
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
let axios = require("axios").default;


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
    backend_port: Number
    //classOption: Function
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    ask: function (num) {
      console.log(num);
      this.list[num].status = "asked";
    },
    confirm: function (num) {
      console.log(num);
      this.list[num].status = "confirmed";
    },
    refresh: function () {
      this.list = this.makeList();
    },
    makeList: function () {
      const port = this.backend_port;
      const user_id = this.$root.user.id;
      let l = [];

      const p_list = {
        params: {
          id: user_id
        }
      };
      axios
        .get("http://localhost:" + port + "/friends", p_list)
        .then(function (response) {
          // handle success
          //const response_raw = response;
          //console.log(response.data);
          response = JSON.parse(response.data);
          for (let i = 0; i < response.length; i ++ ) {
            const dict1 = {};
            dict1.firstname = response[i].firstname;
            dict1.lastname = response[i].lastname;
            dict1.username = response[i].username;
            dict1.status = response[i].friend_status;
            dict1.friend_user_id = response[i].friend_user_id;

            if (dict1.status == null || typeof dict1.status == undefined) {
              dict1.status = "new";
            }
            if (dict1.username != null) {
              l.push(dict1);
            }
            //l.push(dict1);
          }

          //vm.$root.user.id = response.insertId;
          //console.log(vm.$root.user.id);
          //success = true;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
          //if (success) {
            //vm.focusNews();
          //}
        });

      
      //dict.firstname = "Dave";
      //l.push(dict2);
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