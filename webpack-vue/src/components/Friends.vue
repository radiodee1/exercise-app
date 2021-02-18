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
              <tr v-for="(l, k ) in list" :key="k" class="list-style">
                <td class="">{{ l.firstname }} {{ l.lastname }}</td>
                <td class="">{{ l.username }}</td>

                <td>
                  <button class="button is-primary is-small" v-if="l.status =='new'" @click="ask(k);">Ask</button>
                  <button class="button is-primary is-small" v-if="l.status =='waiting'" @click="confirm(k)">Approve</button>
                  <span v-if="l.status == 'confirmed'">Confirmed</span>
                  <span v-if="l.status == 'asked'">Waiting</span>

                </td>
              </tr>
            </table>
            <div class="control">
              <nav class="level">
                <div class="level-left">
                  <button
                    class="button is-primary"
                    @click="refresh();"
                  >
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
export default {
  name: "friends",
  data() {
    return {
      list: this.makeList(),
    };
  },
  props: {
    //newsfeed: Boolean,
    form_friends: Boolean,

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
      let l = [];
      const dict = {
        firstname: "David",
        lastname: "Liebman",
        username: "xliebman",
        status: "waiting", // confirmed, asked, new, waiting,  etc.
        friend_user_id: 0,
      };
      l.push(dict);
      const dict2 = {
        firstname: "Dave",
        lastname: "Liebman",
        username: "yliebman",
        status: "new", // confirmed, asked, new, waiting,  etc.
        friend_user_id: 1,
      };
      //dict.firstname = "Dave";
      l.push(dict2);
      return l;
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