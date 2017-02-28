var caballo = new THREE.Shape();

caballo.moveTo(2, 1);
caballo.lineTo(1.5, 2.5);
caballo.lineTo(0.5, 3);
caballo.lineTo(0, 4);
caballo.lineTo(-0.5, 3);
caballo.lineTo(-1.5, 2);
caballo.lineTo(-2.5, 2);
caballo.lineTo(-2, 1.5);
caballo.lineTo(-2.5, 1);
caballo.lineTo(-1.5, 1);
caballo.lineTo(0.5, 0.5);
caballo.lineTo(1, -1);
caballo.lineTo(1, -2);
caballo.lineTo(3, -2);
caballo.lineTo(3, -1);
caballo.lineTo(2, 1);
var forma = new THREE.ExtrudeGeometry( caballo, {amount: 10} );
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
//malla.rotateY( Math.PI/4 );
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 70;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
