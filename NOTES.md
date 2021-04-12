# Brukerstyrt design

## Intro

- Hei! Jeg heter Hege og i dag skal jeg snakke om React Context  
- Det en veldig kult konsept, som gjør mye enklere å håndtere en global state i reactappen din 

## Agenda

I dag skal jeg

1. først gå litt nærmere inn på hva React Context er 
2. deretter skal forklare hvordan man kan bruke React Context til å dele en state i hele applikasjonen 
3. Til slutt skal vi se på en enkel reactapplikasjon som bruker react context 
   - for å dele en global styling i hele nettsiden 
   - og som lar bruker styre design og aksessibilitet på nettsiden selv 

La oss sette i gang 
## React Context
React context... hva er det? 

- React Context er et API som lar oss dele data "globalt" i applikasjonen.  
- Dvs. at man kan aksessere og endre en state direkte - fra hvilken som helst komponent - 
  uten å måtte sende props nedover i komponenttreet. Som illustrert på denne tegning
- Har du en stor applikasjon med mange komponenter og  - flere lag med hierarki -  kan dette forenkle implementasjonen betraktelig. 
- Og det vil i mange tilfeller gjøre at man ikke trenger eksterne biblioteker for å håndtere state - som feks Redux eller recoil. 
- Noe som minsker boilerplate i kodebasen. og det liker vi  

- For å komme i gang med context er det tre konsepter vi må kjenne til: context, provider og useContext-hooken 

## Oppsett
1. Først må vi lage en kontekst. Cotnext = er der staten vår lagres. 
Dette gjøres ved bruk av react sin funksjon createContext. Her sender vi inn hvordan staten skal se ut 
når contexten initialiseres. Vi har ikke sendt inn noe spennende. Kun at den har et felt som er null .
2. Deretter må vi lage en provider -  som gjør konteksten vår tilgjengelig for komponentene som abonnerer på konteksten
   - Nå vil alle komponeter som ligger inni ThemeContext.Provider kunne hente ut at tema er "light"!
3. Oppsettet er ferdig. Og nå kan vi benytte oss av useCotext-hooken  for å aksessere og endre staten fra hvor som helst  

Det var en rask gjennomgang av hvordan man kommer i gang med react context. 
Jeg lovet i starten at vi jeg skulle ta en demo av en applikasjon som bruker react context. 
Vi skal se på en ganske enkel applikasjon som styles ut i fra en global state, og som brukeren endre designet selv - fra hvor som helst 
Applikasjonen er denne presentasjoen. Vi er faktisk i demoen akkurat nå 


## Demo av koden 
Dette er en react applikasjon på localhost. 
Det er greit å legge merke til de tre knappene nedert 

- gå gjennom filstrukturen  
- gå gjennom koden 

