#!/usr/bin/env node

const c = {
  reset:   '\x1b[0m',
  bold:    '\x1b[1m',
  cyan:    '\x1b[36m',
  yellow:  '\x1b[33m',
  magenta: '\x1b[35m',
  gray:    '\x1b[90m',
  white:   '\x1b[37m',
};

const quotes = [
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
  { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
  { text: "Knowledge is power.", author: "Francis Bacon" },
  { text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", author: "Dan Salomon" },
  { text: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.", author: "Antoine de Saint-Exupery" },
  { text: "Ruby is rubbish! PHP is phpantastic!", author: "Nikita Popov" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "Optimism is an occupational hazard of programming: feedback is the treatment.", author: "Kent Beck" },
  { text: "When to use iterative development? You should use iterative development only on projects that you want to succeed.", author: "Martin Fowler" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Hacking is an extremely creative profession.", author: "Vishnu Kumar" },
  { text: "Creativity is the greatest rebellion.", author: "Osho" },
  { text: "Make it as simple as possible.", author: "Vishnu Kumar" },
  { text: "Customer is your God, so make sure whatever you design, design it for god.", author: "Vishnu Kumar" },
  { text: "Have the courage to follow your heart and intuition.", author: "Steve Jobs" },
  { text: "Stay Hungry, Stay Foolish!", author: "Steve Jobs" },
  { text: "Creativity is just connecting things.", author: "Steve Jobs" },
  { text: "When you are grateful, fear disappears and abundance appears.", author: "Tony Robbins" },
  { text: "Computers are good at following instructions, but not at reading your mind.", author: "Donald Knuth" },
];

const divider = `${c.gray}${'─'.repeat(54)}${c.reset}`;

// Pick a random quote
const pick = quotes[Math.floor(Math.random() * quotes.length)];

console.log(`
${divider}

  ${c.cyan}${c.bold}💡 Quote of the Run${c.reset}

  ${c.yellow}"${pick.text}"${c.reset}

  ${c.magenta}— ${pick.author}${c.reset}

${divider}

  ${c.gray}Run again for a different quote ✨${c.reset}

${divider}
`);
