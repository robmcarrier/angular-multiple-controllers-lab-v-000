function ContactController(){
  var vm = this;

  vm.name = "Steve Jobs";
  vm.email = "steve@apple.com";
  vm.phone = "09495885980";



  vm.changeName = function(){
    vm.name = "Tim Cook";
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController);
