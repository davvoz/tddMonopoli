const expect = require('chai').expect;
const TestMonopoli = require('../src/monopoli');
describe('TestMonopoli', () => {
  
it('CreatePlayerTest should returns true if parameters are valid', () => {
    const result = TestMonopoli.createPlayer('mario', 30);
    expect(result).to.have.property('name','mario' );
    expect(result).to.have.property('age', 30);
    expect(result).to.have.property('budget', 20000);
    expect(result).to.have.property('position', 0);
    
    expect(result).to.have.property('state', 'in gioco'); 
});

it('CreatePlayerTest should returns true if a parameter(name) is not valid', () => {
  const result = TestMonopoli.createPlayer( 30 , 30);
  expect(result).to.have.property('message','Parameters are not valid' );
});

it('CreatePlayerTest should returns true if a parameter(eta) is not valid', () => {
  const result = TestMonopoli.createPlayer( 'mario' , '30');
  expect(result).to.have.property('message','Parameters are not valid' );
});

it('CreatePlayerTest should returns true if all parameters are not valid', () => {
  const result = TestMonopoli.createPlayer( 30 , '30');
  expect(result).to.have.property('message','Parameters are not valid' );
});

it('BudgetTest should returns true if result is "in bancarotta"', () => { 
  const result = TestMonopoli.budget ( {name:'mario', age:30 , budget:(-300) , state:'in gioco',position:0,property:["Stazione Sud","Viale Monterosa"],tripleProperty:[]} );
  expect(result).to.have.property('message','in bancarotta' );
});

it('BudgetTest should returns true if result is "in gioco"', () => { 
  const result = TestMonopoli.budget ( {name:'mario', age:30 , budget:300 , state:'in gioco',position:0,property:["Stazione Sud","Viale Monterosa"],tripleProperty:[]} );
  expect(result).to.have.property('message','in gioco' );
});

it('BudgetTest should returns true if parameters are wrong', () => { 
  const result = TestMonopoli.budget ( {name:30, age:30 , budget:(-300) , state:'in gioco',position:0,property:["Stazione Sud","Viale Monterosa"],tripleProperty:[]} );
  expect(result).to.have.property('message','Parameters are not valid' );
});

it('TipoBoxTest should returns true if result is a string', () => { 
  const result = TestMonopoli.tipoBox (TestMonopoli.dubleRoll().value);
  expect(result).to.be.a('string');
 
});

it('DubleRollTest should returns true if result is an object', () => { 
  const result = TestMonopoli.dubleRoll();
  expect(result).to.be.a('object');
  
});

it('BuyableTest should returns true if message is true', () => { 
  const result = TestMonopoli.buyable(1);
  expect(result).to.have.property('message', 'true' );
});

it('BuyableTest should returns true if message is false', () => { 
  const result = TestMonopoli.buyable(2) ;
  expect(result).to.have.property( 'message' , 'false' ) ;
  
});

it('BuyableTest should returns true if tipo is aquistabile', () => { 
  const result = TestMonopoli.buyable(1);
  expect(result).to.have.property( 'tipo', 'aquistabile' );
  
});

it('BuyableTest should returns true if tipo is probabilità', () => { 
  const result = TestMonopoli.buyable(2);
  expect(result).to.have.property( 'tipo', 'probabilità' ); 
});

it('BuyableTest should returns true if tipo is imprevisti', () => { 
  const result = TestMonopoli.buyable(7);
  expect(result).to.have.property( 'tipo', 'imprevisti' );
});

it('BuyableTest should returns true if message is Parameter are not valid', () => { 
  const result = TestMonopoli.buyable(107);
  expect(result).to.have.property( 'message', 'Parameter is not valid' );
});

it('BuyableTest should returns true if message is Parameter are not valid', () => { 
  const result = TestMonopoli.buyable((-1));
  expect(result).to.have.property( 'message', 'Parameter is not valid' );
});

it('BuyableTest should returns true if message is Parameter are not valid', () => { 
  const result = TestMonopoli.buyable('1');
  expect(result).to.have.property( 'message', 'Parameter is not valid' );
});

it('AddPropertyTest should returns true if message is inserimento avvenuto', () => { 
  var player ={ name:'mario', age:30 , budget:1300 , state:'in gioco', position:0 , property:["Stazione Sud","Viale Monterosa"] ,tripleProperty:[],numeroCase:0,numeroAlberghi:0};
  var casella ={posizione : 11 ,nome :"Via Accademia",colore :"ocra",tipo : "aquistabile",proprietario : "nessuno",valore : 350 }
  const result = TestMonopoli.addProperty(player , casella);
  expect(result).to.have.property( 'message', 'inserimento avvenuto' );
});

it('AddPropertyTest should returns true if a parameter(player) are not valid ', () => { 
  let player = 30 ;
  let casella = { posizione : 11 , nome : "Via Accademia", colore :"ocra",tipo : "aquistabile" ,proprietario : "nessuno",valore : 350,numeroCase:0,numeroAlberghi:0 }
  const result = TestMonopoli.addProperty( player , casella);
  expect(result).to.have.property( 'message', 'Parameters are not valid' );
});

it('OrderPlayersTest should returns true if message is ordinati ', () => { 
  let poolPlayer =[
    { name:'mario', age:9 , budget:1300 , state:'in gioco', position:0 , property:[] ,tripleProperty:[]},
    { name:'rosa', age:10 , budget:1300 , state:'in gioco', position:0 , property:[] ,tripleProperty:[]},
    { name:'gianni', age:8 , budget:1300 , state:'in gioco', position:0 , property:[] ,tripleProperty:[]},
    { name:'maria', age:8 , budget:1300 , state:'in gioco', position:0 , property:[] ,tripleProperty:[]},
  ]
  const result = TestMonopoli.orderPlayers(poolPlayer);
  expect(result).to.have.property( 'message', 'ordinati' );
  //console.log(result.content);
});

it('OrderPlayersTest should returns true if message is Parameter are not valid ', () => { 
  let poolPlayer = 40;
  const result = TestMonopoli.orderPlayers(poolPlayer);
  expect(result).to.have.property( 'message', 'Parameter is not valid' );
});

it('PescaImprevistoTest should returns true if  message is andate sino al largo colombo: se passate dal via ritirate 500 euro ', () => { 
  const result = TestMonopoli.pescaImprevisto(0);
  expect(result).to.have.property( 'message', 'andate sino al largo colombo: se passate dal via ritirate 500 euro' );
});

it('PescaImprevistoTest should returns true if message is andate in prigione direttamente e senza passare dal via', () => { 
  const result = TestMonopoli.pescaImprevisto(16);
  expect(result).to.have.property( 'message', 'andate in prigione direttamente e senza passare dal via' );
});

it('PescaImprevistoTest should returns true if  parameter is not valid', () => { 
  const result = TestMonopoli.pescaImprevisto(17);
  expect(result).to.have.property( 'message', 'Parameter is not valid' );
});

it('PescaImprevistoTest should returns true if  parameter is not valid', () => { 
  const result = TestMonopoli.pescaImprevisto((-2));
  expect(result).to.have.property( 'message', 'Parameter is not valid' );
});

it('PescaImprevistoTest should returns true if  parameter is not valid', () => { 
  const result = TestMonopoli.pescaImprevisto('0');
  expect(result).to.have.property( 'message', 'Parameter is not valid' );
});

it('PescaProbabilitàTest should returns true if  message is ritornate al vicolo corto', () => { 
  const result = TestMonopoli.pescaProbabilità(0);
  expect(result).to.have.property( 'message', 'ritornate al vicolo corto' );
});

it('PescaProbabilitàTest should returns true if  message is Parameter is not valid', () => { 
  const result = TestMonopoli.pescaProbabilità(22);
  expect(result).to.have.property( 'message', 'Parameter is not valid' );
});

it('PescaProbabilitàTest should returns true if  message is Parameter is not valid', () => { 
  const result = TestMonopoli.pescaProbabilità((-1));
  expect(result).to.have.property( 'message', 'Parameter is not valid' );
});

it('PescaProbabilitàTest should returns true if  message is Parameter is not valid', () => { 
  const result = TestMonopoli.pescaProbabilità({});
  expect(result).to.have.property( 'message', 'Parameter is not valid' );
});

it('BuildableHouseTest should returns true if message is Buildable', () => { 
  let player = {
    name:'mario', 
    age:30 , 
    budget:1300 , 
    state:'in gioco',
    position:1,
    property:[
      {
        posizione : 1,
        nome :"Vicolo Corto",
        colore :"rosa",
        tipo : "aquistabile",
        proprietario : "mario",
        valore : 150,
        numeroCase : 0,
        numeroAlberghi : 0
      },
      {
        posizione : 3,
        nome :"Vicolo Stretto",
        colore :"rosa",
        tipo : "aquistabile",
        proprietario : "mario",
        valore : 150,
        numeroCase : 0,
        numeroAlberghi : 0
      }
    ] ,
    tripleProperty:[]
  };
  let casella ={
    posizione : 1,
    nome :"Vicolo Corto",
    colore :"rosa",
    tipo : "aquistabile",
    proprietario : "mario",
    valore : 150,
    numeroCase : 0,
    numeroAlberghi : 0
  }
  const result = TestMonopoli.buildableHouse(player,casella);
  expect(result).to.have.property( 'message', 'Buildable' );
  
});

it('BuildableHouseTest should returns true if message is Buildable', () => { 
  let player = {
    name:'mario', 
    age: 30 , 
    budget: 2300 , 
    state: 'in gioco',
    position: 39,
    property:[
      {
        posizione : 37,
        nome :"Viale dei Giardini",
        colore : "viola",
        tipo : "aquistabile",
        proprietario : "mario",
        valore : 900,
        numeroCase : 0,
        numeroAlberghi : 0
    },
    {
      posizione : 39,
      nome :"Parco della Vittoria",
      colore: "viola",
      tipo : "aquistabile",
      proprietario : "mario",
      valore : 1000,
      numeroCase : 0,
      numeroAlberghi : 0
  }
    ] ,
    tripleProperty:[]
  };
  let casella = {
    posizione : 39,
    nome :"Parco della Vittoria",
    colore: "viola",
    tipo : "aquistabile",
    proprietario : "mario",
    valore : 1000,
    numeroCase : 0,
    numeroAlberghi : 0
  }
  const result = TestMonopoli.buildableHouse(player,casella);
  expect(result).to.have.property( 'message', 'Buildable' );
  
});

it('BuildableHouseTest should returns true if message is Buildable', () => { 
  let player = {
    name:'mario', 
    age: 30 , 
    budget: 2300 , 
    state: 'in gioco',
    position: 8,
    property:[
      {
        posizione : 37,
        nome :"Viale dei Giardini",
        colore : "viola",
        tipo : "aquistabile",
        proprietario : "mario",
        valore : 900,
        numeroCase : 0,
        numeroAlberghi : 0
    },
    {
      posizione : 39,
      nome :"Parco della Vittoria",
      colore: "viola",
      tipo : "aquistabile",
      proprietario : "mario",
      valore : 1000,
      numeroCase : 0,
      numeroAlberghi : 0
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
    ] ,
    tripleProperty:[]
  };
  let casella = {
    posizione : 8,
    nome :"Viale Monterosa",
    colore :"blu",
    tipo : "aquistabile",
    proprietario : "nessuno",
    valore : 250,
    numeroCase : 0,
    numeroAlberghi : 0
  };
  const result = TestMonopoli.buildableHouse(player,casella);
  expect(result).to.have.property( 'message', 'Buildable' );
  
});

it('BuildableHouseTest should returns true if message is Unbuildable', () => { 
  let player = {
    name:'mario', 
    age:30 , 
    budget:1300 , 
    state:'in gioco',
    position:1,
    property:[
      {
        posizione : 1,
        nome :"Vicolo Corto",
        colore :"rosa",
        tipo : "aquistabile",
        proprietario : "mario",
        valore : 150,
        numeroCase : 0,
        numeroAlberghi : 0
      }
      
    ] ,
    tripleProperty:[]
  };
  let casella ={
    posizione : 1,
    nome :"Vicolo Corto",
    colore :"rosa",
    tipo : "aquistabile",
    proprietario : "mario",
    valore : 150,
    numeroCase : 0,
    numeroAlberghi : 0
  }
  const result = TestMonopoli.buildableHouse(player,casella);
  expect(result).to.have.property( 'message', 'Unbuildable' );
  
});

it('BuildableHouseTest should returns true if message is Unbuildable', () => { 
  let player = {
    name:'mario', 
    age:30 , 
    budget:2300 , 
    state:'in gioco',
    position:1,
    property:[
      {
        posizione : 37,
        nome :"Viale dei Giardini",
        colore : "viola",
        tipo : "aquistabile",
        proprietario : "mario",
        valore : 900,
        numeroCase : 0,
        numeroAlberghi : 0
    },
    {
      posizione : 39,
      nome :"Parco della Vittoria",
      colore: "viola",
      tipo : "aquistabile",
      proprietario : "mario",
      valore : 1000,
      numeroCase : 0,
      numeroAlberghi : 0
  }
    ] ,
    tripleProperty:[]
  };
  let casella ={
    posizione : 1,
    nome :"Vicolo Corto",
    colore :"rosa",
    tipo : "aquistabile",
    proprietario : "mario",
    valore : 150,
    numeroCase : 0,
    numeroAlberghi : 0
  }
  const result = TestMonopoli.buildableHouse(player,casella);
  expect(result).to.have.property( 'message', 'Unbuildable' );
  
});







});