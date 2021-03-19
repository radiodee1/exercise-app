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

    {{ lowerStandardTime }} - {{ upperStandardTime }}
    <table>
      <tr>
        <th class="">Name</th>
        <th class="">First Week</th>
        <th class="">Second Week</th>
      </tr>
      <tr>
        <td>David Liebman</td>
        <td>33 posts</td>
        <td>4 posts</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "devdata",
  data: function () {
    return {
      eTypeIsActive: false,
      timeLength: "Days",
      //prevNumber: 0,

      lowerStandardTime: 0,
      upperStandardTime: 0,

      lowerUnixTime: 0,
      upperUnixTime: 0,

      totalUnixSpanTime: 0,
      unixTimeNow: 0,

      spans: 1,
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
      this.totalUnixSpanTime = hours[this.timeLength] * 60 * 60 * 1000; // hours * mins * secs * 1000
      this.unixTimeNow = Date.now(); // * 1000;
      let start = this.spans * this.totalUnixSpanTime;
      this.lowerStandardTime = new Date(
        this.unixTimeNow - start
      ).toLocaleString();
      this.upperStandardTime = new Date(
        this.unixTimeNow - start + this.totalUnixSpanTime
      ).toLocaleString();
    },
  },
  watch: {
    spans: function () {
      this.setSpanTime();
    }
  },
  mounted: function() {
    this.setSpanTime();
  }
};
</script>
<style scoped>
table,
td,
th {
  border: solid 1px black;
  padding: 10px;
}
</style>