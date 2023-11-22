const mongoose = require( "mongoose" );
mongoose.connect( "mongodb://localhost:27017/syo_server_messenger_wa" );

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        cellphone: String
    }, { 
        collection: "users"
    }
);

const messageSchema = new mongoose.Schema(
    {
        room: String,
        text: String,
        author: String
    }, { 
        collection: "messages"
    }
);

module.exports = {
    Mongoose: mongoose,
    MessageSchema: messageSchema,
    UserSchema: userSchema
};