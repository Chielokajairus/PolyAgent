<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';

	let container: HTMLDivElement;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let sphere: THREE.Group;
	let animationId: number;
	let mouseX = 0;
	let mouseY = 0;
	let targetRotationX = 0;
	let targetRotationY = 0;

	// Geodesic sphere parameters
	const sphereRadius = 160;
	const subdivisionFrequency = 2;

	onMount(() => {
		initScene();
		createGeodesicSphere();
		animate();

		// Handle window resize
		const handleResize = () => {
			if (camera && renderer && container) {
				const width = container.clientWidth;
				const height = container.clientHeight;
				
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
				renderer.setSize(width, height);
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		// Add mouse interaction
		const handleMouseMove = (event: MouseEvent) => {
			mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});

	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
		if (renderer) {
			renderer.dispose();
		}
	});

	function initScene() {
		// Create scene
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0xffffff);

		// Create camera
		camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		camera.position.z = 320;

		// Create renderer
		renderer = new THREE.WebGLRenderer({ 
			antialias: true,
			alpha: true 
		});
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		container.appendChild(renderer.domElement);

		// Add lighting for embossed effect
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
		scene.add(ambientLight);

		// Main directional light
		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
		directionalLight.position.set(50, 50, 50);
		scene.add(directionalLight);

		// Fill light for better depth perception
		const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
		fillLight.position.set(-30, -30, -30);
		scene.add(fillLight);

		// Rim light for edge definition
		const rimLight = new THREE.DirectionalLight(0xffffff, 0.2);
		rimLight.position.set(0, 0, 100);
		scene.add(rimLight);
	}

	function createGeodesicSphere() {
		sphere = new THREE.Group();

		// Create base icosahedron
		const icosahedronGeometry = new THREE.IcosahedronGeometry(sphereRadius, subdivisionFrequency);
		
		// Create embossed wireframe material
		const wireframeMaterial = new THREE.MeshPhongMaterial({
			color: 0x1f2937,
			wireframe: true,
			transparent: true,
			opacity: 0.8,
			shininess: 100,
			emissive: 0x1f2937,
			emissiveIntensity: 0.1
		});

		// Create wireframe mesh with slight offset for embossed effect
		const wireframeMesh = new THREE.Mesh(icosahedronGeometry, wireframeMaterial);
		wireframeMesh.position.z = 0.5; // Slight offset for depth
		sphere.add(wireframeMesh);

		// Create vertex nodes with embossed effect
		const vertices = icosahedronGeometry.attributes.position;
		const nodeGeometry = new THREE.SphereGeometry(2.8, 12, 12);
		const nodeMaterial = new THREE.MeshPhongMaterial({
			color: 0x6b7280,
			transparent: true,
			opacity: 0.9,
			shininess: 80,
			emissive: 0x6b7280,
			emissiveIntensity: 0.05
		});

		for (let i = 0; i < vertices.count; i += 3) {
			const x = vertices.getX(i);
			const y = vertices.getY(i);
			const z = vertices.getZ(i);
			
			// Normalize to sphere surface
			const length = Math.sqrt(x * x + y * y + z * z);
			const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
			node.position.set(
				(x / length) * sphereRadius,
				(y / length) * sphereRadius,
				(z / length) * sphereRadius
			);
			
			// Add subtle animation offset
			node.userData = { originalY: node.position.y };
			sphere.add(node);
		}

		// Add central connection point
		const centralNodeGeometry = new THREE.SphereGeometry(4.0, 16, 16);
		const centralNodeMaterial = new THREE.MeshPhongMaterial({
			color: 0x1f2937,
			transparent: true,
			opacity: 0.95,
			shininess: 120,
			emissive: 0x1f2937,
			emissiveIntensity: 0.1
		});
		const centralNode = new THREE.Mesh(centralNodeGeometry, centralNodeMaterial);
		sphere.add(centralNode);

		scene.add(sphere);
	}

	function animate() {
		animationId = requestAnimationFrame(animate);

		// Rotate sphere with mouse interaction
		if (sphere) {
			// Smooth mouse interaction
			targetRotationX = mouseY * 0.5;
			targetRotationY = mouseX * 0.5;
			
			sphere.rotation.x += (targetRotationX - sphere.rotation.x) * 0.05;
			sphere.rotation.y += (targetRotationY - sphere.rotation.y) * 0.05;
			
			// Add subtle continuous rotation
			sphere.rotation.x += 0.002;
			sphere.rotation.y += 0.003;
			
			// Animate nodes with pulsing effect
			sphere.children.forEach((child, index) => {
				if (child.type === 'Mesh' && child.userData.originalY !== undefined) {
					const time = Date.now() * 0.001;
					const pulseOffset = Math.sin(time * 2 + index * 0.5) * 0.5;
					child.position.y = child.userData.originalY + pulseOffset;
					
					// Subtle scale animation
					const scale = 1 + Math.sin(time * 3 + index * 0.3) * 0.1;
					child.scale.setScalar(scale);
				}
			});
		}

		renderer.render(scene, camera);
	}
</script>

<div class="relative w-full h-full" bind:this={container}>
	<!-- Three.js canvas will be inserted here -->
</div>

<style>
	div :global(canvas) {
		display: block;
		width: 100% !important;
		height: 100% !important;
	}
</style>
