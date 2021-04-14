<template>
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find a Friend">
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. JDoe"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
import { GetUserFriendList } from '../models/users'
    export default {
        name: "friendexplorer",
        data() {
            return {
                data: [ ],
                name: '',
                selected: null,
                search_id : null,
                users_id: {}
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        },
        methods: {
            getData: async function() {
                let user_id = this.$root.user.id;
                let users = await GetUserFriendList(user_id);
                this.data = [];
                for (let i = 0; i < users.length; i ++) {
                    if (users[i].username != this.$root.user.username) {
                        this.data.push(users[i].username);
                        this.users_id[users[i].username] = users[i].id;
                    }
                }
            }
        },
        mounted: function () {
            this.getData();
        },
        watch: {
            selected: function() {
                this.search_id = this.users_id[this.selected];
                //console.log(this.selected + " selected " + this.search_id);
                //console.log(val);
                if (this.search_id != null && this.search_id != undefined) {
                    this.$emit('selected', this.search_id);
                }
            }
        }
    }
</script>
<style scoped>
section {
    border: 1px solid black;
    background-color: lightgray;
    padding: 15px;
}
</style>