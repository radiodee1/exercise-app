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
    backend_port: Number,
    backend_url: String,
    user: Object,
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
      const port = this.backend_port;
      const url = this.backend_url;

      const user_id = this.$root.user.id;

      this.list[num].status = "waiting"; // <-- asked???

      const f_obj = {
        user_id: user_id, // this.list[num].id,
        friend_user_id: this.list[num].id,
        //id: this.list[num].id,
        friend_status: this.list[num].status,
        date: this.list[num].date,
      };
      //console.log({ fobj: f_obj });

      // post first friend request here -- insert db
      axios
        .post(url + port + "/friends", f_obj)
        .then(function (response) {
          // handle success

          console.log(response.data);
          response = JSON.parse(response.data);
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
    },
    confirm: function (num) {
      //console.log(num);
      const port = this.backend_port;
      const url = this.backend_url;
      //const user_id = this.$root.user.id;

      const f_obj = {
        change: {
          friend_status: "confirmed",
        },
        ident: {
          user_id: this.list[num].user_id,
          //id: this.list[num].id,
          friend_user_id: this.list[num].friend_user_id,
        },

        //date: this.list[num].date,
      };
      console.log(f_obj);
      console.log("----");
      this.list[num].status = "confirmed";
      // patch friend request here -- update db
      axios
        .patch(url + port + "/friends", f_obj)
        .then(function (response) {
          // handle success

          console.log(response.data);
          response = JSON.parse(response.data);
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
    },
    refresh: function () {
      this.list = this.makeList();
    },
    makeList: function () {
      const port = this.backend_port;
      const url = this.backend_url;
      const user_id = this.$root.user.id;
      let l = [];
      let d = {};
      let count = [];
      const vm = this;

      const order = {
        new: 0,
        asked: 1,
        waiting: 2,
        confirmed: 3,
      };

      const highest = {};

      const p_list = {
        params: {
          id: user_id,
        },
      };
      axios
        .get(url + port + "/friends", p_list)
        .then(function (response) {
          // handle success
          //const response_raw = response;

          response = JSON.parse(response.data);
          //console.log(response);
          for (let i = 0; i < response.length; i++) {
            const dict1 = {};
            dict1.firstname = response[i].firstname;
            dict1.lastname = response[i].lastname;
            dict1.username = response[i].username;
            dict1.status = response[i].friend_status;
            dict1.friend_user_id = response[i].friend_user_id;
            dict1.id = response[i].id;
            dict1.user_id = response[i].user_id;

            count.push([
              dict1.username,
              dict1.status,
              dict1.friend_user_id,
              dict1.user_id,
              dict1.id,
            ]);
            if (!(dict1.username in highest)) {

              highest[dict1.username] = `${dict1.status}`;
              console.log(dict1.username + " " + highest[dict1.username]);

            } else if (
              order[highest[dict1.username]] < order[dict1.status]
            ) {
              highest[dict1.username] = `${dict1.status}`;
              console.log(
                "repeat " +
                  order[`${highest[dict1.username].status}`] +
                  " " +
                  order[dict1.status]
              );
              continue;
            }
          //}
          ///////////////////////
          //for (let i in highest ) {
          //  const dict1 = highest[i];
          //  console.log(dict1);

            if (
              dict1.username != null &&
              typeof dict1.username == "string" &&
              typeof vm.$root.user.username == "string" &&
              dict1.username.trim() != vm.$root.user.username.trim() &&
              (dict1.friend_user_id === user_id || dict1.user_id === user_id) //||
              // || dict1.user_id === null
            ) {
              //l.push(dict1);
              d[dict1.username] = dict1;

              if (
                dict1.friend_user_id === user_id ||
                dict1.user_id === user_id
              ) {
                if (
                  dict1.friend_user_id === user_id &&
                  d[dict1.username].status === "waiting"
                ) {
                  // this is the same ID!!
                  d[dict1.username].status = "asked";
                } else if (
                  dict1.friend_user_id !== user_id && // !==
                  d[dict1.username].status === "asked"
                ) {
                  // this is not the ID!!
                  d[dict1.username].status = "waiting";
                }
              }

              const test_for_status = true;
              if (
                dict1.status !== "confirmed" &&
                dict1.status !== "asked" &&
                dict1.status !== "waiting" &&
                dict1.status !== "new" &&
                test_for_status
              ) {
                d[dict1.username].status = "new";
              }
            } else if (
              dict1.user_id != user_id &&
              dict1.friend_user_id != user_id &&
              dict1.username.trim() != vm.$root.user.username.trim()
            ) {
              //dict1.status = "new";
              //console.log(dict1);

              if (dict1.status === null) {
                dict1.status = "new";
              }
              ////
              
              if (
                dict1.friend_user_id !== user_id &&
                dict1.user_id !== user_id //&&
                
                
              ) {
                dict1.status = "new";
                //console.log("new " + dict1.username);
              }
              
              ////
              dict1.user_id = user_id;
              d[dict1.username] = dict1;
            }
          }
          for (let key in d) {
            l.push(d[key]);
          }
          console.log(user_id + " user");
          console.log(count);
          console.log(highest);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

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