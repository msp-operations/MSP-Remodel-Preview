/* Version 3: the original websites, untouched, inside one shared side nav.
   Each tool is the LIVE site (or, for the unpublished Course Planner, the original copy).
   ownNav: true = the tool brings its own navy sidebar; the shared nav then shrinks to an icon rail.
   Edit this file to add, remove or reorder tools. Version 2 (the restyle) is separate. */
window.V3 = {
  name: 'MSP Online',   // placeholder name, Martijn's call
  suites: {
    students: {
      label: 'Students', hub: 'index.html', other: 'staff', otherLabel: 'Staff tools',
      tools: [
        { id: 'faq',             name: 'Student FAQ',     icon: 'help',     hint: 'Answers from the office',    url: 'https://msp-faqs.nl/' },
        { id: 'course-planner',  name: 'Course Planner',  icon: 'calendar', hint: 'Plan your courses',          url: 'sites/course-planner/index.html', ownNav: true },
        { id: 'btr',             name: 'BTR Dashboard',   icon: 'book',     hint: 'Your bachelor thesis',       url: 'https://msp-btr.nl/' },
        { id: 'project-periods', name: 'Project Periods', icon: 'target',   hint: 'P3 and P6 projects',         url: 'https://msp-operations.github.io/Project-Periods/' },
        { id: 'msp-alumni',      name: 'MSP Alumni',      icon: 'globe',    hint: 'Where graduates went',       url: 'https://msp-alumni.nl/' }
      ]
    },
    staff: {
      label: 'Staff', hub: 'staff.html', other: 'students', otherLabel: 'Student tools',
      tools: [
        { id: 'project-periods',   name: 'Project Periods',    icon: 'target',    hint: 'Offer and allocate projects', url: 'https://msp-operations.github.io/Project-Periods/' },
        { id: 'academic-calendar', name: 'Academic Calendar',  icon: 'clock',     hint: 'Deadlines per office',        url: 'https://msp-operations.github.io/Academic-Calendar/' },
        { id: 'exams-office',      name: 'Exams Office',       icon: 'clipboard', hint: 'Exam coordinator manual',     url: 'https://msp-operations.github.io/MSP-Exams-Office/' },
        { id: 'tutoring',          name: 'Tutor Registration', icon: 'users',     hint: 'Tutorial groups',             url: 'https://msp-tutoring.nl/' },
        { id: 'btr-projects',      name: 'BTR Projects',       icon: 'briefcase', hint: 'Offer a thesis project',      url: 'https://beebzoo.github.io/BTR-Projects/' }
      ]
    }
  }
};
