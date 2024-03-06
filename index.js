const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Aufforderung zur Eingabe eines Texts
rl.question('Bitte geben Sie einen beliebigen Text ein: ', (eingabe) => {
  // Ausgabe des eingegebenen Texts
  console.log('Sie haben folgenden Text eingegeben:', eingabe);
  
  // Teilen des Textes in Wörter
  const wörter = eingabe.split(' ');

  // Anzahl der Wörter ermitteln
  const anzahl = wörter.length;

  // Längstes Wort im Text finden
  const längstesWort = wörter.reduce((längstes, aktuelles) => längstes.length>aktuelles.length ? längstes : aktuelles, '');

  // Anzahl der unterschiedlichen Wörter ermitteln
  const unterschiedlicheWörter = new Set(wörter);
  const anzahl1 = unterschiedlicheWörter.size;

  // Anzeige der Anzahl der Wörter und der Anzahl der unterschiedlichen Wörter
  console.log("Anzahl der Wörter:", anzahl);
  console.log("Anzahl der unterschiedlichen Wörter:", anzahl1);
  console.log("Längstes Wort im Text:", längstesWort);

  // Schließen des readline Interfaces
  rl.close();
});





// *****************Erklärung der Javascript befehle:*********************************


// reduce --------> 

// Der reduce-Befehl in JavaScript wird verwendet, um aus einem Array einen einzelnen Wert zu erstellen. Du könntest es dir wie eine Zusammenfassung aller Elemente des Arrays vorstellen.

// Beispiel

//const numbers = [1, 2, 3, 4, 5];
//const sum = numbers.reduce(function(accumulator, currentValue) {
//  return accumulator + currentValue;
//}, 0);
//console.log(sum); // Ausgabe: 15 (1 + 2 + 3 + 4 + 5)


// split ------> 

// Der Befehl split() in JavaScript wird verwendet, um einen String in ein Array von Teil-Strings aufzuteilen. Du könntest es dir vorstellen, als ob du einen Satz in Wörter zerlegst oder einen Satz in Abschnitte aufteilst.

// Beispiel: 

// const text = "Hallo, wie geht es dir?";
// const words = text.split(' ');
// console.log(words); // Ausgabe: ["Hallo,", "wie", "geht", "es", "dir?"]


// length -----> 

// Der Befehl length in JavaScript wird verwendet, um die Länge eines Strings, eines Arrays oder anderer Datentypen zu bestimmen. Du könntest es dir vorstellen wie die Anzahl der Zeichen in einem String oder die Anzahl der Elemente in einem Array.

// Beispiel:

// const text = "Hallo";
// console.log(text.length); // Ausgabe: 5 (da "Hallo" fünf Zeichen hat)
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length); // Ausgabe: 5 (da das Array fünf Elemente hat)


// set ----->

// In JavaScript bezieht sich "Set" auf eine spezielle Datenstruktur, die eine Sammlung eindeutiger Werte enthält. Jeder Wert kann in einem Set nur //einmal vorkommen. Set ist eine Art von Sammlung, ähnlich wie ein Array, aber mit einigen Unterschieden.

// Hier ist eine einfache Erklärung, wie Set in JavaScript verwendet wird:

// const mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// console.log(mySet); // Ausgabe: Set { 1, 2, 3 }

// Ein Set kann nur eindeutige Werte enthalten. Wenn Sie denselben Wert erneut hinzufügen, wird er ignoriert.












//*****************Erklärung******des*****Codes***************************************


// 1. Zuerst wird das `readline-Modul` in Node.js importiert. Dieses Modul ermöglicht die Interaktion mit der Befehlszeile, indem es eine Instanz eines Interfaceobjekts erstellt, das es ermöglicht, Benutzereingaben zu lesen.

//   const readline = require('readline');

//---------------------------------------------

// 2. Dann wird eine Instanz des readline-Interfaces erstellt, das es ermöglicht, Benutzereingaben zu lesen (input) und Ausgaben an den Benutzer zu senden (output).

//  const rl = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout
//  });

//------------------------------------------------------

// 3. Der Benutzer wird aufgefordert, einen beliebigen Text einzugeben. Die eingegebene Zeichenfolge wird in der Callback-Funktion verarbeitet, die als Argument an rl.question übergeben wird.

// rl.question('Bitte geben Sie einen beliebigen Text ein: ', (eingabe) => {

//-------------------------------------------------------------------

// 4. In der Callback-Funktion wird zuerst der eingegebene Text ausgegeben.

// console.log('Sie haben folgenden Text eingegeben:', eingabe);

//------------------------------------------------------------------

// 5. Der eingegebene Text wird in Wörter aufgeteilt. Dafür wird die split-Methode verwendet, die den Text an Leerzeichen trennt und ein Array von Wörtern zurückgibt.

// const wörter = eingabe.split(' ');

//------------------------------------------------------------

// 6. Die Gesamtanzahl der Wörter wird ermittelt, indem die Länge des Arrays der Wörter (wörter) gezählt wird.

// const anzahl = wörter.length;

//----------------------------------------------------------------

// 7. Ein Set (uniqueWörter) wird erstellt, um die einzigartigen Wörter zu speichern. Dafür werden die Wörter aus dem Array in das Set eingefügt. Das Set speichert nur einzigartige Elemente, wodurch Duplikate entfernt werden.

// const uniqueWörter = new Set(wörter);

//-----------------------------------------------------------------

// 8. Die Anzahl der einzigartigen Wörter wird ermittelt, indem die Größe des Sets (uniqueWörter) abgefragt wird.

// const anzahlUnique = uniqueWörter.size;

//-------------------------------------------------------------

// .9 Schließlich werden die Anzahl der Wörter und die Anzahl der einzigartigen Wörter zusammen mit dem eingegebenen Text ausgegeben.

//console.log("Anzahl der Wörter:", anzahl);
//console.log("Anzahl der unterschiedlichen Wörter:", anzahlUnique);

//-----------------------------------------------------------------

// 9.1 Um das längste Wort im Text zu finden, fügen wir folgende Zeilen nach der Berechnung der Anzahl der Wörter und der Anzahl der einzigartigen Wörter hinzu:

// Längstes Wort im Text finden
//const längstesWort = wörter.reduce((längstes, aktuelles) => längstes.length > aktuelles.length ? längstes : aktuelles, '');
//console.log("Längstes Wort im Text:", längstesWort);


//-----------------------------------------------------------------

// 10. Das readline-Interface wird geschlossen, da die Interaktion mit dem Benutzer abgeschlossen ist.

// rl.close();






