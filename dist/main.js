(()=>{"use strict";var t={d:(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{t.d({},{K:()=>s});const e={todoData:{modalActive:!1,modalComponent:"AddNewProject",dialogComponent:null,layoutComponent:"ProjectsGridLayout",defaultComponent:"ProjectsGrid",selectedProject:"Default Project",selectedProjectIndex:0,projects:[{name:"Default Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:9,todos:[{date:"2023-02-19",title:"Take a nap",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!0},{date:"2023-01-13",title:"Learn a new skill",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!1},{date:"2023-11-17",title:"Read a book",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!0},{date:"2023-11-06",title:"Read a book",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!0},{date:"2023-12-01",title:"Finish homework",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!0},{date:"2023-11-25",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1},{date:"2023-01-26",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1},{date:"2023-09-26",title:"Clean the kitchen",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!0},{date:"2023-01-11",title:"Take a nap",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1}],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.",completed:!1},{name:"Work Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:3,todos:[{date:"2023-12-17",title:"Fix a leaky faucet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!0},{date:"2023-08-26",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1},{date:"2023-01-20",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1}],description:"Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.",completed:!1},{name:"Personal Project",priority:"high",priorityId:"highPriorityTodo",todoCount:6,todos:[{date:"2023-01-13",title:"Learn a new skill",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!1},{date:"2023-11-17",title:"Read a book",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!0},{date:"2023-11-06",title:"Read a book",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!0},{date:"2023-12-01",title:"Finish homework",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!0},{date:"2023-11-25",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1},{date:"2023-01-26",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1}],description:"Donec eget est ut velit vestibulum aliquet., consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.",completed:!1},{name:"Garden Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:4,todos:[{date:"2023-12-17",title:"Fix a leaky faucet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!0},{date:"2023-08-26",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1},{date:"2023-01-20",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1},{date:"2023-11-25",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1}],description:"Suspendisse non sagittis mauris, est ut velit vestibulum aliquet. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.",completed:!1},{name:"Party Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:3,todos:[{date:"2023-11-25",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1},{date:"2023-01-26",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1},{date:"2023-09-26",title:"Clean the kitchen",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!0}],description:"Sed imperdiet mi sit amet erat. Donec volutpat orci et congue blandit. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.",completed:!1},{name:"Fundraiser",priority:"high",priorityId:"highPriorityTodo",todoCount:2,todos:[{date:"2023-11-25",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1},{date:"2023-01-26",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1}],description:"Maecenas volutpat orci et congue blandit velit vestibulum aliquet., consectetur adipiscing elit. Maecenas varius vestibulum augue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.",completed:!1}]}};function o(t){const e=document.createElement("div");e.classList.add("project-grid-layout"),"ProjectsGridLayout"===t.todoData.layoutComponent?e.style.display="flex":e.style.display="none";const o=function(t){const e=document.createElement("div");e.classList.add("buttons-container");const o=document.createElement("button");return o.setAttribute("id","add-project-btn"),o.textContent="Add Project",e.appendChild(o),o.addEventListener("click",(()=>{t.todoData.modalActive=!0,console.log("appState logged from addProjectBtn",t),localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the projectsGrid elm!!!")})),e}(t),i=function(t){const e=document.createElement("div");return e.classList.add("grid"),t.todoData.projects.forEach(((o,i)=>{const a=function(t,e,o){const i=document.createElement("div");i.classList.add("project-card");const a=document.createElement("div");a.classList.add("project-header");const n=document.createElement("h3");n.classList.add("project-name"),n.textContent=t.name;const d=document.createElement("span");d.classList.add("project-stats");const r=document.createElement("i");r.id=t.priorityId,r.classList.add("far","fa-circle"),d.appendChild(r);const c=document.createElement("h5");c.classList.add("project-todo-count"),c.textContent=t.todos.length,d.appendChild(c),a.appendChild(n),a.appendChild(d);const l=document.createElement("hr");l.classList.add("project-hr");const u=document.createElement("div");u.classList.add("project-body");const p=document.createElement("p");p.classList.add("project-description"),p.textContent=t.description,u.appendChild(p);const m=document.createElement("div");m.classList.add("project-footer");const g=document.createElement("button");g.classList.add("add-todo"),g.textContent="Todos";const v=document.createElement("button");return v.classList.add("delete-project"),v.textContent="Delete Project",m.appendChild(g),m.appendChild(v),i.appendChild(a),i.appendChild(l),i.appendChild(u),i.appendChild(m),[g,d].forEach((i=>{i.addEventListener("click",(()=>{console.log(`ADD TODO BUTTON CLICKED at index ${e}`),o.todoData.layoutComponent="TodosLayout",o.todoData.selectedProject=t.name,o.todoData.selectedProjectIndex=e,localStorage.setItem("state",JSON.stringify(o)),s("I was rerendered because of a state update triggered by the projectsGrid:addTodoBtn||projectStats elm!!!")}))})),v.addEventListener("click",(()=>{if(console.log(`DELETE BUTTON CLICKED at index ${e}`),"Default Project"===t.name)return alert("Default project cannot be deleted!!!"),void console.log("Default Project cannot be deleted!!");o.todoData.projects.splice(e,1),o.todoData.selectedProject="Default Project",o.todoData.selectedProjectIndex=0,console.log("Project removed ad state updated",o),localStorage.setItem("state",JSON.stringify(o)),s("I was rerendered because of a state update triggered by the projectsGrid:deleteProjectBtn elm!!!")})),i}(o,i,t);e.append(a)})),e}(t);return e.append(o),e.append(i),e}function i(t){const e=document.createElement("button");return e.textContent=t,e}function a(t,e){const o=document.createElement("div");o.classList.add("header",`${t}`);const i=document.createElement("span");i.classList.add("header-span");const a=document.createElement("p");a.textContent=`${e}`;const n=document.createElement("hr");return n.classList.add("project-hr"),i.appendChild(a),i.appendChild(n),o.appendChild(i),o}const n=document.getElementById("content"),d=document.createElement("header"),r=document.createElement("main");function s(t){localStorage.getItem("state")||localStorage.setItem("state",JSON.stringify(e));const c=JSON.parse(localStorage.getItem("state"));t?(console.log(t),d.innerHTML="",r.innerHTML=""):console.log("This is my default render when app first starts up!");const l=function(t){const e=document.createElement("nav");e.classList.add("nav");const o=function(){const t=document.createElement("div");t.classList.add("logo");const e=document.createElement("a");return e.setAttribute("href","#"),e.textContent="TASKIFY",t.appendChild(e),t}(),a=function(){const t=document.createElement("div");t.classList.add("auth");const e=i("Sign up"),o=i("Sign in");return t.appendChild(e),t.appendChild(o),t}();return e.appendChild(o),e.appendChild(a),e}(),u=o(c),p=function(t){console.log("globalState from addProjectModal",t);const e=document.createElement("div");e.classList.add("form-container","modal"),e.id="addNewProjectModal",t.todoData.modalActive&&(e.style.display="flex");const o=document.createElement("form");o.action="#",o.method="post";const i=document.createElement("h1");i.textContent="Add New Project",o.appendChild(i);const a=document.createElement("label");a.setAttribute("for","project_name"),a.textContent="Project Name:",o.appendChild(a);const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("name","project_name"),n.setAttribute("id","project_name"),o.appendChild(n);const d=document.createElement("label");d.setAttribute("for","project_description"),d.textContent="Project Description:",o.appendChild(d);const r=document.createElement("textarea");r.setAttribute("name","project_description"),r.setAttribute("id","project_description"),o.appendChild(r);const c=document.createElement("label");c.setAttribute("for","priority"),c.textContent="Priority:",o.appendChild(c);const l=document.createElement("div");l.classList.add("priority-levels-container");const u=document.createElement("input");u.setAttribute("type","radio"),u.setAttribute("name","priority"),u.setAttribute("value","high"),u.setAttribute("id","priority_high"),l.appendChild(u);const p=document.createElement("label");p.classList.add("priority-high"),p.setAttribute("for","priority_high"),p.textContent="High",l.appendChild(p);const m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","priority"),m.setAttribute("value","medium"),m.setAttribute("id","priority_medium"),l.appendChild(m);const g=document.createElement("label");g.classList.add("priority-medium"),g.setAttribute("for","priority_medium"),g.textContent="Medium",l.appendChild(g);const v=document.createElement("input");v.setAttribute("type","radio"),v.setAttribute("name","priority"),v.setAttribute("value","low"),v.setAttribute("id","priority_low"),l.appendChild(v);const b=document.createElement("label");b.classList.add("priority-low"),b.setAttribute("for","priority_low"),b.textContent="Low",l.appendChild(b),o.appendChild(l);const h=document.createElement("div");h.classList.add("form-footer");const y=document.createElement("button");y.classList.add("cancel-btn"),y.setAttribute("type","button"),y.textContent="CANCEL",h.appendChild(y);const C=document.createElement("button");let L,E,f;return C.classList.add("action-btn"),C.setAttribute("type","button"),C.textContent="CREATE PROJECT",h.appendChild(C),o.appendChild(h),e.appendChild(o),y.addEventListener("click",(()=>{t.todoData.modalActive=!1,console.log("appState updated from addProjectBtn:cancelButton",t),localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the addProjectBtn:cancelButton elm!!!")})),n.addEventListener("blur",(t=>{L=t.target.value,console.log("projectNameValue",L)})),r.addEventListener("blur",(t=>{E=t.target.value,console.log("ProjectDescValue",E)})),[u,m,v].forEach((t=>{t.addEventListener("click",(t=>{f=t.target.value,console.log("priorityInputValue",f)}))})),C.addEventListener("click",(e=>{let o="high"===f?"highPriorityTodo":"medium"===f?"medPriorityTodo":"low"===f?"lowPriorityTodo":null;if(L&&E&&f&&o){const e={name:L,priority:f,priorityId:o,todoCount:0,todos:[],description:E,completed:!1};t.todoData.modalActive=!1,t.todoData.modalComponent="",t.todoData.projects.push(e),console.log("appState logged from addProjectBtn:createProjectButton",t),localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the addProjectBtn:createProjectButton elm!!!")}else alert("Do not have all form input values!")})),e}(c),m=function(t){console.log("Logging appState from createTodoModal",t);const e=document.createElement("div");e.classList.add("form-container","modal"),t.todoData.modalActive&&(e.style.display="flex");const o=document.createElement("form");o.setAttribute("action","#"),o.setAttribute("method","post");const i=document.createElement("h1");i.textContent="Add New Todo",o.appendChild(i);const a=document.createElement("label");a.setAttribute("for","date"),a.textContent="Date:",o.appendChild(a);const n=document.createElement("input");n.setAttribute("type","date"),n.setAttribute("id","date"),n.setAttribute("name","date"),n.setAttribute("required",!0),o.appendChild(n);const d=document.createElement("label");d.setAttribute("for","title"),d.textContent="Title:",o.appendChild(d);const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","title"),r.setAttribute("name","title"),r.setAttribute("required",!0),o.appendChild(r);const c=document.createElement("label");c.setAttribute("for","project_description"),c.textContent="Todo Description:",o.appendChild(c);const l=document.createElement("textarea");l.setAttribute("name","project_description"),l.setAttribute("id","project_description"),o.appendChild(l);const u=document.createElement("label");u.setAttribute("for","priority"),u.textContent="Priority:",o.appendChild(u);const p=document.createElement("div");p.classList.add("priority-levels-container");const m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","priority"),m.setAttribute("value","High"),m.setAttribute("id","priority_high"),p.appendChild(m);const g=document.createElement("label");g.classList.add("priority-high"),g.setAttribute("for","priority_high"),g.textContent="High",p.appendChild(g);const v=document.createElement("input");v.setAttribute("type","radio"),v.setAttribute("name","priority"),v.setAttribute("value","Medium"),v.setAttribute("id","priority_medium"),p.appendChild(v);const b=document.createElement("label");b.classList.add("priority-medium"),b.setAttribute("for","priority_medium"),b.textContent="Medium",p.appendChild(b);const h=document.createElement("input");h.setAttribute("type","radio"),h.setAttribute("name","priority"),h.setAttribute("value","Low"),h.setAttribute("id","priority_low"),p.appendChild(h);const y=document.createElement("label");y.classList.add("priority-low"),y.setAttribute("for","priority_low"),y.textContent="Low",p.appendChild(y),o.appendChild(p);const C=document.createElement("div");C.classList.add("form-footer");const L=document.createElement("button");L.classList.add("cancel-btn"),L.setAttribute("type","button"),L.textContent="CANCEL";const E=document.createElement("button");let f,j,A,P;return E.classList.add("action-btn"),E.setAttribute("type","button"),E.textContent="CREATE TODO",C.appendChild(L),C.appendChild(E),o.appendChild(C),e.appendChild(o),L.addEventListener("click",(()=>{t.todoData.modalActive=!1,localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the addProjectBtn:cancelButton elm!!!")})),n.addEventListener("blur",(t=>{f=t.target.value,console.log("todoDateValue",f)})),r.addEventListener("blur",(t=>{j=t.target.value,console.log("todoTitleValue",j)})),l.addEventListener("blur",(t=>{A=t.target.value,console.log("todoDescriptionValue",A)})),[m,v,h].forEach((t=>{t.addEventListener("click",(t=>{P=t.target.value,console.log("todoPriorityValue",P)}))})),E.addEventListener("click",(()=>{if(f&&j&&A&&P){const e={date:f,title:j,description:A,priority:P,completed:!1};t.todoData.modalActive=!1,t.todoData.projects[t.todoData.selectedProjectIndex].todos.push(e),console.log("appState logged from addProjectBtn:createTodoBtn",t),localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the addProjectBtn:createProjectButton elm!!!")}else alert("Do not have all form input values!")})),e}(c),g=function(t){const e=document.createElement("div");e.classList.add("todo-list-layout"),"TodosLayout"===t.todoData.layoutComponent?e.style.display="flex":e.style.display="none";const o=document.createElement("div");o.className="buttons-container";const i=document.createElement("button");i.textContent="Back to projects",o.appendChild(i);const n=document.createElement("div");n.classList.add("todo-list-container");const d=document.createElement("h2");d.classList.add("my-h2"),d.textContent=t.todoData.selectedProject;const r=document.createElement("div");r.classList.add("todo-action-btns");const c=document.createElement("div");c.classList.add("todo-list"),[a("date","Date"),a("description","Title"),a("priority","Priority"),a("completed","Completed"),a("update","Update")].forEach((t=>{c.appendChild(t)})),t.todoData.projects[t.todoData.selectedProjectIndex].todos.forEach(((e,o)=>{const i=function(t,e,o,i,a,n){const d=document.createElement("div");d.classList.add("todo-item","date"),d.textContent=`${t}`;const r=document.createElement("div");r.classList.add("todo-item","description"),r.textContent=`${e}`;const c=document.createElement("div");c.classList.add("todo-item","priority"),c.id="High"===o?"priorityHigh":"Medium"===o?"priorityMed":"Low"===o?"priorityLow":null,c.textContent=`${o}`;const l=document.createElement("div");l.classList.add("todo-item","completed");const u=document.createElement("i");u.classList.add("fas","fa-check"),i&&l.appendChild(u);const p=document.createElement("div");p.classList.add("todo-item","update");const m=document.createElement("i");m.title="Update todo",m.classList.add("fa","fa-eye","update-icon");const g=document.createElement("i");return g.title="Delete todo",g.classList.add("fa","fa-trash","delete-icon"),p.appendChild(m),p.appendChild(g),g.addEventListener("click",(()=>{console.log("Delete this todo by idx",a),n.todoData.projects[n.todoData.selectedProjectIndex].todos.splice(a,1),localStorage.setItem("state",JSON.stringify(n)),s("I was rerendered because of a state update triggered by the projectsGrid:deleteIcon elm!!!")})),[d,r,c,l,p]}(e.date,e.title,e.priority,e.completed,o,t);i.forEach((t=>{c.appendChild(t)}))}));const l=document.createElement("button");return l.textContent="New Todo",r.appendChild(l),n.appendChild(d),n.appendChild(r),n.appendChild(c),e.appendChild(o),e.appendChild(n),i.addEventListener("click",(()=>{console.log("back to projects btn clicked"),t.todoData.layoutComponent="ProjectsGridLayout",t.todoData.selectedProject="Default Project",t.todoData.selectedProjectIndex=0,localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the projectsGrid:backButton elm!!!")})),l.addEventListener("click",(()=>{t.todoData.modalActive=!0,localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the projectsGrid elm!!!")})),e}(c);d.classList.add("header-container"),r.classList.add("main-container"),d.appendChild(l),r.appendChild(u),r.appendChild(g),r.appendChild(c.todoData.modalActive&&"ProjectsGridLayout"===c.todoData.layoutComponent?p:m),n.appendChild(d),n.appendChild(r)}1===n.children.length&&s()})()})();