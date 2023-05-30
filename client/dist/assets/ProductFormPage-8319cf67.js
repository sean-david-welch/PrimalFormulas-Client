import{j as s,f as l,r as m,a as h,g as P}from"./index-5d20dca2.js";import{h as f,L as S}from"./Layout-00d27bdb.js";import{u as g}from"./useMutation-46fd2380.js";const v=({name:e,value:r,handleChange:t})=>s.jsxs("div",{className:"input-fields",children:[s.jsxs("label",{children:[e.charAt(0).toUpperCase()+e.slice(1),":"]}),s.jsx("input",{type:"text",name:e,placeholder:e,value:r||"",onChange:t})]}),x=({product:e,handleChange:r,handleSubmit:t,isLoading:o,isSuccess:u,isError:d,errorMessage:n,operation:c})=>s.jsxs("form",{className:"product-form",onSubmit:t,children:[s.jsx(f,{headingText:`${c} Product: ${e.name}`}),s.jsx("div",{className:"product-input-fields",children:Object.keys(e).map(a=>["name","description","price","image"].includes(a)&&s.jsx(v,{name:a,value:e[a],handleChange:r},a))}),s.jsx("button",{className:"btn btn-nav btn-primary",type:"submit",disabled:o,children:o?`${c}...`:`${c} Product`}),u&&s.jsxs("p",{children:["Product ",c," success"]}),d&&s.jsxs("p",{children:["Error: ",n||"Something went wrong."]})]}),b=()=>g(async r=>await l({endpoint:"/products",method:"POST",data:r})),E=()=>{var n;const[e,r]=m.useState({name:"",description:"",price:0,image:""}),t=b(),o=h(),u=c=>{const{name:a,value:i}=c.target;r(p=>({...p,[a]:i}))},d=c=>{c.preventDefault(),t.mutate(e,{onSuccess:()=>{r({}),o("/shop")},onError:()=>{}})};return s.jsx(x,{product:e,handleChange:u,handleSubmit:d,isLoading:t.isLoading,isSuccess:t.isSuccess,isError:t.isError,errorMessage:((n=t.error)==null?void 0:n.message)||"",operation:"Create"})},C=()=>g(async({product_id:r,product:t})=>await l({endpoint:`/products/${r}`,method:"PUT",data:t})),L=({initialProduct:e})=>{var c;const[r,t]=m.useState(e),o=C(),u=h();m.useEffect(()=>{t(e)},[e]);const d=a=>{const{name:i,value:p}=a.target;t(j=>({...j,[i]:p}))},n=a=>{a.preventDefault(),o.mutate({product_id:r.id,product:r},{onSuccess:()=>{t(e),u(`/product/${r.id}`)},onError:()=>{}})};return s.jsx(x,{product:r,handleChange:d,handleSubmit:n,isLoading:o.isLoading,isSuccess:o.isSuccess,isError:o.isError,errorMessage:((c=o.error)==null?void 0:c.message)||"",operation:"Update"})},U=()=>{const{state:e}=P();return s.jsx(S,{children:s.jsx("section",{id:"product-form",children:(e==null?void 0:e.action)==="update"&&e.product?s.jsx(L,{initialProduct:e.product}):s.jsx(E,{})})})};export{U as ProductFormPage,U as default};