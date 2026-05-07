const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'node_modules', 'honkit-plugin-toggle-chapters', 'book', 'toggle-chapters.js');

if (!fs.existsSync(file)) {
  console.log('[patch-toggle-chapters] plugin file not found, skip');
  process.exit(0);
}

let src = fs.readFileSync(file, 'utf8');

const originalExpand = '      $(".chapter").removeClass(TOGGLE_CLASSNAME);\n';
if (src.includes(originalExpand)) {
  src = src.replace(originalExpand, '');
}

const originalFlagBlock = `    if (FLAG){
      expand(lsItem());
      //expand current selected chapter with it's parents
      var activeChapter = $(CHAPTER + '.active');
      expand(activeChapter);
      expand(activeChapter.parents(CHAPTER));
    }else{
      FLAG = true;
    }
`;

const replacementFlagBlock = `    if (FLAG){
      expand(lsItem());
      //expand current selected chapter with it's parents
      var activeChapter = $(CHAPTER + '.active');
      expand(activeChapter);
      expand(activeChapter.parents(CHAPTER));
    }else{
      // first load: expand all chapters that have children
      $(ARTICLES).parent(CHAPTER).addClass(TOGGLE_CLASSNAME);
      FLAG = true;
    }
`;

if (src.includes(originalFlagBlock)) {
  src = src.replace(originalFlagBlock, replacementFlagBlock);
}

fs.writeFileSync(file, src, 'utf8');
console.log('[patch-toggle-chapters] patched');
