import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechService } from '../shared/speech.service';

@Component({
  selector: 'app-hindi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hindi.html',
  styleUrl: './hindi.css'
})
export class Hindi {
  constructor(private speech: SpeechService) {}

  vowels: string[] = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः'];
  consonants: string[] = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'ळ', 'क्ष', 'ज्ञ'];

  wordMap: { [key: string]: string[] } = {
    'अ': ['अम्मा', 'अनार', 'अंगूठा'],
    'आ': ['आम', 'आग', 'आँख'],
    'इ': ['इमली', 'इंसान'],
    'ई': ['ईख', 'ईमानदार'],
    'उ': ['उल्लू', 'उंगली'],
    'ऊ': ['ऊंट', 'ऊन'],
    'ऋ': ['ऋषि'],
    'ए': ['एक', 'एड़ी'],
    'ऐ': ['ऐनक', 'ऐसा'],
    'ओ': ['ओस', 'ओखली'],
    'औ': ['औजार', 'औरत'],
    'अं': ['अंगूर', 'अंडा'],
    'अः': ['दुःख'],
    'क': ['कमल', 'कबूतर', 'कुर्सी'],
    'ख': ['खरगोश', 'खिड़की'],
    'ग': ['गाय', 'गमला', 'गुड़िया'],
    'घ': ['घर', 'घड़ी', 'घोड़ा'],
    'ङ': ['वाङ्मय'],
    'च': ['चाय', 'चम्मच', 'चिड़िया'],
    'छ': ['छाता', 'छिपकली'],
    'ज': ['जहाज', 'जग', 'जिराफ'],
    'झ': ['झंडा', 'झरना', 'झूला'],
    'ञ': ['यज्ञ'],
    'ट': ['टमाटर', 'टोपी'],
    'ठ': ['ठेला', 'ठंडा'],
    'ड': ['डमरू', 'डिब्बा'],
    'ढ': ['ढोल', 'ढक्कन'],
    'ण': ['हरिण', 'बाण'],
    'त': ['तितली', 'तरबूज', 'तारा'],
    'थ': ['थाली', 'थैला'],
    'द': ['दवा', 'दीपक', 'दरवाजा'],
    'ध': ['धनुष', 'धागा'],
    'न': ['नल', 'नाव', 'नारियल'],
    'प': ['पतंग', 'पंखा', 'पेड़'],
    'फ': ['फल', 'फूल'],
    'ब': ['बकरी', 'बत्तख', 'बादल'],
    'भ': ['भालू', 'भवन'],
    'म': ['मछली', 'मोर', 'मकान'],
    'य': ['यंत्र', 'यश'],
    'र': ['रथ', 'रस्सी', 'राजा'],
    'ल': ['लट्टू', 'लोमड़ी'],
    'व': ['वन', 'वृक्ष'],
    'श': ['शेर', 'शंख', 'शहद'],
    'ष': ['षटकोण'],
    'स': ['सूरज', 'सेब', 'साँप'],
    'ह': ['हाथी', 'हवा', 'हिरण'],
    'ळ': ['बाळ'],
    'क्ष': ['क्षमा', 'क्षत्रिय'],
    'ज्ञ': ['ज्ञान', 'ज्ञानी']
  };

  selectedLetter: string = '';
  selectedWord: string = '';
  voiceUnavailable: boolean = false;

  onLetterClick(letter: string) {
    const words = this.wordMap[letter] || [letter];
    const randomIndex = Math.floor(Math.random() * words.length);
    this.selectedLetter = letter;
    this.selectedWord = words[randomIndex];
    this.voiceUnavailable = !this.speech.speak(`${letter}, ${this.selectedWord}`, 'hi-IN');
  }

  speakWord() {
    this.voiceUnavailable = !this.speech.speak(`${this.selectedLetter}, ${this.selectedWord}`, 'hi-IN');
  }
}
