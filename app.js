/* Unique / Tidal Pool — interactive slide portfolio. Edit data.js, not this file. */
(() => {
  'use strict';
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    document.getElementById('slides').textContent = 'Could not load data.js. Please keep the portfolio files in the same folder.';
    return;
  }
  const pages = [
    { id:'cover', label:'Home', type:'cover' },
    { id:'about', label:'About', type:'about' },
    { id:'education', label:'Education', type:'education' },
    { id:'experience-1', label:'Teaching', type:'experience', item:0 },
    { id:'experience-2', label:'Fieldwork', type:'experience', item:1 },
    { id:'publications', label:'Publications & Writing', type:'publications' },
    { id:'dashboard-lab', label:'Dashboard Lab', type:'lab' },
    { id:'contact', label:'Contact', type:'contact' }
  ];

  const $ = id => document.getElementById(id);
  const esc = (v='') => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const validLink = v => typeof v === 'string' && /^(https?:\/\/|mailto:|assets\/)[^\s]+$/i.test(v);
  const safeImg = v => typeof v === 'string' && /^(assets\/|https:\/\/)[^\s]+$/i.test(v);
  const link = (url, label, cls='text-link') => validLink(url)
    ? `<a class="${cls}" href="${esc(url)}" ${url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${esc(label)} <span aria-hidden="true">↗</span></a>`
    : '';
  const tags = (items=[]) => `<div class="tag-list">${items.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>`;
  const heading = (title, category) => `<div class="section-heading"><div class="section-topline"><span class="section-label">${esc(category)}</span><span class="section-rule"></span></div><h2 class="section-title">${esc(title)}</h2></div>`;
  const paras = text => String(text||'').split(/\n\s*\n/).filter(Boolean).map(p=>`<p>${esc(p)}</p>`).join('');
  const icon = (kind) => {
    const p = {
      email:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
      social:'<path d="m10 13 4-4M8 16l-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0M16 8l2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0"/>',
      arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
      book:'<path d="M12 7c-2.6-2-5.3-2.5-9-2v13c4-.4 6.5.1 9 2 2.5-1.9 5-2.4 9-2V5c-3.7-.5-6.4 0-9 2Z"/><path d="M12 7v13"/>',
      newspaper:'<rect x="4" y="3" width="15" height="18" rx="2"/><path d="M8 8h7M8 12h7M8 16h4M1 7v13"/>',
      location:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>'
    };
    return `<svg width="17" height="17" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" aria-hidden="true">${p[kind]||p.social}</svg>`;
  };
  const contactRow = (name,value,target) => `<div class="contact-row"><span class="contact-symbol">${icon(name==='Email'?'email':'social')}</span><div><div class="contact-label">${esc(name)}</div>${validLink(target)?`<a href="${esc(target)}" ${target.startsWith('http')?'target="_blank" rel="noopener noreferrer"':''}>${esc(value)} ↗</a>`:`<span>${esc(value)}</span>`}</div></div>`;
  const researchGraphic = index => {
    if (index === 0) return `<svg class="research-svg" viewBox="0 0 560 290" role="img" aria-label="Illustrative sentiment chart layout; not real study data">
      <defs><linearGradient id="sentgrad" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#008FD1"/><stop offset="1" stop-color="#00CEC8"/></linearGradient></defs>
      <g stroke="#cfeae6" stroke-width="1">${[50,95,140,185,230].map(y=>`<line x1="24" y1="${y}" x2="528" y2="${y}"/>`).join('')}</g>
      ${[99,146,75,185,157,122,200,155,219].map((h,i)=>`<rect x="${50+i*54}" y="${250-h}" width="28" height="${h}" rx="6" fill="${i%3===0?'#24EDAA':i%3===1?'#00CEC8':'#008FD1'}" opacity="${.52+(i%3)*.17}"/>`).join('')}
      <path d="M42 186C93 155 111 201 157 170S237 100 270 143 338 182 382 112 466 107 520 60" fill="none" stroke="#153F57" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 0"/>
      <circle cx="382" cy="112" r="7" fill="#fff" stroke="#153F57" stroke-width="4"/><circle cx="520" cy="60" r="7" fill="#fff" stroke="#153F57" stroke-width="4"/>
    </svg>`;
    if (index === 1) return `<svg class="research-svg" viewBox="0 0 560 290" role="img" aria-label="Illustrative classification heatmap; not real study data"><g transform="translate(60,26)">
      ${Array.from({length:7}, (_,r) => Array.from({length:12},(_,c)=>`<rect x="${c*35}" y="${r*33}" width="29" height="27" rx="5" fill="${['#daf7e8','#a4ebde','#6edbce','#27c8c0','#008fd1','#1a5d88'][(r+c*3+r*c)%6]}" opacity="${.65 + (r%3)*.13}"/>`).join('')).join('')}
    </g><path d="M60 269h414" stroke="#32677c" stroke-width="2" stroke-linecap="round"/></svg>`;
    return `<svg class="research-svg" viewBox="0 0 560 290" role="img" aria-label="Illustrative statistical modeling visualization; not real study data"><g stroke="#d6e8e3" stroke-width="1">${[65,113,161,209].map(y=>`<line x1="36" y1="${y}" x2="530" y2="${y}"/>`).join('')}</g>
      <path d="M40 225 C105 203 134 130 203 152 S310 215 377 125 469 88 522 51" fill="none" stroke="#008FD1" stroke-width="5" stroke-linecap="round"/>
      <path d="M40 220 C105 174 153 193 205 150 S310 105 375 125 470 76 522 50" fill="none" stroke="#24bda2" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 9"/>
      ${[ [69,213],[112,173],[145,167],[207,155],[261,187],[308,183],[361,137],[406,110],[469,76],[519,61] ].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="${i%2?6:4}" fill="${i%2?'#79DB70':'#00CEC8'}" stroke="#fff" stroke-width="2"/>`).join('')}</svg>`;
  };
  const graphicPlaceholder = (label, detail='Add your own photo or research image') => `<div class="media-placeholder"><div class="placeholder-symbol" aria-hidden="true"><span></span><span></span><span></span></div><strong>${esc(label)}</strong><span>${esc(detail)}</span></div>`;
  const photo = (src,label) => safeImg(src) ? `<img class="media-image" src="${esc(src)}" loading="lazy" alt="${esc(label)}" />` : graphicPlaceholder(label);
  
function renderCover() {
  const p = data.profile;

  const portrait = safeImg(p.photo)
    ? `<img
         class="home-soft-portrait"
         src="${esc(p.photo)}"
         alt="Portrait of ${esc(p.name)}"
         fetchpriority="high"
       >`
    : `<div class="home-soft-monogram">
         ${esc(p.initials || 'U')}
       </div>`;

  return `
    <section class="slide cover home-editorial" id="cover">

      <div class="home-editorial-grid">

        <!-- PHOTO: OPTION C / SOFT WINDOW -->
        <div class="home-soft-photo-cell">

          <div class="home-soft-window">

            <span class="home-soft-microdata">
              STATISTICS · DATA SCIENCE
            </span>

            <div class="home-soft-picture">
              ${portrait}
            </div>

            <span
              class="home-soft-fine-rule"
              aria-hidden="true">
            </span>

          </div>

          <!-- CURIOSITY CARD -->
          <div class="home-soft-curiosity">
            <span class="home-soft-star" aria-hidden="true">
              ✳
            </span>

            <span>
              Curiosity first.
              <strong>Evidence always.</strong>
            </span>
          </div>

        </div>

        <!-- INTRODUCTION -->
        <div class="home-editorial-copy">

          <div class="home-editorial-overline">
            <span>PERSONAL PORTFOLIO</span>
            <span
              class="home-editorial-overline-rule"
              aria-hidden="true">
            </span>
          </div>

          <h1 class="home-editorial-name">
            Unique<br>
            Desyrre<br>
            <em>A. Resiloy.</em>
          </h1>

          <div class="home-editorial-intro">

            <strong>
              Data Enthusiast · NLP ·
              Applied Statistical Research
            </strong>

            <p>
              I like reading the news. Sometimes a small
              detail catches my attention, and I end up
              turning to data to make sense of it.
            </p>

          </div>

          <div class="home-editorial-themes"
               aria-label="Portfolio areas">

            <span>
              <i aria-hidden="true"></i>
              Research
            </span>

            <span>
              <i aria-hidden="true"></i>
              Teaching &amp; Fieldwork
            </span>

            <span>
              <i aria-hidden="true"></i>
              Writing
            </span>

          </div>

        </div>

      </div>

    </section>
  `;
}
  function renderAbout() {
    const p=data.profile;
    return `<section class="slide" id="about">${heading('A bit about me', '01 / PROFILE')}
      <div class="about-grid">
        <article class="glass-panel about-copy"><div class="small-heading">MY BACKGROUND</div><div class="about-paras">${paras(p.about)}</div></article>
        <aside class="about-side">        
<div class="mini-panel statement-panel">
  <div class="mini-overline">BEYOND THE NUMBERS</div>
  <div class="statement-icon">✦</div>
  <div class="statement-quote">“</div>
  <div class="statement-text" style="font-size:clamp(20px,1.7vw,27px);line-height:1.3">
    I work with data, but I'm also interested in
    <em>the stories behind it.</em>
  </div>
</div>
          <div class="mini-panel details-panel">
         <div class="small-heading">AT A GLANCE</div>
         <div class="detail-item"><span>Background</span><strong>Statistics and Data Science graduate</strong></div>
         <div class="detail-item"><span>Based in</span><strong>${esc(p.location)}</strong></div>
         <div class="detail-item"><span>Tools I Use</span><strong>Python, R, Microsoft Excel</strong></div>
         <div class="detail-item"><span>Currently Learning</span><strong>Tableau, SQL, Advanced Excel</strong></div>
         </div>
        </aside>
      </div>
    </section>`;
  }
  


function renderEducation() {
  const education = data.education || [];
  const organizations = data.organizations || [];
  const publications = data.publications || [];

  // Direct links to journal websites
  const articleLink = (p, label, className) => {
    const url = String(p.link || '').trim();

    if (!/^https?:\/\/\S+$/i.test(url)) return '';

    return `
      <a
        class="${className}"
        href="${esc(url)}"
        target="_blank"
        rel="noopener noreferrer"
        title="${esc(p.title)}"
      >
        ${esc(label)}
        <span aria-hidden="true">↗</span>
      </a>
    `;
  };

  // Clickable documentation images
  const thumb = doc => `
    <button
      type="button"
      class="ed3-photo ${doc.type === 'certificate' ? 'is-certificate' : ''}"
      data-edu-photo="${esc(doc.file)}"
      data-edu-caption="${esc(doc.caption)}"
      data-edu-type="${esc(doc.type)}"
      aria-label="Open ${esc(doc.caption)}"
    >
      <img
        src="${esc(doc.file)}"
        alt="${esc(doc.caption)}"
        loading="lazy"
      >
    </button>
  `;

  const masters = publications.filter(
    p => p.study === 'master'
  );

  return `
    <section class="slide" id="education">

      ${heading('Education', '02 / ACADEMIC BACKGROUND')}

      <div class="ed3-layout">

        <div class="ed3-section-label">
          ACADEMIC JOURNEY
        </div>

        ${education.map(e => {
          const docs = e.documents || [];

          const schoolPubs = publications.filter(
            p => p.study === e.study
          );

          return `
            <article class="ed3-card glass-panel">

              <div class="ed3-copy">

                <div class="ed3-university-row">

                  <div class="ed3-logo">
                    <img
                      src="${esc(e.logo)}"
                      alt="${esc(e.institution)} logo"
                      loading="lazy"
                    >
                  </div>

                  <div class="ed3-school">

                    <div class="ed3-school-name">
                      ${esc(e.institution)}
                    </div>

                    <h3>${esc(e.degree)}</h3>

                    <p>${esc(e.period)}</p>

                  </div>

                  <div class="ed3-gpa">
                    <strong>${esc(e.gpa)}</strong>
                    <span>GPA / 4.00</span>
                  </div>

                </div>

                <div class="ed3-overline">
                  RESEARCH & PRACTICAL EXPERIENCE
                </div>

                <p class="ed3-description">
                  ${esc(e.academicWork)}
                </p>

                <div class="ed3-rule"></div>

                <div class="ed3-overline">
                  BEYOND COURSEWORK
                </div>

                <div class="ed3-beyond">
                  ${(e.beyond || []).map(x => `
                    <span>${esc(x)}</span>
                  `).join('<span class="ed3-dot">·</span>')}
                </div>

              </div>

              <aside class="ed3-proof">

                ${e.study === 'master' ? `

                  <div class="ed3-proof-head">
                    <span>DOCUMENTATION</span>
                    <small>2026</small>
                  </div>

                  <div class="ed3-photo-grid">
                    ${docs.map(thumb).join('')}
                  </div>

                  <div class="ed3-overline">
                    RESEARCH & RECORDS
                  </div>

                  <div class="ed3-buttons">

                    <button
                      type="button"
                      class="ed3-pill"
                      data-open-edu-publications
                    >
                      View publications
                      <span aria-hidden="true">↗</span>
                    </button>

                    ${link(
                      e.abstractBook,
                      'ICAIMS abstract book',
                      'ed3-pill'
                    )}

                  </div>

                ` : `

                  <div class="ed3-proof-head">
                    <span>PUBLISHED WORKS</span>
                    <small>2018–2022</small>
                  </div>

                  <p class="ed3-record-subtitle">
                    Proceedings and journal articles
                  </p>

                  <div class="ed3-direct-links">

                    ${schoolPubs.map(p =>
                      articleLink(
                        p,
                        p.shortLabel || p.source,
                        'ed3-pub-bubble'
                      )
                    ).join('')}

                  </div>

                  <div class="ed3-proof-head ed3-cert-heading">
                    <span>CONFERENCE CERTIFICATE</span>
                    <small>IndoMS XX · 2021</small>
                  </div>

                  <div class="ed3-certificate-preview">
                    ${docs.map(thumb).join('')}
                  </div>

                `}

              </aside>

            </article>
          `;
        }).join('')}

        <div class="ed3-section-label">
          CAMPUS INVOLVEMENT
        </div>

        <div class="ed3-org-grid">

          ${organizations.map(o => `

            <article class="glass-panel ed3-org-card">

              <div class="ed3-org-period">
                ${esc(o.period)}
              </div>

              <h3>${esc(o.role)}</h3>

              <strong>${esc(o.institution)}</strong>

              <p>${esc(o.description)}</p>

            </article>

          `).join('')}

        </div>

      </div>

      <!-- Popup publications S2 -->

      <dialog id="eduPubModal" class="ed3-dialog">

        <div class="ed3-dialog-head">

          <div>
            <div class="ed3-overline">
              IPB UNIVERSITY · 2024–2026
            </div>

            <h3>
              Publications during Master's Studies
            </h3>
          </div>

          <form method="dialog">
            <button
              type="submit"
              class="ed3-close"
              aria-label="Close publications"
            >
              ×
            </button>
          </form>

        </div>

        <div class="ed3-dialog-body">

          ${masters.map(p => `

            <article class="ed3-pub-entry">

              <div class="ed3-overline">
                ${esc(p.source)}
              </div>

              <h4>${esc(p.title)}</h4>

              ${articleLink(
                p,
                'Open article',
                'ed3-pub-link'
              )}

            </article>

          `).join('') || '<p>No publications added yet.</p>'}

        </div>

      </dialog>

      <!-- Popup photo and certificate -->

      <dialog id="eduPhotoDialog" class="ed3-dialog">

        <div class="ed3-dialog-head">

          <div>
            <div
              class="ed3-overline"
              id="eduPhotoType"
            >
              DOCUMENTATION
            </div>

            <h3 id="eduPhotoTitle"></h3>
          </div>

          <form method="dialog">
            <button
              type="submit"
              class="ed3-close"
              aria-label="Close image"
            >
              ×
            </button>
          </form>

        </div>

        <div
          class="ed3-photo-dialog-body"
          id="eduPhotoContent"
        ></div>

      </dialog>

    </section>
  `;
}

function renderTeaching() {
  const t = data.teaching || {};
  const pictures = (t.photos || []).filter(p =>
    /^assets\/[\w.-]+\.(?:jpe?g|png|webp)$/i.test(p.src || '')
  );
  const courses = t.courses || [];

  const gallerySlides = pictures.map((p, i) => `
    <figure
      class="teach-gallery-slide${i === 0 ? ' is-current' : ''}"
      data-teach-slide="${i}"
      aria-hidden="${i !== 0}"
    >
      <img class="teach-gallery-blur"
           src="${esc(p.src)}" alt=""
           aria-hidden="true" loading="lazy">

      <img class="teach-gallery-image"
           src="${esc(p.src)}"
           alt="${esc(p.alt)}"
           loading="${i === 0 ? 'eager' : 'lazy'}">

      <figcaption>
        <strong>${esc(p.caption)}</strong>
        <span>${String(i + 1).padStart(2, '0')} /
          ${String(pictures.length).padStart(2, '0')}</span>
      </figcaption>
    </figure>
  `).join('');

  return `
    <section class="slide teach-slide" id="experience-1">

      ${heading('Teaching Experience', '03 / TEACHING')}

      <div class="teach-overview">
        <div class="teach-intro">
          Practicum Teaching Assistant ·
          ${esc(t.institution || 'IPB University')} ·
          ${esc(t.period || '2026')}
        </div>
      </div>

      <div class="teach-grid">

        <section class="glass-panel teach-gallery"
                 aria-label="Teaching documentation">

          <div class="teach-gallery-top">
            <span class="teach-eyebrow">MOMENTS FROM CLASS</span>
            <span id="teachCount">
              01 / ${String(pictures.length).padStart(2, '0')}
            </span>
          </div>

          <div class="teach-gallery-viewport" id="teachViewport">
            ${gallerySlides || '<div class="teach-no-photos">Add classroom photos to data.js.</div>'}
          </div>

          <div class="teach-gallery-controls">
            <div class="teach-gallery-dots" id="teachDots">
              ${pictures.map((_, i) => `
                <button type="button"
                  class="teach-dot${i === 0 ? ' is-current' : ''}"
                  data-teach-dot="${i}"
                  aria-label="Photo ${i + 1}"
                  ${i === 0 ? 'aria-current="true"' : ''}>
                </button>
              `).join('')}
            </div>

            <div class="teach-gallery-buttons">
              <button type="button" class="teach-icon-button"
                      id="teachPlay" aria-label="Pause slideshow">Ⅱ</button>
              <button type="button" class="teach-icon-button"
                      id="teachPrev" aria-label="Previous photo">←</button>
              <button type="button" class="teach-icon-button"
                      id="teachNext" aria-label="Next photo">→</button>
              <button type="button" class="teach-icon-button"
                      id="teachZoom" aria-label="Enlarge photo">⤢</button>
            </div>
          </div>

          <p class="teach-gallery-note">
            <span aria-hidden="true">✳</span>
            ${esc(t.galleryNote || '')}
          </p>

        </section>

        <div class="teach-course-stack">

          ${courses.map((c, i) => `
            <article class="glass-panel teach-course">

              <div class="teach-course-header">
                <span>0${i + 1} / PRACTICUM</span>
                <span>${esc(c.label)}</span>
              </div>

              <h3>${esc(c.name)}</h3>

              <div class="teach-course-period">
                ${esc(t.institution || 'IPB University')} ·
                ${esc(c.period || '2026')}
              </div>

              <p class="teach-course-description">
                ${esc(c.description)}
              </p>

              <div class="teach-course-rule"></div>

              <div class="teach-course-actions">
                <button type="button" class="teach-pill"
                        data-teach-course="${i}">
                  ${esc(c.action)} <span aria-hidden="true">↗</span>
                </button>

                ${validLink(c.dashboardUrl)
                  ? link(c.dashboardUrl,
                      'View live dashboard',
                      'teach-pill teach-pill-blue')
                  : ''}
              </div>

              ${c.chips?.length ? `
                <div class="teach-chips">
                  ${c.chips.map(x => `<span>${esc(x)}</span>`).join('')}
                </div>
              ` : ''}

              <div class="teach-course-note">
                <span class="teach-note-icon">${i === 0 ? '⌘' : '▤'}</span>
                <div>
                  <strong>${esc(c.noteTitle)}</strong>
                  <span>${esc(c.noteText)}</span>
                </div>
              </div>

            </article>
          `).join('')}

        </div>
      </div>

      <dialog class="teach-modal" id="teachCourseDialog"
              aria-label="Course resources">
        <div class="teach-modal-head">
          <div>
            <span class="teach-eyebrow" id="teachCourseKicker"></span>
            <h3 id="teachCourseTitle"></h3>
          </div>
          <form method="dialog">
            <button class="teach-modal-close" type="submit"
                    aria-label="Close">×</button>
          </form>
        </div>
        <div class="teach-modal-content"
             id="teachCourseContent"></div>
      </dialog>

      <dialog class="teach-modal teach-photo-modal"
              id="teachGalleryDialog"
              aria-label="Classroom photo">
        <div class="teach-modal-head">
          <div>
            <span class="teach-eyebrow">TEACHING DOCUMENTATION</span>
            <h3 id="teachPhotoTitle"></h3>
          </div>
          <form method="dialog">
            <button class="teach-modal-close" type="submit"
                    aria-label="Close">×</button>
          </form>
        </div>
        <div class="teach-photo-content">
          <img id="teachPhotoLarge" src="" alt="">
        </div>
      </dialog>

    </section>
  `;
}

function renderFieldwork() {
  const items = data.fieldwork || [];

  return `
    <section class="slide fieldwork-slide" id="experience-2">

      ${heading('Fieldwork Experience', '04 / FIELDWORK')}

      <div class="f3-board">

        ${items.map((item, index) => {

          const logos = (item.logos || [])
            .filter(logo => safeImg(logo.src));

          return `

            <article class="glass-panel f3-card">

              <div class="f3-info">

                <div class="f3-card-head">

                  <div class="f3-logo-group">

                    <div class="f3-logos">

                      ${logos.map(logo => `
                        <div class="f3-logo ${
                          logo.style === 'markplus'
                            ? 'f3-logo-markplus'
                            : ''
                        }">

                          <img
                            src="${esc(logo.src)}"
                            alt="${esc(logo.alt)}"
                            loading="lazy"
                          >

                        </div>
                      `).join('')}

                    </div>

                    <span class="f3-organization">
                      ${esc(item.organization)}
                    </span>

                  </div>

                  <span class="f3-date">
                    ${esc(item.period)}
                  </span>

                </div>

                <h3 class="f3-title">
                  ${esc(item.title)}
                </h3>

                <div class="f3-role">
                  ${esc(item.role)} · ${esc(item.location)}
                </div>

                <p class="f3-description">
                  ${esc(item.description)}
                </p>

              </div>

              <aside class="f3-panel">

                <div class="f3-panel-heading">
                  MAIN RESPONSIBILITIES
                </div>

                <div class="f3-task-list">

                  ${(item.responsibilities || [])
                    .map((task, i) => `

                      <div class="f3-task">

                        <span
                          class="f3-task-icon"
                          aria-hidden="true"
                        >
                          ${['↗', '≡', '✓'][i % 3]}
                        </span>

                        <span class="f3-task-text">
                          ${esc(task)}
                        </span>

                      </div>

                    `).join('')}

                </div>

              </aside>

            </article>

          `;
        }).join('')}

      </div>

    </section>
  `;
}

function renderExperience(i) {
  if (i === 0) return renderTeaching();
  if (i === 1) return renderFieldwork();
    const e=data.experience?.[i]||{};
    return `<section class="slide" id="experience-${i+1}">${heading(e.heading||'Experience',`0${i+3} / EXPERIENCE`)}
      <div class="exp-grid"><article class="glass-panel exp-copy"><div class="exp-small-row"><span class="eyebrow">${esc(e.period)}</span><span class="exp-accent">${String(i+1).padStart(2,'0')}</span></div><h3 class="exp-role">${esc(e.role)}</h3><div class="exp-org">${esc(e.organization)}</div><p>${esc(e.description)}</p><div class="mini-overline">KEY RESPONSIBILITIES</div><ul>${(e.points||[]).map(p=>`<li>${esc(p)}</li>`).join('')}</ul></article>
      <div class="exp-images"><div class="exp-photo exp-photo-main">${photo(e.images?.[0],e.imageLabels?.[0]||'Activity documentation')}</div><div class="exp-photo exp-photo-secondary">${photo(e.images?.[1],e.imageLabels?.[1]||'Related work')}</div></div></div>
    </section>`;
  }
  function renderFocus() {
    return `<section class="slide" id="research-focus">${heading('What I work on', '05 / RESEARCH FOCUS')}
      <div class="focus-intro">Three areas connect most of my published work and ongoing interests.</div>
      <div class="focus-grid">${(data.researchAreas||[]).map((a,i)=>`<article class="glass-panel focus-card focus-card-${i+1}"><div class="focus-top"><span class="focus-number">${esc(a.number)}</span><span class="focus-glyph">${['◌','↗','✳'][i%3]}</span></div><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p>${tags(a.tags)}</article>`).join('')}</div>
    </section>`;
  }
  function renderProject(i) {
    const p=data.projects?.[i]||{};
    const showcase=safeImg(p.image)? `<img class="media-image" src="${esc(p.image)}" alt="Research figure for ${esc(p.title)}">` : `<div class="demo-visual"><div class="demo-head"><span class="mini-dot"></span><span>FIGURE PREVIEW / ${String(i+1).padStart(2,'0')}</span><span class="demo-right">DESIGN SAMPLE</span></div><div class="demo-chart">${researchGraphic(i)}</div><div class="demo-caption">Illustrative layout. Replace with your own research figure.</div></div>`;
    return `<section class="slide" id="project-${i+1}">${heading('Selected research', `0${i+6} / CASE STUDY`)}
      <div class="project-grid"><div class="project-info"><div class="project-index">${String(i+1).padStart(2,'0')} <span>/ 03</span></div><div class="project-type">${esc(p.category)}</div><h3 class="project-name">${esc(p.title)}</h3><p class="project-subtitle">${esc(p.subtitle)}</p><div class="project-divider"></div><p class="project-description">${esc(p.description)}</p><div class="role"><strong>MY CONTRIBUTION</strong><span>${esc(p.role)}</span></div>${tags(p.tags)}<div class="project-bottom"><span class="project-status">${esc(p.status)}</span>${link(p.link,p.linkLabel||'View project','project-button')}</div></div>
      <div class="project-visual">${showcase}</div></div>
    </section>`;
  }
  function renderLab() {
    return `<section class="slide" id="dashboard-lab">${heading('Dashboard Lab', '07 / DASHBOARD LAB')}<p class="focus-intro">A separate space for interactive data work. These projects are planned, not completed.</p>
      <div class="lab-grid">${(data.dashboardLab||[]).map((l,i)=>`<article class="glass-panel lab-card"><div class="lab-illustration lab-illustration-${i+1}"><span class="lab-line l1"></span><span class="lab-line l2"></span><span class="lab-line l3"></span><span class="lab-ring"></span></div><span class="lab-status">${esc(l.status)}</span><h3>${esc(l.title)}</h3><p>${esc(l.text)}</p>${link(l.link,'View dashboard')}</article>`).join('')}</div>
    </section>`;
  }
     function renderPublications() {
    return `
    <section class="slide pw-slide" id="publications">
      ${heading('Publications & Writing', '06 / WRITING PORTFOLIO')}
      <p class="pw-intro">Research papers and articles I've written, from academic journals to stories built around data and public issues.</p>
      <div class="pw-cards">
        <article class="pw-card pw-card-science">
          <div class="pw-card-head">
            <div class="pw-card-icon" aria-hidden="true">${icon('book')}</div>
            <span class="pw-card-note">RESEARCH / JOURNALS</span>
          </div>
          <h3>Scientific Publications</h3>
          <p>Journal and conference papers, including manuscripts currently under review or in development.</p>
          <button type="button" class="pw-action" data-pw-open="science">Browse publications <span aria-hidden="true">↗</span></button>
        </article>
        <article class="pw-card pw-card-writing">
          <div class="pw-card-head">
            <div class="pw-card-icon" aria-hidden="true">${icon('newspaper')}</div>
            <span class="pw-color-dots" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
          </div>
          <h3>Data-Driven Writing</h3>
          <p>Published articles on social issues, public policy, and regional development.</p>
          <button type="button" class="pw-action" data-pw-open="articles">Browse articles <span aria-hidden="true">↗</span></button>
        </article>
      </div>
      <dialog id="pwScienceDialog" class="pw-dialog" aria-label="Scientific publications">
        <div class="pw-dialog-heading">
          <div class="pw-dialog-title">
            <div class="pw-dialog-icon" aria-hidden="true">${icon('book')}</div>
            <div><h3>Scientific Publications</h3><p>Research manuscripts and their current stage.</p></div>
          </div>
          <button type="button" class="pw-close" data-pw-close aria-label="Close scientific publications">×</button>
        </div>
        <div class="pw-tabbar" role="tablist" aria-label="Publication status">
          <button class="pw-tab" type="button" role="tab" data-pw-status="published" aria-selected="false">Published</button>
          <button class="pw-tab" type="button" role="tab" 
          data-pw-status="review" aria-selected="true">Submissions</button>
          <button class="pw-tab" type="button" role="tab" data-pw-status="progress" aria-selected="false">In Progress</button>
        </div>
        <div class="pw-science-body" id="pwScienceBody"></div>
      </dialog>
      <dialog id="pwArticleDialog" class="pw-dialog" aria-label="Browse published articles">
        <div class="pw-dialog-heading">
          <div class="pw-dialog-title">
            <div class="pw-dialog-icon" aria-hidden="true">${icon('newspaper')}</div>
            <div><h3>Browse articles</h3><p>Select a story to see the link preview without leaving the portfolio.</p></div>
          </div>
          <button type="button" class="pw-close" data-pw-close aria-label="Close articles">×</button>
        </div>
        <div class="pw-article-layout">
          <div class="pw-article-list">
            <div class="pw-side-eyebrow">PUBLISHED ARTICLES · FLORESA & BENUA</div>
            <div id="pwArticleOptions"></div>
            <p class="pw-side-note">Choose a title to update the article preview.</p>
          </div>
          <div class="pw-preview-area" id="pwPreviewArea">
            <article class="pw-browser">
              <div class="pw-browser-top"><span class="pw-window-dots"><i></i><i></i><i></i></span><span class="pw-browser-url" id="pwBrowserURL"></span></div>
              <div class="pw-browser-page">
                <div class="pw-media-title" id="pwMediaTitle"></div>
                <p class="pw-article-date" id="pwArticleDate"></p>
                <h4 id="pwArticleTitle"></h4>
                <p class="pw-dek" id="pwArticleDek"></p>
                <div class="pw-feature-image" id="pwFeatureBox">
                  <div class="pw-feature-lines" aria-hidden="true"></div>
                  <span class="pw-portrait-fallback" id="pwFallbackIcon" aria-hidden="true">F.</span>
                  <img id="pwFeatureImage" alt="Featured image from the article publisher" referrerpolicy="no-referrer" hidden>
                  <span class="pw-image-credit" id="pwImageLabel"></span>
                </div>
                <p class="pw-byline" id="pwByline"></p>
                <p class="pw-summary" id="pwSummary"></p>
              </div>
            </article>
            <div class="pw-article-footer"><span>Article preview · Read the full piece on the publisher's website.</span><a id="pwReadLink" class="pw-read-link" href="#" target="_blank" rel="noopener noreferrer">Read article ↗</a></div>
          </div>
        </div>
      </dialog>
    </section>`;
  }
function renderCertificates() {
    return `<section class="slide" id="certifications">${heading('Certificates & training', '11 / CONTINUOUS LEARNING')}
      <div class="cert-intro">Credentials and learning experiences that complement my research and applied data work.</div>
      <div class="cert-grid">${(data.certifications||[]).map((c,i)=>`<article class="glass-panel cert-card"><div class="cert-preview">${safeImg(c.image)?`<img class="media-image" src="${esc(c.image)}" alt="Certificate: ${esc(c.title)}">`:`<div class="cert-art"><span class="cert-icon">${i<2?'✳':'+'}</span><span>0${i+1}</span></div>`}</div><h3>${esc(c.title)}</h3><p>${esc(c.provider)}</p>${link(c.link,'View credential')}</article>`).join('')}</div>
    </section>`;
  }
  function renderContact() {
    const p=data.profile;
    return `<section class="slide contact-slide" id="contact"><div class="contact-grid"><div class="contact-left"><div class="section-label">08 / KEEP IN TOUCH</div><h2>Let's talk<br><em>data.</em></h2><p>Thanks for exploring my work. I'm always glad to connect over research, data analysis, and ideas worth investigating.</p><div class="contact-orbit" aria-hidden="true"><span></span><span></span><span></span></div></div><div class="contact-panel"><div class="contact-panel-top"><span>CONNECT WITH ME</span><span>↗</span></div>${contactRow('LinkedIn',p.name,p.linkedin)}${p.email?contactRow('Email',p.email,`mailto:${p.email}`):''}${p.github?contactRow('GitHub','Research code',p.github):''}${p.tableau?contactRow('Tableau','Tableau Public',p.tableau):''}
${p.cv?link(p.cv,'Download CV','contact-cta'):''}

<button
  type="button"
  class="contact-pdf-button"
  onclick="window.print()"
>
  ↓ Save as PDF
</button>

<div class="contact-sig">
${esc(p.name)}</div></div></div></section>`;
  }
  const renderers = { cover:renderCover, about:renderAbout, education:renderEducation, experience:renderExperience, focus:renderFocus, project:renderProject, lab:renderLab, publications:renderPublications, certifications:renderCertificates, contact:renderContact };
  $('slides').innerHTML = pages.map(p=>renderers[p.type](p.item)).join('');
  $('nav').innerHTML = pages.map((p,i)=>`<button type="button" class="nav-button" data-index="${i}" aria-controls="${p.id}" aria-current="false">${esc(p.label)}</button>`).join('');
  

// ============================================
// EDUCATION — PUBLICATIONS & DOCUMENTATION
// ============================================

$('slides').addEventListener('click', event => {

  // 1. Open Master's publications popup
  const publicationsButton = event.target.closest(
    '[data-open-edu-publications]'
  );

  if (publicationsButton) {
    const modal = $('eduPubModal');

    if (modal && !modal.open) {
      modal.showModal();
    }

    return;
  }

  // 2. Open documentation or certificate
  const photoButton = event.target.closest(
    '[data-edu-photo]'
  );

  if (photoButton) {
    const modal = $('eduPhotoDialog');

    $('eduPhotoType').textContent =
      photoButton.dataset.eduType === 'certificate'
        ? 'CONFERENCE CERTIFICATE'
        : 'DOCUMENTATION';

    $('eduPhotoTitle').textContent =
      photoButton.dataset.eduCaption || 'Preview';

    const img = document.createElement('img');

    img.src = photoButton.dataset.eduPhoto;
    img.alt = photoButton.dataset.eduCaption ||
      'Document preview';

    img.onerror = () => {
      $('eduPhotoContent').textContent =
        'Image unavailable: please check the filename in assets.';
    };

    $('eduPhotoContent').replaceChildren(img);

    if (modal && !modal.open) {
      modal.showModal();
    }
  }

});

function initTeaching() {
  const section = document.getElementById('experience-1');
  if (!section) return;

  const t = data.teaching || {};
  const photos = (t.photos || []).filter(p =>
    /^assets\/[\w.-]+\.(?:jpe?g|png|webp)$/i.test(p.src || '')
  );

  const slides = [...section.querySelectorAll('[data-teach-slide]')];
  const dots = [...section.querySelectorAll('[data-teach-dot]')];
  const byId = id => section.querySelector('#' + id);

  let current = 0;
  let timer = null;
  let playing = !window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const pad = n => String(n).padStart(2, '0');

  function showPhoto(n) {
    if (!photos.length) return;

    current = (n + photos.length) % photos.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle('is-current', i === current);
      slide.setAttribute('aria-hidden',
        i === current ? 'false' : 'true');
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-current', i === current);
      dot.setAttribute('aria-current',
        i === current ? 'true' : 'false');
    });

    byId('teachCount').textContent =
      `${pad(current + 1)} / ${pad(photos.length)}`;
  }

  function restart() {
    clearInterval(timer);
  
if (
  playing &&
  photos.length > 1 &&
  !document.hidden
) {

      timer = setInterval(() => {
        if (
          section.classList.contains('is-active') &&
          !byId('teachGalleryDialog').open
        ) {
          showPhoto(current + 1);
        }
      }, 5300);
    }
  }

  byId('teachPrev')?.addEventListener('click', () => {
    showPhoto(current - 1);
    restart();
  });

  byId('teachNext')?.addEventListener('click', () => {
    showPhoto(current + 1);
    restart();
  });

  dots.forEach(dot => dot.addEventListener('click', () => {
    showPhoto(Number(dot.dataset.teachDot));
    restart();
  }));

  const play = byId('teachPlay');

  function syncPlay() {
    if (play) {
      play.textContent = playing ? 'Ⅱ' : '▶';
      play.setAttribute('aria-label',
        playing ? 'Pause slideshow' : 'Resume slideshow');
    }
  }

  play?.addEventListener('click', () => {
    playing = !playing;
    syncPlay();
    restart();
  });

  syncPlay();

  // Photo lightbox
  const photoDialog = byId('teachGalleryDialog');

  function enlarge() {
    if (!photos.length) return;

    byId('teachPhotoTitle').textContent =
      photos[current].caption;

    byId('teachPhotoLarge').src = photos[current].src;
    byId('teachPhotoLarge').alt = photos[current].alt;

    clearInterval(timer);
    photoDialog.showModal();
  }

  byId('teachZoom')?.addEventListener('click', enlarge);

byId('teachViewport')?.addEventListener('click', () => {
  enlarge();
});


  photoDialog?.addEventListener('close', restart);

  // Course resource popups
  const courseDialog = byId('teachCourseDialog');
  const courses = t.courses || [];

  section.querySelectorAll('[data-teach-course]').forEach(button => {
    button.addEventListener('click', () => {
      const i = Number(button.dataset.teachCourse);
      const course = courses[i];
      if (!course) return;

      byId('teachCourseKicker').textContent =
        `${pad(i + 1)} / ${course.name.toUpperCase()}`;

      byId('teachCourseTitle').textContent =
        course.popupTitle || 'Resources';

      const intro = `
        <p class="teach-popup-intro">
          ${esc(course.popupIntro || '')}
        </p>
      `;

      const rows = (course.resources || []).map(r => `
        <div class="teach-resource-row">
          <div>
            <strong>${esc(r.title)}</strong>
            <p>${esc(r.detail)}</p>
          </div>

          ${validLink(r.url)
            ? link(r.url, 'Open link', 'teach-resource-link')
            : `<span class="teach-resource-status">
                 ${esc(r.status || 'In progress')}
               </span>`}
        </div>
      `).join('');

      byId('teachCourseContent').innerHTML = intro + rows;
      courseDialog.showModal();
    });
  });

  // Close popups when clicking outside
  [photoDialog, courseDialog].forEach(dialog => {
    dialog?.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    });
  });

  document.addEventListener('visibilitychange', restart);
  restart();
}

// Initialize Teaching after the slide HTML is rendered
initTeaching();

  // Publications & Writing: interactive previews, filtering, and Education link.
  function initPublications() {
    const section = $('publications');
    if (!section) return;
    const scientific = $('pwScienceDialog');
    const articleDialog = $('pwArticleDialog');
    const papers = data.scientificWorks || {};
    const articles = data.articles || [];
    let status = 'review';
    let currentPaper = 0;
    let currentArticle = 0;

    const safePublishedUrl = value =>
      typeof value === 'string' && /^https:\/\/[^\s]+$/i.test(value);

    function drawScience() {
      section.querySelectorAll('[data-pw-status]').forEach(tab => {
        const selected = tab.dataset.pwStatus === status;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      const target = $('pwScienceBody');
      if (status === 'published') {
        target.innerHTML = `
          <div class="pw-published-view">
            <div class="pw-published-symbol" aria-hidden="true">${icon('book')}</div>
            <div class="pw-published-copy">
              <span class="pw-data-label">ACADEMIC RECORD</span>
              <h4>Earlier academic publications</h4>
              <p>My published papers and conference proceedings are already linked in Education. You can open that collection directly.</p>
              <button class="pw-education-link" type="button" data-pw-education>See publications in Education ↗</button>
            </div>
            <div class="pw-published-pattern" aria-hidden="true"></div>
          </div>`;
        return;
      }
      const items = status === 'review' ? (papers.review || []) : (papers.progress || []);
      if (!items.length) {
        target.innerHTML = '<p class="pw-empty">No manuscripts listed for this stage yet.</p>';
        return;
      }
      currentPaper = Math.min(currentPaper, items.length - 1);
      const list = `<div class="pw-paper-list">
        
<div class="pw-side-eyebrow">${status === 'review' ? 'SUBMITTED MANUSCRIPT' : 'CURRENT MANUSCRIPTS'}</div>
        ${items.map((p,i)=>`<button type="button" class="pw-paper-option" data-pw-paper="${i}" aria-selected="${i===currentPaper}">
          <span class="pw-option-kicker">${esc(p.kind)}</span>
          <strong>${esc(p.short)}</strong>
          <span class="pw-option-meta">${esc(p.venue)}</span>
        </button>`).join('')}
        <p class="pw-side-note">Select a manuscript to read its focus and current stage.</p>
      </div>`;
      const p = items[currentPaper];
      const detail = `<div class="pw-paper-detail"><article class="pw-paper-sheet">
        <div class="pw-paper-sheet-top"><span class="pw-data-label">SCIENTIFIC MANUSCRIPT</span><span class="pw-sheet-symbol" aria-hidden="true">${icon('book')}</span></div>
        <h4>${esc(p.title)}</h4>
        <p class="pw-paper-venue">${esc(p.venue)}</p>
        <div class="pw-paper-rule"></div>
        <div class="pw-paper-fact"><span>RESEARCH FOCUS</span><p>${esc(p.description)}</p></div>
        <div class="pw-paper-fact"><span>CURRENT STAGE</span><p>${esc(p.stage)}</p></div>
        <p class="pw-paper-note">This manuscript is not publicly available. A reading link will be added after publication.</p>
      </article></div>`;
      target.innerHTML = list + detail;
    }

    function drawArticleList() {
      $('pwArticleOptions').innerHTML = articles.map((a,i)=>`
        <button type="button" class="pw-article-option" data-pw-article="${i}" aria-selected="${i===currentArticle}">
          <span class="pw-option-kicker">${esc(a.date)}</span>
          <strong>${esc(a.title)}</strong>
          <span class="pw-option-meta">${esc(a.publisher)} · ${esc(a.category)}</span>
        </button>`).join('');
    }
    function showArticle(index) {
      if (!articles.length) return;
      currentArticle = Math.max(0, Math.min(index, articles.length - 1));
      const a = articles[currentArticle];
      drawArticleList();
      $('pwBrowserURL').textContent = a.domain + ' / ' + a.category;
      $('pwMediaTitle').textContent = a.publisher;
      $('pwArticleDate').textContent = a.longDate.toUpperCase() + ' · ' + a.category.toUpperCase();
      $('pwArticleTitle').textContent = a.title;
      $('pwArticleDek').textContent = a.dek;
      $('pwByline').textContent = 'By Unique Desyrre A. Resiloy';
      $('pwSummary').textContent = a.summary;
      $('pwImageLabel').textContent = a.publisher + ' · Published article';
      $('pwFallbackIcon').textContent = a.publisher === 'Floresa' ? 'F.' : 'B.';
      const link = $('pwReadLink');
      if (safePublishedUrl(a.url)) {
        link.href = a.url;
        link.textContent = 'Read on ' + a.publisher + ' ↗';
        link.hidden = false;
      } else {
        link.hidden = true;
      }
      const img = $('pwFeatureImage');
      img.hidden = true;
      img.onload = () => { img.hidden = false; };
      img.onerror = () => { img.hidden = true; };
      if (/^(https:\/\/|assets\/)[^\s]+$/i.test(a.image || "")) {
  img.src = a.image;
} else {
  img.removeAttribute("src");
}
      $('pwPreviewArea').scrollTop = 0;
    }
    section.addEventListener('click', event => {
      const open = event.target.closest('[data-pw-open]');
      if (open) {
        if (open.dataset.pwOpen === 'science') {
          status = 'review'; currentPaper = 0; drawScience(); scientific.showModal();
        } else {
          currentArticle = 0; showArticle(0); articleDialog.showModal();
        }
        return;
      }
      const close = event.target.closest('[data-pw-close]');
      if (close) {
        const dialog = close.closest('dialog');
        if (dialog?.open) dialog.close();
        return;
      }
      const tab = event.target.closest('[data-pw-status]');
      if (tab) {
        status = tab.dataset.pwStatus;
        currentPaper = 0;
        drawScience();
        return;
      }
      const paper = event.target.closest('[data-pw-paper]');
      if (paper) {
        currentPaper = Number(paper.dataset.pwPaper);
        drawScience();
        return;
      }
      const a = event.target.closest('[data-pw-article]');
      if (a) {
        showArticle(Number(a.dataset.pwArticle));
        return;
      }
      if (event.target.closest('[data-pw-education]')) {
        scientific.close();
        goTo(2);
        $('eduPubModal')?.showModal();
      }
    });
    for (const dialog of [scientific, articleDialog]) {
      dialog.addEventListener('click', e => {
        if (e.target === dialog) dialog.close();
      });
    }
  }
  initPublications();


  let active = 0;
  function goTo(index, updateHash=true) {
    const next = Math.max(0, Math.min(index,pages.length-1));
    active = next;
    document.querySelectorAll('.slide').forEach((el,i)=>{
      const visible = i===active;
      el.classList.toggle('is-active', visible);
      el.hidden = !visible;
      el.setAttribute('aria-hidden', String(!visible));
    });
    const buttons = $('nav').querySelectorAll('.nav-button');
    buttons.forEach((b,i)=>{ b.classList.toggle('active',i===active); b.setAttribute('aria-current',i===active?'page':'false'); });
    buttons[active]?.scrollIntoView({inline:'nearest',block:'nearest',behavior:'smooth'});
    $('counter').innerHTML = `${String(active+1).padStart(2,'0')} <small>/ ${String(pages.length).padStart(2,'0')}</small>`;
    $('progressFill').style.width = `${100*(active+1)/pages.length}%`;
    $('prev').disabled = active===0;
    $('next').disabled = active===pages.length-1;
    $('topNext').disabled = active===pages.length-1;
    if (updateHash && location.hash !== '#'+pages[active].id) history.replaceState(null,'','#'+pages[active].id);
    document.querySelector('.slide-stage').scrollTo({top:0,behavior:'instant'});
    window.scrollTo({top:0,behavior:'instant'});
  }
  $('nav').addEventListener('click',e=>{const b=e.target.closest('button[data-index]');if(b) goTo(Number(b.dataset.index));});
  $('homeButton').addEventListener('click',()=>goTo(0));
  $('prev').addEventListener('click',()=>goTo(active-1));
  $('next').addEventListener('click',()=>goTo(active+1));
  $('topNext').addEventListener('click',()=>goTo(active+1));
  window.addEventListener('keydown',e=>{
    if (e.altKey||e.ctrlKey||e.metaKey||['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) return;
    if (['ArrowRight','PageDown'].includes(e.key)) {e.preventDefault();goTo(active+1);}
    if (['ArrowLeft','PageUp'].includes(e.key)) {e.preventDefault();goTo(active-1);}
    if(e.key==='Home') {e.preventDefault();goTo(0);}
    if(e.key==='End') {e.preventDefault();goTo(pages.length-1);}
  });
  window.addEventListener('hashchange',()=>{const i=pages.findIndex(p=>'#'+p.id===location.hash);if(i>=0)goTo(i,false);});
  const start=pages.findIndex(p=>'#'+p.id===location.hash);
  goTo(start>=0?start:0,false);
})();
