/*
 * CURRENCY CONVERTER RELOADED
 * Author: <your name here>
 * ---------------------------
 *
 * This converts currencies...somehow.
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe: Baut einen neuen Währungsumrechner. Nachfolgend findet ihr Code der die 
 *  dafür notwendingen Eingabewerte von der Konsole entgegennimmt.
 * 
 *  Dafür müsst ihr das Script wie folgt aufrufen:
 *  npm start -- <Ausgangssumme> <Ausgangswährung-Code> <Zielwährung-Code>
 *  also z.B.
 *  npm start -- 10.0 USD EUR
 * 
 *  Die erwartete Ausgabe ist ein Text in folgender Form:
 *  "Ergebnis: <Ausgangssumme> <Ausgangswährung> = <Ergebnis> <Zielwährung>"
 *  also z.B.
 *  Ergebnis: 10.00 USD = 11.00 EUR
 *  
 *  Das Script soll mindestens drei verschiedene Währungen in beide Richtungen unterstützen
 */

let args = process.argv.slice(2);

let amount, originalCurrency, targetCurrency;

if (args.length < 3) {
  console.log('Error: Not enough input arguments given!');
} else {
  amount = args[0];
  originalCurrency = args[1];
  targetCurrency = args[2];
}

// Variable 'output' deklarieren
let output;

// Variable 'Faktor USD -> EUR' deklarieren
let usd_eur = 0.9;
// Variable 'Faktor EUR -> USD
let eur_usd = 1.11;


// IF Umwandlungsrichtung
if (originalCurrency === 'EUR' && targetCurrency === 'USD') {

  // Multiplizieren des Faktors mit Eingangswert
  // Festlegen als 'output'
  output = amount * eur_usd;
  output += '$';

} else if (originalCurrency === 'USD' && targetCurrency === 'EUR') {

  // Multiplizieren des Faktors mit Eingangswert
  // Festlegen als 'output'
  output = amount * usd_eur;
  output += '€';

}

// Ausgabe 'output'
console.log('Das Ergebnis sind: ' + output);