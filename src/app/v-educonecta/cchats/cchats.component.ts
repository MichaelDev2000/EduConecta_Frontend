import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat-service.service';
import { ChatMessage } from '../../models/chat-message.mode';
import { ActivatedRoute } from '@angular/router';
import { UsuarioInfoService } from '../../services/usuario-info.service';

@Component({
  selector: 'app-cchats',
  templateUrl: './cchats.component.html',
  styleUrls: ['./cchats.component.css']
})
export class CchatsComponent implements OnInit {
  messageInput: string = "";
  userId: string;
  messageList: any[] = [];

  constructor(private chatService: ChatService, private route: ActivatedRoute, private usuInfo: UsuarioInfoService) {
    this.userId = this.usuInfo.usuarioDatos.usuId;
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params["userId"];
    this.chatService.joinRoom("ABC");
  
    this.chatService.messages$.subscribe((newMessage: string) => {
      const chatMessage: ChatMessage = JSON.parse(newMessage);  // Convertir el mensaje a ChatMessage
      this.messageList.push(chatMessage);  // Agregar el nuevo mensaje a la lista
    });
  }
  

  sendMessage() {
    const chatMessage: ChatMessage = {
      message: this.messageInput, 
      user: this.userId, 
    };
  
    this.chatService.sendMessage("ABC", chatMessage);
    this.messageInput = "";  
  }

}
