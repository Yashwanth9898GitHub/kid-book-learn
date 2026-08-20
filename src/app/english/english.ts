import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechService } from '../shared/speech.service';

@Component({
  selector: 'app-english',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './english.html',
  styleUrls: ['./english.css']
})
export class English {
  constructor(private speech: SpeechService) {}

  letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  wordMap: { [key: string]: string[] } = {
    A: ['Apple', 'Ant', 'Aunty', 'Airplane', 'Alligator', 'Anchor', 'Arrow', 'Apricot', 'Avocado', 'Acorn'],
    B: ['Ball', 'Bat', 'Boy', 'Butterfly', 'Banana', 'Boat', 'Book', 'Bicycle', 'Box', 'Bell'],
    C: ['Cat', 'Cup', 'Car', 'Cake', 'Cow', 'Clock', 'Candle', 'Crayon', 'Cactus', 'Cookie'],
    D: ['Dog', 'Duck', 'Drum', 'Doll', 'Donut', 'Desk', 'Dice', 'Dragon', 'Door', 'Dolphin'],
    E: ['Elephant', 'Egg', 'Eagle', 'Ear', 'Engine', 'Envelope', 'Eraser', 'Eggplant', 'Earth', 'Elbow'],
    F: ['Fan', 'Fish', 'Fox', 'Flower', 'Frog', 'Flag', 'Fork', 'Feather', 'Fire', 'Foot'],
    G: ['Goat', 'Grapes', 'Gift', 'Guitar', 'Glove', 'Glass', 'Gate', 'Goldfish', 'Garden', 'Ghost'],
    H: ['Hat', 'Hen', 'Horse', 'House', 'Heart', 'Hammer', 'Helicopter', 'Hedgehog', 'Honey', 'Harp'],
    I: ['Ice', 'Ink', 'Igloo', 'Island', 'Insect', 'Iron', 'Iguana', 'Ivory', 'Iceberg', 'Instrument'],
    J: ['Jug', 'Jam', 'Jeep', 'Jelly', 'Jacket', 'Jigsaw', 'Juice', 'Jump', 'Jungle', 'Journal'],
    K: ['Kite', 'King', 'Key', 'Kangaroo', 'Kettle', 'Knife', 'Keyboard', 'Koala', 'Kite', 'Kitten'],
    L: ['Lion', 'Lamp', 'Leaf', 'Lemon', 'Laptop', 'Ladder', 'Lollipop', 'Lock', 'Lizard', 'Letter'],
    M: ['Mango', 'Moon', 'Mouse', 'Monkey', 'Milk', 'Map', 'Muffin', 'Mirror', 'Mountain', 'Music'],
    N: ['Nest', 'Net', 'Nose', 'Notebook', 'Nurse', 'Nail', 'Necklace', 'Night', 'Ninja', 'Nut'],
    O: ['Owl', 'Orange', 'Ox', 'Octopus', 'Onion', 'Oven', 'Ocean', 'Olive', 'Orchid', 'Ostrich'],
    P: ['Pen', 'Pig', 'Parrot', 'Pineapple', 'Panda', 'Piano', 'Pumpkin', 'Pizza', 'Pear', 'Pillow'],
    Q: ['Queen', 'Quilt', 'Quiz', 'Quokka', 'Quokka', 'Quill', 'Quartz', 'Quiche', 'Quiver', 'Quokka'],
    R: ['Rat', 'Ring', 'Robot', 'Rainbow', 'Rocket', 'Rose', 'Raccoon', 'Ruler', 'Rice', 'River'],
    S: ['Sun', 'Ship', 'Star', 'Snake', 'Spoon', 'Socks', 'Sandwich', 'Scissors', 'Strawberry', 'Squirrel'],
    T: ['Tiger', 'Top', 'Tree', 'Table', 'Train', 'Turtle', 'Tennis', 'Taco', 'Toothbrush', 'Television'],
    U: ['Umbrella', 'Unicorn', 'Urn', 'Uniform', 'Uncle', 'Universe', 'Utensil', 'Uplift', 'Uranus', 'Utility'],
    V: ['Van', 'Vase', 'Violin', 'Volcano', 'Vegetable', 'Vulture', 'Vine', 'Vest', 'Vortex', 'Victory'],
    W: ['Watch', 'Wolf', 'Whale', 'Window', 'Watermelon', 'Wagon', 'Wrench', 'Windmill', 'Waffle', 'Worm'],
    X: ['Xylophone', 'X-ray', 'Xmas', 'Xenon', 'Xerox', 'Xenophobia', 'Xeriscape', 'Xylograph', 'Xenolith', 'Xenon'],
    Y: ['Yak', 'Yarn', 'Yogurt', 'Yacht', 'Yellow', 'Yoyo', 'Yard', 'Yawn', 'Yoke', 'Yule'],
    Z: ['Zebra', 'Zoo', 'Zero', 'Zipper', 'Zucchini', 'Zigzag', 'Zodiac', 'Zipline', 'Zenith', 'Zeppelin']
  };

  selectedWord: string = '';

  onLetterClick(letter: string) {
    const words = this.wordMap[letter] || [letter];
    const randomIndex = Math.floor(Math.random() * words.length);
    this.selectedWord = words[randomIndex];
    this.speech.speak(`${letter}, ${letter} for ${this.selectedWord}`, 'en-US');
  }

  speakWord() {
    this.speech.speak(this.selectedWord, 'en-US');
  }
}
