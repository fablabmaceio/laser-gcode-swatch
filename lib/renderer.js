import * as THREE from 'three';
import TrackballControls from 'three-trackballcontrols';

function createScene(element) {
    // Renderer
    var renderer = new THREE.WebGLRenderer({clearColor:0x000000, clearAlpha: 1});
    renderer.setSize(element.width(), element.height());
    element.append(renderer.domElement);
    renderer.clear();

    // Scene
    var scene = new THREE.Scene();

    // Lights...
    [
        [0, 0, 1,  0xFFFFCC],
        [0, 1, 0,  0xFFCCFF],
        [1, 0, 0,  0xCCFFFF],
        [0, 0, -1, 0xCCCCFF],
        [0, -1, 0, 0xCCFFCC],
        [-1 ,0, 0, 0xFFCCCC]
    ].forEach(function(position) {
        var light = new THREE.DirectionalLight(position[3]);
        light.position.set(position[0], position[1], position[2]).normalize();
        scene.add(light);
    });

    // Camera...
    var fov    = 40,
        aspect = element.width() / element.height(),
        near   = 1,
        far    = 3000,
        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // camera.rotationAutoUpdate = true;
    // camera.position.x = 40;
    // camera.position.y = 70;
    camera.position.z = 200;

    scene.add(camera);
    scene.add(new THREE.AxisHelper(100));
    var controls = new TrackballControls(camera, document.getElementById('visualizer'));
    // controls.noPan = true;
    controls.dynamicDampingFactor = 0.15;

    window.camera = camera;

    // Action!
    function render() {
        controls.update();
        renderer.render(scene, camera);

        requestAnimationFrame(render); // And repeat...
    }
    render();

    // Fix coordinates up if window is resized.
    $(window).on('resize', function() {
        renderer.setSize(element.width(), element.height());
        camera.aspect = element.width() / element.height();
        camera.updateProjectionMatrix();
        // controls.screen.width = element.width();
        // controls.screen.height = element.height();
    });

    return scene;
}

export default createScene;
