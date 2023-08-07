class FAQ extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <div class="accordions accordion-container" data-container="1">
        <div>
          <button class="accordion outline" data-panel="1">
            Карта жоғалса немесе істемей қалса не істеу керек?
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="1">
            <p>Оқушы картасы жоғалса немесе істемей қалған
              жағдайда, оқушының ата-анасы Аль-Фараби даңгыды 9
              мекен жайындағы Фронт офисқа келіп арыз жазуы керек.
              Біздің мамандар жоғалған картаны бұғаттап
              жаңа карта рәсімдейді. Жоғалған картадағы теңгерімді
              жаңа картаға ауыстырып береді.</p>
          </div>
        </div>
        <div>
          <button class="accordion outline" data-panel="2">
            Төлем картасына теңгерімін қалай толтыруға болады?
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="2">
            <p>Төлем картасының теңгерімін
              кез келген Банк қосымшысы арқылы
              және Киви, 24-Касса терминалдары арқылы толтыра аласыз.</p>
          </div>
        </div>
        <div>
          <button class="accordion outline" data-panel="3">
            Төлем оқушы картасына қалай тапсырыс беруге болады?
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="3">
            <p>1. Төлем оқушы картасын Аль-фараби
              даңғылы 9 мекен жайындағы
              фронт офисқа барып тапсырыс берсеніздер болады. <br>
              2. Төлем мобильді қосымшасы арқылы тапсырыс беруге болады.
              Ол үшін қосымшаға кіріп “Картаға тапсырыс” батырмасын
              басып көрсетілген нұсқауларды толтырып
              жаңа картаға тапсырыс берсеніз болады.</p>
          </div>
        </div>
        <div>
          <button class="accordion outline" data-panel="4">
            Жол ақысын төйлеудің қандай түрлері бар?
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="4">
            <p>Жол ақысын төйлеудін 4 түрі бар. <br>
              1. Төлем картасы арқылы <br>
              2. Төлем мобильді қосымшасы арқылы <br>
              3. СМС код арқылы <br>
              4. Каспи QR арқылы</p>
          </div>
        </div>
        <div>
          <button class="accordion outline" data-panel="5">
            Төлем “Стандарт” картасын қай жерден сатып алуға болады?
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="5">
            <p>Төлем компаниясының фронт офисынан немесе
              барлық Зерде дәріханаларынан,
              Грамад дүкендерінен сатып алуға болады.</p>
          </div>
        </div>
        <div>
          <button class="accordion outline" data-panel="6">
            Төлем мобильді қосымшасына қалай тіркелуге болады?
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="6">
            <p>1. Төлем мобильді қосымшасын
              App Store несеме Play Market желілерінен жүктеп аласыз. <br>
              2. Қосымшаны жүктеп алганнан соң қосымшаға кіріп
              өзіңіздің ЖСН нөмеріңіз арқылы тіркелесіз. <br></p>
          </div>
        </div>
      </div>
      `;
  }
}

customElements.define("faq-component", FAQ);