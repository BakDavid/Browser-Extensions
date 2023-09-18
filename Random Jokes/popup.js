const jokes = [
    `- Mi a tömör ezüst vegyjele?
- Ag.rar`,
    `- Miért nem eszik reggel banánt a rendőr?
- Mert a banán déligyümölcs.`,
    `- Miért nem beszélnek egymással a gumimacik?
- Haribó!`,
    `- Hogy hívják az internetes kísértetet?
- Pont húúúúúúúúú!`,
    `- Miért nem ment Noé horgászni?
- Mert csak 2 gilisztája volt.`,
    `- Hogy készítik a tejport?
- Nem adnak inni a tehénnek.`,
    `- Mit kapunk, ha egy kör alakú területre építünk kastélyt?
- Körtelekvárt.`,
    `- Mikor mondja a kínai, hogy jó napot?
- Amikor megtanul magyarul.`,
    `- Mi történik, ha két szőke nő egymás felé rohan?
- Eltörik a tükör.`,
    `- Hogy törte össze az autóját a leprás?
- A gázpedálon felejtette a lábát!`,
    `- Miért nem visznek fel lovakat a világűrbe?
- Mert elhúznák a göncölszekeret!`,
    `- Mi az, csokis, és szirénázik?
- Danonino!`,
    `- Melyik bátor menti meg a gyerekeket?
- Inkubátor!`,
    `- Miért jó az EMO-s torta?
- Mert felvágja magát!`,
    `- Ki az? Se keze se lába és minden este a kocsmában a sörét issza?
- Törzsvendég!`,
    `Egy kéményseprő egyszer egy tükör elé áll és azt mondja:
- A koromhoz képest nem is nézek ki olyan rosszul!`,
    `Egy járókelőt megállít az utcán egy ember:
- Elnézést, megmondaná, hogy hogyan jutok el a postára?
- Az attól függ. Kocsival van?
- Nem.
- Akkor gyalog.`,
    `- Hogy hívják a rühes macskát?
- Whis Cat!`,
    `- Miért nem lehet a járdán zenélni?
- Mert a járda nem hangszer.`,
    `Két informatikus hallgató beszélget:
- Tudod hány csaj lakik a kollégiumban?
- 1024.
- Ez biztos?
- Persze. Kettő a tizediken.`,
    `- Hogy nevet a programozó?
- If if if if...`,
    `Az egypúpú tevét az különbözteti meg a kétpúpútól, aki akarja.`,
    `- Milyen a cigány paradicsomleves?
- Piros tányérban forró víz!`,
    `- Öltözz, asszony, megyek a kocsmába!
- Csak nem viszel engem is?
- Dehogy viszlek, kikapcsolom a fűtést.`,
    `- Mit mond a brazil táncosnő, ha nem akar gyereket?
- Számbá!`,
    `Két lada áll egymás mellett a parkolóban. Melyiknek van köze az irodalomhoz?
- A bal-ladának!`,
    `- Mit mond a vak DJ?
- Nem látom a kezeket!`,
    `- Halló?
- Elnézést, ez a kilenc, három, négy, három, hét, hét, nyolc, öt, négy?
- Nem, igen, nem, igen, igen, nem, nem, igen, igen, igen`,
    `Pistike éjjel sírásra ébred.
Elindul a konyha felé, mert onnan hallja.
Kinyitja a hűtőt, és látja hogy csak a fasírt!`,
    `- Hogy hívták David Hasselhof autóját a Knight Rider-ben?
- Kit.
- Hát David Hasselhof autóját a Knight Rider-ben.`,
    `- Doktor úr, a bátyám erősen köhög, és láza van.
- Magas?
- Igen, nálam egy jó fejjel magasabb.`,
    `-Miért megy a kátrány a focimeccsre???
-Szurkolni!`,
    `-Melyik az az állat, aminek a 2/3-a zsír?
-A zsiráf!`,
    `- Hogy hívják az indián temetőt?
- Tolltartó.`,
    `- Mi a bolygó ellentétje?
- Girl, don't go!`,
    `Mennyi az anyós ideális testsúlya?  
- 3,5 kg urnával.`,
    `Hogy öltöznek az eszkimók?
- ???
- Nagyon gyorsan!`,
    `Mi lesz a kecske és a kacsa kereszteződéséből?
- ???
- McDonalds`,
    `- Kislányom, teljesen egyedül oldottad meg ezt az egyenletet?
- Nem. Két ismeretlennel.`,
    `- Mondja Kovács bácsi, maga mit szokott csinálni, ha este nem tud elaludni?
- Én? Elszámolok háromig, és már alszom is.
- Tényleg? Csak háromig?
- Háromig, de van úgy, hogy fél négyig is.`,
    `- Hogy hívták Bem apót születése előtt 9 hónappal?
- Bemondó!`,
    `Jani bácsit megkérdezik:
- Úgy hallottuk Jani bácsi, beszűkült a szókincse!
- Faszt!`,
    `Mi a hasonlóság a marha pásztor és a hegymászó között?
- Mind a kettő marhára vigyáz...`,
    `-Mi van a tömegsír fölött?
-???
-Csapatszellem!`,
    `Mi kell a babázáshoz?
- ???
- Bab meg víz.`,
    `Pistike megy haza, és már az ajtóban hallja bentről hogy:
- áááááááááá.
Óvatosan benyit, megy a hang irányába, egyre hangosabb:
- ááááááááááá.
Belép a fürdőbe és látja, hogy a ruhák áznak a kádban.`,
    `- Mit mond a Télapó, amikor átgázol egy emberen a szánjával?
- Ami a szíveden az a szánom.`,
    `- Miért úszik a hal?
- Mert nem ér le a lába!`,
    `- Mama! Most, hogy 16 éves vagyok, használhatok szemfestéket, rúzst, alapozót, pudert, és felvehetek miniszoknyát és magassarkú cipőt?
- Azt hiszem nem, Pistike!`,
    `Egy részeg vizel a parkban. Egy nő elmegy mellette, és azt mondja:
- Micsoda állat!
- Nyugi, nyugi, fogom!`,
    `Miből építették a trójai falovat?
- Kibaszásból!`,
    `- Miért nem vesz a rendőr zsebszámológépet?
- Mert fejből is tudja, hogy hány zsebe van...`,
    `-Hogy hívják a katonai operációs rendszert?
-CommanDos!`,
    `- Hogy hívják az olvasás-zavarban szenvedő CD-olvasót?
- DISClexia!`,
    `- Hol terem a CD ROM?
- DISCréten.`,
    `- A paraméter azt méri hogy mekkora a para?`,
    `- Miben fürdik a bárány?
- BariKÁD!`,
    `- Miért mennek a nők Indiába?
- Ott fekszik a hím alája.`,
    `- Hogyan tudod az integrált hangkártyát eltávolitani?
- Deriválod`,
    `- Hogy hívják?
- Kovács Gültem.
- Hm??????
- Amikor megszülettem, anyám azt mondta apámnak: Legyengültem.
Mire apám: Legyen!`,
    `- Hogy hívják a fázós kutyát?
- Coldrex!`,
    `Étteremben:
- Cigánypecsenye van?
- Van, de akkor nincs zene...`,
    `- Hogy hívják a halott csecsemőt?
- Kisdead.`,
    `- Mi az, zöld, bolyhos, négy lába van és ha a fáról rádesik meghalsz?
- Biliárdasztal!`,
    `- Melyik a három legöregebb állat a világon?
- A pingvin, a fehértigris és a zebra, mert azok még fekete-fehérek.`,
    `Kisfiú sír az utcán. Odamegy hozzá egy járókelő:
- Miért sírsz kisfiam?
- Mert a szüleim leküldtek kolbászért, éés nem tudom, hogy mit mondtak: "Gyula, hozz csabait!", vagy "Csaba, hozz gyulait!".
- Mi sem egyszerűbb, hogy hívnak kisfiam?
- Gábor.`,
    `Mi lesz ha a zsidó álló fasszal nekimegy a falnak?
- Betörik az orra.`,
    `Aki éjjel legény a talpán az legyen nappalis...... vagy levelezős!`,
    `- Mért nem origamizik a Batu Kán?
- Mert nem hajt a tatár`,
    `-Miért nem lehet a fürdőszobában közösülni?
- ???
- Mert ott már a Domesztosz!`,
    `Mit csinálnak a várvédők, ha unatkoznak?
Elfoglalják magukat. `,
    `Mért ütközik két repülő?
Mert egy nem tud.`,
    `- Érdekes, hogy minden amerikai film végén ugyanaz a felirat van.
- A stáblistára gondolsz?
- Nem, Ady Endre.`,
    `-Jean! Kérem essen nekem egy szamurájkarddal!
-De miért, Uram?!
-Mert jóvágású akarok lenni.`,
    `-Hogy hivják a cukrásztanulók vizsgadolgozatát?
-???
-Desszertáció.`,
    `-Hogy hivják a jós fiát?
-???
-Jóska.`,
    `-Hogy hivják a papok edzőjét?
-???
-Tréningatya.`,
    `-Hogy hivják a süket macskát?
-???
-Sehogy, mert úgyse hallja.`,
    `Az agresszív kismalac áthajt a piroson. Mégállitja a rendőr:
-Kismalac ez a piros lámpa 5000 lesz.
-DRÁGA!! Nem kell....`,
    `-Mi az? Zöld és nehéz lenyelni?
???
-Kaktusz!`,
    `-Doktor úr! Kérem hozzon néhány téglát.
-De mégis minek??
-Hogy hamarabb felépülhessek`,
    `- Miért jó a gél memóriája?
- Mert ami gél, el nem felejti...`,
    `-Mi a különbség a kisbaba és a mák között?
???
-A mák nem sir ha darálják.`,
    `-Hol lakik a legtöbb cukiság?
???
-Arizónában.`,
    `-Mit kér a szőkenő a svédasztalnál?
???
-Tolmácsot.`,
    `-Miért zsíros a tej?
???
-Hogy ne nyikorogjon a tehén fejés közben.`,
    `-Mit mondd az egyik fal a másiknak?
???
-A sarkon találkozunnk.`,
    `-Miért hivják a földönkivűlit Alien nek?
???
-Mert a földön nem él ilyen!`,
    `-Hogy hívják az idős bűvészt?
???
-Csiri-bá`,
    `-Áll egy tehén a buszmegállóba.Ha jőn a busz hova száll fel?
???
-LEGELŐRE`,
    `- Miaz?? Sárga és 5 betű?????
?????
-Sárga`,
];

document.addEventListener("DOMContentLoaded", function () {
    const jokeDisplay = document.getElementById("jokeDisplay");
    const generateJokeButton = document.getElementById("generateJoke");

    function getRandomJoke() {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        jokeDisplay.value = jokes[randomIndex];
    }

    generateJokeButton.addEventListener("click", getRandomJoke);
    getRandomJoke();
});
