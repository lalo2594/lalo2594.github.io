var campoVision=45;//grados
var relacionAspecto=window.innerWidth/window.innerHeight;
var planoCercano=1;
var planoLejano=1000;
var camara=new THREE.PerspectiveCamera(campoVision,relacionAspecto,planoCercano,planoLejano);
camara.position.z=15;

var cubo=new THREE.Mesh(new THREE.BoxGeometry(2,2,2));
cubo.rotateY(Math.PI/4);
var esfera1=new THREE.Mesh(new THREE.SphereGeometry(1),new THREE.MeshNormalMaterial());
esfera1.position.x=5;
var esfera2=new THREE.Mesh(new THREE.SphereGeometry(1),new THREE.MeshNormalMaterial());
esfera1.position.x=-5;
esfera1.position.z=-10;
