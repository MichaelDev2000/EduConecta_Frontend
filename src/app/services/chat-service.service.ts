import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Client, IMessage, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { HttpHeaders } from '@angular/common/http';
import { ChatMessage } from '../models/chat-message.mode';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient: any;
  private messagesSubject = new Subject<string>();  // El Subject para emitir mensajes
  public messages$ = this.messagesSubject.asObservable(); // Observable para suscribirse

  constructor() {
    this.initConnectionSocket();
  }

  // Método para obtener el Bearer Token de localStorage
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  initConnectionSocket() {
    const url = '//localhost:8080/chat';
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
  }

  joinRoom(roomId: string) {
    const headers = this.getAuthHeaders();  // Obtener los encabezados con el token
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/topic/${roomId}`, { headers: headers }, (messages: IMessage) => {
        // Suponiendo que 'messages.body' ya es un objeto
        const chatMessage = messages.body;  // No es necesario parsear
        this.messagesSubject.next(chatMessage);
      });
    });
  }

  sendMessage(roomId: string, chatMessage: ChatMessage) {
    const headers = this.getAuthHeaders();  // Obtener los encabezados con el token
    this.stompClient.send(`/app/chat/${roomId}`, { headers: headers }, JSON.stringify(chatMessage));
  }
}
