/* The MSP tools shown on the two hubs. Edit this file, nothing else, to add or change a tool.
   Order here is the order around the emblem (clockwise from the top).

   fields
     id         short slug
     name       the tool's name as students and staff know it
     blurb      one line, what you do there (shown on hover)
     blurbStaff optional: a different line on the staff hub
     hubs       which hub(s) show it: 'students', 'staff'
     icon       a name from msp-shell.js (see the design system page, "Icons")
     live       the public address today (empty string if not published)
     next       the address of the restyled version once it is published
     status     live | dev

   CE Alumni is deliberately not on either hub (Martijn, 6 Oct 2026).
*/
window.MSP_HUBS = {
  students: { title: 'For Students', line: 'Everything you need as an MSP student, in one place.', other: 'staff', otherLabel: 'Staff tools', file: 'index.html' },
  staff:    { title: 'For Staff', line: 'The tools behind the programme, for support and academic staff.', other: 'students', otherLabel: 'Student tools', file: 'staff.html' }
};

window.MSP_PROJECTS = [
  { id: 'faq',      name: 'Student FAQ',        hubs: ['students'],          icon: 'help',      live: 'https://msp-faqs.nl/', next: 'app.html#faq', nextStaff: 'app.html?s=staff#faq', status: 'live',
    blurb: 'Search-first answers to the questions students ask the office.' },
  { id: 'planner',  name: 'Course Planner',     hubs: ['students'],          icon: 'calendar',  live: '', next: 'app.html#course-planner', nextStaff: 'app.html?s=staff#course-planner', status: 'live',
    blurb: 'Build a clash-free schedule and track your progress.' },
  { id: 'btr',      name: 'BTR Dashboard',      hubs: ['students'],          icon: 'book',      live: 'https://msp-btr.nl/', next: 'app.html#btr', nextStaff: 'app.html?s=staff#btr', status: 'live',
    blurb: 'Guides, cohorts, rubrics and the projects on offer for your thesis.' },
  { id: 'periods',  name: 'Project Periods',    hubs: ['students', 'staff'], icon: 'target',    live: 'https://msp-operations.github.io/Project-Periods/', next: 'app.html#project-periods', nextStaff: 'app.html?s=staff#project-periods', status: 'live',
    blurb: 'The P3 and P6 project catalogue and your preferences.',
    blurbStaff: 'Offer a P3 or P6 project, or run the allocation as the committee.' },
  { id: 'alumni',   name: 'MSP Alumni',         hubs: ['students'],          icon: 'globe',     live: 'https://msp-alumni.nl/', next: 'app.html#msp-alumni', nextStaff: 'app.html?s=staff#msp-alumni', status: 'live',
    blurb: 'Where MSP graduates went: destinations, stories, community.' },

  { id: 'calendar', name: 'Academic Calendar',  hubs: ['staff'],             icon: 'clock',     live: 'https://msp-operations.github.io/Academic-Calendar/', next: 'app.html#academic-calendar', nextStaff: 'app.html?s=staff#academic-calendar', status: 'live',
    blurb: 'Every operational deadline per office and period, with Outlook feeds.' },
  { id: 'exams',    name: 'Exams Office',       hubs: ['staff'],             icon: 'clipboard', live: 'https://msp-operations.github.io/MSP-Exams-Office/', next: 'app.html#exams-office', nextStaff: 'app.html?s=staff#exams-office', status: 'live',
    blurb: 'The exam coordinator manual: periods, checklists, procedures.' },
  { id: 'tutoring', name: 'Tutor Registration', hubs: ['staff'],             icon: 'users',     live: 'https://msp-tutoring.nl/', next: 'app.html#tutoring', nextStaff: 'app.html?s=staff#tutoring', status: 'live',
    blurb: 'Claim the tutorial groups you want to teach; the office allocates from here.' },
  { id: 'btr-proj', name: 'BTR Projects', hubs: ['staff'],             icon: 'briefcase', live: 'https://beebzoo.github.io/BTR-Projects/', next: 'app.html#btr-projects', nextStaff: 'app.html?s=staff#btr-projects', status: 'live',
    blurb: 'Offer a thesis project and read the supervisor and advisor roles.' }
];
