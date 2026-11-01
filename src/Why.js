function why() {
  const messages = [
    "Why would you do that.",
    "Why.",
    "Hey, is clicking on random cats okay?",
    "This is definitely a cat.",
    "Meow???",
    "Meow.",
    "Meow",
    ":3",
    ">:3",
    "OwO",
    "UwU",
    "Stop.",
    "Do not the cat.",
    "Cat.",
    "[[Hyperlink Blocked]]",
    "Hi",
    "Hello",
  ];
  alert(messages[Math.floor(Math.random() * messages.length)]);
}

export default function setupCallback() {
  document.addEventListener("DOMContentLoaded", function () {
    const imgs = document.querySelectorAll(
      ".jumping-cat-img, .flipping-cat-img",
    );
    imgs.forEach((img) => {
      img.onclick = why;
    });
  });
}
