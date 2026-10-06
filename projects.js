/* The MSP tools shown on the hub. Edit this file, nothing else, to add or
   change a tile. Order here is the order on the page (clockwise from the top).

   fields
     id        short slug, used as the tile anchor
     name      the tool's name as students and staff know it
     blurb     one line, what you do there
     audience  students | staff | alumni | supervisors
     icon      a name from msp-shell.js (see the design system page, "Icons")
     live      the public address today (empty string if not published)
     next      the address of the restyled version once it is published
     status    live | dev
*/
window.MSP_PROJECTS = [
  { id: 'faq',       name: 'Student FAQ',          blurb: 'Search-first answers to the questions students ask the office.', audience: 'students',    icon: 'help',      live: 'https://msp-faqs.nl/',                                        next: 'faq/', status: 'live' },
  { id: 'planner',   name: 'Course Planner',       blurb: 'Build a clash-free schedule and track your progress.',           audience: 'students',    icon: 'calendar',  live: '',                                                           next: 'course-planner/', status: 'live'  },
  { id: 'btr',       name: 'BTR Dashboard',        blurb: 'Everything about the Bachelor Thesis Research, by cohort.',       audience: 'students',    icon: 'book',      live: 'https://msp-btr.nl/',                                         next: 'btr-dashboard/', status: 'live' },
  { id: 'btr-proj',  name: 'BTR Projects',         blurb: 'Browse thesis projects on offer, or submit one as a supervisor.', audience: 'supervisors', icon: 'briefcase', live: 'https://beebzoo.github.io/BTR-Projects/',                     next: 'btr-projects/', status: 'live' },
  { id: 'tutoring',  name: 'Tutor Registration',   blurb: 'Register to tutor a course; the office allocates from here.',     audience: 'students',    icon: 'users',     live: 'https://msp-tutoring.nl/',                                    next: 'tutoring/', status: 'live' },
  { id: 'periods',   name: 'Project Periods',      blurb: 'The P3 and P6 project catalogue, preferences and allocation.',    audience: 'students',    icon: 'target',    live: 'https://msp-operations.github.io/Project-Periods/',           next: 'project-periods/', status: 'live' },
  { id: 'calendar',  name: 'Academic Calendar',    blurb: 'Staff deadlines per office and period, with Outlook feeds.',      audience: 'staff',       icon: 'clock',     live: 'https://msp-operations.github.io/Academic-Calendar/',         next: 'academic-calendar/', status: 'live' },
  { id: 'exams',     name: 'Exams Office',         blurb: 'The exam coordinator manual: periods, checklists, procedures.',   audience: 'staff',       icon: 'clipboard', live: 'https://msp-operations.github.io/MSP-Exams-Office/',          next: 'exams-office/', status: 'live' },
  { id: 'alumni',    name: 'MSP Alumni',           blurb: 'Where MSP graduates went: destinations, stories, community.',     audience: 'alumni',      icon: 'globe',     live: 'https://msp-alumni.nl/',                                      next: 'msp-alumni/', status: 'live' },
  { id: 'ce-alumni', name: 'CE Alumni',            blurb: 'The Circular Engineering alumni network and dashboard.',          audience: 'alumni',      icon: 'award',     live: 'https://ce-alumni.nl/',                                       next: 'ce-alumni/', status: 'live' }
];
