import mongoose,{Schema, Document} from "mongoose";

export interface Message extends Document{
    content: string;
    createdAt: Date;
}
export interface User extends Document{
    username: string;
    password: string;
    email: string;
    messages: Message[];
    createdAt: Date;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;

}

const MessageSchema: Schema<Message> = new Schema({
    content: {
    type: String, 
    required: true
    },
    createdAt: {
    type: Date, 
    required: true,
    default: Date.now
    }
})
const UserSchema: Schema<User> = new Schema({
   username: {
        type: String,
        required: [true, "Username is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    messages: [MessageSchema],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    verifyCode: {
        type: String,
        required: true
    },
    verifyCodeExpiry: {
        type: Date,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        required: true,
        default: true
    }
})

const UserModel = (mongoose.models.User as mongoose.Model<User> ) || mongoose.model<User>("User", UserSchema);
