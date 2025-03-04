// You don't need to modify this file.
let part1a, part1b, part2a, part2b, part3a, part3b, part4a, part4b;

part1a = document.getElementById("part1a");
part1b = document.getElementById("part1b");
part2a = document.getElementById("part2a");
part2b = document.getElementById("part2b");
part3a = document.getElementById("part3a");
part3b = document.getElementById("part3b");
part4a = document.getElementById("part4a");
part4b = document.getElementById("part4b");

function handleButtonOneA() {
  partOneA();
}
part1a.onclick = handleButtonOneA;

function handleButtonOneB() {
  partOneB();
}
part1b.onclick = handleButtonOneB;

function handleButtonTwoA() {
  partTwoA();
}
part2a.onclick = handleButtonTwoA;

function handleButtonTwoB() {
  partTwoB();
}
part2b.onclick = handleButtonTwoB;

function handleButtonThreeA() {
  partThreeA();
}
part3a.onclick = handleButtonThreeA;

function handleButtonThreeB() {
  partThreeB();
}
part3b.onclick = handleButtonThreeB;

function handleButtonFourA() {
  partFourA();
}
part4a.onclick = handleButtonFourA;

function handleButtonFourB() {
  partFourB();
}
part4b.onclick = handleButtonFourB;

document.getElementById("addDataButton").onclick = function() {
  let newData = prompt("If you have any questions or need further assistance you can email me at tu.es.bell66@gmail.com:");

  messageList.innerHTML += `<li>{newData}</li>`;
}