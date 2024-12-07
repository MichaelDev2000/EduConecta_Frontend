import { Component } from '@angular/core';
import { GeminiServiceService } from '../../services/gemini-service.service';

@Component({
  selector: 'app-cchat-ia',
  templateUrl: './cchat-ia.component.html',
  styleUrls: ['./cchat-ia.component.css'],
})
export class CchatIAComponent {
  userInput: string = '';
  messages: Array<{ sender: 'user' | 'ai'; text: string }> = [];
  isOpen = false;

  constructor(private geminiService: GeminiServiceService) { }

  // Abrir y cerrar el chat
  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  closeChat() {
    this.isOpen = false;
  }

  // Método para enviar el mensaje y recibir la respuesta de la IA
  async sendMessage() {
    if (this.userInput.trim()) {
      // Agregar mensaje del usuario al chat
      this.messages.push({ sender: 'user', text: this.userInput });

      try {
        // Obtener respuesta de la IA
        const aiResponse = await this.geminiService.generate(this.userInput);

        // Agregar respuesta de la IA al chat
        this.messages.push({ sender: 'ai', text: aiResponse });
        this.userInput = ''; // Limpiar campo de entrada
      } catch (error) {
        console.error('Error al comunicarse con la IA:', error);
        this.messages.push({ sender: 'ai', text: 'Lo siento, ocurrió un error.' });
      }
    }
  }
}
