const socket = io("http://localhost:8000");
const name = prompt("whats your name");

//socket io server requests
socket.emit("new-user-joined" , name);

socket.on("user-joined" , (data) => {
    alert(`${name} has joined`)
})

socket.on("receive" , (data) =>{
    alert(`${data.name}: ${data.message}`)
})