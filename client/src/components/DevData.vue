<template>
  <div>
    <table>
      <tr>
        <th class="">Name</th>
        <th class="">User Name</th>
        <th class="">Action</th>
      </tr>
      <tr>
        <td>David Liebman</td>
        <td>dcl@google.com</td>
        <td>Button</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
    name: "devdata",
    data: function () {

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