var escena = new THREE.Scene();
    
//---ejes//
    var ejes = new THREE.AxisHelper( 50 );
    ejes.position.set( 0, 0, 0 );
    escena.add( ejes );
//---ejes//

//---luz//
var luz = new THREE.PointLight( 0xFFFFFF, 1, 100 );
luz.position.set( 15, 15, 15 );
escena.add( luz );
//---luz//

camara = new THREE.PerspectiveCamera();
camara.position.set(20,20,20);
camara.lookAt( escena.position );
camara.rotation.z +=Math.PI/2; 
camara.rotation.z +=Math.PI*1/6;
camara.up.set( 0, 0, 1 );


//---tablero
var Piezatablero;
var color = new Array();
color[1]=new THREE.MeshBasicMaterial({color: 0x000000,side: THREE.DoubleSide});
color[2]=new THREE.MeshBasicMaterial({color: 0xFFFFFF,side: THREE.DoubleSide});
var colorTemp=color[1];

for (var i=-37.5;i<65;i=i+5){
   //console.log("cambio de columna");
    for(var j=-37.5;j<65;j=j+5){
       // console.log("cambio de fila")
    
       if (colorTemp===color[2]){
            colorTemp=color[1];
            //console.log("se cambio a color 1");
       }
        
        else if (colorTemp===color[1]){
            colorTemp=color[2];
            //console.log("se cambio a color 2");
       }
        Piezatablero=new THREE.Mesh(new THREE.PlaneGeometry(5,5,1,1),colorTemp);
        Piezatablero.position.x =i;
        Piezatablero.position.y =j;
        escena.add(Piezatablero);
        //console.log("pieza añadida");
       }
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
                      
 
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
