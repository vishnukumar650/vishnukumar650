#!/usr/bin/env node

const c = {
  reset:   '\x1b[0m',
  bold:    '\x1b[1m',
  dim:     '\x1b[2m',
  cyan:    '\x1b[36m',
  green:   '\x1b[32m',
  yellow:  '\x1b[33m',
  blue:    '\x1b[34m',
  magenta: '\x1b[35m',
  white:   '\x1b[37m',
  gray:    '\x1b[90m',
};

const divider = `${c.gray}${'─'.repeat(54)}${c.reset}`;

console.log(`
${divider}

  ${c.bold}${c.cyan}  Vishnu Kumar Reddy${c.reset}  ${c.gray}(vishnukumar650)${c.reset}

  ${c.yellow}FullStack Developer • React • Next.js • Spring Boot${c.reset}

${divider}

  ${c.green}About${c.reset}
  ${c.white}5+ years building modern, production-ready web apps.${c.reset}
  ${c.white}Java trainer, CTF competitor (14th globally 🏆),${c.reset}
  ${c.white}and a firm believer that clean code is an art form.${c.reset}

  ${c.green}Stack${c.reset}
  ${c.cyan}Frontend${c.reset}  ${c.white}React · Next.js · TypeScript · Tailwind${c.reset}
  ${c.cyan}Backend ${c.reset}  ${c.white}Spring Boot · Node.js · Express${c.reset}
  ${c.cyan}Database${c.reset}  ${c.white}MySQL · MongoDB · Firebase${c.reset}
  ${c.cyan}Cloud   ${c.reset}  ${c.white}AWS · System Design · REST APIs${c.reset}

  ${c.green}Currently Building${c.reset}
  ${c.white}⚡ XableKart — Village-first Grocery Marketplace${c.reset}
  ${c.white}🤖 AI-powered web applications${c.reset}

${divider}

  ${c.magenta}🐦  Twitter  ${c.reset}  https://twitter.com/vishnukumar650
  ${c.magenta}💼  LinkedIn ${c.reset}  https://linkedin.com/in/vishnukumar650
  ${c.magenta}🐙  GitHub   ${c.reset}  https://github.com/vishnukumar650
  ${c.magenta}✉️   Email    ${c.reset}  vishnukumar650@gmail.com

${divider}

  ${c.gray}Run ${c.reset}${c.cyan}npx vishnukumar650 fav-quotes${c.reset}${c.gray} for some inspiration 💡${c.reset}

${divider}
`);
