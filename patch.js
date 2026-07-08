const fs = require('fs');
const file = 'src/sections/Verticals.tsx';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  'className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4 scroll-smooth -mx-6 px-6 lg:mx-0 lg:px-0"',
  'className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4 scroll-smooth -mx-6 px-[10vw] sm:px-[25vw] lg:mx-0 lg:px-0"'
);

fs.writeFileSync(file, code);
