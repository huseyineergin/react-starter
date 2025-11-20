/** @type {import('lint-staged').Configuration} */
export default {
	"*.{mjs,js,jsx,ts,tsx,json,html}": ["biome check --write"],
	"*.yaml": ["prettier --write"],
};
