describe("El juego...", function() {
  var miJuego;
  var us1,us2,partida;

  beforeEach(function() {
    miJuego=new Juego();
    miJuego.agregarUsuario("pepe");
    miJuego.agregarUsuario("luis");
    let res=miJuego.jugadorCreaPartida("pepe");
    miJuego.jugadorSeUneAPartida("luis",res.codigo);
    us1=miJuego.obtenerUsuario("pepe");
    us2=miJuego.obtenerUsuario("luis");
    partida=miJuego.obtenerPartida(res.codigo);
  });

  it("inicialmente", function(){
    expect(us1.nick).toEqual("pepe");
    expect(us2.nick).toEqual("luis");

    //comprobar que los usuarios están en la partida
    //comprobar que cada usuario tiene 2 tableros de 5x5
    //que contienen agua (esAgua())
    //comprobar que cada usuario tiene 1 flota de 2 barcos
    //de tamaño 4 y 2
    //comprobar que la partida esta en fase jugando
  });

  it("luis y pepe están en la partida",function(){
    expect(partida.estoy("pepe")).toBeTrue();
    expect(partida.estoy("luis")).toBeTrue();
  });

  it("los dos jugadores tienen tablero propio y rival",function(){
    expect(us1.tableroPropio).toBeDefined();
    expect(us2.tableroPropio).toBeDefined();
    expect(us1.tableroRival).toBeDefined();
    expect(us2.tableroRival).toBeDefined();

    expect(us1.tableroPropio.casillas.length).toEqual(5);
    expect(us2.tableroPropio.casillas.length).toEqual(5);

    //habría que recorrer las 5 columnas
    for(x=0;x<5;x++){
      expect(us1.tableroPropio.casillas[x].length).toEqual(5);
    }
  //  expect(us2.tableroPropio.casillas[0].length).toEqual(5);
    
    //habría que recorrer todo el tablero
    expect(us1.tableroPropio.casillas[0][0].contiene.nombre).toEqual("agua");
  });

  it("los dos jugadores tienen flota (2 barcos, tam 2 y 4)",function(){
    expect(us1.flota).toBeDefined();
    expect(us2.flota).toBeDefined();
    
    expect(us1.flota.length).toEqual(2);
    expect(us2.flota.length).toEqual(2);
    
    expect(us1.flota[0].tam).toEqual(2);
    expect(us1.flota[1].tam).toEqual(4);
  });

  it("la partida está en fase jugando",function(){
    expect(partida.esJugando()).toBeTrue();
  })

});
