# IIT / NEET JUNIOR COLLEGE — PREVIEW & DEPLOYMENT GUIDE

A multi-page, responsive, static frontend website for a generic Indian Junior College offering Intermediate education (MPC and BiPC streams) with integrated IIT-JEE and NEET coaching.

Built in accordance with strict vanilla web standards without external frameworks or backend dependencies. Fully optimized for instant deployment on **Hostinger Static Web Hosting**, Cloudflare Pages, Netlify, or Apache/Nginx web servers.

---

## 1. Project Overview & Architecture

* **Technology Stack:**
  * **HTML5:** Semantic, accessible markup across 13 distinct pages with Open Graph meta tags and structured headings.
  * **CSS3:** Pure custom CSS (`assets/css/style.css`) utilizing modern CSS custom properties (variables), Flexbox, CSS Grid, and responsive media queries.
  * **Vanilla JavaScript:** ES6+ interactive script (`assets/js/script.js`) handling mobile drawer navigation, sticky header animations, FAQ accordions, stream filtering, an interactive test analytics dashboard, and client-side form validation.
* **External Dependencies:** **0 (Zero)** — No Bootstrap, no Tailwind CSS, no jQuery, no React, no external icon CDNs, and no external font trackers.
* **Branding Integrity:** Generic institutional identity (`IIT / NEET JUNIOR COLLEGE`, `INTERMEDIATE EDUCATION`). No fictional or real college names, founders, or accreditation claims.
* **Contact Information:** Strict dummy contact credentials:
  * **Phone:** `0000000000` / `0000000000`
  * **Email:** `demo@example.com`
  * **Address:** `Plot No. 000, Demo Road, Sample Area, Hyderabad, Telangana – 000000.`
  * **Working Hours:** `Monday–Saturday, 9:00 AM–5:00 PM.`

---

## 2. Directory Structure

```text
junior-college-website/
│
├── index.html                   # Home Page
├── about.html                   # About the Junior College
├── programs.html                # Academic Programs (MPC + JEE, BiPC + NEET, etc.)
├── iit-jee.html                 # Dedicated IIT-JEE Preparation Landing Page
├── neet.html                    # Dedicated NEET-UG Preparation Landing Page
├── academics.html               # Academic System & Timetable
├── faculty.html                 # Faculty Department Leads & Mentorship Ecosystem
├── test-series.html             # Testing Hierarchy & Interactive Analytics Dashboard
├── admissions.html              # Admissions Process, Eligibility & Counselling Form
├── hostel.html                  # Residential Hostel & Campus Facilities
├── campus-life.html             # Student Life, Olympiads & Science Exhibitions
├── results.html                 # Results Showcase Template (Demo Labeled)
├── contact.html                 # Campus Address, Dummy Contact & Enquiry Form
│
├── assets/
│   ├── css/
│   │   └── style.css            # Master stylesheet with custom design tokens
│   ├── js/
│   │   └── script.js            # Master vanilla JavaScript file
│   ├── images/                  # Directory for generated .webp image assets
│   └── icons/                   # Local SVG icon repository
│
├── IMAGE-GENERATION-GUIDE.md    # Exhaustive inventory & copy-ready Google Flow prompts
└── README.md                    # Project documentation & Hostinger deployment guide
```

---

## 3. Pages Summary (13 Individual Pages)

| Page | Filename | Key Sections & Features |
| :--- | :--- | :--- |
| **Home** | `index.html` | Hero with floating cards, dual MPC/BiPC cards, 6-feature grid, 6-step journey, performance preview, demo testimonials, admissions CTA. |
| **About** | `about.html` | Institutional vision, core mission, pedagogical philosophy, integrated vs divided schooling, student discipline, parent collaboration. |
| **Programs** | `programs.html` | Intermediate MPC + IIT-JEE, Intermediate BiPC + NEET, regular board streams, long-term intensive repeaters, stream filter buttons. |
| **IIT-JEE** | `iit-jee.html` | Blue & academic orange palette, Mathematics/Physics/Chemistry subject modules, 6-step JEE methodology, CBT mock structure, mentorship. |
| **NEET** | `neet.html` | Green & royal blue palette, NCERT line-by-line strategy, Biology modules (Botany & Zoology), practical lab showcases, OMR bubbling simulations. |
| **Academics** | `academics.html` | Intermediate 1st vs 2nd year progression, 6:00 AM to 8:00 PM daily study timetable, 6-day instructional cycle, digital classrooms, CBT labs. |
| **Faculty** | `faculty.html` | Generic department leads (Maths, Physics, Chem, Botany, Zoology, Academic Mentor), teaching approaches, mentorship triad. |
| **Test Series** | `test-series.html` | Testing hierarchy (DPP, weekly, chapter, full mock), **Interactive Performance Dashboard** (JEE vs NEET switch, SVG chart, score stats). |
| **Admissions** | `admissions.html` | 4-step admission journey, general Class 10 eligibility guidelines, documents checklist, **Counselling Enquiry Form**, FAQ accordion. |
| **Hostel** | `hostel.html` | Boys' and Girls' residential blocks, silent study carrels, hygienic dining hall, recreation spaces, resident 24-hour daily timetable. |
| **Campus Life** | `campus-life.html` | Science innovation fairs, Olympiad & KVPY problem circles, cultural festivals, sports & physical wellness, collaborative study groups. |
| **Results** | `results.html` | Formatted demonstration scorecards for JEE Main, JEE Advanced, NEET, and Board aggregates. Labeled prominently as illustrative demo data. |
| **Contact** | `contact.html` | Dummy telephone, email, address, working hours, **Validated Enquiry Form** with demo success modal, styled campus map container. |

---

## 4. Design System & Palette

```css
:root {
  --color-navy:        #14233B;  /* Deep Navy (Headers, footers, dark backgrounds) */
  --color-royal:       #2457A6;  /* Royal Blue (Primary institutional brand color) */
  --color-electric:    #3478D4;  /* Electric Blue (Interactive accents & hover states) */
  --color-orange:      #F29B38;  /* Academic Orange (IIT-JEE engineering wing accent) */
  --color-green:       #15966F;  /* Medical Green (NEET medical wing accent) */
  --color-white:       #FFFFFF;  /* Crisp white card backgrounds */
  --color-bg-light:    #F4F7FB;  /* Soft light background for high contrast */
  --color-bg-alt:      #EBF1F8;  /* Subtle section background alternate */
  --color-dark:        #202B3C;  /* High-contrast readable typography */
  --color-muted:       #596B82;  /* Subtitle and secondary paragraph text */
}
```

---

## 5. Local Development & Preview Instructions

Since this website is completely static, no Node.js, npm, PHP, or database server is required.

### Method A: Direct Browser Preview
Double-click `index.html` or drag it into any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Method B: Local Lightweight HTTP Server (Recommended)
To preview with accurate relative URL resolution:

* **Using Python 3:**
  ```bash
  cd "path/to/junior-college-website"
  python -m http.server 8000
  ```
  Open `http://localhost:8000` in your browser.

* **Using VS Code / IDE Live Server:**
  Right-click `index.html` and select **"Open with Live Server"**.

* **Using Antigravity / Node `npx serve`:**
  ```bash
  npx serve .
  ```

---

## 6. Hostinger Static Hosting Deployment Guide

This project is 100% compliant with **Hostinger Web Hosting**, **Hostinger Cloud Hosting**, and **Hostinger Static Hosting** environments.

### Step 1: Access Hostinger hPanel
1. Log in to your [Hostinger Account](https://hpanel.hostinger.com/).
2. Navigate to **Websites** and click **Manage** next to your domain.

### Step 2: Open File Manager
1. In the left sidebar, click **Files** &rarr; **File Manager**.
2. Select **Access files of [your-domain]**.
3. Open the `public_html` directory.

### Step 3: Upload Website Files
1. Ensure the `public_html` directory is empty (or remove the default `default.php` file).
2. Upload all files and folders directly inside `public_html`:
   * `index.html` (Must be directly in `public_html/index.html`)
   * All other 12 `.html` files
   * `assets/` folder (including `css/`, `js/`, `images/`, and `icons/`)
   * `IMAGE-GENERATION-GUIDE.md`
   * `README.md`
3. If uploading as a `.zip` archive:
   * Upload `junior-college-website.zip` to `public_html`.
   * Right-click the `.zip` file and choose **Extract**.
   * Make sure files are extracted into `public_html` directly, not nested inside another subfolder.

### Step 4: Verify Deployment
1. Visit `https://yourdomain.com` in your web browser.
2. Verify all navigation links, the mobile menu, dropdowns, and the interactive test performance dashboard.
3. Check SSL activation under **Security** &rarr; **SSL** in Hostinger hPanel.

---

## 7. Image Asset Generation Workflow

1. In compliance with strict user instructions, **no AI images were generated or downloaded during website coding**, and no broken external links are present.
2. Every image location is styled using clean CSS/SVG placeholder containers displaying exact filenames and dimensions.
3. Open `IMAGE-GENERATION-GUIDE.md` for the complete inventory of all 42 required images and their copy-ready prompts for **Google Flow** (or Imagen 3).
4. As you generate each image in Google Flow, export it in `.webp` format and save it to `assets/images/`.

---

## 8. Quality Assurance Checklist

- [x] All 13 individual HTML pages present and fully developed.
- [x] Responsive layout tested on desktop, tablet, and mobile screen sizes.
- [x] Sticky navigation bar with interactive mobile drawer and dropdown menu.
- [x] Visual distinction maintained (Academic Orange for IIT-JEE, Medical Green for NEET).
- [x] Interactive performance dashboard on `test-series.html` operational with stream toggle and SVG graphs.
- [x] Form validation operational with client-side error states and demo success modal.
- [x] All contact details set strictly to dummy placeholders (`0000000000`, `demo@example.com`).
- [x] Zero external library dependencies (pure HTML5, CSS3, and Vanilla JS).
- [x] Compatible with Hostinger static web hosting.
