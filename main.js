(()=>{"use strict";var t={d:(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{t.d({},{K:()=>c});const e={todoData:{modalActive:!1,modalCompVariantTodo:"Create",layoutComponent:"ProjectsGridLayout",defaultComponent:"ProjectsGrid",selectedProject:"Default Project",selectedProjectIndex:0,selectedTodoIdx:0,projects:[{name:"Default Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:9,todos:[{date:"2023-02-19",title:"Take a nap",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!0},{date:"2023-01-13",title:"Learn a new skill",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!1},{date:"2023-11-17",title:"Read a book",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!0},{date:"2023-11-06",title:"Read a book",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!0},{date:"2023-12-01",title:"Finish homework",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!0},{date:"2023-11-25",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1},{date:"2023-01-26",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1},{date:"2023-09-26",title:"Clean the kitchen",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!0},{date:"2023-01-11",title:"Take a nap",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1}],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.",completed:!1},{name:"Work Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:3,todos:[{date:"2023-12-17",title:"Fix a leaky faucet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!0},{date:"2023-08-26",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1},{date:"2023-01-20",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1}],description:"Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.",completed:!1},{name:"Personal Project",priority:"high",priorityId:"highPriorityTodo",todoCount:6,todos:[{date:"2023-01-13",title:"Learn a new skill",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!1},{date:"2023-11-17",title:"Read a book",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!0},{date:"2023-11-06",title:"Read a book",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!0},{date:"2023-12-01",title:"Finish homework",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!0},{date:"2023-11-25",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1},{date:"2023-01-26",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1}],description:"Donec eget est ut velit vestibulum aliquet., consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.",completed:!1},{name:"Garden Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:4,todos:[{date:"2023-12-17",title:"Fix a leaky faucet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!0},{date:"2023-08-26",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1},{date:"2023-01-20",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1},{date:"2023-11-25",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1}],description:"Suspendisse non sagittis mauris, est ut velit vestibulum aliquet. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.",completed:!1},{name:"Party Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:3,todos:[{date:"2023-11-25",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1},{date:"2023-01-26",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1},{date:"2023-09-26",title:"Clean the kitchen",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"High",completed:!0}],description:"Sed imperdiet mi sit amet erat. Donec volutpat orci et congue blandit. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.",completed:!1},{name:"Fundraiser",priority:"high",priorityId:"highPriorityTodo",todoCount:2,todos:[{date:"2023-11-25",title:"Go for a run",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Low",completed:!1},{date:"2023-01-26",title:"Organize closet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue",priority:"Medium",completed:!1}],description:"Maecenas volutpat orci et congue blandit velit vestibulum aliquet., consectetur adipiscing elit. Maecenas varius vestibulum augue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.",completed:!1}]}};function o(t){const e=document.createElement("div");e.classList.add("project-grid-layout"),"ProjectsGridLayout"===t.todoData.layoutComponent?e.style.display="flex":e.style.display="none";const o=function(t){const e=document.createElement("div");e.classList.add("buttons-container");const o=document.createElement("button");return o.setAttribute("id","add-project-btn"),o.textContent="Add Project",e.appendChild(o),o.addEventListener("click",(()=>{t.todoData.modalActive=!0,localStorage.setItem("state",JSON.stringify(t)),c("I was rerendered because of a state update triggered by the projectsGrid elm!!!")})),e}(t),i=function(t){const e=document.createElement("div");return e.classList.add("grid"),t.todoData.projects.forEach(((o,i)=>{const a=function(t,e,o){const i=document.createElement("div");i.classList.add("project-card");const a=document.createElement("div");a.classList.add("project-header");const d=document.createElement("h3");d.classList.add("project-name"),d.textContent=t.name;const n=document.createElement("span");n.classList.add("project-stats");const s=document.createElement("i");s.id=t.priorityId,s.classList.add("far","fa-circle"),n.appendChild(s);const r=document.createElement("h5");r.classList.add("project-todo-count"),r.textContent=t.todos.length,n.appendChild(r),a.appendChild(d),a.appendChild(n);const l=document.createElement("hr");l.classList.add("project-hr");const u=document.createElement("div");u.classList.add("project-body");const p=document.createElement("p");p.classList.add("project-description"),p.textContent=t.description,u.appendChild(p);const m=document.createElement("div");m.classList.add("project-footer");const v=document.createElement("button");v.classList.add("add-todo"),v.textContent="Todos";const b=document.createElement("button");return b.classList.add("delete-project"),b.textContent="Delete Project",m.appendChild(v),m.appendChild(b),i.appendChild(a),i.appendChild(l),i.appendChild(u),i.appendChild(m),[v,n].forEach((i=>{i.addEventListener("click",(()=>{o.todoData.layoutComponent="TodosLayout",o.todoData.selectedProject=t.name,o.todoData.selectedProjectIndex=e,localStorage.setItem("state",JSON.stringify(o)),c("I was rerendered because of a state update triggered by the projectsGrid:addTodoBtn||projectStats elm!!!")}))})),b.addEventListener("click",(()=>{"Default Project"!==t.name?(o.todoData.projects.splice(e,1),o.todoData.selectedProject="Default Project",o.todoData.selectedProjectIndex=0,localStorage.setItem("state",JSON.stringify(o)),c("I was rerendered because of a state update triggered by the projectsGrid:deleteProjectBtn elm!!!")):alert("Default project cannot be deleted!!!")})),i}(o,i,t);e.append(a)})),e}(t);return e.append(o),e.append(i),e}function i(t){const e=document.createElement("button");return e.textContent=t,e}function a(t,e){const o=document.createElement("div");o.classList.add("header",`${t}`);const i=document.createElement("span");i.classList.add("header-span");const a=document.createElement("p");a.textContent=`${e}`;const d=document.createElement("hr");return d.classList.add("project-hr"),i.appendChild(a),i.appendChild(d),o.appendChild(i),o}const d=document.getElementById("content"),n=document.createElement("header"),s=document.createElement("main");function c(t){localStorage.getItem("state")||localStorage.setItem("state",JSON.stringify(e));const r=JSON.parse(localStorage.getItem("state"));t?(console.log(t),n.innerHTML="",s.innerHTML=""):console.log("This is my default render when app first starts up!");const l=function(t){const e=document.createElement("nav");e.classList.add("nav");const o=function(){const t=document.createElement("div");t.classList.add("logo");const e=document.createElement("a");return e.setAttribute("href","#"),e.textContent="TASKIFY",t.appendChild(e),t}(),a=function(){const t=document.createElement("div");t.classList.add("auth");const e=i("Sign up"),o=i("Sign in");return t.appendChild(e),t.appendChild(o),t}();return e.appendChild(o),e.appendChild(a),e}(),u=o(r),p=function(t){const e=document.createElement("div");e.classList.add("form-container","modal"),e.id="addNewProjectModal",t.todoData.modalActive&&(e.style.display="flex");const o=document.createElement("form");o.action="#",o.method="post";const i=document.createElement("h1");i.textContent="Add New Project",o.appendChild(i);const a=document.createElement("label");a.setAttribute("for","project_name"),a.textContent="Project Name:",o.appendChild(a);const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("name","project_name"),d.setAttribute("id","project_name"),o.appendChild(d);const n=document.createElement("label");n.setAttribute("for","project_description"),n.textContent="Project Description:",o.appendChild(n);const s=document.createElement("textarea");s.setAttribute("name","project_description"),s.setAttribute("id","project_description"),o.appendChild(s);const r=document.createElement("label");r.setAttribute("for","priority"),r.textContent="Priority:",o.appendChild(r);const l=document.createElement("div");l.classList.add("priority-levels-container");const u=document.createElement("input");u.setAttribute("type","radio"),u.setAttribute("name","priority"),u.setAttribute("value","high"),u.setAttribute("id","priority_high"),l.appendChild(u);const p=document.createElement("label");p.classList.add("priority-high"),p.setAttribute("for","priority_high"),p.textContent="High",l.appendChild(p);const m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","priority"),m.setAttribute("value","medium"),m.setAttribute("id","priority_medium"),l.appendChild(m);const v=document.createElement("label");v.classList.add("priority-medium"),v.setAttribute("for","priority_medium"),v.textContent="Medium",l.appendChild(v);const b=document.createElement("input");b.setAttribute("type","radio"),b.setAttribute("name","priority"),b.setAttribute("value","low"),b.setAttribute("id","priority_low"),l.appendChild(b);const g=document.createElement("label");g.classList.add("priority-low"),g.setAttribute("for","priority_low"),g.textContent="Low",l.appendChild(g),o.appendChild(l);const h=document.createElement("div");h.classList.add("form-footer");const C=document.createElement("button");C.classList.add("cancel-btn"),C.setAttribute("type","button"),C.textContent="CANCEL",h.appendChild(C);const y=document.createElement("button");let L,E,f;return y.classList.add("action-btn"),y.setAttribute("type","button"),y.textContent="CREATE PROJECT",h.appendChild(y),o.appendChild(h),e.appendChild(o),C.addEventListener("click",(()=>{t.todoData.modalActive=!1,localStorage.setItem("state",JSON.stringify(t)),c("I was rerendered because of a state update triggered by the addProjectBtn:cancelButton elm!!!")})),d.addEventListener("blur",(t=>{L=t.target.value})),s.addEventListener("blur",(t=>{E=t.target.value})),[u,m,b].forEach((t=>{t.addEventListener("click",(t=>{f=t.target.value}))})),y.addEventListener("click",(e=>{let o="high"===f?"highPriorityTodo":"medium"===f?"medPriorityTodo":"low"===f?"lowPriorityTodo":null;if(L&&E&&f&&o){const e={name:L,priority:f,priorityId:o,todoCount:0,todos:[],description:E,completed:!1};t.todoData.modalActive=!1,t.todoData.projects.push(e),localStorage.setItem("state",JSON.stringify(t)),c("I was rerendered because of a state update triggered by the addProjectBtn:createProjectButton elm!!!")}else alert("Do not have all form input values!")})),e}(r),m=function(t){const e=document.createElement("div");e.classList.add("form-container","modal"),t.todoData.modalActive&&(e.style.display="flex");const o=document.createElement("form");o.setAttribute("action","#"),o.setAttribute("method","post");const i=document.createElement("h1");i.textContent="Add New Todo",o.appendChild(i);const a=document.createElement("label");a.setAttribute("for","date"),a.textContent="Date:",o.appendChild(a);const d=document.createElement("input");d.setAttribute("type","date"),d.setAttribute("id","date"),d.setAttribute("name","date"),d.setAttribute("required",!0),o.appendChild(d);const n=document.createElement("label");n.setAttribute("for","title"),n.textContent="Title:",o.appendChild(n);const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("id","title"),s.setAttribute("name","title"),s.setAttribute("required",!0),o.appendChild(s);const r=document.createElement("label");r.setAttribute("for","project_description"),r.textContent="Todo Description:",o.appendChild(r);const l=document.createElement("textarea");l.setAttribute("name","project_description"),l.setAttribute("id","project_description"),o.appendChild(l);const u=document.createElement("label");u.setAttribute("for","priority"),u.textContent="Priority:",o.appendChild(u);const p=document.createElement("div");p.classList.add("priority-levels-container");const m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","priority"),m.setAttribute("value","High"),m.setAttribute("id","priority_high"),p.appendChild(m);const v=document.createElement("label");v.classList.add("priority-high"),v.setAttribute("for","priority_high"),v.textContent="High",p.appendChild(v);const b=document.createElement("input");b.setAttribute("type","radio"),b.setAttribute("name","priority"),b.setAttribute("value","Medium"),b.setAttribute("id","priority_medium"),p.appendChild(b);const g=document.createElement("label");g.classList.add("priority-medium"),g.setAttribute("for","priority_medium"),g.textContent="Medium",p.appendChild(g);const h=document.createElement("input");h.setAttribute("type","radio"),h.setAttribute("name","priority"),h.setAttribute("value","Low"),h.setAttribute("id","priority_low"),p.appendChild(h);const C=document.createElement("label");C.classList.add("priority-low"),C.setAttribute("for","priority_low"),C.textContent="Low",p.appendChild(C),o.appendChild(p);const y=document.createElement("div");y.classList.add("form-footer");const L=document.createElement("button");L.classList.add("cancel-btn"),L.setAttribute("type","button"),L.textContent="CANCEL";const E=document.createElement("button");let f,j,A,D;return E.classList.add("action-btn"),E.setAttribute("type","button"),E.textContent="CREATE TODO",y.appendChild(L),y.appendChild(E),o.appendChild(y),e.appendChild(o),L.addEventListener("click",(()=>{t.todoData.modalActive=!1,localStorage.setItem("state",JSON.stringify(t)),c("I was rerendered because of a state update triggered by the addProjectBtn:cancelButton elm!!!")})),d.addEventListener("blur",(t=>{f=t.target.value})),s.addEventListener("blur",(t=>{j=t.target.value})),l.addEventListener("blur",(t=>{A=t.target.value})),[m,b,h].forEach((t=>{t.addEventListener("click",(t=>{D=t.target.value}))})),E.addEventListener("click",(()=>{if(f&&j&&A&&D){const e={date:f,title:j,description:A,priority:D,completed:!1};t.todoData.modalActive=!1,t.todoData.projects[t.todoData.selectedProjectIndex].todos.push(e),localStorage.setItem("state",JSON.stringify(t)),c("I was rerendered because of a state update triggered by the addProjectBtn:createProjectButton elm!!!")}else alert("Do not have all form input values!")})),e}(r),v=function(t){const e=document.createElement("div");e.classList.add("todo-list-layout"),"TodosLayout"===t.todoData.layoutComponent?e.style.display="flex":e.style.display="none";const o=document.createElement("div");o.className="buttons-container";const i=document.createElement("button");i.textContent="Back to projects",o.appendChild(i);const d=document.createElement("div");d.classList.add("todo-list-container");const n=document.createElement("h2");n.classList.add("my-h2"),n.textContent=t.todoData.selectedProject;const s=document.createElement("div");s.classList.add("todo-action-btns");const r=document.createElement("div");r.classList.add("todo-list"),[a("date","Date"),a("description","Title"),a("priority","Priority"),a("completed","Completed"),a("update","Update")].forEach((t=>{r.appendChild(t)})),t.todoData.projects[t.todoData.selectedProjectIndex].todos.forEach(((e,o)=>{const i=function(t,e,o,i,a,d){const n=document.createElement("div");n.classList.add("todo-item","date"),n.textContent=`${t}`;const s=document.createElement("div");s.classList.add("todo-item","description"),s.textContent=`${e}`;const r=document.createElement("div");r.classList.add("todo-item","priority"),r.id="High"===o?"priorityHigh":"Medium"===o?"priorityMed":"Low"===o?"priorityLow":null,r.textContent=`${o}`;const l=document.createElement("div");l.classList.add("todo-item","completed");const u=document.createElement("i");u.classList.add("fas","fa-check"),i&&l.appendChild(u);const p=document.createElement("div");p.classList.add("todo-item","update");const m=document.createElement("i");m.title="Update todo",m.classList.add("fa","fa-eye","update-icon");const v=document.createElement("i");return v.title="Delete todo",v.classList.add("fa","fa-trash","delete-icon"),p.appendChild(m),p.appendChild(v),m.addEventListener("click",(()=>{d.todoData.modalCompVariantTodo="Update",d.todoData.selectedTodoIdx=a,d.todoData.modalActive=!0,localStorage.setItem("state",JSON.stringify(d)),c("I was rerendered because of a state update triggered by the projectsGrid:todoItemUpdate elm!!!")})),v.addEventListener("click",(()=>{d.todoData.projects[d.todoData.selectedProjectIndex].todos.splice(a,1),localStorage.setItem("state",JSON.stringify(d)),c("I was rerendered because of a state update triggered by the projectsGrid:deleteIcon elm!!!")})),[n,s,r,l,p]}(e.date,e.title,e.priority,e.completed,o,t);i.forEach((t=>{r.appendChild(t)}))}));const l=document.createElement("button");return l.textContent="New Todo",s.appendChild(l),d.appendChild(n),d.appendChild(s),d.appendChild(r),e.appendChild(o),e.appendChild(d),i.addEventListener("click",(()=>{t.todoData.layoutComponent="ProjectsGridLayout",t.todoData.selectedProject="Default Project",t.todoData.selectedProjectIndex=0,localStorage.setItem("state",JSON.stringify(t)),c("I was rerendered because of a state update triggered by the projectsGrid:backButton elm!!!")})),l.addEventListener("click",(()=>{t.todoData.modalActive=!0,t.todoData.modalCompVariantTodo="Create",localStorage.setItem("state",JSON.stringify(t)),c("I was rerendered because of a state update triggered by the projectsGrid elm!!!")})),e}(r),b=function(t){const e=document.createElement("div");e.classList.add("form-container","modal"),t.todoData.modalActive&&(e.style.display="flex");const o=document.createElement("div");o.classList.add("detailed-todo-container");const i=document.createElement("div");i.classList.add("detailed-todo-header");const a=document.createElement("h3");a.setAttribute("contenteditable",!0),a.textContent=t.todoData.projects[t.todoData.selectedProjectIndex].todos[t.todoData.selectedTodoIdx]?.title,i.appendChild(a);const d=document.createElement("i");d.classList.add("fas","fa-pencil-alt","edit-icon"),i.appendChild(d),o.appendChild(i);const n=document.createElement("div");n.classList.add("detailed-todo-stats");const s=document.createElement("input");s.setAttribute("type","date"),s.setAttribute("id","date"),s.setAttribute("name","date"),s.setAttribute("required",!0),s.setAttribute("value",t.todoData.projects[t.todoData.selectedProjectIndex].todos[t.todoData.selectedTodoIdx]?.date),n.appendChild(s);const r=document.createElement("span");r.classList.add("todo-stats-level"),r.textContent="Priority:";const l=document.createElement("div");l.classList.add("filter-menu","font-awesome");const u=document.createElement("select");u.classList.add("far");const p=document.createElement("option");p.classList.add("far","all"),p.value="",p.textContent="Select",u.appendChild(p);const m=document.createElement("option");m.classList.add("far","high"),m.value="High",m.textContent="High",u.appendChild(m);const v=document.createElement("option");v.classList.add("far","medium"),v.value="Medium",v.textContent="Medium",u.appendChild(v);const b=document.createElement("option");b.classList.add("far","low"),b.value="Low",b.textContent="Low",u.appendChild(b),l.appendChild(u),r.appendChild(l),n.appendChild(r),o.appendChild(n);const g=document.createElement("hr");g.classList.add("project-hr"),o.appendChild(g);const h=document.createElement("div");h.classList.add("detailed-body-icon");const C=document.createElement("i");C.classList.add("fas","fa-pencil-alt","edit-icon"),h.appendChild(C),o.appendChild(h);const y=document.createElement("div");y.classList.add("detailed-todo-body");const L=document.createElement("p");L.setAttribute("contenteditable",!0),L.textContent=t.todoData.projects[t.todoData.selectedProjectIndex].todos[t.todoData.selectedTodoIdx]?.description,y.appendChild(L),o.appendChild(y);const E=document.createElement("div");E.classList.add("detailed-completed");const f=document.createElement("label");f.setAttribute("for","completed"),f.textContent="Completed:";const j=document.createElement("input");j.setAttribute("type","checkbox"),j.setAttribute("id","completed"),j.setAttribute("name","completed"),t.todoData.projects[t.todoData.selectedProjectIndex].todos[t.todoData.selectedTodoIdx]?.completed&&j.setAttribute("checked","checked"),E.appendChild(f),E.appendChild(j),o.appendChild(E);const A=document.createElement("div");A.classList.add("detailed-todo-footer");const D=document.createElement("button");D.classList.add("add-todo"),D.textContent="Cancel";const x=document.createElement("button");let I,P,w,M,S;return x.classList.add("update-project"),x.textContent="Update",A.appendChild(D),A.appendChild(x),o.appendChild(A),e.appendChild(o),D.addEventListener("click",(()=>{t.todoData.modalActive=!1,t.todoData.selectedTodoIdx=0,localStorage.setItem("state",JSON.stringify(t)),c("I was rerendered because of a state update triggered by the addProjectBtn:cancelButton elm!!!")})),a.addEventListener("blur",(t=>{I=t.target.textContent})),s.addEventListener("blur",(t=>{P=t.target.value})),u.addEventListener("change",(t=>{w=t.target.value})),L.addEventListener("blur",(t=>{M=t.target.textContent})),j.addEventListener("change",(()=>{j.checked?(S="checked",console.log("updatedCompletion changed to true",S)):(S="unchecked",console.log("updatedCompletion changed to false",S))})),x.addEventListener("click",(()=>{const e={date:P||t.todoData.projects[t.todoData.selectedProjectIndex].todos[t.todoData.selectedTodoIdx]?.date,title:I||t.todoData.projects[t.todoData.selectedProjectIndex].todos[t.todoData.selectedTodoIdx]?.title,description:M||t.todoData.projects[t.todoData.selectedProjectIndex].todos[t.todoData.selectedTodoIdx]?.description,priority:w||t.todoData.projects[t.todoData.selectedProjectIndex].todos[t.todoData.selectedTodoIdx]?.priority,completed:"checked"===S};t.todoData.projects[t.todoData.selectedProjectIndex].todos[t.todoData.selectedTodoIdx]=e,console.log("updatedTodo",e),t.todoData.modalActive=!1,localStorage.setItem("state",JSON.stringify(t)),c("I was rerendered because of a state update triggered by the addProjectBtn:createProjectButton elm!!!"),alert("Your Todo has been updated!")})),e}(r);n.classList.add("header-container"),s.classList.add("main-container"),n.appendChild(l),s.appendChild(u),s.appendChild(v),s.appendChild(r.todoData.modalActive&&"ProjectsGridLayout"===r.todoData.layoutComponent?p:"Create"===r.todoData.modalCompVariantTodo?m:b),d.appendChild(n),d.appendChild(s)}1===d.children.length&&c()})()})();