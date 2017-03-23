function listener(){
    camara.aspect= window.innerWidth/window.innerHeight;
    camara.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}
function push(){
    if (e.keyCode==87){
        camara.position.x++;}
}

function setup(){
escena=new THREE.Scene();
camara=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
camara.position.z=5;
renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
malla = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial());
escena.add(malla);
var tipoEvento = 'resize';
var capturar=false;
window.addEventListener(tipoEvento, listener, capturar);
window.addEventListener('keypress',push);
}

function loop(){

requestAnimationFrame( loop);
malla.rotation.x += 0.03;
malla.rotation.y += 0.03;
//malla.rotation.z += 0.01;

renderer.render(escena, camara);
}

var camara, escena,renderer,malla;

setup();
loop();
