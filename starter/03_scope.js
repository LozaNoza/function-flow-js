// TODO: Create a global variable 'role' with value "guest"
// TODO: Write a function 'setRole' that declares a local variable also called 'role' with value "admin"
// TODO: Log the local role inside the function
// TODO: Write another function 'showGlobalRole' that logs the global role

let role = "guest";

function setRole() {
  // Your code here
  let role = "admin";
  console.log(role);
};

setRole();

function showGlobalRole(role) {
     // Your code here
    console.log(role);
 }


 showGlobalRole(role);
// module.exports = { setRole, showGlobalRole, role };
