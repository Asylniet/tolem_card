class FAQ extends HTMLElement {
  constructor() {
      super();
  }

  langMap = {
    kz: {
      a1: {
        title: "Карта жоғалса немесе істемей қалса не істеу керек?",
        descr: `Оқушы картасы жоғалса немесе істемей қалған
        жағдайда, оқушының ата-анасы Аль-Фараби даңгыды 9
        мекен жайындағы Фронт офисқа келіп арыз жазуы керек.
        Біздің мамандар жоғалған картаны бұғаттап
        жаңа карта рәсімдейді. Жоғалған картадағы теңгерімді
        жаңа картаға ауыстырып береді.`
      },
      a2: {
        title: "Төлем картасына теңгерімін қалай толтыруға болады?",
        descr: `Төлем картасының теңгерімін
        кез келген Банк қосымшысы арқылы
        және Киви, 24-Касса терминалдары арқылы толтыра аласыз.`
      },
      a3: {
        title: "Төлем оқушы картасына қалай тапсырыс беруге болады?",
        descr: `1. Төлем оқушы картасын Аль-фараби
        даңғылы 9 мекен жайындағы
        фронт офисқа барып тапсырыс берсеніздер болады. <br>
        2. Төлем мобильді қосымшасы арқылы тапсырыс беруге болады.
        Ол үшін қосымшаға кіріп “Картаға тапсырыс” батырмасын
        басып көрсетілген нұсқауларды толтырып
        жаңа картаға тапсырыс берсеніз болады.`
      },
      a4: {
        title: "Жол ақысын төйлеудің қандай түрлері бар?",
        descr: `Жол ақысын төйлеудін 4 түрі бар. <br>
        1. Төлем картасы арқылы <br>
        2. Төлем мобильді қосымшасы арқылы <br>
        3. СМС код арқылы <br>
        4. Каспи QR арқылы`
      },
      a5: {
        title: "Төлем “Стандарт” картасын қай жерден сатып алуға болады?",
        descr: `Төлем компаниясының фронт офисынан немесе
        барлық Зерде дәріханаларынан,
        Грамад дүкендерінен сатып алуға болады.`
      },
      a6: {
        title: "Төлем мобильді қосымшасына қалай тіркелуге болады?",
        descr: `1. Төлем мобильді қосымшасын
        App Store несеме Play Market желілерінен жүктеп аласыз. <br>
        2. Қосымшаны жүктеп алганнан соң қосымшаға кіріп
        өзіңіздің ЖСН нөмеріңіз арқылы тіркелесіз.`
      },
    },
    ru: {
      a1: {
        title: "Что делать, если карта потеряна или не работает?",
        descr: `Карта ученика утеряна или неработающая
        по проспекту Аль-Фараби 9
        в офис Фронт по адресу.
        Наши специалисты заблокировали потерянную карту
        оформляет новую карту. Баланс на потерянной карте
        переводит на новую карту.`
      },
      a2: {
        title: "Как пополнить баланс на платежную карту?",
        descr: `Баланс платежной карты
        через любое приложение Банка
        и заполнить через терминалы Kivi, 24-Касса.`
      },
      a3: {
        title: "Как заказать платежную карту?",
        descr: `1. Платежная карта ученика Аль-Фараби
        по адресу проспект 9
        идите в фронтовый офис и заказывайте. <br>
        2. Оплата можно заказать через мобильное приложение.
        Для этого включить в приложение кнопку «Заказ на карту»
        заполняя указанные инструкции
        можно заказать новую карту.`
      },
      a4: {
        title: "Какие существуют виды оплаты проезда?",
        descr: `Имеется 4 вида оплаты проезда. <br>
        1. Через платежную карту <br>
        2. Оплата через мобильное приложение <br>
        3. SMS-код <br>
        4. Через Kaspi QR`
      },
      a5: {
        title: 'Где купить платежную карту “Стандарт"?',
        descr: `Из фронтового офиса платежной компании или
        из всех аптек Зерде,
        Можно купить в магазинах Грамад.`
      },
      a6: {
        title: "Как зарегистрироваться в платежном мобильном приложении?",
        descr: `1. Мобильное приложение «Оплата»
        Вы можете скачать App Store neseme Play Market. <br>
        2. Приложение занято в приложение после загрузки
        Вы зарегистрированы через свой ИИН.`
      },
    }
  }

  connectedCallback() {
    const lang = document.querySelector("html").getAttribute("lang");
      this.innerHTML = `
      <div class="accordions accordion-container" data-container="1">
        <div>
          <button class="accordion outline" data-panel="1">
            ${this.langMap[lang].a1.title}
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="1">
            <p>${this.langMap[lang].a1.descr}</p>
          </div>
        </div>
        <div>
          <button class="accordion outline" data-panel="2">
          ${this.langMap[lang].a2.title}
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="2">
            <p>${this.langMap[lang].a2.descr}</p>
          </div>
        </div>
        <div>
          <button class="accordion outline" data-panel="3">
          ${this.langMap[lang].a3.title}
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="3">
            <p>${this.langMap[lang].a3.descr}</p>
          </div>
        </div>
        <div>
          <button class="accordion outline" data-panel="4">
          ${this.langMap[lang].a4.title}
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="4">
            <p>${this.langMap[lang].a4.descr}</p>
          </div>
        </div>
        <div>
          <button class="accordion outline" data-panel="5">
          ${this.langMap[lang].a5.title}
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="5">
            <p>${this.langMap[lang].a5.descr}</p>
          </div>
        </div>
        <div>
          <button class="accordion outline" data-panel="6">
          ${this.langMap[lang].a6.title}
            <div class="arrow"></div>
          </button>
          <div class="panel faq-panel" data-panel="6">
            <p>${this.langMap[lang].a6.descr}</p>
          </div>
        </div>
      </div>
      `;
  }
}

customElements.define("faq-component", FAQ);