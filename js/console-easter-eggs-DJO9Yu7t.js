function w(){const e=((window.hexo_config||{}).theme||{}).console||{};if(e.enable===!1)return;const n=e.command_name||"ray",f=e.title||"Developer's Secret Console",g=e.theme_name||"Array Exception",d=e.delay||2e3,_=e.adblock_messages||{},a=e.commands||{},o={title:"color: #fff; background: #000; font-size: 24px; padding: 10px; border-radius: 5px;",info:"color: #00bfff; font-size: 14px;",warn:"color: #ff4500; font-size: 16px; font-weight: bold;",success:"color: #32cd32; font-size: 16px; font-weight: bold;"},s=[`
                       _oo0oo_
                      o8888888o
                      88" . "88
                      (| -_- |)
                      0\\  =  /0
                    ___/'---'\\___
                  .' \\||     ||/ '.
                  / \\||||  :  ||||/ |
                | _||||| -:- |||||- |
                |   | \\|\\  -  /|/ |   |
                | \\_|  ''\\---/''  |_/ |
                |  .-\\__  '-'  ___/-. |
              ___'. .'  /--.--\\  '. .'___
           ."" '<  '.___\\_<|>_/___.' >' "".
           | | :  '- \\'.;'\\ _ /';.'/ - ' : | |
           |  | '_.   \\_ __\\ /__ _/   .-' |  |
       ====='-.____'.___ \\_____/___.-'___.-'=====
                         '=---='
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
                     佛祖保佑，永無 BUG
                     薪水增多，財富自由
    `,`
      |\\__/,|   (\`\\
    _.|o o  |_   ) )
  -(((---(((--------
  
      招財貓貓，招財進寶
      Code 寫得好，Bug 沒煩惱
    `,`
                 /           /
                /' .,,,,  ./
               /';'     ,/
              / /   ,,//,
             ( ,, '_,  ,,,' \`\`
             |    /@  ,,, ;" \`
            /    .   ''/' \`,,
           /   .     ./, \`,,
          /  .  /    / \`,,
         /   /  /    /  \`,,
        /   /  /    /    \`,,
       /   /  /    /      \`,,
      /   /  /    /        \`,,
     /   /  /    /          \`,,
    /   /  /    /            \`,,
   /   /  /    /              \`,,
  /   /  /    /                \`,,
 /   /  /    /                  \`,,
    `,`
       .---.
      /   /|
     /___/ |
    |   |  |
    |___|  /
    |___|/
  
      在我的電腦上是可以跑的
      It works on my machine
    `,`
       / \\
     / \\ / \\
    (  . .  )
     )  |  (
   _/\\  |  /\\_
  /  \\  |  /  \\
  
      這不是 Bug
      這是 Feature
    `,`
   ._________________.
   | ._____________. |
   | | ._________. | |
   | | |_________| | |
   | |_____________| |
   | ._____________. |
   | | ._________. | |
   | | |_________| | |
   | |_____________| |
   |_________________|
  
      刪庫跑路
      從入門到入土
    `,`
    _________________
   | |"|           | |
   | | |           | |
   | |_|           | |
   |  ___________  | |
   | |           | | |
   | |___________| | |
   |_______________| |
  
      年輕人
      你見過這個圖示的實體嗎？
    `,`
   ____________________________________________________
  |  ________________________________________________  |
  | |                                                | |
  | |  ____________________________________________  | |
  | | |                                            | | |
  | | |  ________________________________________  | | |
  | | | |                                        | | | |
  | | | |________________________________________| | | |
  | | |____________________________________________| | |
  | |________________________________________________| |
  |____________________________________________________|
  
      鍵盤壞了沒關係
      Ctrl + C / V 沒壞就好
    `],r=a.help||{},h=a.art||{},i=a.info||{};window[n]=()=>{console.clear(),console.log(`%c ${f} `,o.title),console.log(`%c ${r.title||"這裡有一些隱藏指令："}`,o.info);const l=(r.list||[{command:`${n}()`,description:"顯示這個幫助選單"},{command:`${n}.art()`,description:"隨機顯示一個 ASCII Art"},{command:`${n}.info()`,description:"顯示網站技術棧"}]).map(t=>({command:t.command.replace("{command_name}",n),description:t.description}));return console.table(l),r.return_message||"Enjoy hacking! 🚀"},window[n].art=()=>{const c=s[Math.floor(Math.random()*s.length)];return console.log(`%c${c}`,"color: #f0f; font-family: monospace;"),h.return_emoji||"🎨"},window[n].info=()=>(console.log(`%c ${i.title||"Tech Stack"} `,o.title),console.log(`%c Framework: ${i.framework||"Hexo"}`,o.success),console.log(`%c Theme: ${g}`,o.success),console.log(`%c Search: ${i.search||"Algolia"}`,o.success),i.return_emoji||"💻"),setTimeout(()=>{const c=document.querySelector("ins.adsbygoogle");if(console.log("%c System Initializing... ","color: #888; font-style: italic;"),!c||!c.getAttribute("data-adsbygoogle-status"))console.log(`
        ██████╗██╗  ██╗    ███╗   ██╗██████╗     ██╗
        ██╔═══████║  ██║    ████╗  ████╔═══██╗    ██║
        ██║   █████████║    ██╔██╗ ████║   ██║    ██║
        ██║   ████╔══██║    ██║╚██╗████║   ██║    ╚═╝
        ╚██████╔██║  ██║    ██║ ╚████╚██████╔╝    ██╗
        ╚═════╝╚═╝  ╚═╝    ╚═╝  ╚═══╝╚═════╝     ╚═╝
      `),console.warn(`%c ${_.warning_1||"看起來廣告被 Adblock 擋住了"}`,o.warn),_.warning_2&&console.warn(_.warning_2),_.warning_3&&console.warn(_.warning_3);else{console.clear(),console.log(`%c ${_.thanks_title||"🎉 感謝你的支持！"} `,o.title),console.info(`%c ${_.thanks_1||"感謝你的支持！"}`,o.info),_.thanks_2&&console.info(_.thanks_2);const t=s[Math.floor(Math.random()*s.length)];console.log(`%c${t}`,"color: #ffd700; font-weight: bold; font-family: monospace;");const m=(_.tip||'Tip: Try typing "{command_name}()" in console!').replace("{command_name}",n);console.log(`%c ${m}`,"color: #aaa; font-style: italic; margin-top: 10px;")}function l(){"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(function(t){for(let m of t)m.unregister()})}l()},d)}export{w as initConsoleEasterEggs};
