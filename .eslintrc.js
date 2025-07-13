module.exports = {
  root: true,
  env: {
    node: true,
    browser: true, // Agregado para entornos de navegador, común en proyectos Vue
    es2021: true // Agregado para soporte de ES2021
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module', // Necesario para proyectos Vue con ES modules
    requireConfigFile: false // Evita errores si no hay un archivo de configuración de Babel
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
