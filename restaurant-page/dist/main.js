(()=>{"use strict";(()=>{const e=document.querySelector(".content");return{navContainer:()=>{const n=document.createElement("nav");n.classList.add("nav-container");const t=(()=>{const e=document.createElement("ul");e.classList.add("nav-list-items");const n=document.createElement("li");n.classList.add("nav-home"),n.innerText="Home";const t=document.createElement("li");t.classList.add("nav-menu"),t.innerText="Menu";const c=document.createElement("li");return c.classList.add("nav-contact"),c.innerText="Contact",e.appendChild(n),e.appendChild(t),e.appendChild(c),e})();n.appendChild(t),e.appendChild(n)}}})().navContainer(),(()=>{const e=document.querySelector(".content"),n=()=>{const e=document.createElement("div");return e.classList.add("content-container"),e.appendChild((()=>{const e=document.createElement("h1");return e.classList.add("contact-heading"),e.innerText="Contact Us",e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("contact-person");const n=document.createElement("h2");n.innerText="Head Chef";const t=document.createElement("p");return t.innerHTML="Johnny Potatoes<br />123-456-7890<br />chef@email.com",e.appendChild(n),e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("contact-person");const n=document.createElement("h2");n.innerText="Manager";const t=document.createElement("p");return t.innerHTML="Matilda Barnes<br />123-456-7890<br />manager@email.com",e.appendChild(n),e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("contact-person");const n=document.createElement("h2");n.innerText="Lead Server";const t=document.createElement("p");return t.innerHTML="Rupert Finkle<br />123-456-7890<br />server@email.com",e.appendChild(n),e.appendChild(t),e})()),e};return{contactPageMainContent:()=>{const t=document.createElement("div");t.classList.add("contact-container"),e.appendChild(t),t.appendChild((()=>{const e=document.createElement("div");return n(),e.appendChild(n()),e})())}}})().contactPageMainContent()})();