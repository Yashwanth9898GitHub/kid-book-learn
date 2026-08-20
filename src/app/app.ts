import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { English } from './english/english';
import { Math } from './math/math';
import { Telugu } from './telugu/telugu';
import { Color } from './color/color';
import { Hindi } from './hindi/hindi';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,English,Math,Telugu,Color,Hindi],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnDestroy {
  protected selectedTab: 'home' | 'english'| 'math' | 'telugu' | 'color' | 'hindi' = 'home';

  message: string =`Hey Hi! 🤪
Your mom is forcing you to learn this "bloody little thing" 📚
But hey! Don’t worry 😅
This is a FUN and SILLY way to learn 🎉`;

  displayText: string = '';
  private charIndex: number = 0;
  private typingTimer?: ReturnType<typeof setInterval>;
  private restartTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    this.typeText();
  }

  typeText() {
    this.clearTypingTimers();
    this.typingTimer = setInterval(() => {
      if (this.charIndex < this.message.length) {
        this.displayText += this.message[this.charIndex++];
      } else {
      this.clearTypingInterval();
      this.restartTimer = setTimeout(() => {
        this.charIndex = 0;
        this.displayText = '';
        this.typeText();
      }, 2000); 
    }
  }, 150); 
  }

  showHome() {
    this.selectedTab = 'home';
    this.charIndex = 0;
    this.displayText = '';
    this.typeText();
  } 

  showEnglish() {
    this.selectedTab = 'english';
  }

  showMath(){
    this.selectedTab = 'math';
  }

  showTelugu() {
    this.selectedTab = 'telugu';
  }

  showColor() {
    this.selectedTab = 'color';
  }
  showHindi() {
    this.selectedTab = 'hindi';
  }

  ngOnDestroy() {
    this.clearTypingTimers();
  }

  private clearTypingInterval() {
    if (this.typingTimer) {
      clearInterval(this.typingTimer);
      this.typingTimer = undefined;
    }
  }

  private clearTypingTimers() {
    this.clearTypingInterval();
    if (this.restartTimer) {
      clearTimeout(this.restartTimer);
      this.restartTimer = undefined;
    }
  }
}
