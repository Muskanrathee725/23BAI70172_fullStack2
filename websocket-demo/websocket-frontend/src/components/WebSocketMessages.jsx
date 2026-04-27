import { useEffect, useRef, useState } from 'react'
import { Client } from '@stomp/stompjs'
import SockJS from 'sockjs-client'

const SOCKET_URL = 'http://localhost:8080/ws'

export default function WebSocketMessages() {
  const [messages, setMessages]   = useState([])
  const [connected, setConnected] = useState(false)
  const [input, setInput]         = useState('')
  const clientRef                 = useRef(null)
  const listEndRef                = useRef(null)

  // Auto-scroll to the newest message
  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    const client = new Client({
      // Use SockJS as the transport factory
      webSocketFactory: () => new SockJS(SOCKET_URL),

      onConnect: () => {
        setConnected(true)

        // Subscribe to the server broadcast topic
        client.subscribe('/topic/messages', (frame) => {
          const msg = JSON.parse(frame.body)
          setMessages((prev) => [...prev, msg])
        })
      },

      onDisconnect: () => {
        setConnected(false)
      },

      onStompError: (frame) => {
        console.error('STOMP error', frame)
      },
    })

    client.activate()
    clientRef.current = client

    // Clean up on unmount
    return () => client.deactivate()
  }, [])

  const sendMessage = () => {
    const text = input.trim()
    if (!text || !clientRef.current?.connected) return

    clientRef.current.publish({
      destination: '/app/send',
      body: JSON.stringify({ content: text }),
    })
    setInput('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') sendMessage()
  }

  const typeBadge = (type) => {
    const styles = {
      SERVER:    { background: '#3b82f6', color: '#fff' },
      ECHO:      { background: '#10b981', color: '#fff' },
      BROADCAST: { background: '#f59e0b', color: '#fff' },
    }
    return (
      <span className="badge" style={styles[type] || { background: '#6b7280', color: '#fff' }}>
        {type}
      </span>
    )
  }

  return (
    <div className="ws-card">

      {/* Status bar */}
      <div className="status-bar">
        <span className={`status-dot ${connected ? 'connected' : 'disconnected'}`} />
        <span className="status-text">
          {connected ? 'Connected to ws://localhost:8080/ws' : 'Disconnected'}
        </span>
      </div>

      {/* Scrollable message list */}
      <div className="message-list">
        {messages.length === 0 && (
          <p className="empty-hint">Waiting for messages…</p>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className="message-item">
            <div className="message-header">
              {typeBadge(msg.type)}
              <span className="message-time">{msg.timestamp}</span>
            </div>
            <p className="message-content">{msg.content}</p>
          </div>
        ))}
        <div ref={listEndRef} />
      </div>

      {/* Send a message to the server */}
      <div className="input-row">
        <input
          className="message-input"
          type="text"
          placeholder="Type a message and press Enter…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          disabled={!connected}
        />
        <button
          className="send-btn"
          onClick={sendMessage}
          disabled={!connected || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  )
}
