// import {GAMEDATA} from '../classes/GameData.js';
// using es5 standard import from html script src

// Each of five columns require a unique list of fifteen items
const Col_A = ["Gouda", "Brie", "Cheddar", "Manchego", "Provolone", "Babybel", "Mozzarella", "Asiago", "Gruyere", "Gorgonzola", "Port-Salut", "Adelost", "Abondance", "Butterkase", "Brillat-Savarin"];
const Col_B = ["American Cheese", "Pecorino Romano", "Smoked Gouda", "Camembert", "Parmesan", "Mascarpone", "Feta", "Cotija", "Monterey Jack", "Cream Havarti", "Comte", "Alex", "Reblochon", "Longhorn", "Oaxaca"];
const Col_C = ["Stilton", "Camilla", "Taleggio", "Grana Padano", "Swiss", "Boursin", "Fontina", "Roquefort", "Blue Vein Cheese", "Emmental", "Airag", "Crottin", "Saint Agur", "Cottage Cheese", "Panela"];
const Col_D = ["Grana", "Jarlsberg", "Mozzarella di Bufala", "Pepper Jack", "Munster", "Bocconcini", "Fromage Frais", "Ricotta Salata", "Scamorza", "Fromage a Raclette", "Acapella", "Fresh Truffles", "Romano", "Wensleydale", "Double Gloucester"];
const Col_E = ["Chevre", "Pecorino", "Burrata", "Halloumi", "Aged Gouda", "Fresh Mozzarella", "Colby", "Limberger", "Paneer", "Queso Blanco", "Red Leicester", "Kasseri", "Colby-Jack", "Ayibe", "Brebidoux"];
// theHopper combines all the items from each column for a total of 75 unique items
const theHopper = [...Col_A, ...Col_B,...Col_C,...Col_D,...Col_E];

const _CHEZY = new GAMEDATA('CHEZY', Col_A, Col_B, Col_C, Col_D, Col_E );
