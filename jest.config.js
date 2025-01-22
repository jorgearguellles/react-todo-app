module.exports = {
  testEnvironment: "jsdom", // Simula un navegador para pruebas con DOM
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Configuración adicional después de cargar Jest
  moduleNameMapper: {
    // Mapea archivos CSS, SCSS, LESS, etc., para que Jest no falle al encontrarlos
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    // Usar Babel para transformar archivos JSX/JS
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/build/"], // Ignorar estas carpetas
  collectCoverage: true, // Habilita la recolección de cobertura de código
  collectCoverageFrom: [
    "src/**/*.{js,jsx}", // Analiza todos los archivos JS/JSX en la carpeta src
    "!src/index.js", // Excluye archivos específicos, como el punto de entrada
  ],
};
