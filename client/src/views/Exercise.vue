<template>
  <!-- start exercise -->
  <div class="visi" v-if="form_exercise">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <article class="message box" v-if="true">
          <!-- v-if="form_exercise" -->
          <div class="message-header">
            <p>Exercise</p>
            <button
              class="delete"
              aria-label="delete"
              @click="cancel()"
            ></button>
          </div>
          <div class="message-body gray">
            <!-- start first dropdown -->
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
                  @click="controlDropdownType()"
                >
                  <span id="exercise_type_label">{{ exerciseType }}</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a
                    href="#"
                    class="dropdown-item"
                    @click="formChooseType('reps')"
                  >
                    reps
                  </a>
                  <a class="dropdown-item" @click="formChooseType('miles')">
                    miles
                  </a>
                  <a
                    class="dropdown-item"
                    @click="formChooseType('kilometers')"
                  >
                    kilometers
                  </a>
                  <a class="dropdown-item" @click="formChooseType('steps')">
                    steps
                  </a>
                  <a class="dropdown-item" @click="formChooseType('laps')">
                    laps
                  </a>
                  <a class="dropdown-item" @click="formChooseType('lbs')">
                    lbs
                  </a>
                  <a class="dropdown-item" @click="formChooseType('kg')">
                    kg
                  </a>
                </div>
              </div>
            </div>
            <!-- end first dropdown -->
            <div
              class="dropdown"
              id="exercise_type_deet"
              :class="{ 'is-active': eTypeDeetIsActive }"
            >
              <!-- class="is-active" -->
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  @click="controlDropdownDeet()"
                >
                  <span id="exercise_type_deet_label">{{
                    exerciseTypeDeet
                  }}</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu-deet" role="menu">
                <div class="dropdown-content">
                  <a
                    href="#"
                    class="dropdown-item"
                    @click="formChooseDeet('running')"
                  >
                    running
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('walking')">
                    walking
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('swimming')">
                    swimming
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('cycling')">
                    cycling
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('curls')">
                    curls
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('pushups')">
                    pushups
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('chinups')">
                    chinups
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('lifts')">
                    lifts
                  </a>
                  <a class="dropdown-item" @click="formChooseDeet('situps')">
                    situps
                  </a>
                </div>
              </div>
            </div>
            <!-- end second dropdown-->

            <!-- misc form parts -->

            <input
              class="input"
              type="number"
              placeholder="repeat #"
              style="width: 100px"
              min="0"
              id="exercise_num"
              v-model="valueNumber"
            />
            <nav class="level">
              <div class="level-left">
                <input
                  class="input"
                  type="number"
                  placeholder="Weight"
                  style="width: 100px"
                  min="0"
                  id="exercise_weight"
                  v-model="valueWeight"
                /><span class="label">Your weight in LBS</span>
              </div>
            </nav>
            <div v-if="show_message">
              <br />
              {{ weight_message }}
            </div>
            <button class="button" @click="formFinishExercise()">Report</button>
            <pre id="exercise_pre" v-show="exerciseShowSubmit">{{
              exerciseReport
            }}</pre>

            <div class="invis">
              <textarea
                id="message_txt"
                class="textarea"
                placeholder="What's on your mind?!"
                rows="5"
              ></textarea>
            </div>
            <!-- end misc form parts -->

            <div class="control">
              <nav class="level">
                <div class="level-left">
                  <button
                    class="button is-dark"
                    id="exercise_submit"
                    style="visibility: visible; display: block"
                    @click="submit()"
                    v-show="exerciseShowSubmit"
                  >
                    Submit
                  </button>
                  <imageview @load="loading"></imageview>
                  <!-- div class="file">
                    <label class="file-label">
                      <input
                        class="file-input is-primary"
                        type="file"
                        name="resume"
                        id="pic-button"
                        @change="showPicture"
                      />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label"> Choose a picture </span>
                      </span>
                    </label>
                  </div -->
                </div>
              </nav>
            </div>
            <figure class="image" v-show="show_picture">
              <img id="myImg2" :src="file"  />
            </figure>
          </div>
        </article>
      </div>
      <div class="column"></div>
    </div>
  </div>

  <!-- end exercise -->
</template>

<script>
import imageview from "../components/Image.vue";

export default {
  name: "exercise",
  components: {
    imageview: imageview,
  },
  data() {
    return {
      lbs_inch: 2.25,
      lbs_margin: 19,
      weight_message: "",
      show_message: false,
      show_picture: false,

      exerciseType: "Exercise Type",
      exerciseTypeDeet: "Exercise Details",

      eTypeIsActive: false,
      eTypeDeetIsActive: false,

      valueNumber: null,
      valueWeight: this.$root.user.weight_lbs,

      exerciseReport: "",
      exerciseShowSubmit: false,

      file: null,
    };
  },
  props: {
    newsfeed: Boolean,
    focusFormExercise: Function,
    form_exercise: Boolean,
    useFormSubmitExercise: Function,
    focusNews: Function,
    //_preview_image_ex: Function,
    feed_divs: Array,
    tree: Object,
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    formChooseType: function (i) {
      this.exerciseType = i;
      this.controlDropdownType();
    },
    formChooseDeet: function (i) {
      this.exerciseTypeDeet = i;
      this.controlDropdownDeet();
    },
    controlDropdownType: function () {
      this.eTypeIsActive = !this.eTypeIsActive;
    },

    controlDropdownDeet: function () {
      this.eTypeDeetIsActive = !this.eTypeDeetIsActive;
    },

    formFinishExercise: function () {
      const type = this.exerciseType;
      const deet = this.exerciseTypeDeet;
      const num = this.valueNumber;
      const weight = this.valueWeight;
      //console.log(weight);
      if (weight != this.$root.user.weight_lbs) {
        this.changeWeight(weight);
      }
      const i = `Exercise Type: ${type}\nExercise Details: ${deet}\nRepitions: ${num}\nWeight: ${weight} LBS\n`;
      this.exerciseReport = `Exercise Report:\n` + i;
      this.exerciseShowSubmit = !this.exerciseShowSubmit;
      if (this.exerciseShowSubmit === false) {
        this.valueNumber = null;
        this.valueWeight = this.$root.user.weight_lbs;
      }
    },
    showPicture: function () {
      this.show_picture = true;
      //this._preview_image_ex(e);
    },
    cancel: function () {
      this.show_message = false;
      this.show_picture = false;
      this.focusNews();
    },
    submit: function () {
      this.show_picture = false;
      this.show_message = false;
      this.useFormSubmitExercise(this.exerciseReport, this.file);
    },
    changeWeight: function (new_weight) {
      //console.log(new_weight);
      const w = +new_weight;
      const goal = this.$root.user.height_inches * this.lbs_inch;
      if (w > goal + this.lbs_margin) {
        this.weight_message = "Your weight is too high.";
        this.show_message = true;
      } else if (w < goal - this.lbs_margin) {
        this.weight_message = "Your weight is too low.";
        this.show_message = true;
      } else {
        this.weight_message = "Your weight is good.";
        this.show_message = true;
      }
      // save to db!!
      this.$root.user.weight_lbs = new_weight;
    },
    loading: function (f) {
      this.file = f;
      this.showPicture();
      //console.log('file ' + f);
    },
  },
};
</script>