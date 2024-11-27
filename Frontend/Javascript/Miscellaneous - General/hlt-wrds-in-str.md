**Implementation** 

```tsx
// HTML
<input type="text" id="search" />
<br />
<p id="text">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
    nostrum odio, iure quaerat quam sunt rem assumenda ipsa dolorem fugiat nobis
    sed ipsam veritatis error quibusdam neque aliquid pariatur exercitationem!
   Vinay Kumar is a good boy in the welfare of the society
</p>

// Javascript
let text = document.getElementById("text");
let search = document.getElementById("search");

search.addEventListener("input", (e) => {
  let searchWords = e.target.value.toLowerCase().split(" ");

  let textWords = text.innerText.split(" ");

  let highlightedText = textWords.map((item) => {
    let highlightedString = `<span style="color:red;font-weigh:bold;background:yellow;">${item}</span>`;
    return searchWords.includes(item.toLowerCase()) ? highlightedString : item;
  });

  text.innerHTML = highlightedText.join(" ");
});

```