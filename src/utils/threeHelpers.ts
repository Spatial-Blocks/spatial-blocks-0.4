import * as THREE from 'three';

/**
 * Initializes a basic Three.js scene.
 * @returns {THREE.Scene} The created scene.
 */
export function initializeScene(): THREE.Scene {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // TODO: add more initializations here, like lights, camera, etc.

    return scene;
}

// TODO: add more helper functions, like creating specific 3D objects, handling animations, etc.
