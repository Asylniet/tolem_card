class News extends HTMLElement {
  constructor() {
      super();
  }

  langMap = {
    kz: {
      n1: {
        title: "Шымкент әкімдігі <br> Төлем жайында",
        descr: `Бұл жүйе «Цифрлық Қазақстан» мемлекеттік 
        бағдарламасын іске асыру мен қоғамдық көліктің 
        қызметін жақсарту және жолаушыларға қолайлы 
        жағдайларды жасау мақсатында іске асырылуда. 
        Оған мемлекеттен ешқандай қаржы бөлінбеген. 
        Ол «QazSmartTrans» ЖШС жеке инвестициялар 
        есебінен іске асырылады. 
        Инвестициянын көлемі 1,2 млрд. теңгені құрайды.`
      },
      n2: {
        title: "ФРОНТ-ОФИС <br> ашылды",
        descr: `Шымкент қаласында жаңа фронт-офисіміз ашылды. 
        Енді кез-келген "Төлемге" байланысты шағым, арыз, 
        өтініштеріңізді тікелей Әл-Фараби алаңы 9, 
        мекен-жайы бойынша хабарласа аласыздар. 
        Бұл офисімізде "оқушы картасы, студент картасы" 
        сияқты карталарымызға тапсырыс беріп, дайын 
        болғанда алып кетуге болады. Фронт-офис демалыссыз 
        сіздерді қабылдауға дайын.`
      },
      n3: {
        title: "Біздің компания",
        descr: `Бұл жүйе «Цифрлық Қазақстан» мемлекеттік 
        бағдарламасын іске асыру мен қоғамдық көліктің 
        қызметін жақсарту және жолаушыларға қолайлы 
        жағдайларды жасау мақсатында іске асырылуда. 
        Оған мемлекеттен ешқандай қаржы бөлінбеген. 
        Ол «QazSmartTrans» ЖШС жеке инвестициялар 
        есебінен іске асырылады. 
        Инвестициянын көлемі 1,2 млрд. теңгені құрайды.`
      },
      n4: {
        title: "TOLEM <br> жеткізу қызметі",
        descr: `Шымкент қаласы тұргындарының сұранасын ескере отырып 
        Төлем компаниясы “Жеткізу қызметін” іске қосты. 
        Енді Төлем оқушы немесе студент картасын мобильді қосымша арқылы 
        онлайн тапсырыс беру кезіңде “Жеткізу қызметін” таңдауға болады.`
      },
      n5: {
        title: "Қоғамдық көлікті бақылайтын жаңа батырма іске қосылды",
        descr: `Енді Төлем мобильді косымшасында Шымкент қаласындағы бүкіл автобустардың 
        маршруттарын бақылай алу мүмкіндігі іске қосылды. 
        Енді өзіңіге керекті автобустың маршрутын Төлем мобильді қосымшасындағы 
        “Маршруттар” батырмасы арқылы көре аласыздар.`
      },
      n6: {
        title: "TOLEM pay виртуалды <br> шоты",
        descr: `Бұл жүйе «Цифрлық Қазақстан» мемлекеттік 
        бағдарламасын іске асыру мен қоғамдық көліктің 
        қызметін жақсарту және жолаушыларға қолайлы 
        жағдайларды жасау мақсатында іске асырылуда. 
        Оған мемлекеттен ешқандай қаржы бөлінбеген. 
        Ол «QazSmartTrans» ЖШС жеке инвестициялар 
        есебінен іске асырылады. 
        Инвестициянын көлемі 1,2 млрд. теңгені құрайды.`
      },
    },
    ru: {
      n1: {
        title: "Акимат Шымкента <br> О TOLEM",
        descr: `Данная система осуществляется в рамках государственной программы «Цифровой Казахстан» для
        улучшения обслуживания общественного транспорта и удобства пассажиров. 
        Никаких финансов от государства не выделялось. Проект реализуется за счет средств частной инвестиции ТОО «QazSmartTrans». 
        Объем инвестиций составил 1,2 млрд. тенге.`
      },
      n2: {
        title: "ФРОНТ-ОФИС <br> открыт",
        descr: `В Шымкенте открылся новый фронт-офис. 
        Теперь вы можете оставить любые жалобы, заявления связанные с "TOLEM"
        прямо по адресу проспект Аль-Фараби, 9. 
        В этом офисе можно сделать заказ на школьную и студенческую карту 
        и забрать по мере готовности. Фронт-офис готов принимать вас без выходных.`
      },
      n3: {
        title: "Наша компания",
        descr: `Данная система осуществляется в рамках государственной программы «Цифровой Казахстан» для
        улучшения обслуживания общественного транспорта и удобства пассажиров. 
        Никаких финансов от государства не выделялось. Проект реализуется за счет средств частной инвестиции ТОО «QazSmartTrans». 
        Объем инвестиций составил 1,2 млрд. тенге.`
      },
      n4: {
        title: "TOLEM <br> служба доставки",
        descr: `Из-за запросов жителей города Шымкент компания TOLEM запустила «Сервис доставки».
        Теперь при онлайн-заказе "школьной карты или студенческой карты" можно выбрать «Сервис доставки».`
      },
      n5: {
        title: "Сработала новая кнопка контроля за общественным транспортом ",
        descr: `Теперь в мобильном приложении TOLEM появилась возможность смотреть маршруты всех автобусов города Шымкент.
        Теперь в мобильном приложении TOLEM вы можете посмотреть нужный для себя маршрут автобуса нажав на кнопку «Маршруты».`
      },
      n6: {
        title: "Виртуальный счет <br> Tolem pay ",
        descr: `Данная система осуществляется в рамках государственной программы «Цифровой Казахстан» для
        улучшения обслуживания общественного транспорта и удобства пассажиров. 
        Никаких финансов от государства не выделялось. Проект реализуется за счет средств частной инвестиции ТОО «QazSmartTrans». 
        Объем инвестиций составил 1,2 млрд. тенге.`
      },
    }
  }

  connectedCallback() {
    const lang = document.querySelector("html").getAttribute("lang");
      this.innerHTML = `
      <section class="accordion-container" data-container="1">
        <div class="panel" data-panel="100">
          <h2 class="text-center mb-4 pt-6">
            ${this.langMap[lang].n1.title}
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
          ${this.langMap[lang].n1.descr}
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="panel" data-panel="101">
          <h2 class="text-center mb-4 pt-6">
            ${this.langMap[lang].n2.title}
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
            ${this.langMap[lang].n2.descr}
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="panel" data-panel="102">
          <h2 class="text-center mb-4 pt-6">
          ${this.langMap[lang].n3.title}
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
          ${this.langMap[lang].n3.descr}
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="panel" data-panel="103">
          <h2 class="text-center mb-4 pt-6">
          ${this.langMap[lang].n4.title}
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
          ${this.langMap[lang].n4.descr}
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="panel" data-panel="104">
          <h2 class="text-center mb-4 pt-6">
          ${this.langMap[lang].n5.title}
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
          ${this.langMap[lang].n5.descr}
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="panel" data-panel="105">
          <h2 class="text-center mb-4 pt-6">
          ${this.langMap[lang].n6.title}
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
          ${this.langMap[lang].n6.descr}
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="card text-md accordion" data-panel="100">
            <p>
            ${this.langMap[lang].n1.title}
            </p>
            <div class="dots flex">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="card text-md accordion" data-panel="101">
            <p>
            ${this.langMap[lang].n2.title}
            </p>
            <div class="dots flex">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="card text-md accordion" data-panel="102">
            <p>
            ${this.langMap[lang].n3.title}
            </p>
            <div class="dots flex">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="card text-md accordion" data-panel="103">
            <p>
            ${this.langMap[lang].n4.title}
            </p>
            <div class="dots flex">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="card text-md accordion" data-panel="104">
            <p>
            ${this.langMap[lang].n5.title}
            </p>
            <div class="dots flex">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="card text-md accordion" data-panel="105">
            <p>
            ${this.langMap[lang].n6.title}
            </p>
            <div class="dots flex">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
        </div>
      </section>
      `;
  }
}

customElements.define("news-component", News);