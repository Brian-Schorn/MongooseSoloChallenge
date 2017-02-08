app.controller('PersonController', function (PersonService) {
  var ctrl = this;

  //Updates the Person Listing of all Persons in the DB
  ctrl.resetList = function() {
    PersonService.getList().then(function(list){
      ctrl.PersonList = list;
      console.log("List of people:", ctrl.PersonList);
    });
  }

  ctrl.resetList();

  //Adds a person to the DB
  ctrl.addPerson = function (person) {
    ctrl.person = null;
    PersonService.addPerson(person).then(ctrl.resetList());

  }

  //Deletes a person from the DB
  ctrl.deletePerson = function(id) {
    PersonService.deletePerson(id).then(ctrl.resetList())};


  //Updates a person in the DB
  ctrl.updatePerson = function(id, updatedData) {
    console.log("Updated Data", updatedData);
    PersonService.updatePerson(id, updatedData).then(ctrl.resetList());
  }

});
