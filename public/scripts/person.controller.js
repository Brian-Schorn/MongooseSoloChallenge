app.controller('PersonController', function (PersonService) {
  var ctrl = this;

  PersonService.getList().then(function(list){
    console.log(list);
  });
});
