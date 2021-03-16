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
        <pre>{{single}}</pre>
    </div>

  </div>
</template>
<script>
let axios = require("axios").default;

export default {
  name: "devprofiles",
  data: function () {
    return {
      items: [],
      single: {},
    };
  },
  props: {
    backend_port: Number,
    backend_url: String
  },
  computed: {
    //items: [],//this.getUsers(),
  },
  methods: {
    getUsers: function () {
      let response = [];
      const port = this.backend_port;
      const url = this.backend_url;
      console.log(url+port);
      let vm = this;
      axios
        .get(url + port + "/users")
        .then(function (response_raw) {
          // handle success
          //console.log(response);
          response =  JSON.parse(response_raw.data);
          //console.log(response);
          for(let i = 0; i < response.length; i ++) {
            response[i].picture = null;
          }

          vm.items = response;
          //console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
          //focusNewsx();
          //if (success) {
          //console.log(vm.$root.user.id);
          //vm.focusNews();
          //}
        });
    },
    confirm: function (num) {
        this.single = this.items[num];
        console.log(num);
    },
  },
  created: function () {
    this.getUsers();
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