<template>
    <nav class="navbar gray" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <img src="./pic/app.png" width="56" height="56">
        </a>

        <a role="button" class="navbar-burger " aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample">

          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>


        </a>
        <div class="navbar-menu " id="navMenu">

        </div>

      </div>

      <div id="navbarBasicExample" class="navbar-menu is-active" v-if="newsfeed">
        <div class="navbar-start">
          <a class="navbar-item" onclick="focusFormExercise()">
            Exercise
          </a>

          <a class="navbar-item" onclick="testInsertWorkout()">
            Workout
          </a>

          <a class="navbar-item" onclick="focusFormMessage()">
            Message
          </a>

        </div>

        <div class="navbar-end">

        </div>

      </div>


    </nav>
</template>

<script>
    export default {
        name: 'bannercomponent',
        data () {
            return {
            }
        }
    }
</script>