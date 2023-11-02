import { useState } from "react"
import { auth, googleAuth } from "../../config/firebase"
import { createUserWithEmailAndPassword,signInWithPopup,signOut } from "firebase/auth"

function Auth() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

const signIn = async() => {
   
    try{
        await createUserWithEmailAndPassword(auth,email,password)
    }catch(err){
        console.log(err)
    }
}

const signinWithGoogle = async() => {
    try{
        await signInWithPopup(auth,googleAuth)
    }catch(err){
        console.log(err)
    }
}
const Logout = async() => {
    try{
        await signOut(auth)
    }catch(err){
        console.log(err)
    }
}

console.log(auth?.currentUser?.photoURL)
  return (
    <div>
       <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
       <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
       <button onClick={signIn}>Sign In</button>
       <button onClick={signinWithGoogle}>sign in with Google</button>
       <button onClick={Logout}>Logout</button>
    </div>
  )
}

export default Auth
