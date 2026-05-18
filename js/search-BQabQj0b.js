import{t as a}from"./i18n-DEhoN-_3.js";var d=()=>{if(!window.algoliaConfig){console.error("Algolia config not found");return}const g=algoliasearch(window.algoliaConfig.appId,window.algoliaConfig.apiKey),n=instantsearch({indexName:window.algoliaConfig.indexName,searchClient:g,searchFunction(e){if(e.state.query)e.search();else{const t=document.querySelector("#hits");t&&(t.innerHTML="")}}});n.addWidgets([instantsearch.widgets.searchBox({container:"#search-box",placeholder:a("search.placeholder"),showReset:!1,showSubmit:!1,cssClasses:{root:"w-full",form:"w-full relative",input:"w-full pl-4 pr-10 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 transition-all",submit:"hidden",reset:"hidden"}}),instantsearch.widgets.hits({container:"#hits",transformItems(e){const t=(document.documentElement.lang||"").toLowerCase().startsWith("en");return e.filter(l=>{const c=String(l.permalink||l.path||"");return(/\/en\//.test(c)||/^en\//.test(c))===t})},templates:{item:e=>`
            <a href="${e.permalink}" class="block p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-all group border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
                  ${instantsearch.highlight({attribute:"title",hit:e})}
                </h3>
                <span class="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 whitespace-nowrap ml-3">
                  ${e.date?new Date(e.date).toLocaleDateString():""}
                </span>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                ${instantsearch.snippet({attribute:"content",hit:e})}
              </p>
            </a>
          `,empty:e=>`
            <div class="flex flex-col items-center justify-center py-16 text-center">
              <div class="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <i class="bi bi-search text-2xl text-gray-400 dark:text-gray-500"></i>
              </div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">${a("search.no_results")}</h3>
              <p class="text-gray-500 dark:text-gray-400">${a("search.try_other",e.query)}</p>
            </div>
          `},cssClasses:{root:"w-full",list:"space-y-2",item:"w-full"}}),instantsearch.widgets.pagination({container:"#pagination",cssClasses:{root:"mt-6",list:"flex justify-center gap-2",item:"hidden sm:block",selectedItem:"!block",link:"px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400",selectedItemLink:"!bg-primary-500 !text-white hover:!bg-primary-600",disabledItem:"opacity-50 cursor-not-allowed"}}),instantsearch.widgets.stats({container:"#stats",templates:{text:e=>`
            <span class="flex items-center gap-2">
              <i class="bi bi-lightning-charge-fill text-yellow-500"></i>
              ${a("search.found_count",String(e.nbHits))}
              <span class="text-gray-400 text-xs">(${e.processingTimeMS}ms)</span>
            </span>
          `}})]),n.start();const r=document.getElementById("search-modal"),i=document.getElementById("close-search");if(!r){console.error("Search modal not found");return}function o(){r&&(r.classList.remove("hidden"),document.body.style.overflow="hidden",setTimeout(()=>{const e=document.querySelector("#search-box input");e&&e.focus()},100))}function s(){r&&(r.classList.add("hidden"),document.body.style.overflow="")}document.addEventListener("click",e=>{const t=e.target;(t.closest("#search-trigger")||t.closest("#mobile-search-trigger")||t.closest("[data-search-trigger]"))&&o(),t.id==="search-overlay"&&s()}),i&&i.addEventListener("click",s),document.addEventListener("keydown",e=>{e.key==="Escape"&&!r.classList.contains("hidden")&&s(),(e.metaKey||e.ctrlKey)&&e.key==="k"&&(e.preventDefault(),o())})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d();
