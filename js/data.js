/* Gedeelde data — kunstwerken & oefeningen */
/* Volgorde van de tabs = zoals het Figma/PDF-grid (4 kolommen):
   rij1: All Categories | Beeldhouwkunst | Fotografie | Grafiek
   rij2: Installatiekunst | Schilderkunst | Tekenkunst | Video
   rij3: Favorieten */
const CATEGORIES = [
  {key:'alles',           label:'All Categories'},
  {key:'beeldhouwkunst',  label:'Beeldhouwkunst'},
  {key:'fotografie',      label:'Fotografie'},
  {key:'grafiek',         label:'Grafiek'},
  {key:'installatiekunst',label:'Installatiekunst'},
  {key:'schilderkunst',   label:'Schilderkunst'},
  {key:'tekenkunst',      label:'Tekenkunst'},
  {key:'video',           label:'Video'},
  {key:'favorieten',      label:'Favorieten'}
];

const CAT_LABEL = {beeldhouwkunst:'Beeldhouwkunst',installatiekunst:'Installatiekunst',schilderkunst:'Schilderkunst',
  fotografie:'Fotografie',tekenkunst:'Tekenkunst',grafiek:'Grafiek',video:'Video'};

/* Per werk: artist, title, cat + modal-velden (jaar, locatie, details).
   "Downtime" gebruikt de authentieke tekst van zuyderland.nl. */
const ARTWORKS = [
  {slug:'appie-drielsma', artist:'Appie Drielsma', title:'', cat:'beeldhouwkunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een bronzen sculptuur waarin gezicht en figuur in elkaar overvloeien. De warme, ronde vormen nodigen uit om rustig rond te kijken; brons straalt een tijdloze rust uit die je even uit je hoofd haalt.'},
  {slug:'pepe-gregoire', artist:'Pépé Grégoire', title:'', cat:'beeldhouwkunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Twee organische bronzen vormen die samen lijken te bewegen. De zachte lijnen en groene patina geven een gevoel van balans en beweging dat rustgevend werkt in een drukke omgeving.'},
  {slug:'claudy-jongstra', artist:'Claudy Jongstra', title:'', cat:'installatiekunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Claudy Jongstra staat bekend om haar wandtapijten van wol en natuurlijke pigmenten. De warme, aardse tinten en het ambachtelijke materiaal brengen rust en geborgenheid in de ruimte.'},
  {slug:'diana-ramaekers', artist:'Diana Ramaekers', title:'', cat:'installatiekunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een lichtinstallatie waarin diepblauwe en heldere tinten in elkaar overvloeien. Blauw kalmeert de hartslag, waardoor het werk een rustpunt vormt om even in weg te dromen.'},
  {slug:'robert-lambermont', artist:'Robert Lambermont', title:'Uitzicht vanuit mijn kamer', cat:'installatiekunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een wandsculptuur die aanvoelt als een uitzicht uit een raam. De rustige opbouw en koele tinten nodigen uit tot kijken en even tot stilstand komen.'},
  {slug:'elke-lutgerink', artist:'Elke Lutgerink', title:'Torso', cat:'installatiekunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een torso uitgewerkt in fijne, witte druipvormen. De lichte kleur en organische structuur geven een gevoel van lichtheid en rust.'},
  {slug:'bas-coenegracht-downtime', artist:'Bas Coenegracht', title:'Downtime', cat:'schilderkunst',
   jaar:'', locatie:'Zuyderland Sittard-Geleen',
   details:"Een jonge man plaatst 's nachts een stok in het wateroppervlak en tuurt naar de rimpeling. Door de verstilling verwijst het werk naar overdenking, mediteren en één willen zijn met de natuur — elementen die je ook in een ziekenhuis terugvindt. Acrylverf op linnen, 170 × 140 cm."},
  {slug:'kasper-dejong-cornflower', artist:'Kasper Dejong', title:'Cornflower', cat:'schilderkunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een ingetogen, zacht schilderij in lichte lila- en blauwtinten. De rustige kleurvlakken werken kalmerend en laten je blik tot rust komen.'},
  {slug:'tanja-droomlandschap', artist:'Tanja Ritterbex', title:'Droomlandschap', cat:'schilderkunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een kleurrijk, droomachtig landschap waarin gezicht en omgeving in elkaar overvloeien. De fantasievolle beelden nodigen uit om even weg te dromen uit het hier en nu.'},
  {slug:'tanja-onderwaterwereld', artist:'Tanja Ritterbex', title:'De betoverende onderwaterwereld', cat:'schilderkunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een uitbundig, kleurrijk werk vol beweging en muziek. De warme tinten brengen energie en plezier — een vrolijk rustpunt tijdens het wachten.'},
  {slug:'sophie-langohr', artist:'Sophie Langohr', title:'', cat:'fotografie',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'In haar fotografie onderzoekt Sophie Langohr schoonheid en identiteit. De serene gezichten en zachte belichting brengen een ingetogen, bijna meditatieve rust.'},
  {slug:'anne-kerstens-newfaces', artist:'Anne Kerstens', title:"Serie - 'New faces'", cat:'fotografie',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'In het werk van Anne Kerstens vertelt textiel een verhaal over mensen, historie en cultuur. Foto en stof versmelten tot sfeervolle beelden die iets tastbaars en herkenbaars hebben.'},
  {slug:'anne-kerstens-homeless', artist:'Anne Kerstens', title:"Serie - 'Homeless images'", cat:'fotografie',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Anne Kerstens legt met haar camera karakter en sfeer vast en voegt met textiel gevoelswaarde toe. Deze ingetogen beelden bieden een rustpunt en iets herkenbaars voor iedereen.'},
  {slug:'hans-lemmen', artist:'Hans Lemmen', title:'', cat:'tekenkunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Hans Lemmen maakt tekeningen waarin mens, dier en natuur samenkomen in een tijdloze, archaïsche sfeer. De zachte aardtinten geven het werk een rustige, bezonken uitstraling.'},
  {slug:'myriam-custers', artist:'Myriam Custers', title:'Digging dust', cat:'tekenkunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een fijnzinnige collage in zachte roze tinten. De speelse, lichte beeldtaal nodigt uit om rustig te blijven kijken en details te ontdekken.'},
  {slug:'tina-schwartz', artist:'Tina Schwartz', title:'Goldmarie/pechmarie papierhut und taube paperboy', cat:'tekenkunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een expressieve tekening waarin inkt vrij over het papier beweegt. De rust van het lichte vlak en de losse beweging geven ruimte om even tot jezelf te komen.'},
  {slug:'nikki-pelaez', artist:'Nikki Pelaez', title:'Mocking bird', cat:'tekenkunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een dromerig portret met zachte blauwtinten en veren. Het beeld heeft iets beschermends en rustgevends, alsof je even in een eigen wereld stapt.'},
  {slug:'esther-de-bont', artist:'Esther de Bont', title:"Serie - Propriétés d'un nomade", cat:'tekenkunst',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een ingetogen houtskooltekening van een figuur onderweg. De grijze tonen en stille sfeer nodigen uit tot bezinning en rust.'},
  {slug:'jeroen-evertz', artist:'Jeroen Evertz', title:"'Never promised you a rose garden (dear hunter)'", cat:'grafiek',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een gelaagde collage waarin een winters landschap en verrassende beelden samenkomen. Het werk prikkelt de fantasie en biedt afleiding tijdens het wachten.'},
  {slug:'marc-truijen', artist:'Marc Truijen', title:'Mask', cat:'grafiek',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een grafisch werk vol fijne lijnen en gezichten die uit het oppervlak lijken op te doemen. De zachte sepiatinten geven een rustige, ingetogen sfeer.'},
  {slug:'jenneke-vd-weyden', artist:'Jenneke van der Weyden', title:'Denkend aan', cat:'grafiek',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een diepblauw, fijn getextureerd werk waarin een gezicht oplicht. Blauw kalmeert en geeft het beeld een stille, beschouwende rust.'},
  {slug:'sandrien-wansink', artist:'Sandrien Wansink', title:'The sublime of the moment ||', cat:'video',
   jaar:'', locatie:'Zuyderland Medisch Centrum',
   details:'Een beeld van een hand die tekent, gevangen in een warm licht. Het werk gaat over het pure moment van maken — zonder druk, puur voor het moment zelf.'}
];

/* Voorgeselecteerde favorieten (zoals in Figma 'Favorieten') */
const DEFAULT_FAVS = ['claudy-jongstra','bas-coenegracht-downtime','robert-lambermont','anne-kerstens-newfaces','jeroen-evertz'];

const EXERCISES = [
  {id:'cirkel',  tag:'Volg de cirkel', tagColor:'teal',   title:'Volg de cirkel', time:'1-3 min', type:'circle',
   desc:'Adem in en uit terwijl je de bewegende cirkel volgt met je ogen. Kalmeer je hartslag na een minuut.',
   detail:'Kijk naar de cirkel: als die groeit adem je in, als die krimpt adem je uit. Doe dit rustig mee.'},
  {id:'spiraal', tag:'Oogbeweging',    tagColor:'teal',   title:'Volg de spiraal', time:'1-3 min', type:'spiral',
   desc:'Laat je blik de spiraal volgen van buiten naar binnen. Dit kalmeert het zenuwstelsel via oogbewegingen.',
   detail:'Volg het puntje langs de spiraal van buiten naar binnen met je ogen. Adem ondertussen rustig door.'},
  {id:'golf',    tag:'Volg de cirkel', tagColor:'orange', title:'Rijd de golf', time:'1-3 min', type:'wave',
   desc:'Volg de vloeiende golfbeweging met je ogen. Synchroniseer je ademhaling met de beweging voor maximale rust.',
   detail:'Volg de golfbeweging met je ogen. Adem in als de golf stijgt, adem uit als die daalt.'}
];
const DEFAULT_EXFAVS = ['cirkel'];
