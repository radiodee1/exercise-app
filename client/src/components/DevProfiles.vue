<template>
  <div class="">
    <div class="scrollable">
      <table>
        <tr>
          <th class="">Name</th>
          <th class="">User Name</th>
          <th class="">Start Date</th>
          <th class="">Action</th>
        </tr>
        <tr v-for="(item, k) in items" :key="k">
          <td>{{ item.firstname }} {{ item.lastname }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.date }}</td>

          <td>
            <button class="button is-primary is-small" @click="confirm(k)">
              View
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div>
      <!-- single user detail -->
      <pre>{{ single }}</pre>
    </div>
    <button class="button is-primary" @click="delete_user()">Delete</button>
  </div>
</template>
<script>
import { GetUserDevList, PostUserDelete } from "../models/users";
//import user from "../models/Session.js";
//import { GetUserLogin } from '../models/users';
//let axios = require("axios").default;

export default {
  name: "devprofiles",
  data: function () {
    return {
      items: [],
      single: {},
      index: null,
    };
  },
  props: {
    backend_port: Number,
    backend_url: String,
  },
  computed: {
    //items: [],//this.getUsers(),
  },
  methods: {
    getUsers: async function () {
      this.items = await GetUserDevList();
    },
    confirm: function (num) {
      this.index = num;
      this.single = this.items[num];
      console.log(num);
    },
    delete_user: async function () {
      const vm = this;
      let num = this.index;
      if (num === undefined || num === null) {
        return;
      }
      const id = this.items[num].id;
      const username = this.items[num].username;
      if (
        id !== undefined &&
        id !== null &&
        username != process.env.VUE_APP_DEV_USERNAME
      ) {
        await PostUserDelete(id).then(async function () {
          console.log("deleted " + id);

          vm.items = await GetUserDevList();
          vm.single = { };

        });
      }
    },
  },
  mounted: function () {
    this.getUsers();
  },
  created: function () {
    //this.getUsers();
  },
};
</script>
<style scoped>
table,
td,
th {
  border: solid 1px black;
  padding: 10px;
}
table {
  width: 100%;
}

.scrollable {
  overflow-y: scroll;
  height: 250px;
}
</style>