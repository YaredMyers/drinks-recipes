import{u as t,r as i,j as s}from"./index-ptbDeTJ9.js";import{D as n}from"./DrinkCard-Bf19Xt9M.js";const d=()=>{const e=t(r=>r.drinks),a=i.useMemo(()=>e.drinks.length,[e]);return s.jsxs(s.Fragment,{children:[s.jsx("h1",{className:"text-6xl font-extrabold",children:"Recetas"}),a?s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10",children:e.drinks.map(r=>s.jsx(n,{drink:r},r.idDrink))}):s.jsx("p",{className:"my-10 text-center text-2xl",children:"No hay resultados aún, utiliza el formulario para buscar recetas"})]})};export{d as default};
