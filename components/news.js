class News extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <section class="accordion-container" data-container="1">
        <div class="panel" data-panel="100">
          <h2 class="text-center mb-4 pt-6">
            Шымкент әкімдігі Төлем жайында
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
            Бұл жүйе «Цифрлық Қазақстан» мемлекеттік 
            бағдарламасын іске асыру мен қоғамдық көліктің 
            қызметін жақсарту және жолаушыларға қолайлы 
            жағдайларды жасау мақсатында іске асырылуда. 
            Оған мемлекеттен ешқандай қаржы бөлінбеген. 
            Ол «QazSmartTrans» ЖШС жеке инвестициялар 
            есебінен іске асырылады. 
            Инвестициянын көлемі 1,2 млрд. теңгені құрайды.
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="panel" data-panel="101">
          <h2 class="text-center mb-4 pt-6">
            ФРОНТ-ОФИС ашылды
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
            Шымкент қаласында жаңа фронт-офисіміз ашылды. 
            Енді кез-келген "Төлемге" байланысты шағым, арыз, 
            өтініштеріңізді тікелей Әл-Фараби алаңы 9, 
            мекен-жайы бойынша хабарласа аласыздар. 
            Бұл офисімізде "оқушы картасы, студент картасы" 
            сияқты карталарымызға тапсырыс беріп, дайын 
            болғанда алып кетуге болады. Фронт-офис демалыссыз 
            мсіздерді қабылдауға дайын.
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="panel" data-panel="102">
          <h2 class="text-center mb-4 pt-6">
            Біздің компания
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
            Бұл жүйе «Цифрлық Қазақстан» мемлекеттік 
            бағдарламасын іске асыру мен қоғамдық көліктің 
            қызметін жақсарту және жолаушыларға қолайлы 
            жағдайларды жасау мақсатында іске асырылуда. 
            Оған мемлекеттен ешқандай қаржы бөлінбеген. 
            Ол «QazSmartTrans» ЖШС жеке инвестициялар 
            есебінен іске асырылады. 
            Инвестициянын көлемі 1,2 млрд. теңгені құрайды.
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="panel" data-panel="103">
          <h2 class="text-center mb-4 pt-6">
            TOLEM жеткізу қызметі
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
            Шымкент қаласы тұргындарының сұранасын ескере отырып 
            Төлем компаниясы “Жеткізу қызметін” іске қосты. 
            Енді Төлем оқушы немесе студент картасын мобильді қосыма арқылы 
            онлайн тапсырыс беру кезіңде “Жеткізу қызметін” таңдауға болады.
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="panel" data-panel="104">
          <h2 class="text-center mb-4 pt-6">
            Қоғамдық көлікті бақылайтын жаңа 
            батырма іске қосылды
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
            Енді Төлем мобильді косымшасында Шымкент қаласындағы бүкіл автобустардың 
            маршруттарын бақылай алу мүмкіндігі іске қосылды. 
            Енді өзіңіге керекті автобустың маршрутын Төлем мобильді қосымшасындағы 
            “Маршруттар” батырмасы арқылы көре аласыздар.
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="panel" data-panel="105">
          <h2 class="text-center mb-4 pt-6">
            TOLEM жеткизу кызмети
          </h2>
          <div class="text-base text-center mx-auto mb-6 news-text">
            Бұл жүйе «Цифрлық Қазақстан» мемлекеттік 
            бағдарламасын іске асыру мен қоғамдық көліктің 
            қызметін жақсарту және жолаушыларға қолайлы 
            жағдайларды жасау мақсатында іске асырылуда. 
            Оған мемлекеттен ешқандай қаржы бөлінбеген. 
            Ол «QazSmartTrans» ЖШС жеке инвестициялар 
            есебінен іске асырылады. 
            Инвестициянын көлемі 1,2 млрд. теңгені құрайды.
          </div>
          <div class="separator w-90 mb-6"></div>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="card text-md accordion" data-panel="100">
            <p>
              Шымкент әкімдігі <br> Төлем жайында
            </p>
            <div class="dots flex">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="card text-md accordion" data-panel="101">
            <p>
              ФРОНТ-ОФИС <br> ашылды
            </p>
            <div class="dots flex">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="card text-md accordion" data-panel="102">
            <p>
              Біздің компания
            </p>
            <div class="dots flex">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="card text-md accordion" data-panel="103">
            <p>
              TOLEM <br> жеткізу қызметі
            </p>
            <div class="dots flex">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="card text-md accordion" data-panel="104">
            <p>
              Қоғамдық көлікті <br> бақылайтын жаңа <br> батырма іске қосылды
            </p>
            <div class="dots flex">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div class="card text-md accordion" data-panel="105">
            <p>
              TOLEM pay виртуалды <br> шоты
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