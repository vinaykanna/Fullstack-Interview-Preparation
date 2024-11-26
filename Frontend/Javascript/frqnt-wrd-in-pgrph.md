### Find the most frequent word in a paragraph
- Words in the paragraph are not case sensitive.
- The answer should be returned in lowercase.
- If the second argument is provided i.e. list of banned words then return the most frequent word that is not in the list of banned words.

```tsx
function mostUsedWord(text, bannedWords) {
  if (typeof text !== 'string') {
    throw new TypeError('Provided input is not a string');
  }

  if (text === '') {
    throw new TypeError('Please provide a string atleast of length 1');
  }

  const map = new Map();
  const words = text.replace(',', '').replace('.', '').split(' ');

  for (let word of words) {
    const key = word.toLowerCase();
    const value = map.get(key) || 0;
    map.set(key, value + 1);
  }

  let filtered = bannedWords
    ? [...map].filter((item) => {
        return !bannedWords.includes(item[0]);
      })
    : [...map];

  filtered.sort((a, b) => b[1] - a[1]);

  return filtered[0][0];
}
```