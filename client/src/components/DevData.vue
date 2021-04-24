<template>
  <div>
    <div
      class="dropdown"
      id="exercise_type"
      :class="{ 'is-active': eTypeIsActive }"
    >
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          @click="controlDropdownMenu()"
        >
          <span id="time_length_label">{{ timeLength }}</span>
          <span class="icon is-small"
            ><i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a
            href="#"
            class="dropdown-item"
            @click.prevent="formChooseType('Days')"
          >
            Days
          </a>
          <a class="dropdown-item" @click.prevent="formChooseType('Weeks')">
            Weeks
          </a>
          <a class="dropdown-item" @click.prevent="formChooseType('Months')">
            Months
          </a>
          <a class="dropdown-item" @click.prevent="formChooseType('Years')">
            Years
          </a>
        </div>
      </div>
    </div>
    <!-- end dropdown -->
    <input
      class="input"
      type="number"
      placeholder="Previous"
      style="width: 100px"
      min="0"
      id="previous_num"
      v-model="spans"
    />
    <b-button type="is-primary" @click.prevent="fillList()">Submit</b-button>
    <div class="box">{{ lowerStandardTime }} - {{ upperStandardTime }}</div>
    <div class="scrollable">
    <table>
      <tr>
        <th class="">Name</th>
        <th class="">User Name</th>
        <th class="">Sample Date</th>
        <th class="">Posts</th>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <td>{{item.firstname}} {{item.lastname}}</td>
        <td> {{item.username}}</td>
        <td> {{item.date_now}} </td>
        <td>{{item.count}}</td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
import { GetDevList } from "../models/dev.js";

export default {
  name: "devdata",
  data: function () {
    return {
      eTypeIsActive: false,
      timeLength: "Days",

      lowerStandardTime: 0,
      upperStandardTime: 0,

      lowerMillisecondTime: 0,
      upperMillisecondTime: 0,

      totalMillisecondSpanTime: 0,
      MillisecondTimeNow: 0,

      spans: 1,

      list: [],
    };
  },
  props: {},
  methods: {
    controlDropdownMenu: function () {
      this.eTypeIsActive = !this.eTypeIsActive;
    },
    formChooseType: function (length) {
      this.timeLength = length;
      this.controlDropdownMenu();
      this.setSpanTime();
    },
    setSpanTime: function () {
      let hours = {
        Days: 24,
        Weeks: 24 * 7,
        Months: 24 * 30,
        Years: 24 * 365,
      };
      this.totalMillisecondSpanTime = hours[this.timeLength] * 60 * 60 * 1000; // hours * mins * secs * 1000
      this.MillisecondTimeNow = Date.now(); 
      let start = this.spans * this.totalMillisecondSpanTime;

      this.lowerMillisecondTime = this.MillisecondTimeNow - start;
      this.upperMillisecondTime =
        this.MillisecondTimeNow - start + this.totalMillisecondSpanTime;

      this.lowerStandardTime = new Date(
        this.lowerMillisecondTime
      ).toLocaleString();
      this.upperStandardTime = new Date(
        this.upperMillisecondTime
      ).toLocaleString();
    },
    fillList: async function () {
      this.setSpanTime();
      //console.log(this.lowerMillisecondTime + " " + this.upperMillisecondTime);
      //this.setSpanTime();
      this.list = await GetDevList(
        this.lowerMillisecondTime,
        this.upperMillisecondTime
      );
      for (let i = 0; i < this.list.length; i ++ ) {
        if (this.list[i].count == null) {
          this.list[i].count = 0;
          this.list[i].date_now = "--";
        }
      }
    },
  },
  watch: {
    spans: function () {
      this.setSpanTime();
    },
  },
  mounted: function () {
    this.setSpanTime();
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

.scrollable {
  overflow-y: scroll;
  height: 550px;
}
</style>