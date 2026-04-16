import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

let isLaunched = false;
let progress = 0;

const launchBtn = document.getElementById("launchBtn");

window.addEventListener("DOMContentLoaded", () => {

    const phaseText = document.getElementById("phase");
    const distanceText = document.getElementById("distance");

    const offset = new THREE.Vector3(8, 4, 8);

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
    const rocketGroup = new THREE.Group();
    // body
    const body = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 3, 16),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    rocketGroup.add(body);
    // nose
    const nose = new THREE.Mesh(
        new THREE.ConeGeometry(0.4, 1, 16),
        new THREE.MeshStandardMaterial({ color: 0xff5555 })
    );
    nose.position.y = 2;
    rocketGroup.add(nose);
    // engine
    const engine = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 0.5, 16),
        new THREE.MeshStandardMaterial({ color: 0x333333 })
    );
    engine.position.y = -1.75;
    rocketGroup.add(engine);
    rocketGroup.position.set(0, 0, 0);

    scene.add(rocketGroup);

    //trajectory of the scpacecraft, matching the real Artemis II
    const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),       // Earth start

        // leaving Earth
        new THREE.Vector3(5, 2, 0),
        new THREE.Vector3(10, 5, 0),

        // approaching Moon
        new THREE.Vector3(18, 3, 2),

        // swing behind Moon (KEY PART)
        new THREE.Vector3(22, 0, 5),
        new THREE.Vector3(18, -3, -2),

        // coming back
        new THREE.Vector3(10, -5, 0),
        new THREE.Vector3(5, -2, 0),

        // return to Earth
        new THREE.Vector3(0, 0, 0)
    ]);

    let progress = 0;

    function animate() {
        requestAnimationFrame(animate);

        if (isLaunched) {
            progress += 0.001;
        }

        if (progress <= 1) {
            const position = curve.getPoint(progress);
            rocketGroup.position.copy(position);
        }

        const desiredPosition = rocketGroup.position.clone().add(offset);
        camera.position.lerp(desiredPosition, 0.05);
        camera.lookAt(rocketGroup.position);

        let phase = "";

        if (progress < 0.3) {
            phase = "Launch / Earth Orbit";
        } else if (progress < 0.6) {
            phase = "Trans-Lunar Injection";
        } else if (progress < 0.8) {
            phase = "Lunar Flyby";
        } else {
            phase = "Return to Earth";
        }

        phaseText.textContent = "Phase: " + phase;

        const distance = rocketGroup.position.length();
        distanceText.textContent = "Distance: " + Math.floor(distance * 1000) + " km";
        const tangent = curve.getTangent(progress);
        rocketGroup.lookAt(
            rocketGroup.position.clone().add(tangent)
        );

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



    launchBtn.addEventListener("click", () => {
        progress = 0;
        isLaunched = true;
        launchBtn.textContent = "MISSION IN PROGRESS";
    });

});
