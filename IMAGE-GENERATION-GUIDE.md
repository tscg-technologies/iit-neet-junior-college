# GOOGLE FLOW IMAGE GENERATION GUIDE
## IIT-JEE / NEET Junior College Website Image Inventory & Prompt Specifications

> **Notice:** This document contains the exhaustive inventory of all image placeholders implemented across the 13 website pages, paired with exact copy-ready prompts formatted for generation in **Google Flow** (or Imagen 3 / Midjourney v6).
> 
> **Important Generation Rule:** All images must reflect a modern, premium Indian junior college academic environment with natural lighting, editorial photography style, and **strictly NO visible institutional logos, text, badges, or watermarks**.

---

## 1. Summary Statistics

| Metric | Count | Details |
| :--- | :--- | :--- |
| **Total Unique Images** | **42 Unique Assets** | 44 placeholder positions across 13 pages |
| **Landscape Wide (16:9)** | **21 Assets** | Classrooms, laboratories, halls, testing centers |
| **Landscape Standard (4:3)** | **14 Assets** | Hero, departmental groups, campus architecture |
| **Square (1:1)** | **6 Assets** | Faculty & academic mentor profiles |
| **Panoramic (21:9)** | **1 Asset** | Results & achievement header banner |
| **Target Image Format** | **WebP** | `.webp` format for Hostinger static performance |
| **Target Storage Directory** | `assets/images/` | Directly drop generated webp files into this folder |

---

## 2. Recommended Generation Order

1. **Phase 1: Institutional Core & Heros** (Images 01 to 05) — Establish the architectural tone, clean lighting, and campus ambiance.
2. **Phase 2: Laboratories & Science Workspaces** (Images 06 to 12) — Physics, Chemistry, and Biology laboratories with genuine equipment.
3. **Phase 3: Academic Classrooms & Study Halls** (Images 13 to 19) — Lecture halls, silent study carrels, and digital learning environments.
4. **Phase 4: Faculty & Mentorship Profiles** (Images 20 to 27) — Warm, professional Indian academic educators in 1:1 portrait crops.
5. **Phase 5: Student Campus Life & Residential Facilities** (Images 28 to 38) — Hostels, dining halls, sports, and collaborative peer learning.
6. **Phase 6: Testing Centers, Admissions & Administration** (Images 39 to 42) — CBT examination rooms and counselling desks.

---

## 3. How to Replace Placeholders with Generated Images

Once you generate the images in Google Flow:
1. Export or convert them to `.webp` format using the exact filenames listed below.
2. Save them into the `junior-college-website/assets/images/` directory.
3. In any HTML page, the placeholder:
   ```html
   <div class="img-placeholder ratio-4-3" data-image="hero-junior-college.webp">
     ...
   </div>
   ```
   can be activated with an `<img>` tag or CSS background:
   ```html
   <img src="assets/images/hero-junior-college.webp" alt="Academic Campus & Learning Environment" class="ratio-4-3" style="width: 100%; border-radius: var(--radius-md); object-fit: cover;">
   ```
   *(Or keep both for fallback using standard progressive enhancement).*

---

## 4. Complete Image Inventory Table

| No. | Filename | Primary HTML Page | Section Name | Aspect Ratio | Dimensions | Orientation |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | `hero-junior-college.webp` | `index.html` | Hero Section | 4:3 | 1600 × 1200 px | Landscape |
| 02 | `classroom-learning.webp` | `index.html` | Learning Environment | 16:9 | 1600 × 900 px | Landscape |
| 03 | `physics-laboratory.webp` | `index.html` | Learning Environment | 16:9 | 1600 × 900 px | Landscape |
| 04 | `chemistry-laboratory.webp` | `index.html` | Learning Environment | 16:9 | 1600 × 900 px | Landscape |
| 05 | `biology-laboratory.webp` | `index.html`, `neet.html` | Learning Environment | 16:9 / 4:3 | 1600 × 900 px | Landscape |
| 06 | `library.webp` | `index.html` | Learning Environment | 16:9 | 1600 × 900 px | Landscape |
| 07 | `study-hall.webp` | `index.html`, `hostel.html` | Learning Environment / Hostel | 16:9 | 1600 × 900 px | Landscape |
| 08 | `about-college.webp` | `about.html` | Institutional Introduction | 4:3 | 1600 × 1200 px | Landscape |
| 09 | `academic-discipline.webp` | `about.html` | Academic Discipline | 4:3 | 1600 × 1200 px | Landscape |
| 10 | `engineering-students.webp` | `programs.html` | Intermediate MPC + IIT-JEE | 4:3 | 1600 × 1200 px | Landscape |
| 11 | `medical-students.webp` | `programs.html` | Intermediate BiPC + NEET | 4:3 | 1600 × 1200 px | Landscape |
| 12 | `iit-jee-classroom.webp` | `iit-jee.html` | About IIT-JEE Preparation | 4:3 | 1600 × 1200 px | Landscape |
| 13 | `mathematics-class.webp` | `iit-jee.html` | Subject Learning (Alternative) | 16:9 | 1600 × 900 px | Landscape |
| 14 | `physics-class.webp` | `iit-jee.html` | Subject Learning (Alternative) | 16:9 | 1600 × 900 px | Landscape |
| 15 | `chemistry-class.webp` | `iit-jee.html` | Subject Learning (Alternative) | 16:9 | 1600 × 900 px | Landscape |
| 16 | `neet-classroom.webp` | `neet.html` | About NEET-UG Preparation | 4:3 | 1600 × 1200 px | Landscape |
| 17 | `microscope-learning.webp` | `neet.html` | Biology Practical Learning | 4:3 | 1200 × 900 px | Landscape |
| 18 | `specimen-study.webp` | `neet.html` | Biology Practical Learning | 4:3 | 1200 × 900 px | Landscape |
| 19 | `biology-class.webp` | `neet.html` | Diagram-Based Learning | 4:3 | 1200 × 900 px | Landscape |
| 20 | `doubt-clearing-session.webp` | `academics.html` | Revision & Doubt Clinic | 4:3 | 1600 × 1200 px | Landscape |
| 21 | `digital-classrooms.webp` | `academics.html` | Academic Infrastructure | 16:9 | 1600 × 900 px | Landscape |
| 22 | `computer-laboratory.webp` | `academics.html` | CBT Testing Center | 16:9 | 1600 × 900 px | Landscape |
| 23 | `faculty-teaching.webp` | `faculty.html` | Faculty Philosophy | 4:3 | 1600 × 1200 px | Landscape |
| 24 | `faculty-math-01.webp` | `faculty.html` | Faculty Profile | 1:1 | 1000 × 1000 px | Square |
| 25 | `faculty-physics-01.webp` | `faculty.html` | Faculty Profile | 1:1 | 1000 × 1000 px | Square |
| 26 | `faculty-chem-01.webp` | `faculty.html` | Faculty Profile | 1:1 | 1000 × 1000 px | Square |
| 27 | `faculty-botany-01.webp` | `faculty.html` | Faculty Profile | 1:1 | 1000 × 1000 px | Square |
| 28 | `faculty-zoology-01.webp` | `faculty.html` | Faculty Profile | 1:1 | 1000 × 1000 px | Square |
| 29 | `faculty-mentor-01.webp` | `faculty.html` | Faculty Profile | 1:1 | 1000 × 1000 px | Square |
| 30 | `student-mentoring.webp` | `faculty.html` | Mentorship Process | 4:3 | 1600 × 1200 px | Landscape |
| 31 | `test-preparation.webp` | `test-series.html` | Proctored Practice | 16:9 | 1600 × 900 px | Landscape |
| 32 | `examination-hall.webp` | `test-series.html` | Standardized Exam Hall | 16:9 | 1600 × 900 px | Landscape |
| 33 | `counselling-session.webp` | `admissions.html` | In-Person Stream Guidance | 16:9 | 1600 × 900 px | Landscape |
| 34 | `admissions-desk.webp` | `admissions.html` | Verification Cell | 16:9 | 1600 × 900 px | Landscape |
| 35 | `hostel-building.webp` | `hostel.html` | Residential Overview | 4:3 | 1600 × 1200 px | Landscape |
| 36 | `hostel-room.webp` | `hostel.html` | Boys' Residential Wing | 16:9 | 1600 × 900 px | Landscape |
| 37 | `girls-hostel.webp` | `hostel.html` | Girls' Residential Wing | 16:9 | 1600 × 900 px | Landscape |
| 38 | `dining-hall.webp` | `hostel.html` | Hygienic Dining Facilities | 16:9 | 1600 × 900 px | Landscape |
| 39 | `recreation-area.webp` | `hostel.html` | Recreation & Fitness | 16:9 | 1600 × 900 px | Landscape |
| 40 | `campus-life.webp` | `campus-life.html` | Campus Overview | 4:3 | 1600 × 1200 px | Landscape |
| 41 | `student-activities.webp` | `campus-life.html` | Peer Collaborative Study | 4:3 | 1200 × 900 px | Landscape |
| 42 | `science-exhibition.webp` | `campus-life.html` | Science Innovation Fair | 4:3 | 1200 × 900 px | Landscape |
| 43 | `academic-event.webp` | `campus-life.html` | Milestone Ceremony | 4:3 | 1200 × 900 px | Landscape |
| 44 | `results-section.webp` | `results.html` | Honors & Achievement Banner | 21:9 | 1920 × 820 px | Ultra-Wide |
| 45 | `contact-campus.webp` | `contact.html` | Campus Orientation | 16:9 | 1600 × 900 px | Landscape |

---

## 5. Individual Copy-Ready Google Flow Prompts

### Image 01: `hero-junior-college.webp`
* **Page:** `index.html` (Hero Section)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Editorial architectural photograph of a modern, premium Indian junior college campus building exterior during a clear morning golden hour. Sleek contemporary glass and terracotta brick facade, manicured lawns with native Indian trees, spacious open-air walkways, a few Indian intermediate students (aged 16-17) carrying academic notebooks walking towards the entrance in casual neat uniforms without logos. Symmetrical eye-level wide shot, soft diffused morning sunlight casting warm golden highlights, crisp architectural lines, professional Hasselblad medium format photography, clean composition, absolutely no institution names, no signs, no logos, no watermarks, cinematic realistic grade --ar 4:3
```

---

### Image 02: `classroom-learning.webp`
* **Page:** `index.html` (Learning Environment)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Professional interior documentary photograph of an Indian junior college lecture hall in full session. Diverse group of focused Indian intermediate students (aged 16-18) seated at modern ergonomic tiered wooden desks, taking notes attentively in spiral notebooks. In the background, a passionate senior Indian professor in formal attire stands by a large dual blackboard filled with physics derivations and clean vector diagrams. Warm ambient indoor daylight from large side windows mixed with soft neutral LED ceiling lights. Three-quarter side angle showing depth of classroom, high detail, shallow depth of field on attentive students in foreground, 50mm lens, authentic educational atmosphere, no visible brand logos, no text overlays, no watermarks --ar 16:9
```

---

### Image 03: `physics-laboratory.webp`
* **Page:** `index.html` (Learning Environment)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Crisp commercial photograph of a well-equipped Indian junior college physics laboratory. Long polished black granite workstations with high-precision optical benches, glass prisms, spectrometer apparatus, galvano-meters, and circuit boards neatly arranged. Two Indian students in clean white lab coats attentively adjusting an optical lens apparatus, guided by an Indian physics lab instructor. Clean, bright, airy scientific environment, natural morning window light illuminating glassware and brass fittings, medium close-up shot, 85mm f/2.8 lens, crystal-clear focus on scientific instruments, completely unbranded, realistic editorial grade, no logos, no watermarks --ar 16:9
```

---

### Image 04: `chemistry-laboratory.webp`
* **Page:** `index.html` (Learning Environment)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Modern educational photography of a secondary junior college chemistry laboratory in India. Spotless workstation tables with reagent bottles, burettes mounted on titration stands, conical flasks with colored aqueous solutions, and pipettes. An Indian student carefully observing the meniscus of a titration flask under natural daylight. Background displays safety shower and glass cupboards filled with scientific glassware. Soft ambient lighting, clean reflections on glassware, balanced composition with subtle negative space on the upper third, professional Canon EOS R5 capture, authentic and focused academic mood, no watermarks, no logos, no text --ar 16:9
```

---

### Image 05: `biology-laboratory.webp`
* **Page:** `index.html` & `neet.html` (Learning Environment & Biology Practicals)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Detailed editorial photograph of a high-school biological sciences laboratory for NEET preparation in an Indian junior college. Rows of precision binocular compound microscopes on white laboratory counters, biological specimen glass jars containing botanical and zoological specimens neatly labeled with generic scientific notation, dissection trays, and an anatomical chart on the wall. Soft directional window light highlighting polished chrome microscope knobs and glass slides. Clean, sterile, inviting academic setting, eye-level wide angle shot, 35mm lens, authentic science education documentary aesthetic, no visible school names or brand insignias --ar 16:9
```

---

### Image 06: `library.webp`
* **Page:** `index.html` (Learning Environment)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Serene and expansive modern junior college academic reference library interior. High floor-to-ceiling wooden bookshelves lined with science textbooks, reference volumes, and journals. Warm wooden communal study tables with sleek brass reading lamps. Several Indian students studying quietly with open textbooks, focused on notes. Large floor-to-ceiling windows showing lush green foliage outside, soft diffuse afternoon daylight creating a tranquil, studious mood. Symmetrical wide perspective, architectural editorial photography, quiet atmosphere of deep concentration, no logos, no text --ar 16:9
```

---

### Image 07: `study-hall.webp`
* **Page:** `index.html` & `hostel.html` (Learning Environment & Residential Facilities)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
High-end interior photography of an Indian residential junior college silent self-study hall. Neat rows of individual wooden study cubicles with built-in soft LED task lights and book stands. Diligent Indian intermediate students in study cubicles deeply immersed in solving competitive exam practice sheets. Clean architectural perspective with a central aisle, warm ambient lighting, peaceful, disciplined, distraction-free learning sanctuary, shot with Sony A7R IV, 35mm f/4, crisp details throughout the frame, no logos, no watermarks --ar 16:9
```

---

### Image 08: `about-college.webp`
* **Page:** `about.html` (Institutional Introduction)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Stately architectural photograph of a premier Indian educational institution campus courtyard. Modern academic buildings featuring brick lattice work (jaali), wide covered verandas, landscaped lawns, and shaded stone sitting benches under neem and banyan trees. A few Indian junior college students walking in small groups with folders. Early morning sunlight filtering through tree leaves creating dappled shadows on stone pathways. Low angle looking up slightly towards the modern educational facade, prestigious and welcoming academic institution ambiance, editorial architectural style, strictly no signs or institutional names --ar 4:3
```

---

### Image 09: `academic-discipline.webp`
* **Page:** `about.html` (Academic Discipline)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Candid professional documentary photograph demonstrating academic discipline in an Indian junior college. An orderly classroom where focused teenage students sit in uniform posture, reviewing formula handbooks under the gentle supervision of an Indian academic proctor walking down the aisle. Natural soft window lighting, clean lines, calm structured environment, medium shot capturing the intense focus on textbooks and stationery, muted natural color tones, authentic educational photography, no staged expressions, no logos, no watermarks --ar 4:3
```

---

### Image 10: `engineering-students.webp`
* **Page:** `programs.html` (Intermediate MPC + IIT-JEE)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Engaging group portrait of four diverse Indian intermediate engineering stream students (boys and girls, aged 16-17) collaborating around a modern study table. Open calculus and mechanics textbooks, graph paper, scientific calculators, and handwritten problem sheets on the table. They are discussing a physics problem with engaged, confident, and natural expressions. Bright modern college lounge background with soft natural lighting, shallow depth of field, warm royal blue and orange subtle accents in decor, professional corporate editorial portraiture, authentic and uplifting, no visible institution logos, no watermarks --ar 4:3
```

---

### Image 11: `medical-students.webp`
* **Page:** `programs.html` (Intermediate BiPC + NEET)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Inspiring photograph of three Indian intermediate medical stream students (girls and boys, aged 16-18) in clean white lab coats gathered around a biological microscope and a detailed human anatomy torso model on a science lab bench. One student is taking notes in a biology sketchbook while another examines a slide. Bright, clean, scientific lighting, soft emerald green accents in the background, confident, intellectual and caring expressions, medium shot, 50mm lens, authentic medical junior college education mood, no logos, no text --ar 4:3
```

---

### Image 12: `iit-jee-classroom.webp`
* **Page:** `iit-jee.html` (About IIT-JEE Preparation)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Dynamic wide photograph of an intensive IIT-JEE preparation classroom in India. A large blackboard covered with complex coordinate geometry graphs, differential equations, and vectors. An experienced Indian mathematics professor in formal shirt and trousers gesturing towards the board, engaging a classroom of ambitious Indian students who are actively raising hands or noting steps. High ceiling, modern acoustic ceiling baffles, bright balanced lighting, vibrant academic atmosphere of intellectual rigour, high resolution documentary photography, no brand marks, no watermarks --ar 4:3
```

---

### Image 13: `mathematics-class.webp`
* **Page:** `iit-jee.html` (Subject Learning)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Close-up editorial photograph of an Indian student's hands diligently solving calculus and trigonometry equations in a neat notebook with a fountain pen, with a geometrical compass and ruler nearby. In the soft-focus background, a blackboard features neat parabola and ellipse sketches. Warm natural side lighting, beautiful paper texture, crisp focus on mathematical derivations, serene study atmosphere, 85mm macro lens, artistic educational still life, no logos, no watermarks --ar 16:9
```

---

### Image 14: `physics-class.webp`
* **Page:** `iit-jee.html` (Subject Learning)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Action shot inside an Indian junior college physics demonstration room. A senior Indian teacher demonstrating rotational inertia using a bicycle wheel gyroscope and pendulum apparatus in front of eager teenage students. Students watching with expressions of wonder and comprehension. Dramatic directional lighting highlighting the spinning apparatus, clean classroom background with physics charts, cinematic editorial quality, 35mm lens, authentic science education moment, no logos, no text overlays --ar 16:9
```

---

### Image 15: `chemistry-class.webp`
* **Page:** `iit-jee.html` (Subject Learning)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Atmospheric photograph of an Indian chemistry classroom. Whiteboard filled with organic reaction mechanisms showing curved arrows, benzene rings, and resonance hybrid structures drawn in blue and red markers. In front of the board, molecular model kits with colored plastic spheres (carbon, hydrogen, oxygen) are arranged on the teacher's podium. Soft ambient room light, sharp focus on the molecular models, shallow depth of field, professional educational still life, no branding, no watermarks --ar 16:9
```

---

### Image 16: `neet-classroom.webp`
* **Page:** `neet.html` (About NEET-UG Preparation)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Inspiring wide shot of a specialized NEET-UG coaching lecture hall in an Indian junior college. A senior female Indian biology professor pointing to a digital smart display illustrating the human circulatory system and cardiac cycle with high-resolution 3D anatomical graphics. Rows of attentive Indian students with open NCERT biology textbooks taking detailed marginal notes. Clean, bright, modern lecture hall with green ergonomic chairs, soft white balanced LED lighting, professional educational photography, no commercial logos, no watermarks --ar 4:3
```

---

### Image 17: `microscope-learning.webp`
* **Page:** `neet.html` (Biology Practical Learning)
* **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Intimate close-up photograph of an Indian girl student in a clean lab coat looking intently through the dual eyepieces of a modern binocular microscope in a biology lab. Her hand is delicately adjusting the fine focus knob. Soft natural light streaming from a nearby window highlighting her focused, determined facial expression. Crisp focus on her eyes and the microscope dials, beautifully blurred lab background with specimen bottles, 85mm f/2.0 portrait lens, professional editorial documentary style, no logos, no text --ar 4:3
```

---

### Image 18: `specimen-study.webp`
* **Page:** `neet.html` (Biology Practical Learning)
* **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Detailed macro photograph of biological specimens on a laboratory table: cylindrical transparent glass jars containing preserved plant specimens (pteridophytes, gymnosperms) and botanical slides arranged neatly beside a dissection kit. An open biology practical manual with hand-drawn botanical taxonomy diagrams lies adjacent. Clean laboratory background, neutral scientific lighting, sharp focus on the glass clarity and plant morphology, authentic scientific still life, no logos, no watermarks --ar 4:3
```

---

### Image 19: `biology-class.webp`
* **Page:** `neet.html` (Diagram-Based Learning)
* **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Over-the-shoulder shot of an Indian student neatly drawing and labeling a cross-section of a dicot stem and flower anatomy in a biology practical record book with colored pencils. The student’s hand holds a fine-liner pen, with ruler and eraser neatly placed on the wooden desk. Warm, gentle overhead desk lamp lighting, sharp focus on the meticulous hand-drawn biological diagrams, high craftsmanship, calm academic mood, no brand marks, no watermarks --ar 4:3
```

---

### Image 20: `doubt-clearing-session.webp`
* **Page:** `academics.html` (Revision & Doubt Clinic)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Candid, empathetic photograph of an individual academic doubt-clearing session in an Indian junior college. A knowledgeable Indian male professor in his 40s leaning forward at a consultation desk, patiently explaining a physics numerical problem to a thoughtful Indian student using a notepad. The student is nodding in comprehension, holding a pencil. Warm, approachable academic consultation atmosphere, soft indoor ambient light, shallow depth of field, authentic educator-student connection, professional editorial portraiture, no logos, no watermarks --ar 4:3
```

---

### Image 21: `digital-classrooms.webp`
* **Page:** `academics.html` (Academic Infrastructure)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Spacious, state-of-the-art smart classroom in a modern Indian educational institution. Featuring an ultra-wide interactive digital touchscreen display mounted on the front wall projecting 3D molecular structures, surrounded by clean whiteboards. Tiered student seating with ergonomic blue and grey desks, ceiling-mounted projectors, and large soundproof windows looking out onto campus trees. Crisp architectural interior photography, perfectly level perspective, bright modern ambient lighting, empty room ready for lecture, no logos, no text --ar 16:9
```

---

### Image 22: `computer-laboratory.webp`
* **Page:** `academics.html` (CBT Testing Center)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
High-tech computer-based test (CBT) laboratory designed for JEE Main mock examinations in an Indian junior college. Neatly organized rows of modern desktop computer terminals with privacy dividers between workstations, ergonomic mesh chairs, clean cable management, and cool white LED ceiling lighting. Several Indian students seated taking a simulated online test with focused posture. Wide-angle symmetrical perspective, clean modern IT infrastructure, professional commercial interior photography, no brand logos, no watermarks --ar 16:9
```

---

### Image 23: `faculty-teaching.webp`
* **Page:** `faculty.html` (Faculty Philosophy)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Inspiring mid-shot of a passionate senior Indian educator standing at a lecture podium in a bright college classroom, explaining a concept with expressive open hand gestures. Wearing a neat pressed formal shirt, approachable and dignified demeanour, authentic warm smile. The background shows a soft-focus whiteboard with mathematics formulas and students listening attentively. Natural daylight illuminating the teacher, 85mm portrait lens, professional institutional photography, dignified and trustworthy educational atmosphere, no logos, no watermarks --ar 4:3
```

---

### Images 24 to 29: Faculty Profiles (Square 1:1)

#### Image 24: `faculty-math-01.webp`
* **Page:** `faculty.html` (Mathematics Faculty 01)
* **Aspect Ratio:** 1:1 | **Resolution:** 1000 × 1000 px | **Orientation:** Square
* **Copy-Ready Prompt:**
```
Professional corporate headshot portrait of an Indian male mathematics professor in his early 40s. Wearing a tailored formal light blue shirt with neat collar, wearing subtle rimless spectacles, looking directly at camera with an intelligent, warm, confident expression. Neutral soft-focus academic background with hints of books on a shelf, soft studio lighting with gentle hair highlight, professional editorial portrait, Hasselblad medium format quality, no logos, no text, square composition --ar 1:1
```

#### Image 25: `faculty-physics-01.webp`
* **Page:** `faculty.html` (Physics Faculty 01)
* **Aspect Ratio:** 1:1 | **Resolution:** 1000 × 1000 px | **Orientation:** Square
* **Copy-Ready Prompt:**
```
Professional headshot portrait of an Indian male physics professor in his mid-40s. Thoughtful, engaging, approachable expression, neatly groomed hair and trim beard, wearing a formal grey linen shirt. Soft, blurred background of a modern science laboratory with metallic apparatus hints, flattering diffused three-point studio lighting, high resolution, authentic academic professional, square framing --ar 1:1
```

#### Image 26: `faculty-chem-01.webp`
* **Page:** `faculty.html` (Chemistry Faculty 01)
* **Aspect Ratio:** 1:1 | **Resolution:** 1000 × 1000 px | **Orientation:** Square
* **Copy-Ready Prompt:**
```
Professional studio portrait of an Indian female chemistry professor in her late 30s. Dressed in elegant formal Indian academic attire (cotton saree or formal kurta), confident and kind smile, dignified posture. Background is a soft warm neutral grey with subtle blur of chemistry glassware. Crisp focus on eyes, natural skin texture, professional magazine editorial portrait quality, no logos, no watermarks, square framing --ar 1:1
```

#### Image 27: `faculty-botany-01.webp`
* **Page:** `faculty.html` (Botany Faculty 01)
* **Aspect Ratio:** 1:1 | **Resolution:** 1000 × 1000 px | **Orientation:** Square
* **Copy-Ready Prompt:**
```
Professional headshot portrait of an Indian female botany professor in her early 40s. Gentle, knowledgeable, encouraging expression, wearing a tasteful formal block-printed cotton saree. Background has soft green botanical plant foliage in creamy bokeh, beautiful natural window lighting, clean sharp focus, dignified and welcoming academic mentor, no logos, no text, square framing --ar 1:1
```

#### Image 28: `faculty-zoology-01.webp`
* **Page:** `faculty.html` (Zoology Faculty 01)
* **Aspect Ratio:** 1:1 | **Resolution:** 1000 × 1000 px | **Orientation:** Square
* **Copy-Ready Prompt:**
```
Professional headshot portrait of an Indian male zoology professor in his mid-40s. Wearing a navy blue formal shirt and light lab coat, confident, charismatic, warm smile. Soft-focus background suggesting a life sciences laboratory, crisp studio lighting, natural skin tones, professional academic editorial photography, square framing --ar 1:1
```

#### Image 29: `faculty-mentor-01.webp`
* **Page:** `faculty.html` (Academic Mentor 01)
* **Aspect Ratio:** 1:1 | **Resolution:** 1000 × 1000 px | **Orientation:** Square
* **Copy-Ready Prompt:**
```
Professional headshot portrait of an Indian student counselor and academic mentor in his late 30s. Friendly, empathetic, trustworthy expression, wearing a smart casual blazer over a crisp shirt. Soft blurred campus lounge background, warm natural lighting, relatable and reassuring presence, high definition portraiture, square framing --ar 1:1
```

---

### Image 30: `student-mentoring.webp`
* **Page:** `faculty.html` (Mentorship Process)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Candid, positive photograph of an academic mentor and a student in a comfortable counseling room. The Indian mentor is reviewing a color-coded weekly study timetable with a smiling, encouraged Indian teenage student. Open notebook, highlighters, and a glass of water on the clean wooden desk. Bright, supportive, non-intimidating office setting with potted indoor plants and diplomas on a neutral wall. Soft natural lighting, 50mm lens, authentic emotional connection, no logos, no watermarks --ar 4:3
```

---

### Image 31: `test-preparation.webp`
* **Page:** `test-series.html` (Proctored Practice)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Atmospheric photograph of focused students taking an intensive pen-and-paper mock test in an Indian junior college hall. Indian students in uniform seating rows, leaning over printed test booklets and OMR bubbling sheets with black ballpoint pens. A digital wall clock showing timed countdown in the background. Calm, intense concentration, natural side window light casting long soft shadows across desks, shallow depth of field with the nearest student sharply focused, documentary photojournalism style, no branding, no text overlays --ar 16:9
```

---

### Image 32: `examination-hall.webp`
* **Page:** `test-series.html` (Standardized Exam Hall)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Grand wide-angle perspective photograph of a large, orderly examination hall in an Indian junior college. Hundreds of identical wooden desks arranged in perfectly straight lines, with Indian students seated in quiet concentration, invigilators walking quietly along wide aisles. High ceiling with industrial ventilation and bright uniform white illumination. Symmetrical architectural composition conveying scale, organization, and academic seriousness, high detail, no visible logos or school names --ar 16:9
```

---

### Image 33: `counselling-session.webp`
* **Page:** `admissions.html` (In-Person Stream Guidance)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Warm, professional photograph of an admission counseling session in an Indian educational institution. An Indian mother, father, and their Class 10 graduate teenage son seated across a modern wooden consultation desk, attentively listening to a senior academic advisor who is presenting a colorful curriculum pathway brochure. Friendly, reassuring, respectful expressions, professional modern office interior with large glass windows showing a sunny campus outside. Balanced natural daylight, professional corporate editorial grade, no logos, no text --ar 16:9
```

---

### Image 34: `admissions-desk.webp`
* **Page:** `admissions.html` (Verification Cell)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Clean, bright architectural interior photograph of a modern junior college admissions reception and document verification lobby. Polished white marble floors, sleek curved wooden reception desk, comfortable waiting lounge with cushioned armchairs, helpful staff interacting courteously with visiting parents. Soft recessed lighting, indoor green plants, spotless, welcoming, efficient institutional administrative space, eye-level wide perspective, no logos, no watermarks --ar 16:9
```

---

### Image 35: `hostel-building.webp`
* **Page:** `hostel.html` (Residential Overview)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Architectural exterior photograph of a multi-storey modern residential student hostel building in an Indian junior college campus. Contemporary design with clean balconies, terracotta sunshades, landscaped surrounding gardens with flowering bougainvillea and paved pedestrian walkways. Early evening twilight with warm glowing lights inside rooms and clear blue dusk sky. Clean, secure, dignified residential architecture, professional architectural photography, wide angle, no signage, no logos, no watermarks --ar 4:3
```

---

### Image 36: `hostel-room.webp`
* **Page:** `hostel.html` (Boys' Residential Wing)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Bright, clean, and well-organized interior photograph of a twin-sharing student hostel bedroom in an Indian junior college. Two wooden single beds with clean neatly made linens, individual study desks with task lamps and ergonomic chairs, personal book shelves, and wardrobes. Large window with sheer curtains allowing cheerful morning sunlight into the room. Spotless, comfortable, disciplined residential environment, wide interior shot, authentic hostel life, no logos, no text --ar 16:9
```

---

### Image 37: `girls-hostel.webp`
* **Page:** `hostel.html` (Girls' Residential Wing)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Tasteful interior photograph of a modern girls' residential hostel floor lounge in an Indian educational institution. Comfortable modular sofas, small study tables with books, warm wooden flooring, a security desk with friendly female warden in the background. Bright, secure, dignified, and cheerful ambiance with warm pastel wall colors and indoor plants. Wide-angle shot, soft ambient lighting, high quality interior photography, completely unbranded, no watermarks --ar 16:9
```

---

### Image 38: `dining-hall.webp`
* **Page:** `hostel.html` (Hygienic Dining Facilities)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Lively and spotless photograph of a spacious junior college dining hall in India. Long stainless steel and wooden dining tables where Indian students are enjoying fresh, healthy vegetarian meals (idli, sambar, rice, dal, fresh cut fruits) served in compartmentalized steel thalis. High-ceilinged hall with large windows, bright and hygienic atmosphere, students chatting with polite, cheerful expressions. Natural lunchtime lighting, wide shot, authentic student life documentary, no logos, no watermarks --ar 16:9
```

---

### Image 39: `recreation-area.webp`
* **Page:** `hostel.html` (Recreation & Fitness)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Vibrant photograph of students engaged in evening recreation at an Indian junior college campus. In the foreground, students playing table tennis in a well-lit indoor sports hall; through large open glass doors in the background, other students are playing badminton on an outdoor court surrounded by greenery during golden hour. Energetic, healthy, joyful campus life, balanced lifestyle, dynamic composition with motion blur on the table tennis ball, warm sunset lighting, no logos, no watermarks --ar 16:9
```

---

### Image 40: `campus-life.webp`
* **Page:** `campus-life.html` (Campus Overview)
* **Aspect Ratio:** 4:3 | **Resolution:** 1600 × 1200 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Scenic wide photograph capturing outdoor campus life at a premium Indian junior college. A wide tree-lined central plaza with students walking in lively conversation, some sitting on grassy mounds reading books, and modern academic architecture framing the background. Clear blue sky with gentle afternoon sunshine, vibrant campus trees, inspiring, youthful, and academically focused atmosphere, high quality editorial landscape, no institution names or banners --ar 4:3
```

---

### Image 41: `student-activities.webp`
* **Page:** `campus-life.html` (Peer Collaborative Study)
* **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Candid outdoor photograph of four Indian teenage students (two boys, two girls) seated together on a shaded campus lawn under a flowering tree. They have open notebooks and textbooks on their laps, happily discussing a math problem with pencils in hand, laughing and collaborating. Dappled natural sunlight filtering through leaves, genuine camaraderie and mutual encouragement, 85mm f/2.8 portrait lens, heartwarming educational lifestyle photography, no logos, no text --ar 4:3
```

---

### Image 42: `science-exhibition.webp`
* **Page:** `campus-life.html` (Science Innovation Fair)
* **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Engaging documentary photograph of an annual science exhibition at an Indian junior college. Two confident Indian students standing proudly beside their physics project: a miniature working Tesla coil and electromagnetic induction model with glowing LED circuits. Fellow students and a visiting teacher in formal attire are smiling and observing the live demonstration. Bright, celebratory, intellectual atmosphere, rich colors, shallow depth of field, authentic student innovation, no logos, no watermarks --ar 4:3
```

---

### Image 43: `academic-event.webp`
* **Page:** `campus-life.html` (Milestone Ceremony)
* **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Formal auditorium photograph of an academic recognition and milestone celebration in an Indian junior college. An Indian student on stage receiving a hardcover book award and certificate of merit from a distinguished Indian senior professor. Audience of seated peers and parents clapping warmly in the soft-focus background. Professional stage lighting casting warm illumination on the participants, dignified, proud, and celebratory educational milestone moment, no school logos, no text overlays --ar 4:3
```

---

### Image 44: `results-section.webp`
* **Page:** `results.html` (Honors & Achievement Banner)
* **Aspect Ratio:** 21:9 | **Resolution:** 1920 × 820 px | **Orientation:** Ultra-Wide
* **Copy-Ready Prompt:**
```
Panoramic cinematic photograph of an elegant Indian academic institution auditorium and honours stage. Polished wooden stage, velvet curtains, subtle warm architectural spotlighting, a row of distinguished academic faculty seated in executive chairs, with a podium in the foreground. Empty space on the upper portion for potential web typography overlay. Deep royal navy blue and gold subtle ambient stage hues, dignified, prestigious academic ceremony setting, Hasselblad panoramic format, perfectly leveled perspective, no logos, no watermarks --ar 21:9
```

---

### Image 45: `contact-campus.webp`
* **Page:** `contact.html` (Campus Orientation)
* **Aspect Ratio:** 16:9 | **Resolution:** 1600 × 900 px | **Orientation:** Landscape
* **Copy-Ready Prompt:**
```
Welcoming wide-angle photograph of the entrance gate and reception avenue of a modern Indian junior college. Contemporary architectural security pavilion, paved entry driveway with lush royal palm trees, clean signage pylons (blank with no text), and morning sunlight washing over the campus boundary wall. Welcoming, secure, prestigious institutional threshold, high resolution commercial photography, crisp focus from foreground to background, no logos, no text, no watermarks --ar 16:9
```

---

*End of Image Generation Guide. All 42 unique assets and prompts have been formatted for seamless execution in Google Flow.*
