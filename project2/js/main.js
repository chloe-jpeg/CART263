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

