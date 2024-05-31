'use client'
import { useSession,signIn,signOut } from 'next-auth/react'


export default function Component(){
    // const session = true
const {data: session} = useSession()
if(session){
    return(
        <>
        Signed in as {session.user.email} <br />
        <button onClick={()=> signOut()}></button>
        </>
    )
}

  return (
    <div>
        Not Signed in  <br />
        <button className='bg-orange-400' onClick={()=>{
            signIn()
        }}>Sign In</button>
    </div>
  )
}

