
const caselle = [
    {
        posizione : 0,
        nome :"Via",
        tipo : "via"
    },
  {
      posizione : 1,
      nome :"Vicolo Corto",
      colore :"rosa",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 150,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 2,
      nome : "Probabilità1",
      tipo : "probabilità"
  },
  {
      posizione : 3,
      nome :"Vicolo Stretto",
      colore :"rosa",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 150,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 4,
      nome :"tassa patrimoniale",
      tipo : "tassa",
      valore : 500
  },
  {
      posizione : 5,
      nome :"Stazione Sud",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 480
  },
  {
      posizione : 6,
      nome :"Bastioni Gran Sasso",
      tipo : "aquistabile",
      colore :"blu",
      proprietario : "nessuno",
      valore : 250,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 7,
      nome :"Imprevisti1",
      tipo : "imprevisti",
  },
  {
      posizione : 8,
      nome :"Viale Monterosa",
      colore :"blu",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 250,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 9,
      nome :"Viale Vesuvio",
      colore :"blu",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 300,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 10,
      nome :"Prigione/Transito",
      tipo : "Prigione/Transito",
      proprietario : "nessuno",
  },
  {
      posizione : 11,
      nome :"Via Accademia",
      colore :"ocra",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 350 ,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 12,
      nome :"Società Elettrica",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 375,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 13,
      nome :"Corso Ateneo",
      colore :"ocra",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 350,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 14,
      nome :"Piazza Università",
      colore :"ocra",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 400 ,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 15,
      nome :"Stazione Ovest",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 480,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 16,
      nome :"Via Verdi",
      colore :"marrone",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 450,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 17,
      nome :"Probabilità2",
      tipo : "probabilità"
  },
  {
      posizione : 18,
      nome :"Corso Raffaello",
      colore :"marrone",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 450,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 19,
      nome :"Piazza Dante",
      colore :"marrone",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore :500,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 20,
      nome :"Posteggio gratuito",
      tipo : "Posteggio gratuito"
  },
  {
      posizione : 21,
      nome :"Via Marco Polo",
      colore :"rosso",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 550,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 22,
      nome :"Imprevisti2",
      tipo : "imprevisti"
  },
  {
      posizione : 23,
      nome :"Corso Magellano",
      colore :"rosso",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 550,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 24,
      nome :"Largo Colombo",
      colore :"rosso",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 600,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 25,
      nome :"Stazione Nord",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 480,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 26,
      nome :"Viale Costantino",
      colore :"giallo",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 650 ,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 27,
      nome :"Viale Traiano ",
      colore :"giallo",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 650,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 28,
      nome :"Società Acqua Potabile",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 375,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 29,
      nome :"Piazza Giulio Cesare",
      colore :"giallo",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 700 ,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 30,
      nome :"In prigione",
      tipo : "in prigione"
      
  },
  {
      posizione : 31,
      nome :"Via Roma",
      colore :"verde",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 750,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 32,
      nome :"Corso Impero",
      colore :"verde",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 750,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 33,
      nome :"Probabilità3",
      tipo : "probabilità",

  },
  {
      posizione : 34,
      nome :"Largo Augusto",
      colore :"verde",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 800,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 35,
      nome :"Stazione Est",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 480
  },
  {
      posizione : 36,
      nome :"Imprevisti3",
      tipo : "imprevisti",
      proprietario : "nessuno",

  },
  {
      posizione : 37,
      nome :"Viale dei Giardini",
      colore : "viola",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 900,
      numeroCase : 0,
      numeroAlberghi : 0
  },
  {
      posizione : 38,
      nome :"Tassa del lusso",
      tipo : "Tassa del lusso",
      proprietario : "nessuno",
      valore : 250
  },
  {
      posizione : 39,
      nome :"Parco della Vittoria",
      colore: "viola",
      tipo : "aquistabile",
      proprietario : "nessuno",
      valore : 1000,
      numeroCase : 0,
      numeroAlberghi : 0
  }
 
  
]
const imprevisti = [
    {
        indice : 0 ,
        testo : 'andate sino al largo colombo: se passate dal via ritirate 500 euro' ,
    },
    {
        indice : 1 ,
        testo : 'andate in prigione direttamente e senza passare dal via' ,
    },
    {
        indice : 2 ,
        testo : 'avete tutti i vostri stabili da riparare:pagare 60 euro per ogni casa e 250 per ogni albergo' ,
    },
    {
        indice : 3 ,
        testo : 'fate 3 passi indietro (con tanti auguri) ' ,
    },
    {
        indice : 4 ,
        testo : 'andate sino a via accademia: se passate dal via ritirate 500 euro' ,
    },
    {
        indice : 5 ,
        testo : 'versate 50 euro per beneficienza' ,
    },
    {
        indice : 6 ,
        testo : 'andate alla stazione nord:se passate dal via ritirate 500 euro' ,
    },
    {
        indice : 7 ,
        testo : 'multa di 40 euro per aver guidato senza patente' ,
    },
    {
        indice : 8 ,
        testo : 'andate fino al parco della vittoria' ,
    },
    {
        indice : 9 ,
        testo : 'matrimonio in famiglia:spese impreviste 375 euro' ,
    },
    {
        indice : 10 ,
        testo : 'uscite gratis di prigione, se ci siete: potete conservare questo cartoncino sino al momento di servirvene (non si sa mai!) oppure venderlo' ,
    },
    {
        indice : 11,
        testo : 'maturano le cedole delle vostre cartelle di rendita, ritirate 375 euro' ,
    },
    {
        indice : 12 ,
        testo : 'la banca vi paga gli interessi del vostro conto corrente, ritirate 125 euro' ,
    },
    {
        indice : 13 ,
        testo : 'andate avanti sino al via' ,
    },
    {
        indice : 14 ,
        testo : 'avente vinto un terno al lotto: ritirate 250 euro' ,
    },
    {
        indice : 15 ,
        testo : 'dovete pagare un contributo di miglioriastradale, 100 per ogni casa, 250 euro per ogni albergo che possedete' ,
    },
    {
        indice : 16 ,
        testo : 'andate in prigione direttamente e senza passare dal via' ,
    }
]
const probabilità = [
    {
        indice : 0 ,
        testo : 'ritornate al vicolo corto' ,
    },
    {
        indice : 1 ,
        testo : 'è maturata la cedola delle vostre azioni: ritirate 60 euro' ,
    },
    {
        indice : 2 ,
        testo : 'rimborso tassa sul reddito: ritirate 50 euro dalla banca' ,
    },
    {
        indice : 3 ,
        testo : 'avete vinto il secondo premio in un concorso di bellezza: ritirate 25 euro' ,
    },
    {
        indice : 4 ,
        testo : 'scade il vostro premio di assicurazione: pagate 125 euro' ,
    },
    {
        indice : 5 ,
        testo : 'uscite gratis di prigione, se ci siete: potete conservare questo cartoncino sino al momento di servirvene(non si sa mai!) oppure venderlo' ,
    },
    {
        indice : 6 ,
        testo : 'avete vinto un premio di consolazione alla lotteria di Merano: ritirate 250 euro' ,
    },
    {
        indice : 7 ,
        testo : 'andate fino al via' ,
    },
    {
        indice : 8 ,
        testo : 'pagate una multa di 25 euro, oppure prendete un cartoncino dagli imprevisti.' ,
    },
    {
        indice : 9 ,
        testo : 'siete creditori verso la bancadi 500 euro, ritirateli' ,
    },
    {
        indice : 10 ,
        testo : 'avete perso una causa: pagate 250 euro' ,
    },
    {
        indice : 11,
        testo : 'andate in prigione direttamente e senza passare dal via' ,
    },
    {
        indice : 12 ,
        testo : 'è il vostro compleanno: ogni giocatore vi regala 25 euro' ,
    },
    {
        indice : 13 ,
        testo : 'avete ceduto delle azioni: ricavate 125 euro' ,
    },
    {
        indice : 14 ,
        testo : 'pagate il conto del dottore: 125 euro' ,
    }
]
module.exports = {
  createPlayer( nome , eta ) {
    if( typeof nome === 'string' && typeof eta === 'number'){
      return {
        name : nome,
        age : eta ,
        budget : 20000 ,
        position : 0,
        state : 'in gioco' ,
        property : [],
        tripleProperty : []
      }
    }
    else {
      return{
        message : 'Parameters are not valid'
      }
    }
  },
  budget( player ){
    if(typeof player.name  === 'string' && 
       typeof player.age   === 'number' && 
       typeof player.budget === 'number' && 
       typeof player.state === 'string' &&
       typeof player.position === 'number' )
      {
        if(player.budget <= 0){
        return  { message : 'in bancarotta'}
      }else{
        return  { message : 'in gioco'}
      }
    }else{
      return { message : 'Parameters are not valid'}
    }
  },
  tipoBox( number ){ 
    return caselle[number].tipo;
  },
  dubleRoll(){
       let dado1 = Math.floor((Math.random() * 6) + 1) ;
       let dado2 = Math.floor((Math.random() * 6) + 1) ;
        if( dado1 === dado2 ){
            return { value : dado1 + dado2 , message:"Doppio turno" , content : { first : dado1,second : dado2 } }
        }else{
            return { value : dado1 + dado2 , message:"Fermati" , content : { first : dado1 , second : dado2 }}
        }
  },
  buyable( position ){
    if(typeof position === 'number' && position <= 39 && position >= 0){
        if( caselle[position].tipo === 'aquistabile' && caselle[position].proprietario === 'nessuno' ){
                return  { message : 'true' , tipo : caselle[position].tipo }
            }else{
                return  { message : 'false' , tipo : caselle[position].tipo }
            }
        }else{
            return  { message : 'Parameter is not valid' }
        }
  },
  addProperty( player , casella ){
      if(typeof player.property === 'object' && typeof player.tripleProperty === 'object'){
            player.budget = player.budget - casella.valore ;
            player.property.push( casella.nome);
            player.tripleProperty.push( { nome : casella.nome , colore : casella.colore});
            casella.proprietario = player.name;
            return {message : "inserimento avvenuto"}
        }else{
            return  { message : 'Parameters are not valid' }
        }
  },
  orderPlayers( poolPlayer ){
      //inizia il più giovane
    if(typeof poolPlayer === 'object' ){
        
        let sortable = poolPlayer.sort(function(a, b) {
            return parseFloat(a.age) - parseFloat(b.age);
        });
        return  { message : 'ordinati' , content : sortable }
    }else{
        return { message : 'Parameter is not valid' }
    }
  },
  pescaImprevisto( number ){
      if(typeof number === 'number' && number <= 16 && number >= 0){
        return { message : imprevisti[number].testo }
    }else{
        return { message : 'Parameter is not valid' }
    }
  },
  pescaProbabilità( number ){
    if(typeof number === 'number' && number <= 14  && number >= 0){
      return { message : probabilità[number].testo }
    }else{
      return { message : 'Parameter is not valid' }
    }
  },
  buildableHouse( player , casella ){
      function counter(color){
        let count = 0;
        for(let i = 0 ; i < player.property.length ; i++){
            if(player.property[i].colore === color){
                count++;
            }
        }
        return count;
      }
      switch( casella.colore){
          case 'rosa': 
            if(counter('rosa') === 2){
                return { message : 'Buildable' }
            }else{
                return { message : 'Unbuildable' }
            }
          break;
          case 'blu':
            if(counter('blu') === 3){
                return { message : 'Buildable' }
            }else{
                return { message : 'Unbuildable' }
            }
          break;
          case 'ocra':
            if(counter('ocra') === 3){
                return { message : 'Buildable' }
            }else{
                return { message : 'Unbuildable' }
            }
          break;
          case 'marrone':
             if(counter('marrone') === 3){
                return { message : 'Buildable' }
            }else{
                return { message : 'Unbuildable' }
            }
          break;
          case 'rosso':
             if(counter('rosso') === 3){
                 return { message : 'Buildable' }
            }else{
                return { message : 'Unbuildable' }
            }
          break;
          case 'giallo':
            if(counter('giallo') === 3){
                return { message : 'Buildable' }
            }else{
                return { message : 'Unbuildable' }
            }
          break;
          case 'verde':
            if(counter('verde') === 3){
                return { message : 'Buildable' }
            }else{
                return { message : 'Unbuildable' }
            }
          break;
          case 'viola':
            if(counter('viola') === 2){
                return { message : 'Buildable' }
            }else{
                return { message : 'Unbuildable' }
            }
          break;
      }
    
  }

}


  