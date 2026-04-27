package com.example.websocketdemo.listener;

import com.example.websocketdemo.model.ServerMessage;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Component
public class WebSocketEventListener {

    private final SimpMessagingTemplate messagingTemplate;

    public WebSocketEventListener(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    // Fires when a client subscribes — reliable point to send the welcome message
    // because the client is guaranteed to be listening by then.
    @EventListener
    public void handleSubscribeEvent(SessionSubscribeEvent event) {
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(event.getMessage());
        String destination = accessor.getDestination();

        if ("/topic/messages".equals(destination)) {
            String now = LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
            messagingTemplate.convertAndSend("/topic/messages",
                new ServerMessage(
                    "Connection established! Welcome to the WebSocket Demo. [" + now + "]",
                    "SERVER",
                    now
                )
            );
        }
    }
}
