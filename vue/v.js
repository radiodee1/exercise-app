function doLoad() {

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello World!'
    }
  })
}
  
$(document).ready(function() {
    /* new app(); */
    doLoad();
})
    
    //alert('hello');
