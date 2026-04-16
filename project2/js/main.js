import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

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
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
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
const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

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

    camera.position.set(0, 15, 30);
    camera.lookAt(0, 0, 0);

    if (progress < 0.3) {
        console.log("Launch phase");
    } else if (progress < 0.7) {
        console.log("Lunar flyby");
    } else {
        console.log("Return to Earth");
    }

    renderer.render(scene, camera);
}

animate();

//stars
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


