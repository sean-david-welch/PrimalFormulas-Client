import{r as t,j as e,L as c}from"./index-5d20dca2.js";import{u as d}from"./useCartContext-add1cba6.js";import{N as a,F as n,f as l,g as m}from"./Layout-00d27bdb.js";import{u}from"./useIntersectionObserver-c3839da7.js";import{u as x}from"./useFetchProducts-ebee49bf.js";const j=({product:s})=>{const r=t.useRef(null);u(r);const{addToCart:i}=d(),o=t.useCallback(()=>{s&&i({id:s.id,name:s.name,price:s.price,image:s.image,description:s.description,quantity:1})},[i,s]);return e.jsx("li",{className:"hidden",ref:r,children:e.jsxs("div",{className:"product-card",children:[e.jsx("h2",{children:s.name}),e.jsx("img",{src:s.image,alt:s.name}),e.jsxs("h2",{children:["Price: €",s.price]}),e.jsxs("ul",{className:"product-nav",children:[e.jsx(a,{to:`/product/${s.id}`,icon:e.jsx(n,{icon:l}),label:"View Product"}),e.jsx(a,{to:"/cart",icon:e.jsx(n,{icon:m}),label:"Add to Cart",onClick:o})]})]})},s.id)},h=()=>{const{products:s,error:r,loading:i}=x({method:"GET",endpoint:"products"});return{products:s,error:r,loading:i}};function N(){const{products:s,loading:r}=h();return r||!s?e.jsx("section",{id:"products",children:e.jsx(c,{})}):e.jsx("section",{id:"products",children:e.jsx("div",{className:"products",children:e.jsx("ul",{children:s.map(i=>e.jsx(j,{product:i},i.id))})})})}export{N as P};
