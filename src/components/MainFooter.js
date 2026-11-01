export default class MainFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    class Link {
      constructor(text, url, imgSrc) {
        this.text = text;
        this.url = url;
        this.imgSrc = imgSrc;
      }
    }

    const links = [
      new Link(
        "Newgrounds",
        "https://cyxigo.newgrounds.com",
        "/res/img/link/ng.png",
      ),
      new Link(
        "GitHub",
        "https://github.com/cyxigo",
        "/res/img/link/github.png",
      ),
      new Link(
        "YouTube",
        "https://www.youtube.com/@cyxigo",
        "/res/img/link/youtube.png",
      ),
      new Link(
        "Steam",
        "https://steamcommunity.com/id/cyxigo/",
        "/res/img/link/steam.png",
      ),
    ];

    links.forEach((link) => {
      const container = document.createElement("div");
      container.classList.add("link-container");

      const img = document.createElement("img");
      img.src = link.imgSrc;

      const a = document.createElement("a");
      a.href = link.url;
      a.innerText = link.text;

      container.appendChild(img);
      container.appendChild(a);

      this.appendChild(container);
    });

    const copyright = document.createElement("p");
    copyright.innerText = "© 2026 cyxigo. All rights reserved.";
    this.appendChild(copyright);
  }
}
