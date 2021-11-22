const rooms = {};

const createRoom = (roomId, player1Id) => {
    rooms[roomId] = [player1Id, ""];
    rooms[roomId].currentPlayer = 1;
  
}

const joinRoom = (roomId, player2Id) => {
    rooms[roomId][1] = player2Id;
}

const exitRoom = (roomId, player) => {
    if(player === 1){
        delete rooms[roomId];
    }
    else if(!(typeof roomId == 'undefined')){
        rooms[roomId][1] = "";
    }
}

module.exports = {rooms, createRoom, joinRoom, exitRoom};
