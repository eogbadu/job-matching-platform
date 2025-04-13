import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/') // redirect to dashboard
    } catch (err) {
        console.error("Login error:", err);
        alert("Login failed")
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>
      <input className="mb-2 p-2 w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="mb-4 p-2 w-full" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleLogin}>Log In</button>
    </div>
  )
}
