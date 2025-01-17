<div style="display: flex; justify-content: space-between;">
  <p align="center">
    <a href="https://react.dev/" target="blank"><img src="public/react.svg" width="200" alt="React Logo"/></a>
  </p>
  
  <p align="center">
    <a href="https://vitejs.dev/" target="blank"><img src="public/vite.svg" width="200" alt="Vite Logo"/></a>
  </p>

  <p align="center">
    <a href="https://www.typescriptlang.org/" target="blank"><img src="public/typescript.svg" width="200" alt="TypeScript Logo"/></a>
  </p>
</div>

# Administración de Pacientes - React + Vite + TypeScript + ContextAPI + Zustand

Aplicación creada con [React](https://react.dev/) y [Vite](https://vitejs.dev/) usando [TypeScript](https://www.typescriptlang.org/), la cual es un Administrador de Pacientes de una Veterinaria en el que puedes dar seguimiento a los pacientes, cuenta con un formulario creado con la ayuda de [react-hook-form](https://www.npmjs.com/package/react-hook-form) y [TailwindCSS](https://www.npmjs.com/package/tailwindcss), el cual tiene validaciones en sus campos, notificaciones con [react-tostify](https://www.npmjs.com/package/react-toastify) y el state es adminitrado usando [Zustand](https://www.npmjs.com/package/zustand), a demás los datos son persistentes. Se puede crear, editar y/o eliminar pacientes según sea necesario.

Algunos de los conceptos utilizados para la generación de ésta App, son:

1. [react-hook-form](https://www.npmjs.com/package/react-hook-form).
2. [TailwindCSS](https://www.npmjs.com/package/tailwindcss).
3. [Zustand](https://www.npmjs.com/package/zustand).
4. useEffect.
5. [react-tostify](https://www.npmjs.com/package/react-toastify).
8. [uuid](https://www.npmjs.com/package/uuid).
9. Local Storage.
10. Formularios.
11. Validaciones.
12. Y más.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
