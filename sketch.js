function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#f7f1f1");
  strokeCap(SQUARE); // linee quadrate
  noLoop();
}

function draw() {
  //esaminando l'opera dell'artista scelta assieme ad altre simili ho riscontrato una griglia
  //griglia fitta di linee orizzontali e verticali che formani quadratini
  //le forme poggiano con almeno un lato su questa griglia ma non essendo quadrati gli altri lati ne escono
  let griglia =15; 
  // stroke(0);
  // strokeWeight(0.5);
  
  // //linee verticali
  // //x viene incrementato di n griglia pixel fino a raggiungere la larghezza della finestra
  // for (let x =0; x<windowWidth; x += griglia) {
  //   line(x, 0, x, windowHeight); //x e 0 punto di partenza della linea (in alto), x e windowHeight indicano il punto finale 
  // }
  
  // //linee orizzontali
  // for (let y =0; y<windowHeight; y += griglia) {
  //   line(0, y, windowWidth, y);
  // }

  // forme rosse
  
  // forme rosse
  let larghezzaR =63;
  let altezzaR =69;
  
  // forme nere (ruotate)
  let larghezzaN =69;
  let altezzaN =63;
  let margineX = windowWidth*0.12; // per avere un margine proporzionato
  let margineY = windowHeight*0.12;

  // numero di forme rosse e nere
  let nRosse =31;
  let nNere =27;

  // per mantenere l'interpretazione a dimensioni diverse
  //secondo me deve variare il numero di forme in base alla grandezza dello schermo 
  if (windowWidth>900) {
    nRosse =62;
    nNere =54;
  } else if (windowWidth<400) {
    nRosse =15; 
    nNere =13;
  }

  if (windowHeight<300) {
    nRosse =15;
    nNere =13;
  } else if (windowHeight<600) {
    nRosse =31; 
    nNere =27;
  }

  // forme rosse
  for (let i =0; i<nRosse; i++) {
    // posizione in griglia
    let xPos, yPos; // variabili xPos e yPos memorizzano le coordinate x e y della posizione della figura
    do { // coordinate generate valide e all'interno della griglia
      xPos = floor(random(margineX, windowWidth-larghezzaR-margineX) /griglia)* griglia;
      yPos = floor(random(margineY, windowHeight-altezzaR-margineY) /griglia)* griglia;
      //numero casuale tra il margine sinistro e il margine destro-larghezza (non esce dai margini laterali)
      // diviso griglia per allineare le coordinate alla griglia rendendole multipli della dimensione della griglia stessa
      // floor arrotonda il valore generato al numero intero più basso, valore multiplo di griglia perchè lo rimoltiplico
    } while ( // while verifica che le coordinate generate siano valide
      xPos < margineX || // coordinata x non inferiore al margine sinistro
      xPos > windowWidth-larghezzaR-margineX || // coordinata x non supera il margine destro 
      yPos < margineY || //coordinata y non inferiore al margine superiore
      yPos > windowHeight-altezzaR-margineY // coordinata y non supera il margine inferiore 
    );

    stroke(188, 44, 30, 230); // colore campionato in RGB 193, 59, 55) + trasparenza con alpha
    // bordi se in rosso spessi in alto e in basso
    strokeWeight(6);
    line(xPos, yPos+2, xPos+larghezzaR, yPos+2); // bordo superiore
    line(xPos, yPos+altezzaR-2, xPos+larghezzaR, yPos+altezzaR-2); // bordo inferiore
    // con il +2(abbasso la linea) e il -2(alzo) ho perfezionato i pixel per avere spigoli precisi come nell'opera originale
    strokeWeight(1.5); // spessore altre linee
    noFill();
    rect(xPos, yPos, larghezzaR, altezzaR);
  }

  // forme nere
  for (let i =0; i<nNere; i++) {
    let xPos, yPos;
    do {
      xPos = floor(random(margineX, windowWidth-larghezzaN-margineX)/ griglia)* griglia;
      yPos = floor(random(margineY, windowHeight-altezzaN-margineY)/ griglia)* griglia;
    } while (
      xPos < margineX || 
      xPos > windowWidth-larghezzaN-margineX ||
      yPos < margineY || 
      yPos > windowHeight-altezzaN-margineY
    );

    stroke(0, 0, 0, 230);
    // bordi se in nero spessi a destra e a sinistra
    strokeWeight(6);
    line(xPos+2, yPos, xPos+2, yPos+altezzaN); // bordo sinistro
    line(xPos-2+larghezzaN, yPos, xPos+larghezzaN-2, yPos+altezzaN); // bordo destro
    strokeWeight(1.5);
    noFill();
    rect(xPos, yPos, larghezzaN, altezzaN);
  }
}
