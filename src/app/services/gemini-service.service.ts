import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiServiceService {
  result = '';
  genAI = new GoogleGenerativeAI(environment.apiKey);
  model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });

  constructor() { }

  // Método para generar contenido basado en el prompt
  async generate(prompt: string): Promise<string> {
    const result = await this.model.generateContent(prompt);
    const response = await result.response;

    // Limitar la respuesta a 100 palabras
    let responseText = response.text();
    const words = responseText.split(/\s+/);
    if (words.length > 100) {
      responseText = words.slice(0, 100).join(' ') + '...';
    }
    return responseText; // Retornar la respuesta limitada
  }
}
