/**
 * IIT / NEET JUNIOR COLLEGE — CORE JAVASCRIPT
 * Vanilla ES6+ without external libraries
 * Compatible with modern browsers and Hostinger static hosting
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initStickyHeader();
  initScrollTop();
  initAccordions();
  initForms();
  initTestDashboard();
  initProgramFilters();
  initActiveNavLink();
});

/* ==========================================================================
   NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Mobile dropdown handling
  dropdownItems.forEach((item) => {
    const trigger = item.querySelector('.nav-dropdown-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('open');
        }
      });
    }
  });
}

/* ==========================================================================
   STICKY HEADER
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   SCROLL TO TOP BUTTON
   ========================================================================== */
function initScrollTop() {
  const scrollBtn = document.querySelector('.scroll-top-btn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   ACTIVE NAVIGATION LINK
   ========================================================================== */
function initActiveNavLink() {
  const currentPath = (window.location.pathname.split('/').pop() || 'index.html').split('#')[0];
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-item a');

  navLinks.forEach((link) => {
    const rawHref = link.getAttribute('href') || '';
    const href = rawHref.split('#')[0];
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      const parentDropdownItem = link.closest('.dropdown-item');
      if (parentDropdownItem && href === currentPath && rawHref.indexOf('#') === -1) {
        link.style.fontWeight = '700';
        link.style.color = 'var(--color-royal)';
      }
      const parentItem = link.closest('.nav-item');
      if (parentItem) {
        parentItem.classList.add('active');
      }
    }
  });
}

/* ==========================================================================
   ACCORDIONS (FAQ)
   ========================================================================== */
function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((acc) => {
    const items = acc.querySelectorAll('.accordion-item');

    items.forEach((item) => {
      const trigger = item.querySelector('.accordion-trigger');
      const content = item.querySelector('.accordion-content');

      if (trigger && content) {
        trigger.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          // Close all items in this accordion
          items.forEach((other) => {
            other.classList.remove('active');
            const otherContent = other.querySelector('.accordion-content');
            if (otherContent) otherContent.style.maxHeight = null;
          });

          // Toggle current
          if (!isActive) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 30 + 'px';
          }
        });
      }
    });
  });
}

/* ==========================================================================
   DEMO FORM VALIDATION & SUCCESS MODAL
   ========================================================================== */
function initForms() {
  const forms = document.querySelectorAll('form[data-demo-form]');

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate inputs
      const requiredInputs = form.querySelectorAll('[required]');
      requiredInputs.forEach((input) => {
        const group = input.closest('.form-group');
        let fieldValid = true;

        if (!input.value.trim()) {
          fieldValid = false;
        } else if (input.type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) fieldValid = false;
        } else if (input.type === 'tel') {
          const phoneRegex = /^[0-9]{10}$/;
          if (!phoneRegex.test(input.value.replace(/\D/g, ''))) fieldValid = false;
        }

        if (!fieldValid) {
          isValid = false;
          if (group) group.classList.add('has-error');
        } else {
          if (group) group.classList.remove('has-error');
        }
      });

      if (isValid) {
        const studentName = form.querySelector('[name="student_name"]')?.value || 'Student / Parent';
        showDemoModal(studentName);
        form.reset();
      }
    });

    // Remove error on input change
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        const group = input.closest('.form-group');
        if (group) group.classList.remove('has-error');
      });
    });
  });

  // Modal close events
  const modalOverlay = document.getElementById('demoModal');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  if (modalOverlay) {
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
      });
    }
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
}

function showDemoModal(name) {
  let modalOverlay = document.getElementById('demoModal');
  if (!modalOverlay) {
    const modalHtml = `
      <div class="modal-overlay" id="demoModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal-box">
          <div class="modal-icon">
            <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          </div>
          <h3 class="modal-title" id="modalTitle">Enquiry Submitted!</h3>
          <p class="modal-text" id="modalMessage">Thank you! Your demo enquiry has been processed successfully. (Illustrative Demo Prototype — no real data transmitted).</p>
          <button type="button" class="btn btn-primary" id="closeModalBtn">Close Window</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    modalOverlay = document.getElementById('demoModal');
    const closeBtn = document.getElementById('closeModalBtn');
    closeBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  const msgElem = document.getElementById('modalMessage');
  if (msgElem) {
    msgElem.textContent = `Thank you, ${name}! Your demonstration admission enquiry has been simulated. In a live environment, our academic counsellor will reach out directly.`;
  }
  modalOverlay.classList.add('active');
}

/* ==========================================================================
   INTERACTIVE TEST PERFORMANCE DASHBOARD (test-series.html)
   ========================================================================== */
function initTestDashboard() {
  const dashboard = document.querySelector('.dashboard-container');
  if (!dashboard) return;

  const streamButtons = dashboard.querySelectorAll('[data-stream]');
  const statTotal = document.getElementById('dashTotalTests');
  const statAvg = document.getElementById('dashAvgScore');
  const statRank = document.getElementById('dashRankTrend');
  const statAccuracy = document.getElementById('dashAccuracy');
  const subjectList = document.getElementById('dashSubjectList');
  const testSelector = document.getElementById('dashTestSelect');
  const chartPath = document.getElementById('dashChartPath');
  const chartPoints = document.getElementById('dashChartPoints');

  // Illustrative Demo Data for IIT-JEE (MPC) and NEET (BiPC)
  const demoData = {
    jee: {
      totalTests: '38',
      avgScore: '246 / 300',
      rankTrend: 'Top 5% Band',
      accuracy: '88.4%',
      chartPoints: '50,130 180,95 310,110 440,75 570,55 700,40',
      subjects: [
        { name: 'Mathematics', score: '82%', class: 'fill-blue', subtopics: 'Calculus, Vectors & Coordinate Geometry' },
        { name: 'Physics', score: '78%', class: 'fill-orange', subtopics: 'Mechanics, Electromagnetism & Optics' },
        { name: 'Chemistry', score: '86%', class: 'fill-green', subtopics: 'Organic Reaction Mechanisms & Coordination Compounds' }
      ],
      tests: [
        { id: '1', title: 'Grand Mock Test — JEE Advanced Pattern 04', score: '252 / 300', percentile: '98.8%' },
        { id: '2', title: 'Chapter Assessment — Calculus & Electromagnetic Induction', score: '172 / 200', percentile: '97.2%' },
        { id: '3', title: 'Weekly Cumulative Assessment 12', score: '238 / 300', percentile: '96.5%' }
      ]
    },
    neet: {
      totalTests: '44',
      avgScore: '648 / 720',
      rankTrend: 'Top 4% Band',
      accuracy: '91.2%',
      chartPoints: '50,140 180,110 310,85 440,70 570,48 700,32',
      subjects: [
        { name: 'Botany', score: '92%', class: 'fill-green', subtopics: 'Plant Physiology, Genetics & Ecology' },
        { name: 'Zoology', score: '90%', class: 'fill-green', subtopics: 'Human Physiology, Biotechnology & Evolution' },
        { name: 'Physics', score: '81%', class: 'fill-orange', subtopics: 'Thermodynamics, Mechanics & Modern Physics' },
        { name: 'Chemistry', score: '87%', class: 'fill-blue', subtopics: 'Equilibrium, Organic Chemistry & P-Block' }
      ],
      tests: [
        { id: '1', title: 'Grand Mock Test — NEET-UG Full Syllabus 05', score: '658 / 720', percentile: '99.1%' },
        { id: '2', title: 'Biology Intensive Rapid Assessment', score: '344 / 360', percentile: '98.6%' },
        { id: '3', title: 'Weekly Cumulative Assessment 14', score: '632 / 720', percentile: '97.4%' }
      ]
    }
  };

  let currentStream = 'jee';

  function renderDashboard(streamKey) {
    const data = demoData[streamKey];
    if (!data) return;

    if (statTotal) statTotal.textContent = data.totalTests;
    if (statAvg) statAvg.textContent = data.avgScore;
    if (statRank) statRank.textContent = data.rankTrend;
    if (statAccuracy) statAccuracy.textContent = data.accuracy;

    // Render subjects
    if (subjectList) {
      subjectList.innerHTML = data.subjects.map(sub => `
        <div class="perf-bar-group">
          <div class="perf-bar-header">
            <span>${sub.name} <small style="font-weight: normal; color: #5D6C84;">(${sub.subtopics})</small></span>
            <span>${sub.score}</span>
          </div>
          <div class="perf-progress">
            <div class="perf-progress-fill ${sub.class}" style="width: ${sub.score};"></div>
          </div>
        </div>
      `).join('');
    }

    // Render SVG chart curve
    if (chartPath) {
      chartPath.setAttribute('points', data.chartPoints);
    }

    // Render test select options
    if (testSelector) {
      testSelector.innerHTML = data.tests.map(t => `
        <option value="${t.id}">${t.title} [Score: ${t.score}]</option>
      `).join('');
    }
  }

  streamButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      streamButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStream = btn.getAttribute('data-stream');
      renderDashboard(currentStream);
    });
  });

  // Initial render
  renderDashboard('jee');
}

/* ==========================================================================
   PROGRAMS FILTER (programs.html)
   ========================================================================== */
function initProgramFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const programCards = document.querySelectorAll('[data-program-category]');

  if (filterButtons.length === 0 || programCards.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-filter');

      programCards.forEach(card => {
        const cat = card.getAttribute('data-program-category');
        if (target === 'all' || cat === target) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
