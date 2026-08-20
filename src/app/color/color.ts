import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-color',
  imports: [CommonModule],
  templateUrl: './color.html',
  styleUrl: './color.css' 
})
export class Color {
  colors: string[] = ['red', 'green', 'blue', 'orange', 'purple', 'pink', 'teal', 'gold', 'lime', 'coral', 'indigo', 'brown', 'cyan', 'magenta', 'navy', 'maroon', 'olive', 'gray', 'black', 'white', 'violet', 'turquoise', 'salmon', 'plum', 'khaki', 'lavender', 'peach', 'mint', 'azure', 'crimson', 'tan'];
  selectedColor: string = this.getRandomColor();

  changeColor() {
    let newColor = this.getRandomColor();
    while (newColor === this.selectedColor) {
      newColor = this.getRandomColor();
    }
    this.selectedColor = newColor;
  }

  getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }
}
