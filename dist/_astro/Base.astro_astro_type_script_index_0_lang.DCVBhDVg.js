const o=document.getElementById("hamburger"),n=document.getElementById("sidebar"),p=document.getElementById("sidebar-overlay"),g=document.getElementById("theme-toggle"),d=document.getElementById("gh-toggle"),c=document.getElementById("gh-panel"),I=document.getElementById("gh-close"),b=document.getElementById("gh-body"),u=document.getElementById("sponsor-panel");function _(e){const i=Array.from(n.querySelectorAll("button, a, [tabindex]:not([tabindex='-1'])")),r=i[0],s=i[i.length-1];e.key==="Tab"&&(e.shiftKey&&document.activeElement===r?(e.preventDefault(),s.focus()):!e.shiftKey&&document.activeElement===s&&(e.preventDefault(),r.focus()))}function $(){n.classList.add("is-open"),p.classList.add("is-open"),o.setAttribute("aria-expanded","true"),o.setAttribute("aria-label","Close navigation menu"),document.body.style.overflow="hidden",n.querySelector("button, a")?.focus(),n.addEventListener("keydown",_)}function h(){n.classList.remove("is-open"),p.classList.remove("is-open"),o.setAttribute("aria-expanded","false"),o.setAttribute("aria-label","Open navigation menu"),document.body.style.overflow="",n.removeEventListener("keydown",_),o.focus()}o.addEventListener("click",()=>{n.classList.contains("is-open")?h():$()});p.addEventListener("click",h);document.addEventListener("keydown",e=>{e.key==="Escape"&&(h(),m())});function B(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),g.setAttribute("aria-label",e==="dark"?"Switch to light mode":"Switch to dark mode")}g.addEventListener("click",()=>{const e=document.documentElement.getAttribute("data-theme");B(e==="dark"?"light":"dark")});const f=localStorage.getItem("theme");f&&g.setAttribute("aria-label",f==="dark"?"Switch to light mode":"Switch to dark mode");let v=!1;async function P(){if(!v){v=!0;try{const[e,i,r]=await Promise.all([fetch("https://api.github.com/users/colabottles"),fetch("https://api.github.com/users/colabottles/repos?sort=updated&per_page=5"),fetch("https://api.github.com/users/colabottles/events/public?per_page=10")]),s=await e.json(),E=await i.json(),L=await r.json(),w={PushEvent:"pushed to",PullRequestEvent:"PR on",IssuesEvent:"issue on",CreateEvent:"created",WatchEvent:"starred",ForkEvent:"forked"};b.innerHTML=`
            <section class="gh-section" aria-labelledby="gh-profile-heading">
              <h3 id="gh-profile-heading" class="gh-section__title">profile</h3>
              <dl class="gh-profile">
                <div class="gh-profile__row"><dt>followers</dt><dd>${s.followers}</dd></div>
                <div class="gh-profile__row"><dt>following</dt><dd>${s.following}</dd></div>
                <div class="gh-profile__row"><dt>public repos</dt><dd>${s.public_repos}</dd></div>
                <div class="gh-profile__row"><dt>member since</dt><dd>${new Date(s.created_at).getFullYear()}</dd></div>
              </dl>
            </section>
            <section class="gh-section" aria-labelledby="gh-repos-heading">
              <h3 id="gh-repos-heading" class="gh-section__title">recent repos</h3>
              <ul class="gh-repos">
                ${E.map(t=>`
                  <li class="gh-repo">
                    <a href="${t.html_url}" class="gh-repo__name" target="_blank" rel="noopener noreferrer">${t.name}</a>
                    ${t.description?`<p class="gh-repo__desc">${t.description}</p>`:""}
                    <p class="gh-repo__meta">
                      ${t.language?`<span class="gh-repo__lang">${t.language}</span>`:""}
                      <span class="gh-repo__stars">&#9733; ${t.stargazers_count}</span>
                    </p>
                  </li>
                `).join("")}
              </ul>
            </section>
            <section class="gh-section" aria-labelledby="gh-activity-heading">
              <h3 id="gh-activity-heading" class="gh-section__title">recent activity</h3>
              <ul class="gh-events">
                ${L.slice(0,8).map(t=>{const k=w[t.type]??t.type.replace("Event",""),A=t.repo.name.split("/")[1];return`<li class="gh-event"><span class="gh-event__action">${k}</span> <span class="gh-event__repo">${A}</span></li>`}).join("")}
              </ul>
            </section>
          `}catch{b.innerHTML='<p class="gh-error">Could not load GitHub data.</p>'}}}function x(){c.classList.add("is-open"),c.removeAttribute("aria-hidden"),u.setAttribute("aria-hidden","true"),u.classList.add("is-hidden"),d.setAttribute("aria-expanded","true"),d.setAttribute("aria-label","Close GitHub panel"),P()}function m(){c.classList.remove("is-open"),c.setAttribute("aria-hidden","true"),u.removeAttribute("aria-hidden"),u.classList.remove("is-hidden"),d.setAttribute("aria-expanded","false"),d.setAttribute("aria-label","Open GitHub panel")}d.addEventListener("click",()=>{c.classList.contains("is-open")?m():x()});I.addEventListener("click",m);const a=document.getElementById("right-panel-btn"),l=document.getElementById("right-panel");a&&l&&a.addEventListener("click",()=>{const e=l.classList.contains("mobile-open");l.classList.toggle("mobile-open"),a.setAttribute("aria-expanded",e?"false":"true"),e?document.body.style.overflow="":document.body.style.overflow="hidden"});const y=document.getElementById("right-panel-close");y&&l&&a&&y.addEventListener("click",()=>{l.classList.remove("mobile-open"),a.setAttribute("aria-expanded","false"),document.body.style.overflow="",a.focus()});
