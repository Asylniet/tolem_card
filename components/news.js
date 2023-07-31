class News extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/pages/news/1.html" class="card text-md">
          <p>
            Шымкент әкімдігі <br> Төлем жайында
          </p>
          <div class="dots flex">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </a>
        <a href="/pages/news/2.html" class="card text-md">
          <p>
            ФРОНТ-ОФИС <br> ашылды
          </p>
          <div class="dots flex">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </a>
        <a href="/pages/news/3.html" class="card text-md">
          <p>
            Біздің компания
          </p>
          <div class="dots flex">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </a>
        <a href="/pages/news/4.html" class="card text-md">
          <p>
            TOLEM <br> жеткізу қызметі
          </p>
          <div class="dots flex">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </a>
        <a href="/pages/news/5.html" class="card text-md">
          <p>
            Қоғамдық көлікті <br> бақылайтын жаңа <br> батырма іске қосылды
          </p>
          <div class="dots flex">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </a>
        <a href="/pages/news/6.html" class="card text-md">
          <p>
            TOLEM pay виртуалды <br> шоты
          </p>
          <div class="dots flex">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </a>
      </div>
      `;
  }
}

customElements.define("news-component", News);