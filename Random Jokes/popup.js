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
    `- Jó napot szomszéd! Isteni volt az eper, amit tegnap küldött kóstolónak. Maga is trágyázza?
- Hát... én inkább cukrozom, de ízlések és pofonok...`,
    `- Jean, hallotta, hogy tegnap elütöttek egy kéményseprőt?
- Hát ez rettenetes! Már a háztetőn sincs biztonságban az ember!`,
    `- Mi a különbség az ír temetés és az ír lakodalom között?
- ??? 
- A temetésen eggyel kevesebb a részeg.`,
    `- Miért füstöl a kórház kéménye?
- ??? 
- Mert fő az egészség!`,
    `Kovács és felesége kirándulni megy. Kovács megkérdi a vámostól:
- Aranyat lehet átvinni?
- Lehet.
- És 120 kilót?
- Azt nem.
Ekkor odafordul a feleségéhez:
- Hallod aranyom? Te itthon maradsz.`,
    `- Mi a hasonlóság a láncfűrész és a tangabugyi között?
- ??? 
- Egy rossz mozdulat és két ujjad megy a picsába!`,
    `- Hogy hívják Beckham magyar barátnőjét?
- ??? 
- Mencs Eszter.`,
    `Istálló körül tevékenykedik a székelybácsi. A szomszéd érdeklődik:
- Mit csinálsz, Pista?
- Hányom a ganyét!
- Hát mi a fenét ettél?`,
    `- Mi a címe az arab pornófilmnek?
- ??? 
- Ne menj el KORÁN!`,
    `- Na és, hogy vezet a lányod?
- Sakkosan.
- Sakkosan? Hogy érted?
- Egyszer egy gyalogost, másszor egy futót üt el.`,
    `- Meghal a gazdag bankár. A gyászmenetben a skót sír a legkeservesebben. A mellette haladó férfi megkérdezi:
- Talán a rokona volt a bankár úrnak?
- Sajnos nem. Azért sírok ennyire.`,

    `- Egy óra alatt hét korsó sört hajtottál le. Én még vízből sem tudnék ennyit meginni.
- Hát vízből én sem.`,

    `- Szülészeten a nővér kérdezi szülés után a kismamát:
- Asszonyom, beengedhetem az apukát?
- Isten ments! Mindjárt itt a férjem!`,

    `- Jean, meglocsolta már a kinti virágokat?
- Nem uram, hiszen esik az eső!
- Hát akkor vigyen magával esernyőt!`,

    `- Miért küldték vissza Etiópiából a gyógyszersegélyt?
- Mert az volt a dobozokra írva, hogy étkezés után kell bevenni...`,

    `- Jean! Gyújtsa föl a szomszéd grófnő házát!
- De minek, uram?
- Mert háztűznézőbe akarok menni hozzá.`,

    `- Az újonc katonától kérdezi az őrmester:
- Na fiam, milyen volt az első napja?
- Uram, nem emlékszem rá! Akkor még egészen kicsi csecsemő voltam.`,

    `- Mi lesz, ha keresztezünk egy kígyót egy kenguruval?
- Ugrókötél.`,

    `- Tudod mennyibe kerül egy Aspirin és egy sör?
- Tizenegy forint. Az Aspirin hat, a sör meg üt!`,

    `- Jean, kössön egy spárgát az anyósomra!
- Miért, uram?
- Sárkányt akarok eregetni!`,

    `- Hogy állítja meg az indián a kamiont?
- Rálép a fékre!`,

    `- Jean! Mi volt ez a csattanás?
- Egy autó bekanyarodott a garázsba!
- De hát nálunk nincs is garázs!
- Hát ez volt a csattanás!`,

    `- Miről lehet felismerni a zsidó repülőgépet?
- Az orráról.`,

    `- Mi hiányzik egy román repülőgépről?
- Minden, ami mozdítható.`,

    `- Ismertem egy embert akinek az egyik lába fából volt, úgy hívták, hogy Horváth Tamás.
- És hogy hívták a másik lábát?`,

    `- Ha alkalom adódna rá, lefeküdnél egy kínai nővel?
- Igen.
- És egy négerrel?
- Igen.
- És egy néger nővel?`,

    `- Mi lenne, ha harmincszor gyorsabban forogna a Föld?
- Minden nap fizetést kapnánk és a nők elvéreznének.`,

    `- Mi az abszolút semmi?
- A hámozott lufi!`,

    `- Miért dől el a fal, ha a szőke nő nekidől?
- Mert okos enged...`,

    `- Mi az? Egy csontváz a bokorban?
- A tavalyi bujócska-verseny győztese!`,

    `- Mi a különbség a nudista strand és a sima strand között?
- A nudista strandon nincsenek zsebtolvajok.`,
    `- Hogy hívják az indián benzinkutast?
- Töltőtoll.`,

    `- Mi az abszolút lehetetlen?
- Hímvesszőből kosarat fonni.
- És mi van, ha mégis sikerül?
- Lesz egy fasza kosarad...`,

    `- Mit csinál a skinhead, ha elalszik mellette egy cigány?
- Meggyújtja még egyszer!`,

    `- Beteg az uraság, ezért azt mondja Jeannak:
- Jean, hozzon néhány téglát!
- Minek uram?
- Hogy hamarabb felépülhessek.`,

    `- Jean! Vigye le az ágyamat a pincébe!
- Miért uram?
- Mert mélyen szeretnék aludni.`,

    `- Hogy néz ki Tarzan, miután nekimegy a fának?
- Torzan!`,

    `- Gazsi vágtat le bicajjal a hegyről. Elé ugrik egy rendőr:
- Állj meg, Gazsi! Nincsen lámpád!
- Ugorj, rendőr! Fékem sincsen.`,

    `- Meg tudná mondani durván mennyi pénz van a bankszámlámon?
- 50.000 bazdmeg!`,

    `- Mórickát festeni küldi az apukája:
- Fiam, itt van az ecset és a festék, fesd újra az ablakokat.
20 perc múlva jön is vissza Móricka:
- Apu, a kereteket is lefessem?`,

    `- Mi az? Vörös, nagy, öt ágú és még Sztálin is meghajolt előtte?
- Alacsony csillár a moszkvai pártházban!`,

    `- Hogy tudod megakadályozni, hogy egy férfi szexelni akarjon veled?
- Menj hozzá feleségül.`,

    `- Mi a sebész kedvenc étele?
- Sebesült.`,

    `- Este hazamegy a feleség. Így szól a férjéhez:
- Van egy jó és egy rossz hírem. Melyiket mondjam előbb?
- A jót.
- Működött a légzsák!`,

    `- Jean, miért tette az újságokat a hűtőbe?
- Hogy a hírek frissek maradjanak, uram!`,

    `- Hű, de csinos a Béla felesége!
- Csinosnak csinos, de nem hű!`,

    `- Mit vesz az anyós feleslegesen?
- Lélegzetet.`,

    `- Mi a különbség egy ronda és egy gyönyörű nő között?
- Egy üveg tequila.`,

    `- Mosópor reklám:
- Nézze milyen ragyogóan fehér lett ez az ing!
- Szép, szép de nekem kockásan jobban tetszett...`,

    `- Hogy ejtik az anyóst?
- Két kézzel a tizedikről!`,

    `- Két rendőr barchobázik:
- Lehet vele repülni? - kérdezi az első.
- Hülye vagy, egy hamutartóval?`,

    `- Mi Palacsinta ország fovárosa?
- Lekváros.`,

    `- Én ha az anyósommal veszekszem, mindig enyém az utolsó szó!
- És mit mondasz neki?
- Igen mama!`,

    `- Mit csinál a magyar futball-válogatott, ha megnyerik a foci VB-t?
- Kikapcsolják a Playstation-t.`,

    `- Móricka, mondd meg, mi történt 1802-ben?
- Akkor született Kossuth Lajos.
- Nagyon jó. És 1805-ben
- Akkor lett hároméves.`,

    `- Mama, az iskolában azt mondták, hogy állandóan hazudok!
- De Pistike, te még nem is jársz iskolába!`,
    `- Hogy készül a mákos bab?
- Véletlenül kettőt lapozol a szakácskönyvben.`,

    `- Egy lány elmegy a jósnőhöz:
- Két férfi is szerelmes belém. Melyik lesz közülük a szerencsés?
- A Józsi fogja feleségül venni. Béla lesz a szerencsés.`,

    `- A férj hazamegy a vadászatból és a felesége kérdi, hogy van-e valami? Mire a férj:
- Képzeld, elejtettem egy nyulat.
- Na és? Hol van? - kérdi a feleség.
- Mondom hogy elejtettem!`,

    `- Hogy lehet felismerni a kezdő tűzoltót?
- ELÉG könnyen...`,

    `- Hogy hívják az afrikai buszsofőrt?
- Busman.`,

    `- Jean, hozzon egy szövőszéket!
- Minek, uram?
- Nagy terveket akarok szőni.`,

    `- A tanító bácsi korholja Mórickát:
- Tudod fiam, én a te korodban nem mertem volna hazudni.
- Miért, a tanító bácsi hány éves korában kezdte?`,

    `- Móricka, ragozd el a menni igét!
- Én megyek....... te mész....... izéé..... ő megy......
- Egy kicsit gyorsabban!
- Én futok, te futsz, ő fut...`,

    `- Szólt valamit Jean?
- Nem szóltam uram.
- Akkor jól hallottam!`,

    `- Mi a legbiztosabb módszer a tejtartósításra?
- Benne kell hagyni a tehénben.`,

    `- Két barát beszélget:
- Miért sírsz?
- Elvittem az anyósom az orvoshoz, aki azt mondta, hogy már csak 28 napja van hátra.
- Nyugalom, meglátod, hogy az a 28 nap hamar elrepül!`,

    `- Mit csinál a terminátor éneklés előtt?
- Megköszörüli a torkát.`,

    `- Jean! Szédülök! Mit csináljak?
- Talán szálljon ki a betonkeverőből, Uram!`,

    `- A szőke nő bemegy a gyógyszertárba.
- Mit kér?
- A gyerekemnek vitamint.
- De milyet? A-t, B-t, vagy C-t?
- Mindegy, még úgysem tud olvasni!`,

    `- Cseng a telefon a tűzoltóságon.
- Jöjjenek azonnal, kigyulladt a házam!
- Próbálta már vízzel lelocsolni?
- Igen.
- És sikerült eloltani?
- Nem.
- Akkor fölösleges kimennünk, mi is csak ezt tudnánk csinálni.`,

    `- Mit csinálsz errefelé Béla?
- Látod ott azt a szőke nőt?
- Aki éppen rágyújt? Igen, látom.
- Képtelen vagyok lerázni. Már lassan egy órája megy előttem!`,

    `- Ki az abszolút bátor?
- Aki egyszerre veszi be az altatót és a hashajtót!`,

    `- Megy az anyós biciklivel a falu vége felé. Útközben találkozik a vejével. Kérdi a vej:
- Hová, hová, muter?
- A temetőbe, fiam.
- Hát a bringát ki hozza haza?`,

    `- Miért sírsz, Pistike?
- Mert a tanító bácsi intőt és verést ígért a testvéremnek, amiért az egy békát dugott a táskájába.
- És ez neked miért fáj?
- Mert ikrek vagyunk és a tesóm már hazament.`,

    `- Az anyós látogatóba megy a vejéhez.
- Meddig marad anyuka? - kérdezi a veje.
- Hát fiam, ameddig szívesen láttok.
- Jaj, anyuka már a kávét se tetszik megvárni?`,

    `- Jean, a tojásom!
- Hozom uram!
- Ne hozza, vakarja!`,
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
