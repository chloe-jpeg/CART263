import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


//earth
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("scene")
});
renderer.setSize(window.innerWidth, window.innerHeight);
const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
const earthTexture = new THREE.TextureLoader().load('textures/earth.jpg');

const earthMaterial = new THREE.MeshStandardMaterial({
    map: earthTexture
});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);


//moon
const moonGeometry = new THREE.SphereGeometry(1.5, 32, 32);
const moonTexture = new THREE.TextureLoader().load('textures/moon.jpg');

const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonTexture
});

const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.set(20, 0, 0);

scene.add(moon);

//light
const light = new THREE.PointLight(0xffffff, 2);
light.position.set(10, 10, 10);
scene.add(light);

//spacecraft    
const rocketGeometry = new THREE.ConeGeometry(0.5, 2, 16);
const rocketMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial);
scene.add(rocket);



const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),    // Earth
    new THREE.Vector3(10, 5, 0),
    new THREE.Vector3(20, 0, 0)    // Moon
]);

let progress = 0;

function animate() {
    requestAnimationFrame(animate);

    progress += 0.001;

    const position = curve.getPoint(progress % 1);
    rocket.position.copy(position);

    camera.position.set(position.x + 5, position.y + 2, position.z + 5);
    camera.lookAt(rocket.position);

    renderer.render(scene, camera);
}

animate();


const starsGeometry = new THREE.BufferGeometry();
const starsCount = 1000;

const positions = [];

for (let i = 0; i < starsCount; i++) {
    positions.push((Math.random() - 0.5) * 1000);
    positions.push((Math.random() - 0.5) * 1000);
    positions.push((Math.random() - 0.5) * 1000);
}

starsGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3)
);

const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });

const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);


