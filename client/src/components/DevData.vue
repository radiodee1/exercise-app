<template>
  <div>
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
            
        }
    },
    props: {

    },
    methods: {

    }
};
</script>
<style scoped>

table, td, th {
    border: solid 1px black;
    padding: 10px;
}
</style>