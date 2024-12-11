import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Client, IMessage , Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { ChatMessage } from '../models/chat-message.mode';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient:any;
  private messagesSubject = new Subject<string>();  // El Subject para emitir mensajes
  public messages$ = this.messagesSubject.asObservable(); // Observable para suscribirse

  constructor() {
    this.initConnectionSocket();
  }

  initConnectionSocket(){
    const url='//localhost:8080/chat';
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
  }

  joinRoom(roomId: string) {
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: IMessage) => {
        // Suponiendo que 'messages.body' ya es un objeto
        const chatMessage = messages.body;  // No es necesario parsear
        this.messagesSubject.next(chatMessage); 
      });
    });
  }
  
  

  sendMessage(roomId: string, chatMessage: ChatMessage){
    this.stompClient.send(`/app/chat/${roomId}`,{},JSON.stringify(chatMessage))
  }

}
