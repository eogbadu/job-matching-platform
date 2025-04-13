import { useState, useEffect } from 'react'
import useSocket from '../hooks/useSocket'

export default function MessageTest() {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState<string[]>([])
  const socketRef = useSocket()

  const sendMessage = () => {
    socketRef.current?.emit('sendMessage', message)
    setChat((prev) => [...prev, `You: ${message}`])
    setMessage('')
  }

  useEffect(() => {
    socketRef.current?.on('receiveMessage', (msg: string) => {
      setChat((prev) => [...prev, `Other: ${msg}`])
    })
  }, [])

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Test Messaging</h1>
      <div className="mb-4 space-y-2 border p-4 rounded h-48 overflow-y-auto bg-gray-100">
        {chat.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border mb-2"
        placeholder="Type your message"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  )
}
