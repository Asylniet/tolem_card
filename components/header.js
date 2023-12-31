class Header extends HTMLElement {
  constructor() {
      super();
  }

  langMap = {
    kz: {
      system: "Электрондық жүйе",
      school: "Tolem mektep",
      cards: "Карталар",
      about: "Біз туралы",
      app: "Мобильді қосымша",
      news: "Соңғы жаңалықтар",
      faq: "Жиі қойылатын сұрақтар",
    },
    ru: {
      system: "Электронная система",
      cards: "Карты",
      school: "Толемская школа",
      about: "О нас",
      app: "Мобильное приложение",
      news: "Последние новости",
      faq: "Часто задаваемые вопросы",
    },
  }

  connectedCallback() {
    const lang = document.querySelector("html").getAttribute("lang");
    const base = lang === "ru" ? "/ru" : "";
    const link = this.getAttribute("link");
      this.innerHTML = `
      <header state="close">
        <div class="container flex items-center justify-between">
          <nav>
            <ul class="gap-1 flex items-center hidden-dots bg">
              <li>
                <a class="text-md text-primary mr-2 logo" href="/">
                  <img src="/assets/logo.svg" style="height: 3rem" />
                </a>
              </li>
              <li class="md-none">${this.langMap[lang].system}</li>
              <div class="gap-1 flex items-center">
                <li><a class="link md-block text-black fw-600 mr-5" href="${base}/pages/cards.html">${this.langMap[lang].cards}</a></li>
                <li><a class="link md-block text-black fw-600 mr-5" href="${base}/pages/mektep.html">${this.langMap[lang].school}</a></li>
                <li><a class="link md-block text-black fw-600" href="#">${this.langMap[lang].about}</a></li>
              </div>
            </ul>
            <ul class="floating hidden-dots">
              <div class="container gap-1 flex flex-col gap-4">
                <li><a class="link text-black fw-600" href="${base}/pages/cards.html">${this.langMap[lang].cards}</a></li>
                <li><a class="link text-black fw-600" href="#">${this.langMap[lang].about}</a></li>
                <li><a class="link text-black fw-600" href="${base}/index.html#app">${this.langMap[lang].app}</a></li>
                <li><a class="link text-black fw-600" href="${base}/pages/mektep.html">${this.langMap[lang].school}</a></li>
                <li><a class="link text-black fw-600" href="${base}/index.html#news">${this.langMap[lang].news}</a></li>
                <li><a class="link text-black fw-600" href="${base}/index.html#faq">${this.langMap[lang].faq}</a></li>
                <li class="flex gap-4">
                  <a class="link ${lang === "kz" && 'underline'} text-black fw-600" href=${lang === "ru" ? link : ""}>Қаз</a>
                  <a class="link ${lang === "ru" && 'underline'} text-black fw-600" href=${lang === "kz" ? link : ""}>Рус</a>
                </li>
                <div class="separator"></div>
                <div class="flex justify-between items-center">
                  <a class="text-base text-primary mr-4 logo" href="/">TOLEM</a>
                  <div class="ml-auto">
                    <a class="icon hover-fill" style="--clr: #E1306C" href="${base}/index.html">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z"
                          fill="#7CC248" />
                      </svg>
                    </a>
                    <a class="icon hover-fill" href="${base}/index.html">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20.625 26.25C11.3203 26.25 3.75 18.6797 3.75 9.37504C3.75352 7.77901 4.33649 6.23857 5.39053 5.04011C6.44458 3.84165 7.89796 3.06672 9.48047 2.85941C9.88388 2.81469 10.2911 2.89962 10.6429 3.1019C10.9948 3.30419 11.2731 3.6133 11.4375 3.98441L13.793 9.48051C13.9152 9.76579 13.9641 10.0771 13.9355 10.3861C13.9068 10.6951 13.8015 10.9921 13.6289 11.25L11.6836 14.2266C12.5645 16.0143 14.0159 17.4575 15.8086 18.3282L18.75 16.3711C19.0077 16.1974 19.3054 16.0923 19.615 16.0656C19.9246 16.039 20.2359 16.0917 20.5195 16.2188L26.0156 18.5625C26.3867 18.7269 26.6959 19.0052 26.8981 19.3571C27.1004 19.709 27.1854 20.1162 27.1406 20.5196C26.9333 22.1021 26.1584 23.5555 24.9599 24.6095C23.7615 25.6635 22.221 26.2465 20.625 26.25ZM9.71484 4.7227C8.58393 4.86807 7.54477 5.42068 6.79195 6.27705C6.03912 7.13341 5.62425 8.23482 5.625 9.37504C5.6281 13.3523 7.20945 17.1658 10.0218 19.9782C12.8342 22.7906 16.6477 24.3719 20.625 24.375C21.7652 24.3758 22.8666 23.9609 23.723 23.2081C24.5794 22.4553 25.132 21.4161 25.2773 20.2852L19.7812 17.9414L16.8516 19.8985C16.582 20.0767 16.2709 20.1822 15.9486 20.2048C15.6262 20.2274 15.3035 20.1663 15.0117 20.0274C12.8284 18.9713 11.0624 17.2135 9.99609 15.0352C9.8555 14.7444 9.79242 14.4222 9.81295 14.0999C9.83348 13.7775 9.93693 13.466 10.1133 13.1954L12.0703 10.2188L9.71484 4.7227Z"
                          fill="#7CC248" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
          <div class="hamburger">
            <div class="top"></div>
            <div class="bottom"></div>
          </div>
        </div>
      </header>
      `;
  }
}

customElements.define("header-component", Header);