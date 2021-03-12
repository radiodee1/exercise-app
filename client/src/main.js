//import Vue from "vue";


import './assets/bulma.css';

//import 'bulma/css/bulma.css';
import "@fortawesome/fontawesome-free/js/all.js";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import { doLoad } from "./js/exercise.js";
import Vue from 'vue';

/* eslint-disable */

Vue.use(Buefy, {
    defaultIconPack: "fas"
});

doLoad();

