const fragmentShader = `
varying vec2 vUv;
uniform float uTime;

void main() {
	gl_FragColor = vec4(vUv,abs(sin(uTime)),1.0);
}
    `;

export default fragmentShader;
