const writingTools = [
  {title:'Character profile',file:'assets/tools/character-profile.pdf',pages:7},
  {title:'Scenes',file:'assets/tools/scenes.pdf',pages:7},
  {title:'World building',file:'assets/tools/world-building.pdf',pages:9},
  {title:'Word count tracker',file:'assets/tools/word-count.pdf',pages:13}
];
function renderWritingTools(){
  return `<section class="writing-tools"><div class="page-intro"><h1>Shape your next chapter with intention.</h1></div><div class="tools-grid">${writingTools.map(tool=>`<article class="writing-tool"><h2>${tool.title}</h2><div class="pdf-page-grid${tool.pages===7?' pdf-page-grid-three':''}" aria-label="Preview pages of ${tool.title}">${Array.from({length:tool.pages-1},(_,i)=>{const page=i+2;const number=String(page).padStart(String(tool.pages).length,'0');const thumbnail=tool.file.replace(/\.pdf$/i,`-page-${number}.png`);return `<a class="pdf-page-thumb" href="${tool.file}#page=${page}" target="_blank" rel="noopener noreferrer" aria-label="Open ${tool.title}, page ${page}"><img src="${thumbnail}" alt="${tool.title}, page ${page}" loading="lazy" width="280" height="360"><span>${page}</span></a>`;}).join('')}</div><a class="text-link" href="${tool.file}" download>Download PDF ↓</a></article>`).join('')}</div></section>`;
}
