package com.example.websocketdemo.model;

public class ServerMessage {
    private String content;
    private String type;   // "SERVER" | "ECHO" | "BROADCAST"
    private String timestamp;

    public ServerMessage() {}

    public ServerMessage(String content, String type, String timestamp) {
        this.content = content;
        this.type = type;
        this.timestamp = timestamp;
    }

    public String getContent()   { return content; }
    public String getType()      { return type; }
    public String getTimestamp() { return timestamp; }

    public void setContent(String content)     { this.content = content; }
    public void setType(String type)           { this.type = type; }
    public void setTimestamp(String timestamp) { this.timestamp = timestamp; }
}
