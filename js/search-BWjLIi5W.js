const o=()=>{if(!window.algoliaConfig){console.error("Algolia config not found");return}const l=algoliasearch(window.algoliaConfig.appId,window.algoliaConfig.apiKey),s=instantsearch({indexName:window.algoliaConfig.indexName,searchClient:l,searchFunction(e){if(e.state.query)e.search();else{const r=document.querySelector("#hits");r&&(r.innerHTML="")}}});s.addWidgets([instantsearch.widgets.searchBox({container:"#search-box",placeholder:"搜尋文章...",showReset:!1,showSubmit:!1,cssClasses:{root:"w-full",form:"w-full relative",input:"w-full pl-4 pr-10 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 transition-all",submit:"hidden",reset:"hidden"}}),instantsearch.widgets.hits({container:"#hits",templates:{item:e=>`
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
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">找不到相關文章</h3>
              <p class="text-gray-500 dark:text-gray-400">試試看搜尋 "${e.query}" 的其他關鍵字？</p>
            </div>
          `},cssClasses:{root:"w-full",list:"space-y-2",item:"w-full"}}),instantsearch.widgets.pagination({container:"#pagination",cssClasses:{root:"mt-6",list:"flex justify-center gap-2",item:"hidden sm:block",selectedItem:"!block",link:"px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400",selectedItemLink:"!bg-primary-500 !text-white hover:!bg-primary-600",disabledItem:"opacity-50 cursor-not-allowed"}}),instantsearch.widgets.stats({container:"#stats",templates:{text:e=>`
            <span class="flex items-center gap-2">
              <i class="bi bi-lightning-charge-fill text-yellow-500"></i>
              找到 <span class="font-bold text-gray-900 dark:text-white">${e.nbHits}</span> 篇文章
              <span class="text-gray-400 text-xs">(${e.processingTimeMS}ms)</span>
            </span>
          `}})]),s.start();const t=document.getElementById("search-modal"),n=document.getElementById("close-search");if(!t){console.error("Search modal not found");return}function i(){t&&(t.classList.remove("hidden"),document.body.style.overflow="hidden",setTimeout(()=>{const e=document.querySelector("#search-box input");e&&e.focus()},100))}function a(){t&&(t.classList.add("hidden"),document.body.style.overflow="")}document.addEventListener("click",e=>{const r=e.target;(r.closest("#search-trigger")||r.closest("#mobile-search-trigger"))&&i(),r.id==="search-overlay"&&a()}),n&&n.addEventListener("click",a),document.addEventListener("keydown",e=>{e.key==="Escape"&&!t.classList.contains("hidden")&&a(),(e.metaKey||e.ctrlKey)&&e.key==="k"&&(e.preventDefault(),i())})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o();
