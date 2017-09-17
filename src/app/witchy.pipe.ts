import { Pipe, PipeTransform } from '@angular/core';

const dict = {
  'a': '▲',
  'b': '♄',
  'c': '₵',
  'd': 'ↁ',
  'e': '≣',
  'f': 'ϝ',
  'g': 'ℊ',
  'h': '♓',
  'i': 'ᴉ',
  'j': '⅃',
  'k': '|<',
  'l': '⌊',
  'm': '♏',
  'n': 'Ͷ',
  'o': '⏀',
  'p': '⍴',
  'q': '⚼',
  'r': 'π',
  's': '$',
  't': '⏄',
  'u': '∪',
  'v': '▼',
  'w': '⋈',
  'x': '⚹',
  'y': 'ʎ',
  'z': 'ƨ',
  ' ': '_',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '0': ' ⃟',
}

@Pipe({
  name: 'witchy',
  pure: false
})
export class WitchyPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    let resultString = '';
    for (const letter of value) {
      resultString += dict[letter.toLowerCase()] || letter
    }
    return resultString;
  }
}
