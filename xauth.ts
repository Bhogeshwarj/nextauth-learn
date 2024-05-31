// import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// import bcrypt from "bcryptjs"
// import dbConnect from  "@/lib/db/dbConnect"
// import UserModel from "@/model/User"

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Credentials({
//         id:"credentials",
//         name:"credentials",
//         credentials:{
//             username:{label:"Username", type:"text"},
//             password:{label:"Password", type:"password"}
//         },
//        async authorize(credentials):Promise<any>{
//         await dbConnect()
//         try{
//             const user  = await UserModel.findOne({
//                 $or:[
//                     {emailL:credentials.username},
//                     {username:credentials.username}
//                 ]
//             })

//             if(!user){
//                 throw new Error("Invalid Credentials : nO user find with this email")
//             }

//             if(!user.isVerified){
//                 throw new Error("User not verified, Please verified ")
//             }

//             const isPasswordCorrect = await bcrypt.compare(credentials.password ,user.password)


//             if(isPasswordCorrect){
//                 return user
//             }else{
//                 throw new Error("Invalid Credentials : Incorrect Password")
//             }
//         }catch(err:any){
//             throw new Error(err)
//         }
//        }
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token._id = user._id?.toString(); // Convert ObjectId to string
//         token.isVerified = user.isVerified;
//         token.isAcceptingMessages = user.isAcceptingMessages;
//         token.username = user.username;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user._id = token._id;
//         session.user.isVerified = token.isVerified;
//         session.user.isAcceptingMessages = token.isAcceptingMessages;
//         session.user.username = token.username;
//       }
//       return session;
//     },
//   },
//   basePath: "/auth",
//   pages:{
//     signIn: '/signin'
//   },
//   session:{
//     strategy:"jwt"
//   },
//   secret:process.env.AUTH_SECRET,
 

// })