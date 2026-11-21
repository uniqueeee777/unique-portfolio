/* Print-only HR portfolio: eight pages, readable text, Project Lab. Reuses window.PORTFOLIO_DATA. */

(() => {
 const d=window.PORTFOLIO_DATA;
 if(!d || !d.profile || !d.education || !d.teaching || !d.fieldwork || !d.scientificWorks || !d.articles || !Array.isArray(d.publications) || !Array.isArray(d.scientificWorks.review) || !d.scientificWorks.review.length) {
   console.error('Print portfolio: required data.js fields are missing.');
   return;
 }
 const a={
   profile:'assets/print-unique-profile.jpg',
   bps:'assets/Logo-BPS-Fieldwork.png',
   unpatti:'assets/Logo_Universitas_Pattimura_Terbaru.png',
   markplus:'assets/Logo-MarkPlus-Print.png',
   ...Object.fromEntries((d.teaching.photos || []).map((x,i)=>['teaching'+(i+1),'assets/print-teaching-'+String(i+1).padStart(2,'0')+'.jpg']))
 };
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const url=u=>/^(https?:\/\/|mailto:)/i.test(u||'')?u:'';
 const para=s=>String(s||'').split(/\n\s*\n/).filter(Boolean).map(t=>`<p>${esc(t.trim())}</p>`).join('');
 const foot=(label)=>`<footer class="sheet-footer"><span>UNIQUE · ${esc(label)}</span><span class="sheet-page"></span></footer>`;
 const head=(label,title,lead='')=>`<div class="sheet-tag">${esc(label)}</div><h2 class="sheet-h2">${esc(title)}</h2>${lead?`<p class="sheet-lead">${esc(lead)}</p>`:''}`;
 const wrap=(id,body,{only='',label=''}={})=>`<article id="${id}" class="sheet ${only}" data-sheet-label="${esc(label)}"><div class="sheet-inner">${body}</div>${foot(label)}</article>`;
 const coversheet=wrap('pdf-home',`<div class="cover-layout"><div class="cover-photo-wrap"><div class="soft-window"><div class="photo-window"><img src="${a.profile}" alt="Unique portrait" /></div></div><div class="curiosity-tag"><span style="color:#30b892;font-size:22px">✳</span><span>Curiosity first.<strong>Evidence always.</strong></span></div></div><div><div class="sheet-tag">PERSONAL PORTFOLIO</div><h1 class="cover-title">Unique<br>Desyrre<br><em>A. Resiloy.</em></h1><div class="cover-desc"><strong>Data Enthusiast · NLP · Applied Statistical Research</strong><p>I like reading the news. Sometimes a small detail catches my attention, and I end up turning to data to make sense of it.</p></div><div class="cover-footer-note"><div class="color-bullets"><span><i style="background:#7c86ff"></i>Research</span><span><i style="background:#34a7b7"></i>Teaching &amp; Fieldwork</span><span><i style="background:#30b892"></i>Writing</span></div></div></div></div>`,{label:'HOME'});
 const about=wrap('pdf-about',`${head('01 / PROFILE','A bit about me')}<div class="about-layout"><div class="panel about-paras"><div class="overline" style="margin-bottom:14px">MY BACKGROUND</div>${para(d.profile.about)}</div><div style="display:grid;grid-template-rows:1fr 1.04fr;gap:12px"><div class="panel about-quote"><div class="overline">BEYOND THE NUMBERS</div><div style="color:#28b3ae;font-size:20px">✦</div><p>I work with data, but I'm also interested in <em>the stories behind it.</em></p></div><div class="panel about-glance"><div class="overline">AT A GLANCE</div><dl><div><dt>Background</dt><dd>Statistics and Data Science graduate</dd></div><div><dt>Based in</dt><dd>Bogor, Indonesia</dd></div><div><dt>Tools I Use</dt><dd>Python, R, Microsoft Excel</dd></div><div><dt>Currently Learning</dt><dd>Tableau, SQL, Advanced Excel</dd></div></dl></div></div></div>`,{label:'ABOUT'});
 const eduCards=d.education.map(e=>{
   const pubs=d.publications.filter(x=>x.study===e.study);
   return `<div class="pdf-edu-card">
     <div class="overline">${esc(e.institution)}</div>
     <div class="edu-title">${esc(e.degree)}</div>
     <div class="edu-meta">${esc(e.period)} · GPA ${esc(e.gpa)} / 4.00</div>
     <div class="hr"></div><div class="overline">RESEARCH &amp; PRACTICAL EXPERIENCE</div>
     <p class="small">${esc(e.printSummary || e.academicWork)}</p>
     <div class="edu-pubs"><div class="overline">PUBLISHED WORKS</div>
       ${pubs.map(x=>`<div class="pdf-pub-entry"><b>${esc(x.title)}</b>
        <div class="pdf-pub-meta">${esc(x.source)} ${url(x.link)?`<a class="link" href="${esc(x.link)}">Read ↗</a>`:''}</div></div>`).join('')}
     </div></div>`;
 }).join('');
 const campus=(d.organizations||[]).map(o=>`<div class="pdf-campus-card">
   <div class="pdf-campus-date">${esc(o.period)}</div>
   <strong>${esc(o.role)}</strong>
   <div class="pdf-campus-place">${esc(o.institution)}</div>
   <p>${esc(o.description)}</p>
 </div>`).join('');
 const edu=wrap('pdf-education',`${head('02 / EDUCATION','Education','Academic background, published work, and campus involvement.')}
   <div class="pdf-education-grid">${eduCards}</div>
   <div class="pdf-campus"><div class="pdf-campus-heading">CAMPUS INVOLVEMENT</div><div class="pdf-campus-grid">${campus}</div></div>
 `,{label:'EDUCATION'});
 const teachPhotos=d.teaching.photos.map((p,i)=>`<figure><img src="${a['teaching'+(i+1)]}" alt="${esc(p.alt)}"><figcaption>${esc(p.caption)}</figcaption></figure>`).join('');
 const course=d.teaching.courses.map(c=>`<article class="panel teach-course"><div class="overline">${esc(c.label)}</div><h3>${esc(c.name)}</h3><p>${esc(c.description)}</p><div class="teach-resource">${(c.resources||[]).map(r=>r.url&&url(r.url)?`<a class="link" href="${esc(r.url)}">${esc(r.title)} ↗</a>`:`<span>${esc(r.title)} · ${esc(r.status||'In progress')}</span>`).join('')}</div></article>`).join('');
 const teach=wrap('pdf-teaching',`${head('03 / TEACHING','Teaching Experience',`Practicum Teaching Assistant · ${d.teaching.institution} · ${d.teaching.period}`)}<div class="teach-layout"><div><div class="teach-photos">${teachPhotos}</div><p class="micro">A few moments from our classes, from working through assignments to sharing what we made.</p></div><div>${course}</div></div>`,{label:'TEACHING'});
 const field=d.fieldwork.map((f,i)=>{const logos=f.logos.map(l=>{const src=l.style==='markplus'?'markplus':l.alt.includes('Pattimura')?'unpatti':'bps';return `<img class="field-logo ${src==='markplus'?'wide':''}" src="${a[src]}" alt="${esc(l.alt)}" />`}).join('');return `<div class="field-card"><div><div class="field-top">${logos}<span class="status">${esc(f.period)} · ${esc(f.organization)}</span></div><div class="field-name">${esc(f.title)}</div><div class="field-role">${esc(f.role)} · ${esc(f.location)}</div><p class="field-desc">${esc(f.printSummary || f.description)}</p></div><aside class="field-tasks"><strong>MAIN RESPONSIBILITIES</strong><ul class="list">${f.responsibilities.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></aside></div>`}).join('');
 const fieldwork=wrap('pdf-fieldwork',`${head('04 / FIELDWORK','Fieldwork Experience','Census support, household interviews, and data-quality monitoring in Maluku.')}<div class="field-entries">${field}</div>`,{label:'FIELDWORK'});
 const p = d.scientificWorks;
 const research=[...(p.review||[]),...(p.progress||[])];
 const compactPubs=wrap('pdf-publications-compact',`${head('05 / WRITING PORTFOLIO','Publications & Writing','A selection of ongoing research and published data-driven articles.')}
 <div class="pdf-writing-layout">
   <div class="pdf-writing-column">
     <div class="pdf-writing-kicker">CURRENT RESEARCH</div>
     ${research.map((x,i)=>`<article class="pdf-research-item">
       <div class="pdf-work-meta">${esc(x.stageLabel || 'Research development')}</div>
       <h3>${esc(x.portfolioTitle || x.short)}</h3>
       <p>${esc(x.portfolioSummary || x.description)}</p>
     </article>`).join('')}
     <div class="pdf-writing-note">Published academic papers and proceedings are linked in Education.</div>
   </div>
   <div class="pdf-writing-column pdf-articles-column">
     <div class="pdf-writing-kicker">DATA-DRIVEN WRITING</div>
     ${d.articles.map(x=>`<article class="pdf-article-item">
       <h3>${esc(x.title)}</h3>
       <p>${esc(x.summary)}</p>
       <div class="pdf-article-meta">${esc(x.publisher)} · ${esc(x.longDate)} <a href="${esc(x.url)}" class="link">Read article ↗</a></div>
     </article>`).join('')}
   </div>
 </div>`,{only:'only-compact',label:'PUBLICATIONS & WRITING'});
 const proj=(d.projectLab||[]);
 const lab=wrap('pdf-projectlab',`${head('06 / PROJECTS','Project Lab','Dashboard concepts and an AI assistant prototype at different stages of development.')}
   <div class="pdf-project-feature">
      <div class="pdf-project-feature-kicker">${esc(proj[0]?.category||'AI AUTOMATION')} · ${esc(proj[0]?.status||'IN DEVELOPMENT')}</div>
      <h3>${esc(proj[0]?.title||'Lexia')}</h3>
      <p>${esc(proj[0]?.text||'')}</p>
      <p class="pdf-project-note">${esc(proj[0]?.note||'')}</p>
      <span class="pdf-feature-symbol" aria-hidden="true">✳</span>
   </div>
   <div class="pdf-project-secondary">
      ${proj.slice(1).map((x,i)=>`<article class="pdf-project-card">
        <div class="pdf-project-meta">${esc(x.category)} · ${esc(x.status)}</div>
        <h3>${esc(x.title)}</h3>
        <p>${esc(x.text)}</p>
        <div class="pdf-project-note">${esc(x.note||'')}</div>
      </article>`).join('')}
   </div>
   <p class="pdf-project-disclaimer">Projects shown here are prototypes, learning activities, or concepts—not completed public deployments.</p>
 `,{label:'PROJECT LAB'});
 const contactLinks=[['LINKEDIN',d.profile.linkedin,d.profile.name],['EMAIL','mailto:'+d.profile.email,d.profile.email],['GITHUB',d.profile.github,'Research code'],['TABLEAU',d.profile.tableau,'Tableau Public']].map(([t,h,label])=>`<div class="contact-link"><div><strong>${t}</strong><a href="${esc(h)}">${esc(label)} ↗</a></div><span style="color:#c8fff0;font-size:17px">↗</span></div>`).join('');
 const contact=wrap('pdf-contact',`<div class="contact-layout"><div><div class="sheet-tag">07 / KEEP IN TOUCH</div><h2 class="contact-title">Let's talk<br><em>data.</em></h2><p class="contact-copy">Thanks for exploring my work. I'm always glad to connect over research, data analysis, and ideas worth investigating.</p><div class="contact-dots"><span></span><span></span><span></span></div></div><div class="contact-panel"><div class="overline">CONNECT WITH ME</div>${contactLinks}<div class="signature">Unique Desyrre A. Resiloy</div></div></div>`,{label:'CONTACT'});
 const printRoot=document.createElement('main');
 printRoot.id='portfolio-print-root';
 printRoot.className='print-shell';
 printRoot.setAttribute('aria-hidden','true');
 printRoot.style.display='none';
 printRoot.innerHTML=[coversheet,about,edu,teach,fieldwork,compactPubs,lab,contact].join('');
 // Activate the printable view only after all seven sheets exist.
 if (printRoot.querySelectorAll('.sheet').length !== 8) {
   console.error('Print portfolio: expected 8 pages; normal website will remain printable.');
   return;
 }
 printRoot.querySelectorAll('.sheet').forEach((el,i)=>{
   el.querySelector('.sheet-page').textContent=String(i+1).padStart(2,'0')+' / 08';
 });
 document.body.appendChild(printRoot);
 document.body.classList.add('portfolio-print-ready');
 window.PORTFOLIO_PRINT_READY = true;
 console.info('Portfolio PDF ready: 8 A4-landscape pages.');

})();
