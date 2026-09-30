var prevRoom;

function moveRoom(direction) {
  console.log(prevRoom);
  if (prevRoom === undefined) {
    prevRoom = direction;
    document.querySelector(".house").classList.add(direction);
  } else {
    document.querySelector(".house").classList.replace(prevRoom, direction);
    prevRoom = direction;
  }

  //   document.querySelector(".house").classList.remove(direction);
}
function zoom() {
  document.querySelector(".house").classList.add("zoom");
}
