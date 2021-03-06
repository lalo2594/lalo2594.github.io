function setup(){
var iluminacion= new THREE.AmbientLight(0xFFFFFF)

malla = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({color: '#00cc00'}));
malla.position.y=2;

var base=new THREE.Mesh(new THREE.BoxGeometry(5, .1, 5), new THREE.MeshLambertMaterial({color: '#FFFFFF'}));

escena=new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(iluminacion);

camara=new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.y=5;
    
var lienzo= document.getElementById("luzAmbiental");
 renderizador= new THREE.WebGLRenderer({canvas:lienzo, antialias:true});
renderizador.setSize(600,600);
document.body.appendChild(renderizador.domElement);
}

function loop(){

requestAnimationFrame( loop);
malla.rotation.x += 0.01;
malla.rotation.y += 0.01;

renderizador.render(escena, camara);
}

var camara, escena,renderizador,malla;

setup();
loop();