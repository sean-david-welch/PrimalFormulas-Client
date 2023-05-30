import{j as t,b as g,r as d}from"./index-5d20dca2.js";import{N,F as r,f as l,L as b}from"./Layout-00d27bdb.js";import{u}from"./useCartContext-add1cba6.js";import{S as h}from"./SectionHeading-7df4f79a.js";const v=({item:s,handleChangeQuantity:e,handleRemove:o})=>t.jsxs("li",{className:"cart-list-item",children:[t.jsx(g,{to:`/product/${s.id}`,className:"cart-link",children:t.jsx("img",{src:s.image,alt:s.name})}),t.jsxs("div",{className:"cart-description",children:[t.jsxs("h2",{className:"section-heading",children:[s.name,": €",Number(s.price).toFixed(2)]}),t.jsx("input",{type:"number",min:"1",value:s.quantity,onChange:n=>e(s.id,n)}),t.jsx("button",{className:"btn-secondary",onClick:()=>o(s.id),children:"Remove Item"})]})]},s.id),C=({renderSectionHeading:s})=>{const[e,o]=d.useState(0),{cart:n,removeFromCart:m,updateQuantity:x}=u();d.useEffect(()=>{const a=n.reduce((i,c)=>i+c.price*c.quantity,0);o(a)},[n]);const p=a=>{m(a)},j=(a,i)=>{const c=parseInt(i.target.value);!isNaN(c)&&c>=1&&x(a,c)};return t.jsxs(t.Fragment,{children:[s,n.length===0?t.jsx("div",{className:"empty-cart"}):t.jsxs("div",{className:"cart-view",children:[t.jsxs("div",{className:"cart",children:[t.jsxs("ul",{className:"cart-list-grid",children:[t.jsx("h1",{className:"section-heading",children:"Cart Items(s)"}),n.map(a=>t.jsx(v,{item:a,handleChangeQuantity:j,handleRemove:p},a.id))]}),t.jsx("div",{className:"cart-total",children:t.jsxs("h1",{className:"section-heading",children:["Sub-Total: €",e.toFixed(2)]})})]}),t.jsx("ul",{className:"product-nav",children:t.jsx(N,{to:{pathname:"/checkout/shipping-details",state:{total:e}},icon:t.jsx(r,{icon:l}),label:"Checkout"})})]})]})},w=()=>{const{cart:s}=u(),e=s.length===0?t.jsx(h,{headingText:"Your Shopping Cart Is Empty:",buttonLabel:"Shop Primal Formulas",buttonUrl:"/Shop",buttonIcon:t.jsx(r,{icon:l,className:"icon"})}):t.jsx(h,{headingText:"View Your Shopping Cart:",buttonLabel:"Continue Shopping",buttonUrl:"/Shop",buttonIcon:t.jsx(r,{icon:l,className:"icon"})});return t.jsx(b,{children:t.jsx("section",{id:"cart",children:t.jsx(C,{renderSectionHeading:e})})})};export{w as Cart,w as default};