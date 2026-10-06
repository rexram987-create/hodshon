const monthDetails={"תשרי":["7 במניין מניסן; הראשון למניין השנים","שם בבלי־אכדי שאומץ בתקופת גלות בבל","ראש השנה, יום הכיפורים, סוכות ושמיני עצרת","תשרי פותח את השנה העברית הנהוגה, אף שניסן הוא הראשון במניין החודשים המקראי."],"חשוון":["8 במניין מניסן; השני מתשרי","מרחשוון הוא שם ממקור בבלי־אכדי; חשוון הוא קיצור מקובל","בדרך כלל אין בו חג מקראי מרכזי","אורכו משתנה: 29 או 30 יום, לפי סוג השנה."],"כסלו":["9 במניין מניסן; השלישי מתשרי","שם שמקורו במסורת הבבלית","חנוכה מתחיל בכ״ה בכסלו","כסלו יכול להיות בן 29 או 30 יום."],"טבת":["10 במניין מניסן; הרביעי מתשרי","שם ממקור בבלי־אכדי","עשרה בטבת; לעיתים חנוכה נמשך לתחילתו","טבת תמיד בן 29 יום בלוח הקבוע."],"שבט":["11 במניין מניסן; החמישי מתשרי","שם ממקור בבלי־אכדי","ט״ו בשבט","שבט תמיד בן 30 יום."],"אדר":["12 במניין מניסן; בשנה מעוברת יש אדר א׳ ואדר ב׳","שם ממקור בבלי־אכדי","תענית אסתר ופורים; בשנה מעוברת פורים באדר ב׳","הלוח מוסיף אדר א׳ בשבע שנים מתוך מחזור של 19 שנים כדי לשמור את פסח באביב."],"ניסן":["1 במניין החודשים המקראי; השביעי מתשרי","שם ממקור בבלי־אכדי; במקרא מופיע גם הכינוי חודש האביב","פסח וספירת העומר","ניסן הוא הראשון במניין החודשים בתורה, אף שראש השנה חל בתשרי."],"אייר":["2 במניין מניסן; השמיני מתשרי","שם ממקור בבלי־אכדי; במקרא מופיע גם השם זִו","פסח שני ול״ג בעומר","כל ימי אייר נמצאים בתוך תקופת ספירת העומר."],"סיוון":["3 במניין מניסן; התשיעי מתשרי","שם ממקור בבלי־אכדי","שבועות בו׳ בסיוון","סיוון תמיד בן 30 יום."],"תמוז":["4 במניין מניסן; העשירי מתשרי","השם קשור לתמוז/דומוזי מן המסורת המסופוטמית","י״ז בתמוז ותחילת בין המצרים","השם תמוז עצמו נזכר בספר יחזקאל."],"אב":["5 במניין מניסן; האחד־עשר מתשרי","שם שמקורו במסורת הבבלית; הכינוי מנחם־אב מאוחר יותר","תשעה באב וט״ו באב","החודש עובר מתקופת אבל בראשיתו לט״ו באב בהמשכו."],"אלול":["6 במניין מניסן; האחרון לפני תשרי","שם ממקור בבלי־אכדי","מנהגי סליחות והכנה לימים הנוראים","לאחר כ״ט באלול מתחיל א׳ בתשרי – ראש השנה."],"ינואר":["1 בלוח הגרגוריאני","January נקרא על שם יאנוס (Janus), האל הרומי של פתחים, מעברים והתחלות","1 בינואר – ראש השנה האזרחית","בלוח הרומי הקדום השנה התחילה במרץ; ינואר נעשה לימים לחודש הראשון."],"פברואר":["2 בלוח הגרגוריאני","February קשור ל-Februa, טקסי טיהור רומיים","29 בפברואר קיים בשנה מעוברת","זהו החודש הקצר ביותר: 28 ימים, או 29 בשנה מעוברת."],"מרץ":["3 בלוח הגרגוריאני","March נקרא על שם מרס (Mars), אל המלחמה הרומי","סביבו חל יום השוויון האביבי בחצי הכדור הצפוני","מרץ היה החודש הראשון בלוח הרומי הקדום."],"אפריל":["4 בלוח הגרגוריאני","מקור Aprilis אינו ודאי, וקיימות כמה השערות","חודש אביב בחצי הכדור הצפוני","בניגוד לשמות חודשים רבים, אין הסכמה ברורה על האטימולוגיה של אפריל."],"מאי":["5 בלוח הגרגוריאני","May נקרא ככל הנראה על שם Maia מן המסורת היוונית־רומית","חודש אביב בחצי הכדור הצפוני","השם הלטיני Maius שרד בצורות דומות בשפות רבות."],"יוני":["6 בלוח הגרגוריאני","June נקרא בדרך כלל על שם יונו (Juno), אלה רומית מרכזית","סביבו חל יום היפוך הקיץ בחצי הכדור הצפוני","יונו הייתה מזוהה בין השאר עם נישואים ומשפחה."],"יולי":["7 בלוח הגרגוריאני","July נקרא על שם יוליוס קיסר","חודש קיץ בחצי הכדור הצפוני","שמו הקודם היה Quintilis – החודש החמישי בלוח שהחל במרץ; שמו שונה ב-44 לפנה״ס."],"אוגוסט":["8 בלוח הגרגוריאני","August נקרא על שם הקיסר אוגוסטוס","חודש קיץ בחצי הכדור הצפוני","שמו הקודם היה Sextilis – החודש השישי; שמו שונה לכבוד אוגוסטוס ב-8 לפנה״ס."],"ספטמבר":["9 בלוח הגרגוריאני","September מן הלטינית septem – שבע","סביבו חל יום השוויון הסתווי בחצי הכדור הצפוני","השם משמר את מיקומו כחודש השביעי בלוח הרומי הקדום."],"אוקטובר":["10 בלוח הגרגוריאני","October מן הלטינית octo – שמונה","חודש סתיו בחצי הכדור הצפוני","השם משמר את מיקומו כחודש השמיני בלוח הרומי הקדום."],"נובמבר":["11 בלוח הגרגוריאני","November מן הלטינית novem – תשע","חודש סתיו בחצי הכדור הצפוני","השם משמר את מיקומו כחודש התשיעי בלוח הרומי הקדום."],"דצמבר":["12 והאחרון בלוח הגרגוריאני","December מן הלטינית decem – עשר","סביבו חל יום היפוך החורף בחצי הכדור הצפוני","השם משמר את מיקומו כחודש העשירי בלוח הרומי הקדום."]};
const monthExtra={"תשרי":"במקרא הוא מכונה החודש השביעי. ריבוי החגים בתשרי הופך אותו לאחד החודשים העמוסים ביותר בלוח העברי.","חשוון":"במקרא נזכר השם הקדום בּוּל לחודש המקביל. חשוון יוצא בדרך כלל באוקטובר–נובמבר, בתקופת הסתיו.","כסלו":"חנוכה מתחיל בכ״ה בכסלו ונמשך שמונה ימים, ולכן סיומו חל לעיתים בטבת. כסלו חל בדרך כלל בנובמבר–דצמבר.","טבת":"טבת חל בדרך כלל בדצמבר–ינואר, בעיצומו של החורף בחצי הכדור הצפוני. ראש החודש עשוי לחפוף לימים האחרונים של חנוכה.","שבט":"ט״ו בשבט נקבע במסורת הרבנית כראש השנה לאילנות. בישראל החודש חל בתקופת החורף, כאשר הטבע מתחיל להראות סימני התחדשות.","אדר":"במסורת היהודית אדר מזוהה במיוחד עם שמחת פורים. בשנה מעוברת החודש הנוסף מאפשר ללוח הירחי להישאר מתואם עם עונות השנה.","ניסן":"במקרא הוא נקרא גם חודש האביב, ופסח חייב לחול בעונת האביב. ניסן קשור באופן מרכזי לסיפור יציאת מצרים.","אייר":"במקרא נזכר עבור החודש השני גם השם זִו. אייר הוא החודש העברי היחיד שכל ימיו נמצאים בתוך ספירת העומר.","סיוון":"שבועות חל לאחר השלמת ספירת העומר. במסורת הרבנית החג נקשר גם למעמד מתן תורה בהר סיני.","תמוז":"השם תמוז קשור לדומוזי, דמות מן התרבות המסופוטמית הקדומה. מי״ז בתמוז מתחילה תקופת בין המצרים, הנמשכת עד תשעה באב.","אב":"תשעה באב הוא יום צום ואבל מרכזי לזכר חורבן בתי המקדש. לעומתו, ט״ו באב קיבל במסורת אופי חגיגי ושמח יותר.","אלול":"אלול הוא חודש ההכנה לראש השנה וליום הכיפורים. מנהגי התקופה משתנים בין הקהילות, ובכללם סליחות ותקיעת שופר.","ינואר":"יאנוס תואר באמנות הרומית לעיתים כבעל שני פנים, המסמלים מבט לעבר ולעתיד. הדימוי מתאים לרעיון של מעבר משנה ישנה לחדשה.","פברואר":"פברואר הוא היחיד שאורכו משתנה בשנה מעוברת. בלוח הגרגוריאני שנה שמתחלקת ב־100 אינה מעוברת, אלא אם היא מתחלקת גם ב־400.","מרץ":"שמו הלטיני היה Martius. העובדה שמרץ עמד בראש הלוח הרומי הקדום מסבירה מדוע שמות ספטמבר–דצמבר משמרים מספרים הנמוכים בשניים ממקומם כיום.","אפריל":"השם הלטיני Aprilis עתיק, אך מקורו המדויק שנוי במחלוקת. לכן עדיף לראות בהסברים שונים לשם השערות ולא עובדה ודאית.","מאי":"השם הלטיני של החודש הוא Maius. מאיה נקשרה במסורת הרומית לצמיחה ולטבע, דבר שמתאים לעונת האביב בחצי הכדור הצפוני.","יוני":"השם הלטיני Junius נקשר בדרך כלל ליונו. יוני כולל את יום היפוך הקיץ בחצי הכדור הצפוני, שבו מתקבל פרק האור היומי הארוך ביותר.","יולי":"לפני שינוי שמו נקרא החודש Quintilis, כלומר החמישי. שינוי השם ליוליוס קיסר משמר עד היום את שמו של המנהיג הרומי בלוח.","אוגוסט":"לפני שנקרא על שם אוגוסטוס שמו היה Sextilis, כלומר השישי. שינויי הסדר בלוח מסבירים מדוע משמעות השם הישן אינה תואמת עוד את מספר החודש.","ספטמבר":"septem פירושו שבע בלטינית. כאשר ינואר ופברואר קיבלו את מקומם בתחילת השנה, ספטמבר הפך לחודש התשיעי אך שמו העתיק נשאר.","אוקטובר":"octo פירושו שמונה בלטינית. אוקטובר הוא דוגמה נוספת לכך ששמות החודשים שמרו את המספור של הלוח הרומי הקדום.","נובמבר":"novem פירושו תשע בלטינית. כיום זהו החודש האחד־עשר, אך שמו ממשיך לשקף את מקומו הקדום.","דצמבר":"decem פירושו עשר בלטינית. אף שכיום הוא החודש השנים־עשר, שמו הוא שריד לתקופה שבה השנה הרומית החלה במרץ."};
const data={
hebrew:{title:"הלוח העברי",intro:"לוח ירחי־שמשי. החודשים נקבעים לפי מחזור הירח, והשנים מותאמות לעונות באמצעות שנים מעוברות.",months:[
["תשרי","30 ימים","החודש השביעי במניין החודשים מניסן. בא׳ בתשרי חל ראש השנה וממנו מונים את השנים; בחודש חלים גם יום הכיפורים וסוכות."],
["חשוון","29 או 30 ימים","נקרא גם מרחשוון. חודש סתווי שבדרך כלל אין בו חגים מקראיים."],
["כסלו","29 או 30 ימים","חודש שבו מתחיל חג החנוכה בכ״ה בכסלו."],
["טבת","29 ימים","חודש חורפי. צום עשרה בטבת חל בו."],
["שבט","30 ימים","ט״ו בשבט, ראש השנה לאילנות, חל בחודש זה."],
["אדר","29 ימים בשנה רגילה; בשנה מעוברת: אדר א׳ 30 ואדר ב׳ 29","חודש חג הפורים. בשנה מעוברת נוסף אדר א׳ לפני אדר ב׳, ופורים חל באדר ב׳."],
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
  speechSynthesis.cancel();
  document.querySelector(".modalPanel").scrollTop=0;
  modalTitle.textContent=name;
  modalDays.textContent=days;
  const d=monthDetails[name]; modalDetails.innerHTML='<section class="detailSection"><h3>מידע על החודש</h3><p>'+info+'</p></section>'+ (d?'<section class="detailSection"><h3>מיקום בלוח</h3><p>'+d[0]+'</p></section><section class="detailSection"><h3>מקור השם</h3><p>'+d[1]+'</p></section><section class="detailSection"><h3>חגים, מועדים ועונות</h3><p>'+d[2]+'</p></section><section class="detailSection"><h3>כדאי לדעת</h3><p>'+d[3]+'</p></section>':'')+(monthExtra[name]?'<section class="detailSection"><h3>עוד על החודש</h3><p>'+monthExtra[name]+'</p></section>':'');
  const linked=holidays.filter(h=>h.months.includes(name));
  if(linked.length){
    const section=document.createElement("section");
    section.className="detailSection";
    const heading=document.createElement("h3");heading.textContent="לגלות את החגים";section.appendChild(heading);
    const note=document.createElement("p");
    note.textContent=data.gregorian.months.some(m=>m[0]===name)?"חגים שעשויים לחול בחודש זה, לפי השנה והמסורת.":"חגים ומועדים בחודש זה.";
    section.appendChild(note);
    const links=document.createElement("div");links.className="holidayLinks";
    linked.forEach(h=>{const b=document.createElement("button");b.className="speak";b.textContent=h.icon+" "+h.name;b.onclick=()=>openHoliday(h,()=>openMonth(name,days,info));links.appendChild(b)});
    section.appendChild(links);modalDetails.appendChild(section);
  }
  currentMonthText=name+". "+days+". "+info+(d?". מיקום בלוח: "+d[0]+". מקור השם: "+d[1]+". חגים, מועדים ועונות: "+d[2]+". כדאי לדעת: "+d[3]:"")+(monthExtra[name]?". עוד על החודש: "+monthExtra[name]:"");
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
  document.querySelector("#holidaysView").classList.remove("active");
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
const holidaysView=document.querySelector("#holidaysView");
function openHolidays(group){
  document.querySelector("#holidaysTitle").textContent=group==="jewish"?"חגים ומועדים יהודיים":"חגים ומועדים נוצריים";
  document.querySelector("#holidaysIntro").textContent=group==="jewish"?"המועדים לפי הלוח העברי. החגים מתחילים בערב הקודם; חלק מהתעניות מתחילות בבוקר.":"המועדים משתנים לפי השנה, הלוח והמסורת הכנסייתית. מוצגים מועדים כלליים, ולא תאריכים לשנה מסוימת.";
  const cards=document.querySelector("#holidayCards");cards.replaceChildren();
  holidays.filter(h=>h.group===group).forEach(h=>{
    const b=document.createElement("button");b.type="button";b.className="card monthButton";
    const title=document.createElement("h3");title.textContent=h.icon+" "+h.name;
    const date=document.createElement("div");date.className="meta";date.textContent=h.date;
    const hint=document.createElement("div");hint.className="openHint";hint.textContent="לחצו לפרטים ←";
    b.append(title,date,hint);b.onclick=()=>openHoliday(h);cards.appendChild(b);
  });
  home.classList.remove("active");cal.classList.remove("active");holidaysView.classList.add("active");scrollTo(0,0);
}
function openHoliday(h,returnToMonth){
  speechSynthesis.cancel();
  modalTitle.textContent=h.icon+" "+h.name;modalDays.textContent=h.date;modalDetails.replaceChildren();
  const details=[...(h.original?[["שם במסורת הנוצרית",h.original]]:[]),["משמעות החג",h.meaning],["מקור היסטורי ודתי",h.origin],["מנהגים וסמלים",h.customs],["מסורות ומועדים",h.traditions]];
  details.forEach(([title,text])=>{const s=document.createElement("section");s.className="detailSection";const heading=document.createElement("h3");heading.textContent=title;const p=document.createElement("p");p.textContent=text;s.append(heading,p);modalDetails.appendChild(s)});
  if(returnToMonth){const b=document.createElement("button");b.className="speak";b.textContent="← חזרה למידע על החודש";b.onclick=returnToMonth;modalDetails.appendChild(b)}
  currentMonthText=h.name+". "+h.date+". "+details.map(([title,text])=>title+": "+text).join(". ");
  modal.hidden=false;document.body.classList.add("modalOpen");document.querySelector(".modalPanel").scrollTop=0;document.querySelector("#modalClose").focus();
}
document.querySelectorAll("[data-holidays]").forEach(b=>b.onclick=()=>openHolidays(b.dataset.holidays));
document.querySelector("#holidaysBackBtn").onclick=()=>{speechSynthesis.cancel();holidaysView.classList.remove("active");home.classList.add("active");scrollTo(0,0)};
