const maxLoginAttempts = 5;
console.log("Max Login Attempts Allowed:  ", maxLoginAttempts);

let currentLogingAttempts = 0;
while (currentLogingAttempts < maxLoginAttempts) {
  console.log("Login Attempts :", currentLogingAttempts);
  currentLogingAttempts++;
}
