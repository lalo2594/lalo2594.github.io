var CabezaF = new THREE.SphereGeometry(0.5, 30, 30);
var CuerpoF = new THREE.CylinderGeometry(0.2, 1.5, 1.5, 30);
var Pierna1F = new THREE.CylinderGeometry(0.3, 0.3, 1, 10);
var Pierna2F = new THREE.CylinderGeometry(0.3, 0.3, 1, 10);

Pierna1F.translate(0.5,0, 0);
Pierna2F.translate(-0.5,0, 0);
CuerpoF.translate(0, 1, 0);
CabezaF.translate(0, 2.2, 0);

var CabezaM = new THREE.Mesh(CabezaF);
var CuerpoM = new THREE.Mesh(CuerpoF);
var Pierna1M = new THREE.Mesh(Pierna1F);
var Pierna2M = new THREE.Mesh(Pierna2F);
var TramaF = new THREE.Geometry();

TramaF.merge(CabezaM.geometry, CabezaM.matrix);
TramaF.merge(CuerpoM.geometry, CuerpoM.matrix);
TramaF.merge(Pierna1M.geometry, Pierna1M.matrix);
TramaF.merge(Pierna2M.geometry, Pierna2M.matrix);

var TramaMat = new THREE.MeshNormalMaterial();
var Trama = new THREE.Mesh(TramaF, TramaMat);

Trama.position.Y=-8;
//TramaF.rotateX(Math.PI/1.025);

var escena = new THREE.Scene();
escena.add(Trama);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 6;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
