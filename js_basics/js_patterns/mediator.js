const User = function (name) {
    this.name = name;
    this.chatRoom = null;

}

User.prototype = {
    send: function (message, to){
        this.chatRoom.send(message, this, to)
    },
    receive: function (message, from){
        console.log(`${from.name} to ${this.name} : ${message}`);
    }
}

const ChatRoom = function () {
    let users = {};

    return {
        register: function (user) {
            users[user.name] = user;
            user.chatRoom = this;
        },
        send: function (message, from, to) {
            if (to) {
                // this is a single user message
                to.receive(message, from);
            } else {
                // this is a mass message
                for (let usersKey in users) {
                    if (users[usersKey] !== from) {
                        users[usersKey].receive(message, from);
                    }
                }
            }
        }
    }
}

const bred = new User('Brad');
const jeff = new User('Jeff');
const serah = new User('Sarah');

const chatroom = new ChatRoom();

chatroom.register(bred);
chatroom.register(jeff);
chatroom.register(serah);

bred.send('hello jeff', jeff);
serah.send('hello brad, your the best dev ever', bred);
jeff.send('hello everyone');

