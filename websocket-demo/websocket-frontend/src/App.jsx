import WebSocketMessages from './components/WebSocketMessages'

export default function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Spring Boot ↔ React WebSocket Demo</h1>
      <p className="app-subtitle">STOMP over SockJS</p>
      <WebSocketMessages />
    </div>
  )
}
