const data={
hebrew:{title:"הלוח העברי",intro:"לוח ירחי־שמשי. החודשים נקבעים לפי מחזור הירח, והשנים מותאמות לעונות באמצעות שנים מעוברות.",months:[
["תשרי","30 ימים","החודש הראשון במניין החודשים מראש השנה. בו חלים ראש השנה, יום הכיפורים וסוכות."],
["חשוון","29 או 30 ימים","נקרא גם מרחשוון. חודש סתווי שבדרך כלל אין בו חגים מקראיים."],
["כסלו","29 או 30 ימים","חודש שבו מתחיל חג החנוכה בכ״ה בכסלו."],
["טבת","29 ימים","חודש חורפי. צום עשרה בטבת חל בו."],
["שבט","30 ימים","ט״ו בשבט, ראש השנה לאילנות, חל בחודש זה."],
["אדר","29 ימים בשנה רגילה","חודש חג הפורים. בשנה מעוברת יש אדר א׳ ואדר ב׳, ופורים חל באדר ב׳."],
["ניסן","30 ימים","החודש הראשון למניין החודשים במקרא. חג הפסח חל בו."],
["אייר","29 ימים","בין ניסן לסיוון; ספירת העומר נמשכת לאורך החודש."],
["סיוון","30 ימים","חג השבועות חל בו, בו׳ בסיוון."],
["תמוז","29 ימים","חודש קיץ. צום שבעה עשר בתמוז חל בו."],
["אב","30 ימים","תשעה באב חל בו; ט״ו באב מצוין בהמשך החודש."],
["אלול","29 ימים","החודש שלפני תשרי, המזוהה עם הכנה לימים הנוראים."]
]},
gregorian:{title:"הלוח הלועזי – הגרגוריאני",intro:"הלוח האזרחי הנפוץ בעולם. שנה רגילה כוללת 365 ימים ושנה מעוברת 366.",months:[
["ינואר","31 ימים","שמו נגזר מינוס (Janus), האל הרומי המזוהה עם פתחים, מעברים והתחלות."],
["פברואר","28 או 29 ימים","שמו קשור ל-Februa, טקסי טיהור רומיים. בשנה מעוברת נוסף לו יום."],
["מרץ","31 ימים","נקרא על שם מרס (Mars), אל המלחמה הרומי."],
["אפריל","30 ימים","מקור השם אינו ודאי; הוא קשור לשם הלטיני Aprilis."],
["מאי","31 ימים","נקרא כנראה על שם מאיה (Maia), דמות מן המסורת הרומית."],
["יוני","30 ימים","נקרא על שם יונו (Juno), אלה מרכזית בדת הרומית."],
["יולי","31 ימים","נקרא לכבוד יוליוס קיסר; קודם לכן נקרא Quintilis."],
["אוגוסט","31 ימים","נקרא לכבוד הקיסר אוגוסטוס; קודם לכן נקרא Sextilis."],
["ספטמבר","30 ימים","שמו מן הלטינית septem – שבע, משום שהיה החודש השביעי בלוח הרומי הקדום."],
["אוקטובר","31 ימים","שמו מן הלטינית octo – שמונה."],
["נובמבר","30 ימים","שמו מן הלטינית novem – תשע."],
["דצמבר","31 ימים","שמו מן הלטינית decem – עשר."]
]}};
const home=document.querySelector("#home"),cal=document.querySelector("#calendar"),months=document.querySelector("#months");
function speak(t){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="he-IL";speechSynthesis.speak(u)}
function openCalendar(key){const d=data[key];document.querySelector("#calendarTitle").textContent=d.title;document.querySelector("#calendarIntro").textContent=d.intro;months.innerHTML="";d.months.forEach(([name,days,info])=>{const el=document.createElement("article");el.className="card";el.innerHTML='<h3>'+name+'</h3><div class="meta">'+days+'</div><p>'+info+'</p><button class="speak">🔊 הקראה</button>';el.querySelector(".speak").onclick=()=>speak(name+". "+days+". "+info);months.appendChild(el)});home.classList.remove("active");cal.classList.add("active");scrollTo(0,0)}
document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openCalendar(b.dataset.open));document.querySelector("#backBtn").onclick=()=>{speechSynthesis.cancel();cal.classList.remove("active");home.classList.add("active");scrollTo(0,0)};
let deferred;const install=document.querySelector("#installBtn");addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferred=e;install.hidden=false});install.onclick=async()=>{if(!deferred)return;deferred.prompt();await deferred.userChoice;deferred=null;install.hidden=true};addEventListener("appinstalled",()=>install.hidden=true);
if("serviceWorker"in navigator)addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));