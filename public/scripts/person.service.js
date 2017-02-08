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
this.addPerson = function (person) {
  console.log("Adding:",person);
  return $http.post('/person', person);
}

  //put
this.updatePerson = function(id, updatedData) {
  console.log("Updating", id, "with", updatedData)
  return $http.put('/person/'+id, updatedData)
}


  //delete
this.deletePerson = function (id) {
  console.log("Deleting:", id);
  return $http.delete('/person/' + id);
}






});
