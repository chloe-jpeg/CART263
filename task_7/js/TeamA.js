import * as THREE from 'three';

// Planet class for Team A
export class PlanetA {
    constructor(scene, orbitRadius, orbitSpeed) {
        this.scene = scene;
        this.orbitRadius = orbitRadius;
        this.orbitSpeed = orbitSpeed;
        this.angle = Math.random() * Math.PI * 2;

        //Create planet group
        this.group = new THREE.Group()

        // Create planet
        // THEME: FROGS
        // We present Sir Ivan Barr the Splurmf!
        //STEP 1:
        //TODO: Create a planet using THREE.SphereGeometry (Radius must be between 1.5 and 2).
        const planetGeometry = new THREE.SphereGeometry(2, 32, 32);
        //TODO: Give it a custom material using THREE.MeshStandardMaterial.
        const planetMaterial = new THREE.MeshStandardMaterial({ color: "#8DA750" });
        // TODO: Give the boy some eyes!
        const eyeGeometry = new THREE.SphereGeometry(0.7, 16, 16);
        const eyeMaterial = new THREE.MeshStandardMaterial({ color: "#FFFFFF" });
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.7, 0.5, 1.5);
        rightEye.position.set(0.7, 0.5, 1.5);
        this.group.add(leftEye);
        this.group.add(rightEye);

        const pupilGeometry = new THREE.SphereGeometry(0.6, 16, 16);
        const pupilMaterial = new THREE.MeshStandardMaterial({ color: "#000000" });
        const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        leftPupil.position.set(-0.7, 0.5, 1.7);
        rightPupil.position.set(0.7, 0.5, 1.7);
        this.group.add(leftPupil);
        this.group.add(rightPupil);
        //TODO: Use castShadow and receiveShadow on the mesh and all future ones so they can cast and receive shadows.
        planetMaterial.castShadow = true;
        planetMaterial.receiveShadow = true;
        //TODO: Add the planet mesh to the planet group.
        this.planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
        this.group.add(this.planetMesh);



        //STEP 2: 
        //TODO: Add from 1 to 3 orbiting moons to the planet group. 
        //TODO: The moons should rotate around the planet just like the planet group rotates around the Sun.

        //STEP 3:
        //TODO: Load Blender models to populate the planet with multiple props and critters by adding them to the planet group.
        //TODO: Make sure to rotate the models so they are oriented correctly relative to the surface of the planet.

        //STEP 4:
        //TODO: Use raycasting in the click() method below to detect clicks on the models, and make an animation happen when a model is clicked.
        //TODO: Use your imagination and creativity!

        this.scene.add(this.group);
    }

    update(delta) {
        // Orbit around sun
        this.angle += this.orbitSpeed * delta * 30;
        this.group.position.x = Math.cos(this.angle) * this.orbitRadius;
        this.group.position.z = Math.sin(this.angle) * this.orbitRadius;

        // Rotate planet
        this.group.rotation.y += delta * 0.5;

        //TODO: Do the moon orbits and the model animations here.
    }

    click(mouse, scene, camera) {
        //TODO: Do the raycasting here.
    }
}

