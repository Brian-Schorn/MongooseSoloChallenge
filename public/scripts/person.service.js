app.service('PersonService', function ($http) {

  //get
this.getList = function () {
  return $http.get('/person').then(function (response) {
    console.log("Got a response from the DB", response);
    return response.data;
  }).catch(function(err) {
    console.log('Error getting info from DB', err);
  });
};

  //post
this.addPerson = function () {

}

  //put



  //delete







});
