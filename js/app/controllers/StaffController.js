function StaffController(){
  var vm = this;

  vm.name = "Test Dude";
  vm.email = "fake@apple.com";
  vm.phone = "09asddf5980";



  vm.changeName = function(){
    vm.name = "Tim Cook";
  };
}

angular
  .module('app')
  .controller('StaffController', StaffController);
