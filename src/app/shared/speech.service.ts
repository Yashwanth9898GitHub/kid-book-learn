import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SpeechService {
  private synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (this.synth) {
      this.refreshVoices();
      this.synth.onvoiceschanged = () => this.refreshVoices();
    }
  }

  private refreshVoices(): void {
    this.voices = this.synth?.getVoices() ?? [];
  }

  isSupported(): boolean {
    return !!this.synth;
  }

  /** True only if a real voice matching this language (e.g. "hi", "te") is installed on the device. */
  hasVoiceFor(lang: string): boolean {
    const prefix = lang.split('-')[0].toLowerCase();
    return this.voices.some(v => v.lang.toLowerCase().startsWith(prefix));
  }

  /** Speaks the text; returns false if no matching voice is installed (caller can show a fallback hint). */
  speak(text: string, lang: string): boolean {
    if (!this.synth || !text) {
      return false;
    }
    this.synth.cancel();
    const prefix = lang.split('-')[0].toLowerCase();
    const matchedVoice = this.voices.find(v => v.lang.toLowerCase().startsWith(prefix));
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85;
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }
    this.synth.speak(utterance);
    return !!matchedVoice;
  }
}
