### Implement a function that takes a credit card number and returns the masked version.
  - It should replace all but the 1st and last 4 digits in the provided sequence.
  - Should not mask input shorter than 6 characters.
  - Should not mask non-numeric characters.
  - Should return empty string for all other input types apart from string and number.


```tsx
function maskify(cardNumber) {

  if (typeof cardNumber !== "string" && typeof cardNumber !== "number"){
    return "";
  }

  cardNumber = cardNumber.toString();

  if(cardNumber.length < 6){
    return cardNumber;
  }

  let result = "";

  for (let i = 0; i < cardNumber.length; i++){
    if(i === 0 || i >= cardNumber.length - 4){
      result += cardNumber[i];
      continue;
    }

    const parsed = Number(cardNumber[i])
    
    if(Number.isNaN(parsed)){
      result += cardNumber[i];
      continue;
    }

    result += "#";
  }

  return result;
}
```