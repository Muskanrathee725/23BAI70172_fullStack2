package com.example.websocketdemo.controller;

import com.example.websocketdemo.model.ClientMessage;
import com.example.websocketdemo.model.ServerMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Controller
public class MessageController {

    // Client sends to /app/send → server broadcasts result to /topic/messages
    @MessageMapping("/send")
    @SendTo("/topic/messages")
    public ServerMessage handleClientMessage(ClientMessage message) {
        String now = LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
        return new ServerMessage(
            "Echo: " + message.getContent(),
            "ECHO",
            now
        );
    }
}
