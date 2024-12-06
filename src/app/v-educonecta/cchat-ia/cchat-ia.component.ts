import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cchat-ia',
  templateUrl: './cchat-ia.component.html',
  styleUrls: ['./cchat-ia.component.css']
})
export class CchatIAComponent {
  userInput: string = '';
  messages: Array<{ sender: 'user' | 'ai'; text: string }> = [];
  apiKey: string = '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';
  isOpen = false;

  constructor(private http: HttpClient) { }

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Agregar el mensaje del usuario al chat
    this.messages.push({ sender: 'user', text: this.userInput });

    const userMessage = this.userInput; // Guardar el mensaje
    this.userInput = ''; // Limpiar el campo de entrada

    // Realizar la llamada a la API
    this.http
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: userMessage }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      )
      .subscribe(
        (response: any) => {
          const aiMessage = response.choices[0].message.content;
          this.messages.push({ sender: 'ai', text: aiMessage });
        },
        (error) => {
          console.error('Error connecting to the API:', error);
        }
      );
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  closeChat() {
    this.isOpen = false;
  }
}
