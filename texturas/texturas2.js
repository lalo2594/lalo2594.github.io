function setup(){
THREE.ImageUtils.crossOrigin='';
var textura=THREE.ImageUtils.loadTexture('https://lalo2594.github.io/texturas/brick_diffuse.jpg');
var material= new THREE.MeshBasicMaterial({map:textura});
var forma= new THREE.BoxGeometry(1,4,9);
malla= new THREE.Mesh(forma, material);

var luzPun = new THREE.PointLight( 0xFFFFFF);
luzPun.position.set( 10, 10, 10 );

escena=new THREE.Scene();
escena.add(malla);
escena.add(LuzPuntual);
camara=new THREE.PerspectiveCamera();
camara.position.z=10;
renderer=new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderer.domElement );
}
function loop(){

requestAnimationFrame( loop);
malla.rotation.x += 0.01;
malla.rotation.y += 0.01;
//malla.rotation.z += 0.01;

renderer.render(escena, camara);
}
var camara, escena,renderer,malla;

setup();
loop();
