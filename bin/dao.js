const db = require("./db");
const MessageModel = db.Mongoose.model( "messages", db.MessageSchema, "messages" );

// message
const addMessage = ({room, author, text, createdAt}) =>  new MessageModel( {room, author, text, createdAt} ).save();
const listMessagesByRoom = ({room}) => MessageModel.find({room}).lean().exec();

module.exports = {
    message: {
        add: addMessage,
        listByRoom: listMessagesByRoom
    }
};
