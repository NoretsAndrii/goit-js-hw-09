import"./assets/modulepreload-polyfill-3cfb730f.js";const s=document.querySelector(".feedback-form"),o=document.querySelector("input"),l=document.querySelector("textarea"),c=localStorage.getItem("feedback-form-state"),r=JSON.parse(c);r!==null&&(o.value=r.email,l.value=r.message);s.addEventListener("input",e=>{e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),a=e.currentTarget.elements.message.value.trim(),m={email:t,message:a};localStorage.setItem("feedback-form-state",JSON.stringify(m))});s.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),a=e.target.elements.message.value.trim();if(t===""||a==="")return alert("Всі поля форми повинні бути заповнені");console.log({email:t,message:a}),localStorage.removeItem("feedback-form-state"),s.reset()});
//# sourceMappingURL=commonHelpers2.js.map
