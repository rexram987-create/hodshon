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
const modal=document.querySelector("#monthModal"),modalTitle=document.querySelector("#modalTitle"),modalDays=document.querySelector("#modalDays"),modalDetails=document.querySelector("#modalDetails"),modalSpeak=document.querySelector("#modalSpeak");
let currentMonthText="";

function speak(t){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="he-IL";speechSynthesis.speak(u)}

function openMonth(name,days,info){
  modalTitle.textContent=name;
  modalDays.textContent=days;
  modalDetails.innerHTML='<h3>מידע על החודש</h3><p>'+info+'</p>';
  currentMonthText=name+". "+days+". "+info;
  modal.hidden=false;
  document.body.classList.add("modalOpen");
  setTimeout(()=>document.querySelector("#modalClose").focus(),0);
}
function closeMonth(){
  speechSynthesis.cancel();
  modal.hidden=true;
  document.body.classList.remove("modalOpen");
}

function openCalendar(key){
  const d=data[key];
  document.querySelector("#calendarTitle").textContent=d.title;
  document.querySelector("#calendarIntro").textContent=d.intro;
  months.innerHTML="";
  d.months.forEach(([name,days,info])=>{
    const el=document.createElement("button");
    el.className="card monthButton";
    el.type="button";
    el.setAttribute("aria-label","פתיחת פרטים על חודש "+name);
    el.innerHTML='<h3>'+name+'</h3><div class="meta">'+days+'</div><div class="openHint">לחצו לפרטים ←</div>';
    el.onclick=()=>openMonth(name,days,info);
    months.appendChild(el);
  });
  home.classList.remove("active");
  cal.classList.add("active");
  scrollTo(0,0);
}

document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openCalendar(b.dataset.open));
document.querySelector("#backBtn").onclick=()=>{speechSynthesis.cancel();cal.classList.remove("active");home.classList.add("active");scrollTo(0,0)};
document.querySelector("#modalClose").onclick=closeMonth;
document.querySelectorAll("[data-close-modal]").forEach(el=>el.onclick=closeMonth);
modalSpeak.onclick=()=>speak(currentMonthText);
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)closeMonth()});

let deferred;const install=document.querySelector("#installBtn");
addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferred=e;install.hidden=false});
install.onclick=async()=>{if(!deferred)return;deferred.prompt();await deferred.userChoice;deferred=null;install.hidden=true};
addEventListener("appinstalled",()=>install.hidden=true);
if("serviceWorker"in navigator)addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));