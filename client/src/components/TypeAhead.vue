<template>
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find a User">
            <b-autocomplete
                :data="data"
                placeholder="e.g. J. Doe"
                field="title"
                :loading="isFetching"
                @typing="getAsyncData"
                @select="option => selected = option">

                <template slot-scope="props">
                    <div class="media">
                        <div class="media-left">
                            <img width="32" :src="``">
                        </div>
                        <div class="media-content">
                            {{ props.option.title }}
                            <br>
                            <small>
                                Released at {{ props.option.release_date }},
                                rated <b>{{ props.option.vote_average }}</b>
                            </small>
                        </div>
                    </div>
                </template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
    import debounce from 'lodash/debounce';
    //import debounce from '@types/lodash'
    //import axios from "axios";
    import {GetUserTypeList} from "../models/users.js"

    export default {
        data() {
            return {
                data: [],
                selected: null,
                isFetching: false
            }
        },
        methods: {
            // You have to install and import debounce to use it,
            // it's not mandatory though.
            getAsyncData:  debounce( async function (name) {
                if (!name.length) {
                    this.data = []
                    return
                }
                let vm = this;
                this.isFetching = true
                let yy =  GetUserTypeList(name);
                console.log(yy);
                yy.then( function (x)  {
                    console.log(x)
                    //vm = inner;
                    //var data = []
                    x.results.forEach((item) => vm.data.push(item))
                })
                .catch((error) => {
                        this.data = []
                        throw error
                    })
                    .finally(() => {
                        this.isFetching = false
                    })

            })
        }
    
    }
    
</script>