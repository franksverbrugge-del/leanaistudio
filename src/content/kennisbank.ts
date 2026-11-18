import type { Article } from "@/content/types";

export const articles: Article[] = [
  {
    slug: "wat-kost-een-website-laten-maken",
    title: "Wat kost een website laten maken in 2027?",
    description:
      "Wat kost een website laten maken? Marktprijzen, onze eigen vaste prijzen, terugkerende kosten voor hosting en beheer en waar je op let bij een offerte.",
    date: "2026-11-18",
    author: "Frank Verbrugge",
    readingMinutes: 6,
    primaryKeyword: "kosten website laten maken",
    intro:
      "Een website laten maken kan een paar honderd euro kosten, maar ook vijftienduizend. Dat verschil is niet vreemd. Je betaalt voor tijd, kennis en wat de site moet kunnen. In dit artikel lees je waar de prijs van afhangt, wat de markt vraagt, wat wij vragen en welke kosten er na de oplevering bijkomen. Zo kun je offertes beter naast elkaar leggen.",
    blocks: [
      { type: "h2", text: "Wat vraagt de markt?" },
      {
        type: "p",
        text: "Er is geen vaste prijs voor een website. Wel zijn er bandbreedtes die steeds terugkomen. Searchlab zette de prijzen van Nederlandse webbureaus op een rij. Trustoo deed hetzelfde voor webdesigners en kwam uit op vergelijkbare bedragen, met een iets lagere onderkant omdat daar ook eenvoudige sites van zzp’ers in zitten.",
      },
      {
        type: "table",
        head: ["Type website", "Prijs bij een webbureau (eenmalig)"],
        rows: [
          ["Starterwebsite", "€2.000 tot €4.000"],
          ["Professionele MKB-site", "€4.000 tot €8.000"],
          ["Strategisch maatwerk", "€8.000 tot €15.000 of meer"],
          ["Webapplicatie", "€15.000 tot €50.000 of meer"],
        ],
      },
      {
        type: "p",
        text: "Volgens Searchlab rekenen Nederlandse webbureaus €75 tot €125 per uur. Freelancers zitten op €50 tot €100 per uur. Trustoo noemt voor webdesigners een gemiddelde van €65 tot €105 per uur. Die uurtarieven verklaren het grootste deel van de prijs: een website is vooral werk.",
      },
      { type: "h2", text: "Waar hangt de prijs van af?" },
      {
        type: "p",
        text: "Twee websites die er op het eerste gezicht hetzelfde uitzien, kunnen heel anders geprijsd zijn. Dit zijn de dingen die het verschil maken.",
      },
      {
        type: "ul",
        items: [
          "Aantal pagina’s en soorten pagina’s. Tien pagina’s met dezelfde opbouw zijn sneller klaar dan vijf pagina’s die allemaal anders werken.",
          "Ontwerp. Een bestaand thema aanpassen is goedkoper dan een eigen ontwerp dat past bij je merk.",
          "Teksten. Lever je ze zelf aan, of moeten ze geschreven worden? Goede teksten kosten tijd, ook met hulp van AI.",
          "Functies. Een contactformulier is eenvoudig. Een offertemodule, een klantportaal of een koppeling met je boekhouding is een ander verhaal.",
          "Koppelingen. Elke koppeling met een ander systeem, zoals een CRM of agenda, vraagt bouwen en testen.",
          "Vindbaarheid. Een site die technisch goed staat voor Google, met snelle laadtijden en een logische opbouw, vraagt extra aandacht.",
          "Talen. Een tweede taal is meer dan vertalen. Ook menu’s, formulieren en zoekwoorden moeten kloppen.",
        ],
      },
      { type: "h2", text: "Wat kost een website bij Lean AI Studio?" },
      {
        type: "p",
        text: "We noemen onze prijzen gewoon. Het zijn vanafprijzen, exclusief btw. Na een gesprek krijg je een vaste prijs per fase, zodat je vooraf weet waar je aan toe bent.",
      },
      {
        type: "table",
        head: ["Wat", "Vanaf (excl. btw)", "Wat erbij hoort"],
        rows: [
          [
            "Website",
            "€2.500",
            "Klikbaar ontwerp vooraf, bouw, basis voor vindbaarheid, mobielvriendelijk, livegang",
          ],
          [
            "Webapplicatie",
            "€7.500",
            "Maatwerk voor een proces, zoals een klantportaal of offertetool, met inlog en gegevensopslag",
          ],
          [
            "Eerste automatisering",
            "€1.500",
            "Eén proces dat we automatiseren, bijvoorbeeld e-mail sorteren of offertes opstellen",
          ],
          [
            "Beheer en doorontwikkeling",
            "€49 per maand",
            "Updates, monitoring, kleine aanpassingen en een vast aanspreekpunt",
          ],
        ],
      },
      {
        type: "callout",
        title: "Onze afspraken",
        text: "Je betaalt een vaste prijs per fase. Ben je na de ontwerpfase niet tevreden, dan stop je zonder verdere kosten. Na oplevering herstellen we fouten 30 dagen gratis. En de code en accounts staan altijd op jouw naam, dus je zit nooit vast aan ons.",
      },
      {
        type: "p",
        text: "Onze websiteprijs valt in de bandbreedte van een starterwebsite. Het verschil zit in wat je daarvoor krijgt. Omdat we met AI bouwen, kunnen we meer doen in minder uren. Daarover hieronder meer.",
      },
      { type: "h2", text: "Terugkerende kosten: hosting, domein en beheer" },
      {
        type: "p",
        text: "Een website is na de livegang niet gratis. Reken op een paar vaste posten per jaar. De bedragen hieronder komen uit de overzichten van Searchlab en Trustoo.",
      },
      {
        type: "table",
        head: ["Post", "Wat het ongeveer kost"],
        rows: [
          ["Domeinnaam", "€10 tot €15 per jaar (Searchlab)"],
          ["Hosting", "€50 tot €300 per jaar (Trustoo), tot €600 voor een eigen server (Searchlab)"],
          ["SSL-certificaat", "€0 tot €100 per jaar, vaak gratis bij de hosting"],
          ["Zakelijke e-mail", "€12 tot €84 per jaar (Searchlab)"],
          ["Onderhoud door een bureau", "€50 tot €200 per maand (Searchlab)"],
        ],
      },
      {
        type: "p",
        text: "Onderhoud klinkt als iets wat je kunt overslaan. Dat is riskant. Software veroudert, er komen beveiligingsupdates en formulieren kunnen stilletjes stoppen met werken. Bij ons begint beheer bij €49 per maand. Wil je het zelf doen, dan kan dat ook, want alle accounts staan op jouw naam.",
      },
      { type: "h2", text: "Waar let je op bij een offerte?" },
      {
        type: "p",
        text: "Offertes zijn lastig te vergelijken. De ene partij rekent het ontwerp mee, de andere niet. Stel daarom bij elke offerte dezelfde vragen.",
      },
      {
        type: "ol",
        items: [
          "Is de prijs vast of op basis van uren? Bij uren weet je pas achteraf wat je kwijt bent.",
          "Zie je een ontwerp voordat er gebouwd wordt? En wat gebeurt er als je dat ontwerp niet goed vindt?",
          "Wie schrijft de teksten? Als dat bij jou ligt, plan er dan tijd voor in.",
          "Staan domein, hosting en code op jouw naam? Zo niet, dan ben je afhankelijk van de bouwer.",
          "Wat kost het per jaar na oplevering? Vraag naar hosting, licenties en onderhoud.",
          "Hoe lang worden fouten na oplevering gratis hersteld?",
          "Wat valt buiten de offerte? Denk aan extra pagina’s, koppelingen of een tweede taal.",
        ],
      },
      { type: "h2", text: "Waarom AI de bouw goedkoper maakt" },
      {
        type: "p",
        text: "Het grootste deel van de prijs van een website zijn uren. AI neemt een deel van dat werk over: code schrijven voor standaardonderdelen, eerste versies van teksten, varianten van een ontwerp. Wat vroeger dagen kostte, kost nu uren.",
      },
      {
        type: "p",
        text: "Dat betekent niet dat de kwaliteit omlaag hoeft. Het verschil zit in de controle. Wij laten AI het zware werk doen en controleren alles zelf: of de teksten kloppen, of de site snel laadt, of formulieren werken en of Google de pagina’s goed kan lezen. AI is gereedschap, geen vervanging van vakwerk.",
      },
      {
        type: "p",
        text: "Een voorbeeld uit eigen huis is Wijntripje.nl, een wijnreisplatform dat we als apart bedrijf zelf runnen. Het heeft een eigen CMS, interactieve kaarten en een systeem dat automatisch content aanmaakt. We bouwden het in één week. In het eerste jaar kwamen er 50.000 bezoekers. Inmiddels is er ook een Duitse versie, Weintrips.de.",
      },
      { type: "h2", text: "Zo begin je" },
      {
        type: "p",
        text: "Weet je nog niet precies wat je nodig hebt? Dat hoeft ook niet. We beginnen met een gratis gesprek van 30 minuten. Daarna krijg je een gratis klikbaar ontwerp of plan. Pas als je dat goed vindt, bouwen we voor een vaste prijs. Daarna gaat de site live en kun je kiezen voor beheer. Heb je al een website, laat hem dan eerst gratis door ons checken. Dan weet je waar de winst zit voordat je ergens aan begint.",
      },
    ],
    related: [
      { href: "/prijzen", label: "Onze prijzen" },
      { href: "/website-laten-maken", label: "Website laten maken" },
      { href: "/websitecheck", label: "Gratis websitecheck" },
    ],
    cta: "websitecheck",
    sources: [
      {
        label: "Searchlab, Wat kost een website in 2026?",
        href: "https://searchlab.nl/blog/wat-kost-een-website-in-2026",
      },
      {
        label: "Trustoo, Wat kost webdesign?",
        href: "https://trustoo.nl/kosten/webdesign-kosten/",
      },
    ],
  },
  {
    slug: "ai-automatisering-mkb-waar-begin-je",
    title: "AI-automatisering voor het MKB: waar begin je?",
    description:
      "AI-automatisering in het MKB: wat CBS-cijfers zeggen, hoe je je eerste proces kiest, voorbeelden, privacy en AVG in gewone taal en wat het kost om te starten.",
    date: "2026-11-18",
    author: "Kevin van Oosteren",
    readingMinutes: 6,
    primaryKeyword: "ai automatisering mkb",
    intro:
      "Bijna elke ondernemer heeft wel eens iets met ChatGPT geprobeerd. Maar AI echt laten meedraaien in je bedrijf is een andere stap. Waar begin je dan? Welk proces pak je als eerste aan, en hoe zit het met privacy? In dit artikel geven we een nuchter stappenplan, met voorbeelden die passen bij bedrijven van 5 tot 50 mensen.",
    blocks: [
      { type: "h2", text: "Hoe ver is het MKB met AI?" },
      {
        type: "p",
        text: "Volgens het CBS gebruikte in 2025 17 procent van de Nederlandse bedrijven met twee of meer werkzame personen een vorm van AI. Hoe groter het bedrijf, hoe vaker.",
      },
      {
        type: "table",
        head: ["Bedrijfsgrootte (werkzame personen)", "Gebruikt AI (2025)"],
        rows: [
          ["2 tot 10", "14%"],
          ["10 tot 50", "27%"],
          ["50 tot 250", "45%"],
        ],
      },
      {
        type: "p",
        text: "Andere onderzoeken komen hoger uit. In de MKB Barometer van Exact, gepubliceerd in augustus 2026, zegt zeven op de tien ondernemers AI te gebruiken. Dat gaat vaak over losse tools, zoals een chatbot voor teksten. Hetzelfde onderzoek laat zien dat 47 procent nog niet goed weet hoe AI effectief in de eigen organisatie kan worden ingezet. Gebruiken is dus iets anders dan er echt tijd mee besparen.",
      },
      { type: "h2", text: "Waarom bedrijven nog twijfelen" },
      {
        type: "p",
        text: "Het CBS vroeg microbedrijven (2 tot 9 werkzame personen) die AI hadden overwogen, waarom ze er toch niet mee begonnen. De belangrijkste redenen:",
      },
      {
        type: "ul",
        items: [
          "Gebrek aan ervaring: 71,6 procent",
          "Zorgen over privacy: 48,8 procent",
          "Onduidelijke juridische gevolgen: 42,7 procent",
          "Kosten te hoog: 20,3 procent",
        ],
      },
      {
        type: "p",
        text: "Opvallend is dat kosten pas op de vierde plek staan. Het grootste probleem is niet geld, maar weten waar je moet beginnen en of het veilig is. Daar gaat de rest van dit artikel over.",
      },
      {
        type: "p",
        text: "Gebrek aan ervaring los je niet op door eerst een cursus te volgen of een AI-strategie op papier te zetten. Je lost het op door met één concreet proces te beginnen. Dan zie je wat AI goed doet, waar het fouten maakt en hoe je team ermee omgaat. Die ervaring neem je mee naar de volgende stap.",
      },
      { type: "h2", text: "Stappenplan: kies je eerste proces" },
      {
        type: "p",
        text: "Begin niet te groot. Kies één proces, maak het werkend en bouw daarna verder. Zo vind je het juiste proces.",
      },
      {
        type: "ol",
        items: [
          "Zoek herhaalwerk. Schrijf een week lang op wat jij en je team steeds opnieuw doen. Overtypen, kopiëren, mails beantwoorden met bijna hetzelfde antwoord.",
          "Kijk naar volume. Een taak die tien keer per dag terugkomt, levert meer op dan een taak die eens per maand speelt. Reken grof uit hoeveel uur per week erin gaat.",
          "Check of er regels zijn. Kun je uitleggen hoe het werk gaat? “Als een klant om een offerte vraagt, pak ik de prijslijst en vul ik het sjabloon in.” Dan kan een systeem het ook leren.",
          "Kijk welke data er is. Staat de informatie al ergens digitaal, zoals in je mailbox, een spreadsheet of je boekhoudpakket? Dan kun je ermee aan de slag. Zit het alleen in iemands hoofd, dan begin je daar.",
          "Bepaal waar de mens blijft. Wie controleert de uitkomst voordat die naar een klant gaat? Bij een eerste automatisering is het verstandig dat iemand meekijkt.",
        ],
      },
      {
        type: "callout",
        title: "Vuistregel",
        text: "Een goed eerste proces komt vaak voor, volgt vaste regels, gebruikt data die al digitaal is en kost nu merkbaar tijd. Als het misgaat, is de schade klein omdat iemand de uitkomst controleert.",
      },
      { type: "h2", text: "Voorbeelden van processen om mee te beginnen" },
      {
        type: "p",
        text: "Dit zijn processen die we in de praktijk vaak zien en die goed passen bij een eerste stap.",
      },
      {
        type: "table",
        head: ["Proces", "Wat AI doet", "Wat de mens doet"],
        rows: [
          [
            "Offertes",
            "Haalt gegevens uit de aanvraag en zet een conceptofferte klaar volgens jouw prijzen",
            "Controleert en verstuurt",
          ],
          [
            "Facturen",
            "Leest inkomende facturen uit en zet ze klaar voor de boekhouding",
            "Keurt afwijkingen goed",
          ],
          [
            "E-mail",
            "Sorteert mail, herkent het soort vraag en schrijft een conceptantwoord",
            "Leest mee en drukt op verzenden",
          ],
          [
            "Intake",
            "Verwerkt een aanvraagformulier en vraagt ontbrekende informatie op",
            "Voert het eerste echte gesprek",
          ],
          [
            "Rapportages",
            "Verzamelt cijfers uit verschillende systemen en maakt een vaste weekrapportage",
            "Trekt de conclusies",
          ],
        ],
      },
      {
        type: "p",
        text: "We bouwden zulke systemen eerder voor een mediabedrijf, waaronder een offertetool, een facturatiesysteem, e-mailautomatisering en een tool voor sales-outreach. De les daaruit: begin klein, laat het team meteen meewerken en verbeter in korte rondes.",
      },
      { type: "h2", text: "Privacy en AVG in gewone taal" },
      {
        type: "p",
        text: "Privacy is na gebrek aan ervaring de grootste reden om niet te beginnen. Uit de Exact-barometer blijkt dat 48 procent van de MKB’ers het nog spannend vindt om medewerkers met bedrijfsdata in AI te laten werken. Dat is begrijpelijk. Toch kun je het goed regelen als je een paar basisvragen stelt.",
      },
      {
        type: "ul",
        items: [
          "Welke gegevens gaan erin? Stuur alleen wat nodig is. Een systeem dat mail sorteert, heeft geen burgerservicenummers nodig.",
          "Waar gaan de gegevens naartoe? Kies waar het kan voor diensten die gegevens binnen de EU verwerken.",
          "Wordt er met je gegevens getraind? Kies voor zakelijke versies van AI-diensten waarin je kunt nagaan dat jouw data niet wordt gebruikt om modellen te trainen.",
          "Is er een verwerkersovereenkomst? Als een leverancier persoonsgegevens voor jou verwerkt, hoort daar een verwerkersovereenkomst bij.",
          "Wie heeft toegang? Leg vast welke medewerkers welke data zien, net als bij je andere systemen.",
          "Beslist er een mens? Laat beslissingen die mensen raken, zoals een afwijzing, niet volledig automatisch nemen.",
        ],
      },
      {
        type: "p",
        text: "De AVG verbiedt AI niet. Hij vraagt dat je weet wat je met persoonsgegevens doet en dat je daar zorgvuldig mee omgaat. Dat geldt voor je CRM en je mailbox net zo goed.",
      },
      { type: "h2", text: "Wat kost een eerste automatisering?" },
      {
        type: "p",
        text: "Bij Lean AI Studio begint een eerste automatisering vanaf €1.500 exclusief btw. Daarvoor pakken we één proces aan, van analyse tot een werkende oplossing. Wil je dat we het daarna bijhouden en verbeteren, dan kost beheer en doorontwikkeling vanaf €49 per maand.",
      },
      {
        type: "p",
        text: "Je betaalt een vaste prijs per fase. Na de livegang herstellen we fouten 30 dagen gratis. Alles staat op jouw naam, ook de accounts bij AI-diensten. We beginnen met een gratis gesprek van 30 minuten en een gratis plan. Pas als je daarmee verder wilt, gaan we bouwen. Wil je eerst zelf zien waar de kansen zitten? Doe dan de automatiseringsscan.",
      },
    ],
    related: [
      { href: "/ai-automatisering", label: "AI-automatisering" },
      { href: "/automatiseringsscan", label: "Doe de automatiseringsscan" },
      { href: "/prijzen", label: "Prijzen" },
    ],
    cta: "scan",
    sources: [
      {
        label: "CBS, Bedrijven gebruiken AI vaakst voor marketing of verkoop (2025)",
        href: "https://www.cbs.nl/nl-nl/nieuws/2025/50/bedrijven-gebruiken-ai-vaakst-voor-marketing-of-verkoop",
      },
      {
        label: "CBS, Gebruik van AI-technologie door Nederlandse microbedrijven: redenen geen AI-technologie",
        href: "https://www.cbs.nl/nl-nl/longread/rapportages/2026/gebruik-van-ai-technologie-door-nederlandse-microbedrijven/6-redenen-geen-ai-technologie",
      },
      {
        label: "Accountant.nl, Ook MKB omarmt massaal AI (Exact MKB Barometer)",
        href: "https://www.accountant.nl/nieuws/2026/8/ook-mkb-omarmt-massaal-ai-maar-strategische-inzet-blijft-nog-achter/",
      },
    ],
  },
  {
    slug: "website-laten-maken-met-ai",
    title: "Website laten maken met AI: wat kan wel en wat niet?",
    description:
      "Een website laten maken met AI: wat AI-websitebouwers wel en niet kunnen, wat Google zegt over AI-content en waarom controle door mensen nodig blijft.",
    date: "2026-11-18",
    author: "Frank Verbrugge",
    readingMinutes: 6,
    primaryKeyword: "website laten maken met ai",
    intro:
      "Je typt een paar zinnen over je bedrijf en binnen een minuut staat er een website. Zo presenteren AI-websitebouwers zich. Dat werkt echt, tot op zekere hoogte. In dit artikel lees je eerlijk wat AI wel en niet kan bij het maken van een website, wat Google ervan vindt en waar je als ondernemer op moet letten.",
    blocks: [
      { type: "h2", text: "Wat een AI-websitebouwer goed kan" },
      {
        type: "p",
        text: "AI-websitebouwers zijn de laatste jaren een stuk beter geworden. Voor sommige situaties zijn ze prima.",
      },
      {
        type: "ul",
        items: [
          "Snel een eerste opzet maken met een paar pagina’s, een menu en een contactformulier.",
          "Een ontwerp kiezen dat er netjes uitziet op mobiel en desktop.",
          "Eerste versies van teksten schrijven op basis van een korte omschrijving.",
          "Afbeeldingen voorstellen of genereren.",
          "Goedkoop starten, vaak met een maandabonnement.",
        ],
      },
      {
        type: "p",
        text: "Heb je een hobbyproject, een tijdelijke actiepagina of wil je een idee testen? Dan is zo’n tool een prima keuze. Je hebt binnen een middag iets online.",
      },
      {
        type: "p",
        text: "Let wel op wat je eruit haalt. Een tool levert een website die er goed uitziet. Of die website ook doet wat jij nodig hebt, is een tweede vraag. Een mooie homepage zegt nog niets over hoeveel aanvragen er binnenkomen. Daarvoor moet de site aansluiten op de vragen van jouw klanten, en dat weet de tool niet uit zichzelf.",
      },
      { type: "h2", text: "Waar het tekortschiet" },
      {
        type: "p",
        text: "Voor een bedrijfswebsite die klanten moet opleveren, loop je sneller tegen grenzen aan. Dat ligt niet aan slechte software, maar aan wat AI van nature is.",
      },
      {
        type: "ul",
        items: [
          "AI kent je bedrijf niet. Het weet niet waarom klanten voor jou kiezen, welke vragen ze stellen of wat je onderscheidt van de concurrent.",
          "AI maakt fouten die echt klinken. Een taalmodel voorspelt woorden, het zoekt geen feiten op. Een verkeerde openingstijd of een dienst die je niet levert, staat er net zo overtuigend als de rest.",
          "Teksten lijken op die van iedereen. Als duizend bedrijven dezelfde soort vraag stellen, krijgen ze vergelijkbare antwoorden.",
          "Je zit vast aan het platform. Bij veel bouwers kun je de site niet meenemen naar een andere partij.",
          "Maatwerk is beperkt. Een koppeling met je planning, een offertemodule of een klantportaal past meestal niet in het sjabloon.",
          "Vindbaarheid en toegankelijkheid worden vaak overgeslagen. Denk aan een logische opbouw van koppen, beschrijvende alt-teksten, voldoende contrast en snelle laadtijden.",
        ],
      },
      { type: "h2", text: "Een AI-tool of een bureau dat met AI bouwt" },
      {
        type: "p",
        text: "Er is een groot verschil tussen zelf een AI-tool gebruiken en een bureau inschakelen dat met AI werkt. Bij een tool doe je alles zelf en vertrouw je op wat de software maakt. Bij een bureau dat met AI bouwt, gebruikt een vakmens AI als gereedschap en controleert hij het resultaat.",
      },
      {
        type: "table",
        head: ["", "AI-websitebouwer", "Bureau dat met AI bouwt"],
        rows: [
          ["Wie maakt de keuzes?", "Jij, met hulp van de tool", "Jij en het bureau samen"],
          ["Controle van teksten en feiten", "Door jou, als je eraan denkt", "Door het bureau, vóór livegang"],
          ["Maatwerk en koppelingen", "Beperkt tot wat het platform biedt", "Mogelijk, op maat gebouwd"],
          ["Eigendom", "Vaak afhankelijk van het platform", "Bij ons altijd op jouw naam"],
          ["Kosten", "Laag, vaak per maand", "Hoger dan een tool; bij ons een website vanaf €2.500"],
        ],
      },
      { type: "h2", text: "Waar de mens nodig blijft" },
      {
        type: "p",
        text: "AI versnelt het werk, maar een aantal dingen kun je niet uitbesteden aan software. Daar zit precies de waarde van een goede website. Het zijn ook de onderdelen die bij een AI-tool het eerst blijven liggen, omdat niemand er verantwoordelijk voor is.",
      },
      {
        type: "ol",
        items: [
          "Strategie. Voor wie is de site, wat moet een bezoeker doen en waarom zou hij jou kiezen? Dat bepaal je in een gesprek, niet in een prompt.",
          "Teksten die kloppen. Elke prijs, dienst en belofte moet waar zijn. Iemand moet dat nalopen.",
          "Controle. Werken de formulieren? Komen de mails aan? Klopt de site op een oude telefoon?",
          "Techniek. Snelheid, beveiliging, updates en koppelingen met andere systemen vragen kennis.",
          "SEO. Zoekwoorden kiezen, pagina’s logisch opbouwen en metadata schrijven die past bij wat mensen zoeken.",
          "Toegankelijkheid. Een site die ook bruikbaar is voor mensen die slecht zien of geen muis gebruiken.",
        ],
      },
      { type: "h2", text: "Wat zegt Google over AI-content?" },
      {
        type: "p",
        text: "Veel ondernemers vragen zich af of Google websites met AI-teksten afstraft. Het korte antwoord: nee, niet omdat AI is gebruikt. Google zegt dat je content met generatieve AI mag publiceren, zolang die voldoet aan de gewone regels voor zoekresultaten.",
      },
      {
        type: "p",
        text: "Wel zet Google er duidelijke voorwaarden bij. Wie met AI grote aantallen pagina’s maakt zonder dat ze iets toevoegen voor de bezoeker, kan in strijd zijn met het spambeleid. Daarnaast wijst Google erop dat taalmodellen fouten kunnen maken. Het advies is om alle AI-content handmatig te controleren op juistheid voordat je publiceert. Dat geldt ook voor metadata, zoals paginatitels, beschrijvingen, gestructureerde gegevens en alt-teksten.",
      },
      {
        type: "callout",
        title: "Kort gezegd",
        text: "AI-teksten mogen van Google, als ze nuttig zijn voor de lezer en door een mens zijn gecontroleerd. Massaal pagina’s genereren zonder toegevoegde waarde is het risico, niet AI zelf.",
      },
      {
        type: "p",
        text: "Google raadt ook aan om open te zijn over hoe content tot stand komt, zodat de lezer context heeft. Voor de meeste bedrijfssites betekent dat vooral: zorg dat er een echt bedrijf en echte mensen achter de tekst staan, en dat wat er staat klopt.",
      },
      { type: "h2", text: "Zo werkt Lean AI Studio" },
      {
        type: "p",
        text: "Wij bouwen met AI en controleren alles zelf. AI doet het werk dat vroeger dagen kostte. Wij doen de strategie, lezen elke tekst na, testen de site en zorgen dat de techniek klopt. Zo krijg je de snelheid van AI zonder de risico’s.",
      },
      {
        type: "ol",
        items: [
          "Een gratis gesprek van 30 minuten over je bedrijf en je doelen.",
          "Een gratis klikbaar ontwerp of plan, zodat je ziet wat je krijgt.",
          "Bouwen voor een vaste prijs per fase. Een website begint vanaf €2.500 exclusief btw.",
          "Livegang en, als je wilt, beheer en doorontwikkeling vanaf €49 per maand.",
        ],
      },
      {
        type: "p",
        text: "Ben je na de ontwerpfase niet tevreden, dan stop je zonder verdere kosten. Na oplevering herstellen we fouten 30 dagen gratis. Code en accounts staan altijd op jouw naam.",
      },
      {
        type: "p",
        text: "Dat deze aanpak werkt, zie je aan Wijntripje.nl, een eigen project dat we als apart bedrijf runnen. Het is een wijnreisplatform met een eigen CMS, interactieve kaarten en een automatisch contentsysteem. We bouwden het in één week en het trok in het eerste jaar 50.000 bezoekers. Er is inmiddels ook een Duitse versie, Weintrips.de.",
      },
    ],
    related: [
      { href: "/werkwijze", label: "Zo werken we" },
      { href: "/website-laten-maken", label: "Website laten maken" },
      { href: "/contact", label: "Plan een gesprek" },
    ],
    cta: "gesprek",
    sources: [
      {
        label: "Google Search Central, Richtlijnen voor door AI gegenereerde content",
        href: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content",
      },
    ],
  },
];
