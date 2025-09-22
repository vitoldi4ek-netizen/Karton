// function scroll2(duration, position) {
//     var beginPosition = 0,
//         step = duration/position,
//         scrollInterval = setInterval(function() {
//             if (beginPosition<= position){
//                 window.scroll(0, beginPosition);
//                 beginPosition += 1;
//             } else clearInterval(scrollInterval);
//         }, step);
// }

// function scrollToSmoothly(pos, time){
// /*Time is only applicable for scrolling upwards*/
// /*Code written by hev1*/
// /*pos is the y-position to scroll to (in pixels)*/
//      if(isNaN(pos)){
//       throw "Position must be a number";
//      }
//      if(pos<0){
//      throw "Position can not be negative";
//      }
//     var currentPos = window.scrollY||window.screenTop;
//     if(currentPos<pos){
//     var t = 1000;
//        for(let i = currentPos; i <= pos; i+=10){
//        t+=10;
//         setTimeout(function(){
//         window.scrollTo(0, i);
//         }, t/2);
//       }
//     } else {
//     time = time || 2;
//        var i = currentPos;
//        var x;
//       x = setInterval(function(){
//          window.scrollTo(0, i);
//          i -= 10;
//          if(i<=pos){
//           clearInterval(x);
//          }
//      }, time);
//       }
// }


var philosophyIterator = 0;

function philosophy() {

	var spoilerContent = "philosophyContent";
	var closeWord = "philosophyClose";
	var openWord = "philosophyOpen";

	if (philosophyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		philosophyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		philosophyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Филосо́фия (др.-греч. φιλοσοφία дословно «любомудрие; любовь к мудрости») — особая форма познания мира, вырабатывающая систему знаний о наиболее общих характеристиках, предельно-обобщающих понятиях и фундаментальных принципах реальности (бытия) и познания, бытия человека, об отношении человека и мира. К задачам философии на протяжении её истории относились как изучение всеобщих законов развития мира и общества, так и изучение самого процесса познания и мышления, а также изучение нравственных категорий и ценностей. К числу предельных философских вопросов относятся, например, вопросы «Познаваем ли мир?», «Существует ли Бог?», «Что такое истина?», «Что такое хорошо?», «Что есть Человек?», «Что первично — материя или сознание?» и другие.</p><br><p>Хотя иногда философию определяют более узко, в качестве науки с определённым предметом изучения, такой подход встречает возражения современных философов, настаивающих на том, что философия представляет собой скорее мировоззрение, общий критический подход к познанию всего сущего, который применим к любому объекту или концепции. В этом смысле каждый человек хотя бы изредка занимается философией.</p><br><p>Философия фактически существует в виде множества различных философских учений, которые могут противостоять друг другу, но при этом и дополняют друг друга.</p><br><p>Философия включает в себя множество предметных областей, от метафизики, эпистемологии, этики, эстетики, политической философии и философии науки до философии дизайна и философии кино.</p><br><p>Те области познания, для которых удаётся выработать ясную и работоспособную методологическую парадигму, выделяются из философии в научные дисциплины, как, например, в своё время из философии выделились физика, биология и психология.</p><br>Источник:</br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D0%BE%D1%81%D0%BE%D1%84%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Философия</a></br></br><span>Продолжительность 12:28</span></br><a target="_blank" href="https://www.youtube.com/watch?v=KshafAmECAo&vl=ru">https://www.youtube.com/watch?v=KshafAmECAo&vl=ru</a></br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/KshafAmECAo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br><span>Продолжительность 17:10</span><br><a target="_blank" href="https://www.youtube.com/watch?v=28c2MpFufDE">https://www.youtube.com/watch?v=28c2MpFufDE</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/28c2MpFufDE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		// document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).removeAttribute("class", "spoilerWord");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
		var element = document.getElementById(openWord);
		element.scrollIntoView();
		// var element = document.getElementById(openWord);
		// var  intElemScrollTop = element.scrollTop;
		// window.scrollTo({top: intElemScrollTop, behavior: "smooth"});
		// scroll2(200, element.offsetTop);

 		 // scrollToSmoothly(element.offsetTop, 500000);


	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
		var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var polymathIterator = 0;

function polymath() {

	var openWord = "polymathOpen";
	var spoilerContent = "polymathContent";
	var closeWord = "polymathClose";

	if (polymathIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		polymathIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		polymathIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Универсальный человек, энциклопедист, полимат (polymathēs, греч. πολυμαθής), человек эпохи Возрождения (англ. Renaissance man) — тот, чьи интеллектуальные способности, интересы и деятельность не ограничены одной областью знаний и единственной областью их применения, а также индивид, добивающийся ощутимых практических результатов по всем направлениям. Этот универсализм в самых ярких своих проявлениях подразумевает плодотворное сочетание разных или сразу нескольких гуманитарных и естественных наук или их направлений, — убедительные результаты в тех или иных точных науках, вместе с вкладом в философию, изобразительное искусство, архитектуру, беллетристику, поэзию, медицину и многие другие направления научного, художественного и сочинительского творчества. Многие античные и средневековые учёные были полиматами в современном понимании феномена. История знает достаточно много учёных или художников, чей талант проявился и в науке, и в искусстве.</p><br><p>Формально говоря, понятия «универсальный человек» (лат. homo universalis), «энциклопедист» могут относиться к кому-либо, кто много знает (так трактует, например, словарь Владимира Даля), но такой характеристике в современном языке более соответствует термин «эрудит».</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA">https://ru.wikipedia.org/wiki/Универсальный_человек</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var evolutionIterator = 0;

function evolution() {

	var spoilerContent = "evolutionContent";
	var closeWord = "evolutionClose";
	var openWord = "evolutionOpen";

	if (evolutionIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		evolutionIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		evolutionIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Биологическая эволю́ция (от лат. evolutio — «развёртывание») — естественный процесс развития живой природы, сопровождающийся изменением генетического состава популяций, формированием адаптаций, видообразованием и вымиранием видов, преобразованием экосистем и биосферы в целом.</p><br><p>Существует несколько эволюционных теорий, объясняющих механизмы, лежащие в основе эволюционных процессов. В данный момент наиболее общепринятой является синтетическая теория эволюции (СТЭ), являющаяся синтезом классического дарвинизма и популяционной генетики. СТЭ позволяет объяснить связь материала эволюции (генетические мутации) и механизма эволюции (естественный отбор). В рамках СТЭ эволюция определяется как процесс изменения частот аллелей генов в популяциях организмов в течение времени, превышающего продолжительность жизни одного поколения.</p><br><p>Чарлз Дарвин первым сформулировал теорию эволюции путём естественного отбора. Эволюция путём естественного отбора — это процесс, который следует из трёх фактов о популяциях: 1) рождается больше потомства, чем может выжить; 2) у разных организмов разные черты, что приводит к различиям в выживаемости и вероятности оставить потомство; 3) эти черты — наследуемые. Эти условия приводят к появлению внутривидовой конкуренции и избирательной элиминации наименее приспособленных к среде особей, что ведёт к увеличению в следующем поколении доли особей, черты которых способствуют выживанию и размножению в этой среде. Естественный отбор — единственная известная причина адаптаций, но не единственная причина эволюции. К числу неадаптивных причин относятся генетический дрейф, поток генов и мутации.</p><br><p>Несмотря на неоднозначное восприятие в обществе, эволюция как естественный процесс является твёрдо установленным научным фактом, имеет огромное количество доказательств и не вызывает сомнений в научном сообществе. В то же время отдельные аспекты теорий, объясняющих механизмы эволюции, являются предметом научных дискуссий. Открытия в эволюционной биологии оказали огромное влияние не только на традиционные области биологии, но и на другие академические дисциплины, например, антропологию, психологию. Представления об эволюции стали основой современных концепций сельского хозяйства, охраны окружающей среды, широко используются в медицине, биотехнологии и многих других социально значимых областях человеческой деятельности.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Эволюция</a><br><br><span>Продолжительность 3:51</span><br><a target="_blank" href="https://postnauka.ru/animate/88775">https://postnauka.ru/animate/88775</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/K-1ocxpiyOs" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var antropogenesisIterator = 0;

function antropogenesis() {

	var spoilerContent = "antropogenesisContent";
	var closeWord = "antropogenesisClose";
	var openWord = "antropogenesisOpen";

	if (antropogenesisIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		antropogenesisIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		antropogenesisIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Антропогене́з — часть биологической эволюции, которая привела к появлению человека разумного (лат. Homo sapiens), отделившегося от прочих гоминид, человекообразных обезьян и плацентарных млекопитающих, процесс историко-эволюционного формирования физического типа человека, первоначального развития его трудовой деятельности, речи. Изучением антропогенеза занимается множество наук, в частности антропология, палеоантропология, генетика, лингвистика.</p><br><p>В эволюционном контексте термин «человек» относится не только к ныне живущим людям, но и к представителям вымерших видов рода Homo. Кроме того, исследования антропогенеза распространяются на других гоминид, например, австралопитеков. Род Homo отделился от австралопитеков или подобных им гоминин около 2 млн лет назад в Африке. Существовало несколько видов людей, большинство из которых вымерло. К ним, в частности, относятся эректусы и неандертальцы.</p><br><p>Важнейшими этапами антропогенеза, отделившими человека от других гоминид и выделившими его из мира животных, были начало изготовления орудий труда, освоение огня и появление языка.</p><br><p>Начиная с H. habilis, люди использовали каменные орудия, всё более искусно изготовленные. В последние 50 тыс. лет технология и культура изменяются быстрее, чем в предшествующие эпохи.</p><br>Источник:</br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D1%82%D1%80%D0%BE%D0%BF%D0%BE%D0%B3%D0%B5%D0%BD%D0%B5%D0%B7">https://ru.wikipedia.org/wiki/Антропогенез</a></br><br><span>Продолжительность 19:39</span></br><a target="_blank" href="https://youtu.be/XdRT7Ba59r4">https://youtu.be/XdRT7Ba59r4</a></br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/XdRT7Ba59r4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var logicIterator = 0;

function logic() {

	var spoilerContent = "logicContent";
	var closeWord = "logicClose";
	var openWord = "logicOpen";

	if (logicIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		logicIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		logicIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Ло́гика (др.-греч. λογική — «наука о правильном мышлении», «способность к рассуждению» от др.-греч. λόγος — «рассуждение», «мысль», «разум») — раздел философии, нормативная наука о формах, методах и законах интеллектуальной познавательной деятельности, формализуемых на логическом языке. Поскольку это знание получено разумом, логика также определяется как наука о формах и законах мышления. Так как мышление оформляется в языке в виде рассуждения, частными случаями которого являются доказательство и опровержение, логика иногда определяется как наука о способах рассуждения или наука о способах доказательств и опровержений. Логика как наука изучает методы достижения истины в процессе познания опосредованным путём, не из чувственного опыта, а из знаний, полученных ранее, поэтому её также можно определить как науку о способах получения выводного знания.</p><br><p>В любой науке логика служит одним из основных инструментов. Кроме философии, логика также является подразделом математики, а булева алгебра одной из основ информатики.</p><br>Источник:</br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%B3%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Логика</a></br><br><span>Продолжительность 15:47</span></br><a target="_blank" href="https://youtu.be/_0JogO8i3Ls">https://youtu.be/_0JogO8i3Ls</a></br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/_0JogO8i3Ls" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var scienceIterator = 0;

function science() {

	var spoilerContent = "scienceContent";
	var closeWord = "scienceClose";
	var openWord = "scienceOpen";

	if (scienceIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		scienceIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		scienceIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных знаний о действительности. Основой этой деятельности является сбор фактов, их постоянное обновление и систематизация, критический анализ и, на этой основе, синтез новых знаний или обобщений, которые не только описывают наблюдаемые природные или общественные явления, но и позволяют построить причинно-следственные связи с конечной целью прогнозирования. Те гипотезы, которые подтверждаются фактами или опытами, формулируются в виде законов природы или общества.</p><br><p>Наука в широком смысле включает в себя все условия и компоненты соответствующей деятельности:</p><br><p>&#8226; разделение и кооперацию научного труда;</p><p>&#8226; научные учреждения, экспериментальное и лабораторное оборудование;</p><p>&#8226; методы научно-исследовательской работы;</p><p>&#8226; понятийный и категориальный аппарат;</p><p>&#8226; систему научной информации;</p><p>&#8226; всю сумму накопленных ранее научных знаний.</p><br><p>Науковедение — наука, изучающая науку.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%83%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Наука</a><br><br><span>Продолжительность 2:59</span><br><a target="_blank" href="https://postnauka.ru/animate/88821">https://postnauka.ru/animate/88821</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/UozHDCGZwWk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var physicsIterator = 0;

function physics() {

	var spoilerContent = "physicsContent";
	var closeWord = "physicsClose";
	var openWord = "physicsOpen";

	if (physicsIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		physicsIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		physicsIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Фи́зика (от др.-греч. φύσις — природа) — область естествознания: наука о простейших и вместе с тем наиболее общих законах природы, о материи, её структуре и движении. Законы физики лежат в основе всего естествознания.</p><br><p>Термин «физика» впервые фигурирует в сочинениях одного из величайших мыслителей древности — Аристотеля (IV век до нашей эры). Первоначально термины «физика» и «философия» были синонимами, так как в основе обеих дисциплин лежало стремление объяснить законы функционирования Вселенной. Однако в результате научной революции XVI века физика развилась в самостоятельную научную отрасль.</p><br><p>В современном мире значение физики чрезвычайно велико. Всё то, чем отличается современное общество от общества прошлых веков, появилось в результате применения на практике физических открытий. Так, исследования в области электромагнетизма привели к появлению телефонов и позже мобильных телефонов, открытия в термодинамике позволили создать автомобиль, развитие электроники привело к появлению компьютеров. Развитие фотоники способно дать возможность создать принципиально новые — фотонные — компьютеры и другую фотонную технику, которые сменят существующую электронную технику. Развитие газодинамики привело к появлению самолётов и вертолётов.</p><br><p>Знания физики процессов, происходящих в природе, постоянно расширяются и углубляются. Большинство новых открытий вскоре получают технико-экономическое применение (в частности в промышленности). Однако перед исследователями постоянно встают новые загадки, — обнаруживаются явления, для объяснения и понимания которых требуются новые физические теории. Несмотря на огромный объём накопленных знаний, современная физика ещё очень далека от того, чтобы объяснить все явления природы.</p><br><p>Общенаучные основы физических методов разрабатываются в теории познания и методологии науки.</p><br><p>В русский язык слово «физика» было введено М. В. Ломоносовым, издавшим первый в России учебник физики — свой перевод с немецкого языка учебника «Вольфианская экспериментальная физика» Х. Вольфа (1746). Первым оригинальным учебником физики на русском языке стал курс «Краткое начертание физики» (1810), написанный П. И. Страховым.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%B7%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Физика</a><br><br><span>Продолжительность 16:44</span><br><a target="_blank" href="https://youtu.be/9I3kcVqNmpA">https://youtu.be/9I3kcVqNmpA</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/9I3kcVqNmpA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var elemPartIterator = 0;

function elemPart() {

	var spoilerContent = "elemPartContent";
	var closeWord = "elemPartClose";
	var openWord = "elemPartOpen";

	if (elemPartIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		elemPartIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		elemPartIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Элемента́рная части́ца — собирательный термин, относящийся к микрообъектам в субъядерном масштабе, которые невозможно расщепить на составные части.</p><br><p>Следует иметь в виду, что некоторые элементарные частицы (электрон, нейтрино, кварки и т. д.) на данный момент считаются бесструктурными и рассматриваются как первичные фундаментальные частицы. Другие элементарные частицы (так называемые составные частицы, в том числе частицы, составляющие ядро атома — протоны и нейтроны) имеют сложную внутреннюю структуру, но, тем не менее, по современным представлениям, разделить их на части невозможно по причине эффекта конфайнмента.</p><br><p>Всего вместе с античастицами открыто более 350 элементарных частиц. Из них стабильны фотон, электронное и мюонное нейтрино, электрон, протон и их античастицы. Остальные элементарные частицы самопроизвольно распадаются по экспоненциальному закону с постоянной времени от приблизительно 1000 секунд (для свободного нейтрона) до ничтожно малой доли секунды (от 10−24 до 10−22 с для резонансов).</p><br><p>Строение и поведение элементарных частиц изучается физикой элементарных частиц.</p><br><p>Все элементарные частицы подчиняются принципу тождественности (все элементарные частицы одного вида во Вселенной полностью одинаковы по всем своим свойствам) и принципу корпускулярно-волнового дуализма (каждой элементарной частице соответствует волна де-Бройля).</p><br><p>Все элементарные частицы обладают свойством взаимопревращаемости, являющегося следствием их взаимодействий: сильного, электромагнитного, слабого, гравитационного. Взаимодействия частиц вызывают превращения частиц и их совокупностей в другие частицы и их совокупности, если такие превращения не запрещены законами сохранения энергии, импульса, момента количества движения, электрического заряда, барионного заряда и др.</p><br><p>Основные характеристики элементарных частиц: время жизни, масса, спин, электрический заряд, магнитный момент, барионный заряд, лептонный заряд, странность, изотопический спин, чётность, зарядовая чётность, G-чётность, CP-чётность.</p><br><p><a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/b/b0/Particle_overview-ru.svg"><div class="resp-wrapper"><img class="resp-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Particle_overview-ru.svg/1200px-Particle_overview-ru.svg.png" alt="Particle overview-ru.svg"></div></a><br>Автор: <a target="_blank" href="//commons.wikimedia.org/wiki/User:Headbomb" title="User:Headbomb">Headbomb</a> - <a target="_blank" href="//commons.wikimedia.org/wiki/File:Particle_overview.svg" title="File:Particle overview.svg">File:Particle overview.svg</a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a target="_blank" href="https://commons.wikimedia.org/w/index.php?curid=17177502">Ссылка</a></p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%BD%D0%B0%D1%8F_%D1%87%D0%B0%D1%81%D1%82%D0%B8%D1%86%D0%B0">https://ru.wikipedia.org/wiki/Элементарная_частица</a></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var chemistryIterator = 0;

function chemistry() {

	var spoilerContent = "chemistryContent";
	var closeWord = "chemistryClose";
	var openWord = "chemistryOpen";

	if (chemistryIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		chemistryIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		chemistryIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Хи́мия (от араб. کيمياء‎, произошедшего, предположительно, от египетского слова km.t (чёрный), откуда возникло также название Египта, чернозёма и свинца — «чёрная земля»; другие возможные варианты: др.-греч. χυμος — «сок», «эссенция», «влага», «вкус», др.-греч. χυμα — «сплав (металлов)», «литьё», «поток», др.-греч. χυμευσις — «смешивание») — одна из важнейших и обширных областей естествознания, наука о веществах, их составе и строении, их свойствах, зависящих от состава и строения, их превращениях, ведущих к изменению состава — химических реакциях, а также о законах и закономерностях, которым эти превращения подчиняются. Поскольку все вещества состоят из атомов, которые благодаря химическим связям способны формировать молекулы, то химия занимается, прежде всего, рассмотрением перечисленных выше задач на атомно-молекулярном уровне, то есть на уровне химических элементов и их соединений. Химия имеет немало связей с физикой и биологией, по сути граница между ними условна, а пограничные области изучаются квантовой химией, химической физикой, физической химией, геохимией, биохимией и другими науками.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B8%D0%BC%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Химия</a><br><br><span>Продолжительность 23:47</span><br><a target="_blank" href="https://www.youtube.com/watch?v=bQUPWcNa8v8">https://www.youtube.com/watch?v=bQUPWcNa8v8</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/bQUPWcNa8v8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var abiogenesisIterator = 0;

function abiogenesis() {

	var spoilerContent = "abiogenesisContent";
	var closeWord = "abiogenesisClose";
	var openWord = "abiogenesisOpen";

	if (abiogenesisIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		abiogenesisIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		abiogenesisIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Химическая эволюция или пребиотическая эволюция — этап, предшествовавший появлению жизни, в ходе которого органические, пребиотические вещества возникли из неорганических молекул под влиянием внешних энергетических и селекционных факторов и в силу развертывания процессов самоорганизации, свойственных всем относительно сложным системам, которыми, бесспорно, являются все углеродсодержащие молекулы.</p><br><p>Также этими терминами обозначается теория возникновения и развития тех молекул, которые имеют принципиальное значение для возникновения и развития живого вещества.</p><br><p>Всё, что известно о химизме вещества, позволяет ограничить проблему химической эволюции рамками так называемого «водно-углеродного шовинизма», постулирующего, что жизнь в нашей Вселенной представлена в единственно возможном варианте: в качестве «способа существования белковых тел», осуществимого благодаря уникальному сочетанию полимеризационных свойств углерода и деполяризующих свойств жидко-фазной водной среды, как совместно необходимых и/или достаточных условий для возникновения и развития всех известных нам форм жизни. При этом подразумевается, что, по крайней мере, в пределах одной сформировавшейся биосферы может существовать только один, общий для всех живых существ данной биоты код наследственности, но пока остаётся открытым вопрос, существуют ли иные биосферы вне Земли и возможны ли иные варианты генетического аппарата.</p><br><p>Также неизвестно, когда и где началась химическая эволюция. Возможны любые сроки по окончанию второго цикла звёздообразования, наступившего после конденсации продуктов взрывов первичных сверхновых звезд, поставляющих в межзвездное пространство тяжелые элементы (с атомной массой более 26). Второе поколение звёзд, уже с планетными системами, обогащенными тяжёлыми элементами, которые необходимы для реализации химической эволюции появилось через 0,5—1,2 млрд лет после Большого взрыва. При выполнении некоторых вполне вероятных условий, для запуска химической эволюции может быть пригодна практически любая среда: глубины океанов, недра планет, их поверхности, протопланетные образования и даже облака межзвёздного газа, что подтверждается повсеместным обнаружением в космосе методами астрофизики многих видов органических веществ — альдегидов, спиртов, сахаров и даже аминокислоты глицина, которые вместе могут служить исходным материалом для химической эволюции, имеющей своим конечным результатом <a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%BD%D0%B8%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8">возникновение жизни</a>.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B8%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D1%8D%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Химическая_эволюция</a><br><br><span>Продолжительность 7:32</span><br><a target="_blank" href="https://www.youtube.com/watch?v=mYfXRhwtZaE">https://www.youtube.com/watch?v=mYfXRhwtZaE</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/mYfXRhwtZaE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var biologyIterator = 0;

function biology() {

	var spoilerContent = "biologyContent";
	var closeWord = "biologyClose";
	var openWord = "biologyOpen";

	if (biologyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		biologyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		biologyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Биоло́гия (греч. βιολογία; от др.-греч. βίος — «жизнь» + λόγος — «учение, наука») — наука о живых существах и их взаимодействии со средой. Изучает все аспекты жизни, в частности, структуру, функционирование, рост, происхождение, эволюцию и распределение живых организмов на Земле. Классифицирует и описывает живые существа, происхождение их видов, взаимодействие между собой и с окружающей средой.</p><br><p>Как особая наука биология выделилась из естественных наук в XIX веке, когда учёные обнаружили, что все живые организмы обладают некоторыми общими свойствами и признаками, в совокупности не характерными для неживой природы. Термин «биология» был введён независимо несколькими авторами: Фридрихом Бурдахом в 1800 году, Готфридом Рейнхольдом Тревиранусом в 1802 году и Жаном Батистом Ламарком в 1802 году. </p><br><p>В настоящее время биология — стандартный предмет в средних и высших учебных заведениях всего мира. Ежегодно публикуется более миллиона статей и книг по биологии, медицине, биомедицине и биоинженерии.</p><br><p>Называют пять принципов, объединяющих все биологические дисциплины в единую науку о живой материи:</p><br><p>Клеточная теория — учение обо всём, что касается клеток. Все живые организмы состоят как минимум из одной клетки — основной структурно-функциональной единицы организмов. Базовые механизмы и химия всех клеток во всех земных организмах сходны; клетки происходят только от ранее существовавших клеток, которые размножаются путём клеточного деления. Клеточная теория описывает строение клеток, их деление, взаимодействие с внешней средой, состав внутренней среды и клеточной оболочки, механизм действия отдельных частей клетки и их взаимодействия между собой.</p><br><p>Эволюция. Через естественный отбор и генетический дрейф наследственные признаки популяции изменяются из поколения в поколение.</p><br><p>Теория гена. Признаки живых организмов передаются из поколения в поколение вместе с генами, которые закодированы в ДНК. Информация о строении живых существ или генотип используется клетками для создания фенотипа, наблюдаемых физических или биохимических характеристик организма. Хотя фенотип, проявляющийся за счёт экспрессии генов, может подготовить организм к жизни в окружающей его среде, информация о среде не передаётся назад в гены. Гены могут изменяться в ответ на воздействия среды только посредством эволюционного процесса.</p><br><p>Гомеостаз. Физиологические процессы, позволяющие организму поддерживать постоянство своей внутренней среды независимо от изменений во внешней среде.</p><br><p>Энергия. Атрибут любого живого организма, существенный для его состояния.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Биология</a><br><br><span>Продолжительность 21:58</span><br><a target="_blank" href="https://www.youtube.com/watch?v=iX18_aHbsW4">https://www.youtube.com/watch?v=iX18_aHbsW4</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/iX18_aHbsW4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var universeIterator = 0;

function universe() {

	var openWord = "universeOpen";
	var spoilerContent = "universeContent";
	var closeWord = "universeClose";

	if (universeIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		universeIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		universeIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Вселе́нная — не имеющее строгого определения понятие в астрономии и философии. Оно делится на две принципиально отличающиеся сущности: умозрительную (философскую) и материальную, доступную наблюдениям в настоящее время или в обозримом будущем. Если автор различает эти сущности, то, следуя традиции, первую называют Вселенной, а вторую — астрономической Вселенной или Метагалактикой (в последнее время этот термин практически вышел из употребления).</p><br><p>В историческом плане для обозначения «всего пространства» использовались различные слова, включая эквиваленты и варианты из различных языков, такие как «космос», «мир», «небесная сфера». Использовался также термин «макрокосмос», хотя он предназначен для определения систем большого масштаба, включая их подсистемы и части. Аналогично, слово «микрокосмос» используется для обозначения систем малого масштаба.</p><br><p>Любое исследование, любое наблюдение, будь то наблюдение физика за тем, как раскалывается ядро атома, ребёнка за кошкой или астронома, ведущего наблюдения за далёкой-далёкой галактикой, — всё это наблюдение за Вселенной, вернее, за отдельными её частями. Эти части служат предметом изучения отдельных наук, а Вселенной в максимально больших масштабах, и даже Вселенной как единым целым занимаются астрономия и космология; при этом под Вселенной понимается или область мира, охваченная наблюдениями и космическими экспериментами, или объект космологических экстраполяций — физическая Вселенная как целое.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F">https://ru.wikipedia.org/wiki/Вселенная</a><br><br><span>Продолжительность 15:34</span><br><a target="_blank" href="https://www.youtube.com/watch?v=MlIxlwWM3zs">https://www.youtube.com/watch?v=MlIxlwWM3zs</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/MlIxlwWM3zs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var mathIterator = 0;

function math() {

	var spoilerContent = "mathContent";
	var closeWord = "mathClose";
	var openWord = "mathOpen";

	if (mathIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		mathIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		mathIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Матема́тика (др.-греч. μᾰθημᾰτικά < μάθημα «изучение; наука») — наука о структурах, порядке и отношениях, исторически сложившаяся на основе операций подсчёта, измерения и описания формы объектов. Математические объекты создаются путём идеализации свойств реальных или других математических объектов и записи этих свойств на формальном языке. Математика не относится к естественным наукам, но широко используется в них как для точной формулировки их содержания, так и для получения новых результатов. Математика — фундаментальная наука, предоставляющая (общие) языковые средства другим наукам; тем самым она выявляет их структурную взаимосвязь и способствует нахождению самых общих законов природы. </p><br><p>Идеализированные свойства исследуемых объектов либо формулируются в виде аксиом, либо перечисляются в определении соответствующих математических объектов. Затем по строгим правилам логического вывода из этих свойств выводятся другие истинные свойства (теоремы). Эта теория в совокупности образует математическую модель исследуемого объекта. Таким образом, первоначально исходя из пространственных и количественных соотношений, математика получает более абстрактные соотношения, изучение которых также является предметом современной математики.</p><br><p>Традиционно математика делится на теоретическую, выполняющую углублённый анализ внутриматематических структур, и прикладную, предоставляющую свои модели другим наукам и инженерным дисциплинам, причём некоторые из них занимают пограничное с математикой положение. В частности, формальная логика может рассматриваться и как часть философских наук, и как часть математических наук; механика — и физика, и математика; информатика, компьютерные технологии и алгоритмика относятся как к инженерии, так и к математическим наукам и т. д. В литературе было предложено много различных определений математики.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Математика</a><br><br><span>Продолжительность 7:10</span><br><a target="_blank" href="https://www.youtube.com/watch?v=_LXrtnYKPVc">https://www.youtube.com/watch?v=_LXrtnYKPVc</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/_LXrtnYKPVc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var humanIterator = 0;

function human() {

	var spoilerContent = "humanContent";
	var closeWord = "humanClose";
	var openWord = "humanOpen";

	if (humanIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		humanIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		humanIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Челове́к разу́мный (лат. Homo sapiens; преимущественно лат. Homo sapiens sapiens) — вид рода Люди (Homo) из семейства гоминид в отряде приматов. В начале верхнего палеолита, около 40 тысяч лет назад, его ареал уже охватывает практически всю Землю. От остальных современных человекообразных, помимо ряда анатомических особенностей, отличается относительно высоким уровнем развития материальной и нематериальной культуры (включая изготовление и использование орудий труда), способностью к членораздельной речи и крайне развитому абстрактному мышлению. Человек как биологический вид является предметом исследования физической антропологии. И на сегодняшний день не осталось ни одной стороны или свойства человека как особи, индивида или члена человеческой популяции, которые бы не были охвачены специальными научными исследованиями. Основные дисциплины, изучающие человека и человечество:</p><br><p>&#8226; Антропология</p><p>&#8226; Биология человека</p><p>&#8226; Генеалогия</p><p>&#8226; Геногеография</p><p>&#8226; История</p><p>&#8226; Лингвистика</p><p>&#8226; Медицина</p><p>&#8226; Психология</p><p>&#8226; Культурология</p><p>&#8226; Социология</p><p>&#8226; Этнография</p><p>&#8226; Этология</p><br><p>Тем не менее с древних времён и до наших дней природа и сущность человека являются предметом философского и религиозного диспута.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA_%D1%80%D0%B0%D0%B7%D1%83%D0%BC%D0%BD%D1%8B%D0%B9">https://ru.wikipedia.org/wiki/Человек_разумный</a><br><br><span>Продолжительность 13:32</span><br><a target="_blank" href="https://youtu.be/3mai-GNTi3g">https://www.youtube.com/watch?v=3mai-GNTi3g</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/3mai-GNTi3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var biosphereIterator = 0;

function biosphere() {

	var openWord = "biosphereOpen";
	var spoilerContent = "biosphereContent";
	var closeWord = "biosphereClose";

	if (biosphereIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		biosphereIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		biosphereIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Биосфе́ра (от др.-греч. βιος — жизнь и σφαῖρα — сфера, шар) — оболочка Земли, заселённая живыми организмами, находящаяся под их воздействием и занятая продуктами их жизнедеятельности, а также совокупность её свойств как планеты, где создаются условия для развития биологических систем; глобальная экосистема Земли.</p><br><p>Биосфера — оболочка Земли, заселённая живыми организмами и преобразованная ими. Биосфера начала формироваться не позднее, чем 3,8 млрд лет назад, когда на нашей планете стали зарождаться первые организмы. Она проникает во всю гидросферу, верхнюю часть литосферы и нижнюю часть атмосферы, то есть населяет экосферу. Биосфера представляет собой совокупность всех живых организмов. В ней обитает более 3 000 000 видов растений, животных, грибов и бактерий. Человек тоже является частью биосферы, его деятельность превосходит многие природные процессы и, как сказал В. И. Вернадский: «Человек становится могучей геологической силой».</p><br><p>Французский учёный-естествоиспытатель Жан Батист Ламарк в начале XIX в. впервые предложил концепцию биосферы, ещё не введя даже самого термина. Термин «биосфера» был предложен австрийским геологом и палеонтологом Эдуардом Зюссом в 1875 году.</p><br><p>Целостное учение о биосфере создал советский биогеохимик и философ В. И. Вернадский. Он впервые отвёл живым организмам роль главнейшей преобразующей силы планеты Земля, учитывая их деятельность не только в настоящее время, но и в прошлом.</p><br><p>Существует и другое, более широкое определение: Биосфера — область распространения жизни на космическом теле. При том, что существование жизни на других космических объектах, помимо Земли пока неизвестно, считается, что биосфера может распространяться на них в более скрытых областях, например, в литосферных полостях или в подлёдных океанах. Так, например, рассматривается возможность существования жизни в океане Европы — спутника Юпитера. </p><br><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BE%D1%81%D1%84%D0%B5%D1%80%D0%B0">https://ru.wikipedia.org/wiki/Биосфера</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var mindIterator = 0;

function mind() {

	var spoilerContent = "mindContent";
	var closeWord = "mindClose";
	var openWord = "mindOpen";

	if (mindIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		mindIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		mindIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Ра́зум (лат. ratio), ум (греч. νους) — философская категория, выражающая высший тип мыслительной деятельности, способность мыслить всеобще, способность анализа, абстрагирования и обобщения.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D1%83%D0%BC">https://ru.wikipedia.org/wiki/Разум</a><br><br><p>Мышле́ние — это познавательная деятельность человека. Оно является опосредованным и обобщённым способом отражения действительности.</p><br><p>Результатом мышления является мысль (понятие, смысл, идея). Мышление противопоставляют «низшим» способам освоения мира в форме ощущения или восприятия, которые свойственны в том числе и животным. Многие философы называли мышление сущностным свойством человека. Так Декарт утверждал: «Я мыслю, следовательно, я существую». Паскаль называл человека мыслящим тростником.</p><br><p>Особенностью мышления является свойство получать знание о таких объектах, свойствах и отношениях окружающего мира, которые не могут быть непосредственно восприняты. Это свойство мышления осуществляется посредством таких умозаключений как аналогия и дедукция.</p><br><p>Мышление связано с функционированием мозга, однако сама способность мозга к оперированию абстракциями возникает в ходе усвоения человеком форм практической жизни, норм языка, логики, культуры. Мышление осуществляется в многообразных формах духовной и практической деятельности, в которых обобщается и сохраняется познавательный опыт людей. Мышление осуществляется в образно-знаковой форме, основные результаты его активности выражаются здесь в продуктах художественного (прим. философского, математического, научного, инженерного) и религиозного творчества, своеобразно обобщающих познавательный опыт человечества. Мышление осуществляется также в собственной адекватной ему форме теоретического познания, которое с опорой на предшествующие формы приобретает неограниченные (?) возможности умозрительного и модельного видения мира.</p><br><p>Мышление изучается почти всеми существующими научными дисциплинами, являясь в то же время объектом исследования ряда философских дисциплин — логики, гносеологии, диалектики.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9C%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5">https://ru.wikipedia.org/wiki/Мышление</a><br><br><p>Мышление — психический процесс моделирования закономерностей окружающего мира на основе аксиоматических положений. Однако в психологии существует множество других определений.</p><br><p>Например: высший этап обработки информации человеком, процесс установления связей между объектами или явлениями окружающего мира; или — процесс отражения существенных свойств объектов, а также связей между ними, что приводит к появлению представлений об объективной реальности. Споры по поводу определения продолжаются по сей день.</p><br><p>В патопсихологии и нейропсихологии мышление относят к одной из высших психических функций. Оно рассматривается как деятельность, имеющая мотив, цель, систему действий и операций, результат и контроль.</p><br><p>Мышление — высшая ступень человеческого познания; процесс познания окружающего реального мира, основу которого составляет образование и непрерывное пополнение запаса понятий, представлений; включает в себя вывод новых суждений (осуществление умозаключений). Мышление позволяет получить знание о таких объектах, свойствах и отношениях окружающего мира, которые не могут быть непосредственно восприняты при помощи первой сигнальной системы. Формы и законы мышления составляют предмет рассмотрения логики, а психофизиологические механизмы — соответственно, психологии и физиологии.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9C%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_(%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F)">https://ru.wikipedia.org/wiki/Мышление_(психология)</a><br><br><span>Продолжительность 8:16</span><br><a target="_blank" href="https://youtu.be/3drHAhc5P9A">https://youtu.be/3drHAhc5P9A</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/3drHAhc5P9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var neuralCircuitIterator = 0;

function neuralCircuit() {

	var spoilerContent = "neuralCircuitContent";
	var closeWord = "neuralCircuitClose";
	var openWord = "neuralCircuitOpen";

	if (neuralCircuitIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		neuralCircuitIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		neuralCircuitIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Нейронная сеть (биологическая нейронная сеть) — совокупность нейронов головного и спинного мозга центральной нервной системы (ЦНС) и ганглия периферической нервной системы (ПНС), которые связаны или функционально объединены в нервной системе, выполняют специфические физиологические функции.</p><br><p>Нейронная сеть состоит из группы или групп химически или функционально связанных нейронов. Один нейрон может быть связан со многими другими нейронами, а общее количество нейронов и связей в сети может быть достаточно большим. Место контакта нейронов называется синапсом, типичный синапс — аксо-дендритический химический. Передача импульсов осуществляется химическим путём с помощью медиаторов или электрическим путём посредством прохождения ионов из одной клетки в другую.</p><br><p>Представление о нейронных сетях оказало значительное влияние на технологии искусственного интеллекта, в попытке построить математическую модель нейронной сети был создан обширный инструментарий искусственных нейронных сетей, широко используемый в прикладной математике и информатике.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D1%82%D1%8C">https://ru.wikipedia.org/wiki/Нейронная_сеть</a><br><br><span>Продолжительность 25:36</span><br><a target="_blank" href="https://www.youtube.com/watch?v=SnIoGkixxLo">https://www.youtube.com/watch?v=SnIoGkixxLo</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/SnIoGkixxLo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var organAnatomIterator = 0;

function organAnatom() {

	var openWord = "organAnatomOpen";
	var spoilerContent = "organAnatomContent";
	var closeWord = "organAnatomClose";

	if (organAnatomIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		organAnatomIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		organAnatomIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>О́рган (др.-греч. ὄργανον — «инструмент») — обособленная совокупность различных типов клеток и тканей, выполняющая определённую функцию в живом организме.</p><br><p>Орган представляет собой функциональю единицу в пределах организма, обособленную от других функциональных единиц данного организма. Органы одного организма связаны в своих функциях между собой таким образом, что организм является совокупностью органов, которые часто объединяются в различные системы органов.</p><br><p>Органом называется лишь та совокупность тканей и клеток, которая имеет устойчивое положение в пределах организма и чьё развитие прослеживается в пределах онтогенеза (органогенез).</p><br><p>Органная организация клеток и тканей характерна как для животных, так и для высших растений. У водорослей и других многоклеточных и колониальных протистов, а также у грибов органы в строгом понимании этого термина отсутствуют, так как у них нет тканей. Тем не менее органами часто называют спорангии грибов и водорослей, соредии и изидии лишайников и т. п. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D0%B3%D0%B0%D0%BD_(%D0%B1%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F)">https://ru.wikipedia.org/wiki/Орган_(биология)</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var behaviourIterator = 0;

function behaviour() {

	var openWord = "behaviourOpen";
	var spoilerContent = "behaviourContent";
	var closeWord = "behaviourClose";

	if (behaviourIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		behaviourIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		behaviourIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Поведе́ние — определённый сложившийся образ взаимодействия с окружающей средой. Поведение определяется способностью изменять свои действия под влиянием внутренних и внешних факторов. Поведение — характерная черта животного типа организации, оно имеет огромное приспособительное значение, позволяя животным избегать негативных факторов окружающей среды; хотя поведение характерно и для более простых организмов, например, простейшие проявляют способность перемещаться в ответ на раздражители среды и способны к элементарным формам научения. У многоклеточных организмов поведение находится под контролем нервной системы. В целом можно отметить, что поведение возникает на высоком уровне организации, когда организм приобретает способность воспринимать, хранить и преобразовывать информацию, используя её с целью самосохранения и приспособления к условиям существования.</p><br><p>Поведение, в отличие от психики, доступно для непосредственного наблюдения и является предметом широкого спектра наук, от психологии, этологии, зоопсихологии и сравнительной психологии до поведенческой экологии. А. Н. Леонтьев предложил в качестве объективного критерия психики (в отличие от поведения) рассматривать способность живых организмов реагировать на «биологически нейтральные раздражители» от которых не зависит жизнь организма.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5">https://ru.wikipedia.org/wiki/Поведение</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var nervousSystemIterator = 0;

function nervousSystem() {

	var openWord = "nervousSystemOpen";
	var spoilerContent = "nervousSystemContent";
	var closeWord = "nervousSystemClose";

	if (nervousSystemIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		nervousSystemIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		nervousSystemIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Не́рвная систе́ма — целостная морфологическая и функциональная совокупность различных взаимосвязанных нервных структур, которая совместно с эндокринной системой обеспечивает взаимосвязанную регуляцию деятельности всех систем организма человека и реакцию на изменение условий внутренней и внешней среды. Нервная система действует как интегративная система, связывая в одно целое чувствительность, двигательную активность и работу других регуляторных систем (эндокринной и иммунной).</p><br><p>Нервная система человека часто делится на центральную нервную систему (ЦНС) и периферическую нервную систему (ПНС). ЦНС состоит из головного и спинного мозга. ПНС состоит из всех других нервов и нейронов, которые не лежат в пределах ЦНС. Преобладающее большинство нервов (которые фактически являются аксонами нейронов) принадлежит ПНС. Периферийная нервная система делится на соматическую нервную систему и вегетативную нервную систему.</p><br><p>Соматическая нервная система отвечает за координацию движения тела, а также за получение и передачу внешних стимулов. Эта система регулирует действия, которые находятся под сознательным контролем.</p><br><p>Автономная нервная система делится на парасимпатическую и симпатическую. Симпатическая нервная система отвечает опасности или стресс, и, среди многих физиологических изменений, может вызвать увеличение сердечного ритма и кровяного давления и возбуждения органов чувств благодаря увеличению адреналина в крови. Парасимпатическая нервная система, с другой стороны, отвечает за состояние отдыха, и обеспечивает сокращение зрачка, замедление сердца, расширение кровеносных сосудов и стимулирования пищеварительных и мочеполовых систем.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%80%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0">https://ru.wikipedia.org/wiki/Нервная_система</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var endocrineSystemIterator = 0;

function endocrineSystem() {

	var openWord = "endocrineSystemOpen";
	var spoilerContent = "endocrineSystemContent";
	var closeWord = "endocrineSystemClose";

	if (endocrineSystemIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		endocrineSystemIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		endocrineSystemIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Эндокри́нная систе́ма — система регуляции деятельности внутренних органов посредством гормонов, выделяемых эндокринными клетками непосредственно в кровь либо диффундирующих через межклеточное пространство в соседние клетки.</p><br><p>Не́йроэндокри́нная (эндокринная) система координирует и регулирует деятельность практически всех органов и систем организма, обеспечивает его адаптацию к постоянно изменяющимся условиям внешней и внутренней среды, сохраняя постоянство внутренней среды, необходимое для поддержания нормальной жизнедеятельности данного индивидуума. Имеются чёткие указания на то, что осуществление перечисленных функций нейроэндокринной системы возможно только в тесном взаимодействии с иммунной системой.</p><br><p>Эндокринная система делится на гландулярную эндокринную систему (или гландулярный аппарат), в которой эндокринные клетки собраны вместе и формируют железу внутренней секреции, и диффузную эндокринную систему. Железа внутренней секреции производит гландулярные гормоны, к которым относятся все стероидные гормоны, гормоны щитовидной железы и многие пептидные гормоны. Диффузная эндокринная система представлена рассеянными по всему организму эндокринными клетками, продуцирующими гормоны, называемые агландулярными — (за исключением кальцитриола) пептиды. Практически в любой ткани организма имеются эндокринные клетки. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BD%D0%B4%D0%BE%D0%BA%D1%80%D0%B8%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0">https://ru.wikipedia.org/wiki/Эндокринная_система</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var immuneSystemIterator = 0;

function immuneSystem() {

	var openWord = "immuneSystemOpen";
	var spoilerContent = "immuneSystemContent";
	var closeWord = "immuneSystemClose";

	if (immuneSystemIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		immuneSystemIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		immuneSystemIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Имму́нная систе́ма — система органов, существующая у позвоночных животных и объединяющая органы и ткани, которые защищают организм от заболеваний, идентифицируя и уничтожая опухолевые клетки и патогены. Иммунная система распознаёт множество разнообразных возбудителей — от вирусов до паразитических червей — и отличает их от биомолекул собственных клеток. Распознавание возбудителей усложняется их адаптацией и эволюционным развитием новых методов успешного инфицирования организма-хозяина.</p><br><p>Конечной целью иммунной системы является уничтожение чужеродного агента, которым может оказаться болезнетворный микроорганизм, инородное тело, ядовитое вещество или переродившаяся клетка самого организма. Этим достигается биологическая индивидуальность организма.</p><br><p>В иммунной системе развитых организмов существует множество способов обнаружения и удаления чужеродных агентов: этот процесс называется иммунным ответом. Все формы иммунного ответа можно разделить на врождённые и приобретённые реакции. Основное различие между ними в том, что приобретённый иммунитет высокоспецифичен по отношению к конкретному типу антигенов и позволяет быстрее и эффективнее уничтожать их при повторном столкновении. Антигенами называют молекулы, воспринимаемые как чужеродные агенты и вызывающие специфические реакции организма. Например, у перенёсших ветрянку, корь, дифтерию людей часто возникает пожизненный иммунитет к этим заболеваниям. В случае аутоиммунных реакций антигеном может служить молекула, произведённая самим организмом.</p><br><p>Некоторые вещества, вырабатываемые иммунной системой, активно влияют на работу центральной нервной системы.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%98%D0%BC%D0%BC%D1%83%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0">https://ru.wikipedia.org/wiki/Иммунная_система</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var informationIterator = 0;

function information() {

	var openWord = "informationOpen";
	var spoilerContent = "informationContent";
	var closeWord = "informationClose";

	if (informationIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		informationIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		informationIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Информа́ция (от лат. informātiō «разъяснение, представление, понятие о чём-либо» ← informare «придавать вид, форму, обучать; мыслить, воображать») — сведения независимо от формы их представления.</p><br><p>Несмотря на широкую распространённость, понятие информации остаётся одним из самых дискуссионных в науке, а термин может иметь различные значения в разных отраслях человеческой деятельности.</p><br><p>Определений информации существует множество, причём академик Н. Н. Моисеев даже полагал, что в силу широты этого понятия нет и не может быть строгого и достаточно универсального определения информации. В международных и российских стандартах даются следующие определения:</p><br><span>&#8226; знания о предметах, фактах, идеях и т. д., которыми могут обмениваться люди в рамках конкретного контекста (ISO/IEC 10746-2:1996);</span><br><span>&#8226; знания относительно фактов, событий, вещей, идей и понятий, которые в определённом контексте имеют конкретный смысл (ISO/IEC 2382:2015);</span><br><span>&#8226; сведения, воспринимаемые человеком и (или) специальными устройствами как отражение фактов материального или духовного мира в процессе коммуникации (ГОСТ 7.0-99).</span><br><br><p>Хотя информация должна обрести некоторую форму представления (то есть превратиться в данные), чтобы ею можно было обмениваться, информация есть в первую очередь интерпретация (смысл) такого представления (ISO/IEC/IEEE 24765:2010). Поэтому в строгом смысле информация отличается от данных, хотя в неформальном контексте эти два термина очень часто используют как синонимы.</p><p>Первоначально «информация» — сведения, передаваемые людьми устным, письменным или другим способом (с помощью условных сигналов, технических средств и т. д.); с середины XX века термин «информация» превратился в общенаучное понятие, включающее обмен сведениями между людьми, человеком и автоматом, автоматом и автоматом; обмен сигналами в животном и растительном мире; передачу признаков от клетки к клетке, от организма к организму (например, генетическая информация); одно из основных понятий кибернетики.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Информация</a><br><br><span>Продолжительность 11:55</span><br><a target="_blank" href="https://www.youtube.com/watch?v=AbIwsTMi-rw">https://www.youtube.com/watch?v=AbIwsTMi-rw</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/AbIwsTMi-rw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var sensorReceptorIterator = 0;

function sensorReceptor() {

	var openWord = "sensorReceptorOpen";
	var spoilerContent = "sensorReceptorContent";
	var closeWord = "sensorReceptorClose";

	if (sensorReceptorIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		sensorReceptorIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		sensorReceptorIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Реце́птор — объединение из терминалей (нервных окончаний) дендритов чувствительных нейронов, глии, специализированных образований межклеточного вещества и специализированных клеток других тканей, которые в комплексе обеспечивают превращение влияния факторов внешней или внутренней среды (раздражитель) в нервный импульс. В некоторых рецепторах (например, вкусовых и слуховых рецепторах человека) раздражитель непосредственно воспринимается специализированными клетками эпителиального происхождения или видоизменёнными нервными клетками (чувствительные элементы сетчатки), которые не генерируют нервных импульсов, а действуют на иннервирующие их нервные окончания, изменяя секрецию медиатора. В других случаях единственным клеточным элементом рецепторного комплекса является само нервное окончание, часто связанное со специальными структурами межклеточного вещества (например, тельце Пачини).</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%BE%D1%80">https://ru.wikipedia.org/wiki/Рецептор</a><br><br><p>Клеточный рецептор — молекула (обычно белок или гликопротеид) на поверхности клетки, клеточных органелл или растворенная в цитоплазме. Специфично реагирует изменением своей пространственной конфигурации на присоединение к ней молекулы определённого химического вещества, передающего внешний регуляторный сигнал и, в свою очередь, передает этот сигнал внутрь клетки или клеточной органеллы, нередко при помощи так называемых вторичных посредников или трансмембранных ионных токов.</p><br><p>Вещество, специфически соединяющееся с рецептором, называется лигандом этого рецептора. Внутри организма это обычно гормон или нейромедиатор либо их искусственные заменители, применяемые в качестве лекарственных средств и ядов (агонисты). Некоторые лиганды, напротив, блокируют рецепторы (антагонисты). Когда речь идет об органах чувств, лигандами являются вещества, воздействующие на рецепторы обоняния или вкуса. Кроме того, молекулы зрительных рецепторов реагируют на свет, а в органах слуха и осязания рецепторы чувствительны к механическим воздействиям (давлению или растяжению), вызываемым колебаниями воздуха и иными раздражителями. Существуют также термочувствительные белки-рецепторы и белки-рецепторы, реагирующие на изменение мембранного потенциала.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%BE%D1%80">https://ru.wikipedia.org/wiki/Клеточный_рецептор</a><br><br><span>Продолжительность 13:46</span><br><a target="_blank" href="https://postnauka.ru/video/52871">https://postnauka.ru/video/52871</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/bNbvaOrCOPg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var geneIterator = 0;

function gene() {

	var openWord = "geneOpen";
	var spoilerContent = "geneContent";
	var closeWord = "geneClose";

	if (geneIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		geneIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		geneIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Ген (др.-греч. γένος — род) — структурная и функциональная единица наследственности живых организмов. Ген представляет собой участок ДНК, задающий последовательность определённого полипептида либо функциональной РНК. Гены (точнее, аллели генов) определяют наследственные признаки организмов, передающиеся от родителей потомству при размножении. Среди некоторых организмов, в основном одноклеточных, встречается горизонтальный перенос генов, не связанный с размножением. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD">https://ru.wikipedia.org/wiki/Ген</a><br><br><span>Продолжительность 4:30</span><br><a target="_blank" href="https://www.youtube.com/watch?v=kDyigLiOupA">https://www.youtube.com/watch?v=kDyigLiOupA</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/kDyigLiOupA"" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var geneticCodeIterator = 0;

function geneticCode() {

	var openWord = "geneticCodeOpen";
	var spoilerContent = "geneticCodeContent";
	var closeWord = "geneticCodeClose";

	if (geneticCodeIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		geneticCodeIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		geneticCodeIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Генети́ческий код (англ. Genetic code) — совокупность правил, согласно которым в живых клетках последовательность нуклеотидов (ген и мРНК) переводится в последовательность аминокислот (белок). Собственно перевод (трансляцию) осуществляет рибосома, которая соединяет аминокислоты в цепочку согласно инструкции, записанной в кодонах мРНК. Соответствующие аминокислоты доставляются в рибосому молекулами тРНК. Генетический код всех живых организмов Земли един (имеются лишь незначительные вариации), что свидетельствует о наличии общего предка.</p><br><p>Правила генетического кода определяют, какой аминокислоте соответствует триплет (три подряд идущих нуклеотида) в мРНК. За редкими исключениями, каждому кодону соответствует только одна аминокислота. Конкретная аминокислота может кодироваться более чем одним кодоном, есть также кодоны, означающие начало и конец белка. Вариант генетического кода, который используется подавляющим большинством живых организмов, называют стандартным, или каноническим, генетическим кодом. Однако известно несколько десятков исключений из стандартного генетического кода, например, при трансляции в митохондриях используются несколько изменённые правила генетического кода.</p><br><p>Простейшим представлением генетического кода может служить таблица из 64 ячеек, в которой каждая ячейка соответствует одному из 64 возможных кодонов.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D0%B4">https://ru.wikipedia.org/wiki/Генетический_код</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var rewardSystemIterator = 0;

function rewardSystem() {

	var openWord = "rewardSystemOpen";
	var spoilerContent = "rewardSystemContent";
	var closeWord = "rewardSystemClose";

	if (rewardSystemIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		rewardSystemIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		rewardSystemIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Система вознаграждения или система внутреннего подкрепления (англ. reward system) — это совокупность структур нервной системы, участвующих в регулировании и контроле поведения при помощи положительных реакций на действия. Система вознаграждения наряду с системой наказаний играет основную роль в механизмах закрепления поведения. </p><br><p>Психологическая награда — это процесс закрепления поведения при помощи приятных ощущений. Понятие награды используется для описания положительных качеств, приписываемых индивидом объекту, поведенческому акту, или внутреннему физическому состоянию. Первичные (естественные) награды закрепляют поведение, необходимое для выживания вида, такое как питание, спаривание и борьба.</p><br><p>Вторичные награды тесно связаны с первичными и определяют ценность объектов, действий и состояний, связанных с удовлетворением первичных потребностей. Ценность безопасного убежища, денег, комфорта, красоты, приятных прикосновений, звуков и многого другого определяется вторичной наградой.</p><br><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D0%B2%D0%BE%D0%B7%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Система_вознаграждения</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var pleasureIterator = 0;

function pleasure() {

	var openWord = "pleasureOpen";
	var spoilerContent = "pleasureContent";
	var closeWord = "pleasureClose";

	if (pleasureIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		pleasureIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		pleasureIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Удово́льствие — положительно окрашенная эмоция, сопровождающая удовлетворение одной или нескольких потребностей. Антонимом удовольствия являются страдание и боль. Понятие удовольствия в философии Эпикура отождествлено со счастьем. В дальнейшем такая позиция получила наименование гедонизм. Стоики, напротив, считали удовольствие страстью, вызывающей зависимость и привычку. Сейчас под удовольствием подразумевают контролируемые определённым участком головного мозга ощущения, создающие положительный эмоциональный фон.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A3%D0%B4%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%B8%D0%B5">https://ru.wikipedia.org/wiki/Удовольствие</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var resourceIterator = 0;

function resource() {

	var openWord = "resourceOpen";
	var spoilerContent = "resourceContent";
	var closeWord = "resourceClose";

	if (resourceIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		resourceIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		resourceIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Ресу́рс (от фр. ressource «вспомогательное средство») — всё, что используется целевым образом, в том числе это может быть всё, что используется при целевой деятельности человека или людей и сама деятельность. Понятие «ресурс» применяется также как характеристика созданной людьми продукции.</p><br><p>Ресурс — количественно измеряемая возможность выполнения какой-либо деятельности человека или людей; условия, позволяющие с помощью определённых преобразований получить желаемый результат. В обобщённом виде в производстве ресурсы называются факторами.</p><br><p>В соответствии с теорией витальных ресурсов, каждый человек является обладателем четырех экономических активов:</p><br><p>1. денежных средств (доход) — ресурс возобновляемый;</p><p>2. энергии (жизненная сила) — ресурс частично возобновляемый;</p><p>3. времени — ресурс фиксированный и принципиально НЕвозобновляемый;</p><p>4. знаний (информации) — ресурс возобновляемый, это часть человеческого капитала, которая может и нарастать, и разрушаться.</p><br><p>Понятие ресурс является близким (но не совпадающим по содержанию) с понятием потенциал, который, в широком смысле, рассматривается как «запасные» средства.</p><br><p>Понятие ресурс может быть связано с деятельностью организаций и их продукцией или применяется к продукции организаций.</p><br><p>Ресурсы бывают задействованными, в резерве и потенциальными.</p> <br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81">https://ru.wikipedia.org/wiki/Ресурс</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var hierarchyIterator = 0;

function hierarchy() {

	var openWord = "hierarchyOpen";
	var spoilerContent = "hierarchyContent";
	var closeWord = "hierarchyClose";

	if (hierarchyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		hierarchyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		hierarchyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Иера́рхия (от др.-греч. ἱεραρχία, из ἱερός «священный» и ἀρχή «правление») — порядок подчинённости низших звеньев к высшим, организация их в структуру типа «дерево»; принцип управления в централизованных структурах.</p><br><p>Ситуативно подчинённость может возникать по пирамидальному, горизонтальному и иному принципу, это качество гибкости системы управления. Для построения «иерархической структуры» применяют метод декомпозиции. Часто представляется графически в виде блок-схемы. Широко используется в различных областях науки, техники, экономики и так далее.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%98%D0%B5%D1%80%D0%B0%D1%80%D1%85%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Иерархия</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var stressIterator = 0;

function stress() {

	var openWord = "stressOpen";
	var spoilerContent = "stressContent";
	var closeWord = "stressClose";

	if (stressIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		stressIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		stressIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Стресс (от англ. stress «нагрузка, напряжение; состояние повышенного напряжения») — совокупность неспецифических адаптационных (нормальных) реакций организма на воздействие различных неблагоприятных факторов–стрессоров (физических или психологических), нарушающее его гомеостаз, а также соответствующее состояние нервной системы организма (или организма в целом). В медицине, физиологии, психологии выделяют положительную (эустресс от др.-греч. εὖ- «хорошо») и отрицательную (дистресс от др.-греч. δυσ «потеря») формы стресса. По характеру воздействия выделяют нервно-психический, тепловой или холодовой (температурный), световой, голодовой, лишение сна и другие стрессы (облучения и т. д.).</p><br><p>Каким бы ни был стресс, «хорошим» или «плохим», эмоциональным или физическим (или тем и другим одновременно), воздействие его на организм имеет общие неспецифические черты. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%B5%D1%81%D1%81">https://ru.wikipedia.org/wiki/Стресс</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var reflexIterator = 0;

function reflex() {

	var openWord = "reflexOpen";
	var spoilerContent = "reflexContent";
	var closeWord = "reflexClose";

	if (reflexIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		reflexIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		reflexIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Безусловные рефлексы — наследственно передаваемые (врождённые) реакции организма, присущие всему виду. Выполняют защитную функцию, а также функцию поддержания гомеостаза (постоянства внутренней среды организма).</p><br><p>Безусловные рефлексы — это наследуемые, неизменные реакции организма на определённые воздействия внешней или внутренней среды, независимо от условий возникновения и протекания реакций. Безусловные рефлексы обеспечивают приспособление организма к неизменным условиям среды. Основные типы безусловных рефлексов: пищевые, защитные, ориентировочные, половые.</p><br><p>Примером защитного рефлекса является рефлекторное отдергивание руки от горячего объекта. Гомеостаз поддерживается, например, рефлекторным учащением дыхания при избытке углекислого газа в крови. Практически каждая часть тела и каждый орган участвует в рефлекторных реакциях.</p><br><p>Простейшие нейронные сети, или дуги (по выражению Шеррингтона), участвующие в безусловных рефлексах, замыкаются в сегментарном аппарате спинного мозга, но могут замыкаться и выше (например, в подкорковых ганглиях или в коре). Другие отделы нервной системы также участвуют в рефлексах: ствол мозга, мозжечок, кора больших полушарий.</p><br><p>Дуги безусловных рефлексов формируются к моменту рождения и сохраняются в течение всей жизни. Однако они могут изменяться под влиянием болезни. Многие безусловные рефлексы проявляются лишь в определённом возрасте; так, свойственный новорождённым хватательный рефлекс угасает в возрасте 3—4 месяцев.</p><br><p>Примером безусловного рефлекса у кошек может служить их способность приземляться на четыре лапы, несмотря на то, в каком положении кошка была в начале падения и с какой высоты она упала. Рефлекс приземления на лапы начинает проявляться у котят к возрасту 3—4 недели и закрепляется к 6—7 неделям.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%84%D0%BB%D0%B5%D0%BA%D1%81_(%D0%B1%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F)">https://ru.wikipedia.org/wiki/Рефлекс_(биология)</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var conditionalReflexIterator = 0;

function conditionalReflex() {

	var openWord = "conditionalReflexOpen";
	var spoilerContent = "conditionalReflexContent";
	var closeWord = "conditionalReflexClose";

	if (conditionalReflexIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		conditionalReflexIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		conditionalReflexIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Усло́вный рефле́кс — это приобретенный рефлекс, свойственный отдельному индивиду (особи). Возникают в течение жизни особи и не закрепляются генетически (не передаются по наследству). Возникают при определённых условиях и исчезают при их отсутствии. Формируются на базе безусловных рефлексов при участии высших отделов мозга. Условнорефлекторные реакции зависят от прошлого опыта, от конкретных условий, в которых формируется условный рефлекс.</p><br><p>Изучение условных рефлексов связано в первую очередь с именем И. П. Павлова и учениками его школы. Они показали, что новый условный стимул может запустить рефлекторную реакцию, если он некоторое время предъявляется вместе с безусловным стимулом. Например, если собаке дать понюхать мясо, то у неё выделяется желудочный сок (это безусловный рефлекс). Если же одновременно с появлением мяса звенит звонок, то нервная система собаки ассоциирует этот звук с пищей, и желудочный сок будет выделяться в ответ на звонок, даже если мясо не предъявлено. Это явление было открыто независимо Эдвином Твитмайером приблизительно в то же время, что и в лаборатории И. П. Павлова. Условные рефлексы лежат в основе приобретенного поведения. Это наиболее простые программы. Окружающий мир постоянно меняется, поэтому в нём могут успешно жить лишь те, кто быстро и целесообразно отвечает на эти изменения. По мере приобретения жизненного опыта в коре полушарий складывается система условнорефлекторных связей. Такую систему называют динамическим стереотипом. Он лежит в основе многих привычек и навыков. Например, научившись кататься на коньках, велосипеде, мы впоследствии уже не думаем о том, как нам двигаться, чтобы не упасть.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5_%D1%80%D0%B5%D1%84%D0%BB%D0%B5%D0%BA%D1%81%D1%8B">https://ru.wikipedia.org/wiki/Условные_рефлексы</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var memoryIterator = 0;

function memory() {

	var openWord = "memoryOpen";
	var spoilerContent = "memoryContent";
	var closeWord = "memoryClose";

	if (memoryIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		memoryIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		memoryIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Па́мять — это общее обозначение для комплекса познавательных способностей и высших психических функций по накоплению, сохранению и воспроизведению знаний и навыков.</p><br><p>Память в разных формах и видах присуща всем высшим животным. Способность к памяти и обучению все животные унаследовали у общего предка, который жил примерно 600 миллионов лет назад. Наиболее развитый уровень памяти характерен для человека.</p><br><p>Память относится к основным познавательным процессам, таким, как ощущение, восприятие и мышление, привлекающим наибольшее внимание исследователей.</p><br><p>Пионером в исследовании памяти человека считается Герман Эббингауз, ставивший эксперименты на себе (основной методикой было заучивание бессмысленных списков слов или слогов).</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D1%8C">https://ru.wikipedia.org/wiki/Память</a><br><br><span>Продолжительность 3:56</span><br><a target="_blank" href="https://www.youtube.com/watch?v=wsCjlkgp67g">https://www.youtube.com/watch?v=wsCjlkgp67g</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/wsCjlkgp67g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br><span>Продолжительность 54:55</span><br><a target="_blank" href="https://youtu.be/v1G4w6sUSMk">https://youtu.be/v1G4w6sUSMk</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/v1G4w6sUSMk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var biochemistryIterator = 0;

function biochemistry() {

	var openWord = "biochemistryOpen";
	var spoilerContent = "biochemistryContent";
	var closeWord = "biochemistryClose";

	if (biochemistryIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		biochemistryIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		biochemistryIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Биохи́мия (биологи́ческая, или физиологи́ческая хи́мия) — наука о химическом составе живых клеток и организмов, а также о лежащих в основе их жизнедеятельности химических процессах. Термин «биохимия» эпизодически употреблялся с середины XIX века, в классическом смысле он был предложен и введён в научную среду в 1903 году немецким химиком Карлом Нейбергом.</p><br><p>Биохимия — сравнительно молодая наука, которая находится на стыке биологии и химии. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BE%D1%85%D0%B8%D0%BC%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Биохимия</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var psycheIterator = 0;

function psyche() {

	var openWord = "psycheOpen";
	var spoilerContent = "psycheContent";
	var closeWord = "psycheClose";

	if (psycheIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		psycheIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		psycheIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Пси́хика (от др.-греч. ψῡχικός «душевный, жизненный») — сложное понятие в философии, психологии и медицине, которое в зависимости от областей знаний и направлений наук определяется следующим образом.</p><br><span>&#8226; Совокупность душевных процессов и явлений (ощущения, восприятия, эмоции, память и т. п.); специфический аспект жизнедеятельности животных и человека в их взаимодействии с окружающей средой.</span><br><span>&#8226; «Форма активного отображения субъектом объективной реальности, возникающая в процессе взаимодействия высокоорганизованных живых существ с внешним миром и осуществляющая в их поведении (деятельности) регулятивную функцию».</span><br><span>&#8226; Системное свойство высокоорганизованной материи, заключающееся в активном отражении субъектом объективного мира и саморегуляции на этой основе своего поведения и деятельности.</span><br><span>&#8226; Внутренний мир человека.</span><br><p>Психика животных — субъективный мир животного, охватывающий весь комплекс субъективно переживаемых процессов и состояний: восприятие, память, мышление, намерения, сны и т. п.</p><br><p>Психика характеризуется такими качествами, как целостность, активность, развитие, саморегуляция, коммуникативность, адаптация и т. д.; связана с соматическими процессами. Появляется на определённой стадии биологической эволюции. Изучением психики занимается наука психология.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9F%D1%81%D0%B8%D1%85%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Психика</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var brainIterator = 0;

function brain() {

	var openWord = "brainOpen";
	var spoilerContent = "brainContent";
	var closeWord = "brainClose";

	if (brainIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		brainIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		brainIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Мозг — центральный отдел нервной системы животных, обычно расположенный в головном (переднем) отделе тела и представляющий собой компактное скопление нервных клеток и их отростков-дендритов. У многих животных содержит также глиальные клетки, может быть окружен оболочкой из соединительной ткани. У позвоночных животных (в том числе и у человека) различают головной мозг, размещённый в полости черепа, и спинной, находящийся в позвоночном канале. </p><br><p>В философии сознания различаются понятия разум и мозг, и отмечаются противоречия относительно их точных отношений, которые приводят к проблеме «разум—тело».</p><br><p>Мозг определяется как физическая и биологическая материя, содержащаяся в пределах черепа и ответственная за основные электрохимические и биоэлектронные нейронные процессы. С точки зрения современной науки, мозг представляет собой сложнейшую нейронную сеть, производящую и обрабатывающую огромное количество логически связанных электрохимических импульсов, и внутренний мир человека, в том числе его разум, является продуктом этой работы.</p><br><p>В современном научном сообществе точка зрения о том, что разум — продукт работы мозга, является главенствующей. Так же считают сторонники искусственного интеллекта.</p><br><p>Кроме того имеют место высказывания о том, что разум компьютероподобен и алгоритмичен. Точки зрения «порождаемость разума мозгом» и «компьютероподобие разума» не обязательно сопутствуют друг другу.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B7%D0%B3">https://ru.wikipedia.org/wiki/Мозг</a><br><br><p>Головно́й мозг челове́ка (лат. encephalon) является органом центральной нервной системы, состоящей из множества взаимосвязанных между собой нервных клеток и их отростков.</p><br><p>Головной мозг человека занимает почти всю полость мозгового отдела черепа, кости которого защищают головной мозг от внешних механических повреждений. B процессе роста и развития головной мозг принимает форму черепа.</p><br><p>Головной мозг человека содержит в среднем 86 миллиардов нейронов и потребляет для питания 50 % глюкозы, вырабатываемой печенью и поступающей в кровь.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%BC%D0%BE%D0%B7%D0%B3_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Головной_мозг_человека</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var eyeRetinaIterator = 0;

function eyeRetina() {

	var openWord = "eyeRetinaOpen";
	var spoilerContent = "eyeRetinaContent";
	var closeWord = "eyeRetinaClose";

	if (eyeRetinaIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		eyeRetinaIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		eyeRetinaIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Сетча́тка (лат. retína) — внутренняя оболочка глаза, являющаяся периферическим отделом зрительного анализатора; содержит фоторецепторные клетки, обеспечивающие восприятие и преобразование электромагнитного излучения видимой части спектра в нервные импульсы, а также обеспечивает их первичную обработку.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%82%D1%87%D0%B0%D1%82%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Сетчатка</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var photonIterator = 0;

function photon() {

	var openWord = "photonOpen";
	var spoilerContent = "photonContent";
	var closeWord = "photonClose";

	if (photonIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		photonIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		photonIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Фото́н (от др.-греч. φῶς, род. пад. φωτός, «свет») — элементарная частица, квант электромагнитного излучения (в узком смысле — света) в виде поперечных электромагнитных волн и переносчик электромагнитного взаимодействия. Это безмассовая частица, способная существовать в вакууме только двигаясь со скоростью света. Электрический заряд фотона также равен нулю. Фотон может находиться только в двух спиновых состояниях с проекцией спина на направление движения (спиральностью) ±1. В физике фотоны обозначаются буквой γ.</p><br><p>Классическая электродинамика описывает фотон как электромагнитную волну с круговой правой или левой поляризацией. С точки зрения классической квантовой механики, фотону, как квантовой частице, свойственен корпускулярно-волновой дуализм, он проявляет одновременно свойства частицы и волны.</p><br><p>Квантовая электродинамика, основанная на квантовой теории поля и Стандартной модели, описывает фотон как калибровочный бозон, обеспечивающий электромагнитное взаимодействие между частицами: виртуальные фотоны являются квантами-переносчиками электромагнитного поля.</p><br><p>Современная наука рассматривает фотон как фундаментальную элементарную частицу, не обладающую структурой и размерами.</p><br><p>Фотон — самая распространённая по численности частица во Вселенной. На один нуклон приходится не менее 20 миллиардов фотонов.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%82%D0%BE%D0%BD">https://ru.wikipedia.org/wiki/Фотон</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var lightIterator = 0;

function light() {

	var openWord = "lightOpen";
	var spoilerContent = "lightContent";
	var closeWord = "lightClose";

	if (lightIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		lightIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		lightIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Свет — в физической оптике электромагнитное излучение, воспринимаемое человеческим глазом. В качестве коротковолновой границы спектрального диапазона, занимаемого светом, принят участок с длинами волн в вакууме 380—400 нм (750—790 ТГц), а в качестве длинноволновой границы — участок 760—780 нм (385—395 ТГц).</p><br><p>В широком смысле, используемом вне физической оптики, светом часто называют любое оптическое излучение, то есть такое электромагнитное излучение, длины волн которого лежат в диапазоне с приблизительными границами от единиц нанометров до десятых долей миллиметра. В этом случае в понятие «свет» помимо видимого излучения включаются как инфракрасное, так и ультрафиолетовое излучения.</p><br><p>Раздел физики, в котором изучается свет, носит название оптика.</p><br><p>Также, особенно в теоретической физике, термин свет может иногда выступать просто синонимом термина электромагнитное излучение, независимо от его частоты, особенно когда конкретизация не важна, а хотят, например, использовать более короткое слово.</p><br><p>Свет может рассматриваться либо как электромагнитная волна, скорость распространения в вакууме которой постоянна, либо как поток фотонов — частиц, обладающих определённой энергией, импульсом, собственным моментом импульса и нулевой массой (или, как говорили ранее, нулевой массой покоя).</p><br><p><a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/2/28/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BC%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D1%80.png"><div class="resp-wrapper"><img class="resp-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BC%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D1%80.png/1200px-%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BC%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D1%80.png" alt="Электромагнитный спектр.png"></div></a><br>Автор: Philip Ronan - <a target="_blank" class="external free" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:EM_spectrum.svg">https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:EM_spectrum.svg</a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a target="_blank" href="https://commons.wikimedia.org/w/index.php?curid=72548216">Ссылка</a></p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B5%D1%82">https://ru.wikipedia.org/wiki/Свет</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var earIterator = 0;

function ear() {

	var openWord = "earOpen";
	var spoilerContent = "earContent";
	var closeWord = "earClose";

	if (earIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		earIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		earIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>У́хо — сложный орган животных, предназначенный для восприятия звуковых колебаний. У большинства хордовых он, кроме восприятия звука, выполняет ещё одну функцию: отвечает за положение тела в пространстве и способность удерживать равновесие. Ухо позвоночных — парный орган, который размещается в височных костях черепа. У млекопитающих (в том числе у человека) ухо ограничивается снаружи ушными раковинами.</p><br><p>Ухо человека воспринимает звуковые волны частотой примерно от 8 до 20 000 Гц (колебаний в секунду), что соответствует длине волны (в воздухе при нормальных условиях) от 20,6 м до 1,7 см.</p><br><p>В процессе эволюционного развития ухо возникло у первичноводных предков позвоночных из особых кожных органов чувств (боковые органы). </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A3%D1%85%D0%BE">https://ru.wikipedia.org/wiki/Ухо</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var audioSignalIterator = 0;

function audioSignal() {

	var openWord = "audioSignalOpen";
	var spoilerContent = "audioSignalContent";
	var closeWord = "audioSignalClose";

	if (audioSignalIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		audioSignalIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		audioSignalIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Звук — физическое явление, представляющее собой распространение в виде упругих волн механических колебаний в твёрдой, жидкой или газообразной среде. В узком смысле под звуком имеют в виду эти колебания, рассматриваемые в связи с тем, как они воспринимаются органами чувств животных.</p><br><p>Как и любая волна, звук характеризуется амплитудой и частотой. Амплитуда характеризует громкость звука. Частота определяет тон, высоту. Обычный человек способен слышать звуковые колебания в диапазоне частот от 16—20 Гц до 15—20 кГц. Звук ниже диапазона слышимости человека называют инфразвуком; выше: до 1 ГГц, — ультразвуком, от 1 ГГц — гиперзвуком. Громкость звука сложным образом зависит от эффективного звукового давления, частоты и формы колебаний, а высота звука — не только от частоты, но и от величины звукового давления.</p><br><p>Среди слышимых звуков следует особо выделить фонетические, речевые звуки и фонемы (из которых состоит устная речь) и музыкальные звуки (из которых состоит музыка). Музыкальные звуки содержат не один, а несколько тонов, а иногда и шумовые компоненты в широком диапазоне частот.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D1%83%D0%BA">https://ru.wikipedia.org/wiki/Звук</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var cerebralCortexIterator = 0;

function cerebralCortex() {

	var openWord = "cerebralCortexOpen";
	var spoilerContent = "cerebralCortexContent";
	var closeWord = "cerebralCortexClose";

	if (cerebralCortexIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		cerebralCortexIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		cerebralCortexIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Кора больших полушарий головного мозга или кора головного мозга (лат. cortex cerebri) — структура головного мозга, слой серого вещества толщиной 1,3—4,5 мм, расположенный по периферии полушарий большого мозга и покрывающий их. Наибольшая толщина отмечается в верхних участках предцентральной, постцентральной извилин и парацентральной дольки.</p><p>Кора головного мозга играет очень важную роль в осуществлении высшей нервной (психической) деятельности.</p><p>Кора головного мозга человека составляет более 80 % массы мозга.</p><p>У человека кора составляет в среднем 44 % от объёма всего полушария в целом. Площадь поверхности коры одного полушария у взрослого человека 2400 см² (в основном от 2000 до 2800 см²). На поверхностные части приходится 1/3, на залегающие в глубине между извилинами — 2/3 всей площади коры.</p><p>Величина и форма борозд подвержены значительным индивидуальным колебаниям — не только мозг различных людей, но даже полушария одной и той же особи по рисунку борозд не вполне похожи.</p><p>Всю кору полушарий принято разделять на 4 типа: древняя (палеокортекс), старая (архикортекс), новая (неокортекс) и промежуточная кора (состоящая из промежуточной древней и промежуточной старой коры). Поверхность неокортекса у человека занимает 95,6 %, архикортекса — 2,2 %, палеокортекса — 0,6 %, промежуточной — 1,6 %.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%B0_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D1%85_%D0%BF%D0%BE%D0%BB%D1%83%D1%88%D0%B0%D1%80%D0%B8%D0%B9">https://ru.wikipedia.org/wiki/Кора_больших_полушарий</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var consciousnessIterator = 0;

function consciousness() {

	var openWord = "consciousnessOpen";
	var spoilerContent = "consciousnessContent";
	var closeWord = "consciousnessClose";

	if (consciousnessIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		consciousnessIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		consciousnessIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Сознание — представление субъекта о мире и о своем месте в нем, связанное со способностью дать отчет о своем внутреннем психическом опыте и необходимом для разумной организации совместной деятельности. Существует также мнение, что сознание — биологическая функция мозга человека, позволяющая индивиду получать некоторое представление об окружающем мире, включая самого себя. Механизм сознания сформировался в результате эволюции человека. Физиология этого механизма до конца не выяснена.</p><br><p>Сознание обрабатывает информацию со скоростью примерно 60 бит в секунд, при том, как подсознание обрабатывает входной поток информации в 11 миллионов бит в секунду.</p><br><p>Согласно культурно-историческому подходу, характерной особенностью сознания является то, что промежуточным звеном между объективной реальностью и сознанием являются элементы общественно-исторической практики, позволяющие строить объективные (общепринятые) представления о мире.</p><br><span>Предмет: Осознаваемые явления (ощущения, представления, чувствования, идеи) и акты</span><br><br><span>Представители: Вильгельм Вундт, Уильям Джеймс, Франц Брентано, Эдуард Бредфорд Титченер</span><br><br><p>Психология сознания не представляла собой целостного подхода. Скорее, она являлась конгломератом нескольких парадигм исследования, объединенных общим предметом и согласием во взгляде на психологию, как на науку о «непосредственном опыте» (В.Вундт).</p><br>Источник:<br><a target="_blank" href="">https://ru.wikipedia.org/wiki/</a><br><br><span>Продолжительность 15:54</span><br><a target="_blank" href="https://postnauka.ru/video/82975">https://postnauka.ru/video/82975</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/8ogFpiLt6uw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var objectiveRealityIterator = 0;

function objectiveReality() {

	var openWord = "objectiveRealityOpen";
	var spoilerContent = "objectiveRealityContent";
	var closeWord = "objectiveRealityClose";

	if (objectiveRealityIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		objectiveRealityIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		objectiveRealityIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Объекти́вная реа́льность — мир, существующий независимо от субъекта (человека) и его сознания. Представление о мире, как о внешней (окружающей) реальности, не зависящей от позиции, понимания и восприятия субъекта.</p><br><p>«Движение, пространство, время, жизнь и т. д. — всё это свойства или проявления свойств и взаимодействий различных по степени сложности видов материи, которые в совокупности и образуют мир в целом или всю Объективную реальность (Бытие)».</p><br><p>В материализме обычно представляют объективную реальность как некий механизм, работающий в соответствии со своим устройством, на который люди могут оказывать ограниченное влияние.</p><br><p>В религии и оккультизме считается, что мир раскрывается человеку в зависимости от его субъективной (духовной) динамики (развития). В основе мира представляются духовные существа (боги), которыми мир был создан (креационизм), и которые могут вмешиваться в работу «механизма» мира (теизм) или не вмешиваться (деизм).</p><br><p>В агностицизме считается, что «объективная реальность» как она есть недоступна полному познанию и пониманию человека.</p><br><p>По мнению некоторых учёных[кого?], сам термин «объективная реальность», введенный в отечественной философской традиции, представляет собой пример логической ошибки (плеоназм), поскольку уже понятие «реальность» обозначает данность, свободную от субъективных влияний. В подобном смысле даже иллюзии являются «реальностью» для конкретной психики в случае, если мы рассматриваем их как закономерное продолжение психических состояний личности и суммы внешних влияний (такие иллюзии могут быть даже отражены в истории психической болезни, или быть объектом научных опытов). С другой стороны, именно это и является логическим отделением восприятия и реальности, а следовательно, сам термин объективная реальность — подчеркивает разницу между восприятием реальности и действительностью[источник не указан 1498 дней].</p><br><p>В смысле «объективного, самодостаточного» источника воздействий на когнитивный процесс используется и понятие «творцы истины (англ. truth-makers) эмпирических предложений».</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F_%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C">https://ru.wikipedia.org/wiki/Объективная_реальность</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var cultureIterator = 0;

function culture() {

	var openWord = "cultureOpen";
	var spoilerContent = "cultureContent";
	var closeWord = "cultureClose";

	if (cultureIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		cultureIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		cultureIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Культу́ра (от лат. cultura — возделывание, позднее — воспитание, образование, развитие, почитание) — понятие, имеющее огромное количество значений в различных областях человеческой жизнедеятельности. Культура является предметом изучения философии, культурологии, истории, искусствознания, лингвистики (этнолингвистики), политологии, этнологии, психологии, экономики, педагогики и др.</p><br><p>В основном, под культурой понимают человеческую деятельность в её самых разных проявлениях, включая все формы и способы человеческого самовыражения и самопознания, накопление человеком и социумом в целом навыков и умений. Культура предстает также проявлением человеческой субъективности и объективности (характера, компетентностей, навыков, умений и знаний).</p><br><p>Культура представляет собой совокупность устойчивых форм человеческой деятельности, без которых она не может воспроизводиться, а значит — существовать.</p><br><p>Культура — это набор правил, которые предписывают человеку определённое поведение с присущими ему переживаниями и мыслями, оказывая на него, тем самым, управленческое воздействие.</p><br><p>Источником происхождения культуры мыслится человеческая деятельность, познание и творчество. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B0">https://ru.wikipedia.org/wiki/Культура</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var dataIterator = 0;

function data() {

	var openWord = "dataOpen";
	var spoilerContent = "dataContent";
	var closeWord = "dataClose";

	if (dataIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		dataIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		dataIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Да́нные — зарегистрированная информация:439; представление фактов, понятий или инструкций в форме, приемлемой для общения, интерпретации, или обработки человеком или с помощью автоматических средств (ISO/IEC/IEEE 24765-2010).</p><br><p>В информатике и информационных технологиях:</p><br><p>&#8226; Данные — поддающееся многократной интерпретации представление информации в формализованном виде, пригодном для передачи, связи или обработки (ISO/IEC 2382:2015).</p><p>&#8226; Данные — формы представления информации, с которыми имеют дело информационные системы и их пользователи (ISO/IEC 10746-2:1996).</p><br><p>В метрологии:</p><br><p>&#8226; Данные — совокупность значений, сопоставленных основным или производным мерам и/или показателям (ISO/IEC 15939:2007, ISO/IEC 25000:2005).</p><br><p>Хотя информация должна обрести некоторую форму представления (то есть превратиться в данные), чтобы ей можно было обмениваться, информация есть в первую очередь интерпретация (смысл) такого представления (ISO/IEC/IEEE 24765:2010). Поэтому в строгом смысле информация отличается от данных, хотя в неформальном контексте эти два термина очень часто используют как синонимы.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5">https://ru.wikipedia.org/wiki/Данные</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var truthIterator = 0;

function truth() {

	var openWord = "truthOpen";
	var spoilerContent = "truthContent";
	var closeWord = "truthClose";

	if (truthIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		truthIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		truthIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>И́стина — философская гносеологическая характеристика мышления в его отношении к своему предмету. Мысль называется истинной (или истиной), если она соответствует предмету.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%82%D0%B8%D0%BD%D0%B0">https://ru.wikipedia.org/wiki/Истина</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var lieIterator = 0;

function lie() {

	var openWord = "lieOpen";
	var spoilerContent = "lieContent";
	var closeWord = "lieClose";

	if (lieIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		lieIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		lieIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Ложь — сознательное высказывание, заведомо не соответствующее истине.</p><br><p>В повседневной жизни ложью называют умышленную передачу фактической и эмоциональной информации (вербально или невербально) с целью создания или поддержания в другом человеке убеждения, которое сам передающий считает не соответствующим истине.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%B6%D1%8C">https://ru.wikipedia.org/wiki/Ложь</a><br><br><p>Логическая ошибка — в логике, философии и прочих науках, изучающих познание, ошибка, связанная с нарушением логической правильности умозаключений. Ошибочность обусловлена каким-либо логическим недочётом в доказательстве, что делает доказательство в целом неверным.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Логическая_ошибка</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var cognitiveBiasesIterator = 0;

function cognitiveBiases() {

	var openWord = "cognitiveBiasesOpen";
	var spoilerContent = "cognitiveBiasesContent";
	var closeWord = "cognitiveBiasesClose";

	if (cognitiveBiasesIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		cognitiveBiasesIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		cognitiveBiasesIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>В когнитивной науке под когнити́вными искаже́ниями понимаются систематические ошибки в мышлении или шаблонные отклонения, которые возникают на основе дисфункциональных убеждений, внедрённых в когнитивные схемы, и легко обнаруживаются при анализе автоматических мыслей. Существование большинства когнитивных искажений было описано учёными, а многие были доказаны в психологических экспериментах.</p><br><p>Когнитивные искажения являются примером эволюционно сложившегося ментального поведения. Некоторые из них выполняют адаптивную функцию, поскольку они способствуют более эффективным действиям или более быстрым решениям. Другие, по-видимому, происходят из отсутствия соответствующих навыков мышления или из-за неуместного применения навыков, бывших адаптивными в других условиях.</p><br><p>Разработка и применение методов коррекции когнитивных искажений, вызывающих проблемы эмоционального, личностного, социального характера, является предметом различных направлений психотерапии, в частности когнитивной психотерапии. </p><br><p><a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/1/1a/Cognitive_biases_diagram_RU.png"><div class="resp-wrapper"><img class="resp-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cognitive_biases_diagram_RU.png/1200px-Cognitive_biases_diagram_RU.png" alt="Cognitive biases diagram RU.png"></div></a><br>Автор: Original designer: John Manoogian III (jm3). Organizational model: Buster Benson. Translation to Russian + Ukrainian with some graphical changes: Alexey Ezhikov, Alexander Obraz, Oleksii Karachynskyi - <a target="_blank" rel="nofollow" class="external free" href="http://obraz.io/ru/images/164/">http://obraz.io/ru/images/164/</a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a target="_blank" href="https://commons.wikimedia.org/w/index.php?curid=56472200">Ссылка</a></p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B3%D0%BD%D0%B8%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D1%85_%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9">https://ru.wikipedia.org/wiki/Список_когнитивных_искажений</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var emotionIterator = 0;

function emotion() {

	var openWord = "emotionOpen";
	var spoilerContent = "emotionContent";
	var closeWord = "emotionClose";

	if (emotionIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		emotionIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		emotionIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Эмо́ция (от лат. emoveo — потрясаю, волную) — психический процесс средней продолжительности, отражающий субъективное оценочное отношение к существующим или возможным ситуациям и объективному миру. Эмоции характеризуются тремя компонентами: переживаемым или осознаваемым в психике ощущением эмоции; процессами, происходящими в нервной, эндокринной, дыхательной, пищеварительной и других системах организма; наблюдаемыми выразительными комплексами эмоций, в том числе, на лице. Эмоции отличают от других видов эмоциональных процессов: аффектов, чувств и настроений. Эмоции, как и многие другие психические явления, понимаются разными авторами по-разному, поэтому вышеприведённое определение нельзя считать ни точным, ни общепринятым.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BC%D0%BE%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Эмоция</a><br><br><p>Эмоциональный процесс, эмоциональный феномен, эмоциональное состояние, эмоция (от лат. emoveo — потрясаю, волную), сленг. аффе́кт (от лат. affectus — страсть, душевное волнение) — психофизиологический процесс, мотивирующий и регулирующий деятельность (поведение, восприятие, мышление), отражающий субъективное значение объектов и ситуаций, и представленный в сознании в форме переживания. Среди эмоциональных процессов выделяют аффекты, эмоции, чувства и настроения.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BC%D0%BE%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81">https://ru.wikipedia.org/wiki/Эмоциональный_процесс</a><br><br><span>Продолжительность 25:49</span><br><a target="_blank" href="https://www.youtube.com/watch?v=vMfs1-TMyiE">https://www.youtube.com/watch?v=vMfs1-TMyiE</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/vMfs1-TMyiE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var naturalEnvironmentIterator = 0;

function naturalEnvironment() {

	var openWord = "naturalEnvironmentOpen";
	var spoilerContent = "naturalEnvironmentContent";
	var closeWord = "naturalEnvironmentClose";

	if (naturalEnvironmentIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		naturalEnvironmentIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		naturalEnvironmentIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Окружа́ющая среда́ — обобщённое понятие, характеризующее природные условия некоторой местности и её экологическое состояние. Окружающая среда обычно рассматривается как часть среды, которая взаимодействует с данным живым организмом (человеком, животным и так далее), включая объекты живой и неживой природы.</p><br><p>Словосочетание окружающая среда, как правило, применяется к описанию природных условий на поверхности Земли, состоянию её локальных и глобальных экосистем и их взаимодействию с человеком. В таком значении термин используется в международных соглашениях.</p><br><p>В современную эпоху человеческая деятельность охватила практически всю географическую оболочку, и её масштабы теперь сравнимы с действием глобальных природных процессов, что негативно сказывается на состоянии окружающей среды. Окружающая среда — это среда обитания и деятельности человечества, весь окружающий человека мир, включая и природную, и антропогенную среду.</p><br><p>В рамках Организации Объединённых Наций создана специальная организация — Программа ООН по окружающей среде (англ. UNEP). В целях привлечения внимания к проблемам охраны окружающей среды ООН установила Всемирный день окружающей среды.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9E%D0%BA%D1%80%D1%83%D0%B6%D0%B0%D1%8E%D1%89%D0%B0%D1%8F_%D1%81%D1%80%D0%B5%D0%B4%D0%B0">https://ru.wikipedia.org/wiki/Окружающая_среда</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var engineeringIterator = 0;

function engineering() {

	var openWord = "engineeringOpen";
	var spoilerContent = "engineeringContent";
	var closeWord = "engineeringClose";

	if (engineeringIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		engineeringIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		engineeringIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Инженерное дело (от фр. ingénierie; син. инженерия, инженерная деятельность, инженерно-техническая деятельность; инжиниринг от англ. engineering ← от лат. ingenium — «искусность» и лат. ingeniare — «изловчиться, разработать» — «изобретательность», «выдумка», «знания», «искусный») — область технической деятельности, включающая в себя целый ряд специализированных областей и дисциплин, направленная на практическое приложение и применение научных, экономических, социальных и практических знаний с целью обращения природных ресурсов на пользу человека.</p><br><p>Целями инженерной деятельности являются изобретение, разработка, создание, внедрение, ремонт, обслуживание и/или улучшение техники, материалов или процессов.</p><br><p>Инженерное дело тесно переплетается с наукой, опираясь на постулаты фундаментальной науки и результаты прикладных исследований. В этом смысле оно является отраслью научно-технической деятельности.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D0%BB%D0%BE">https://ru.wikipedia.org/wiki/Инженерное_дело</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var artIterator = 0;

function art() {

	var openWord = "artOpen";
	var spoilerContent = "artContent";
	var closeWord = "artClose";

	if (artIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		artIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		artIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Иску́сство (от церк.-слав. искусьство, ст.‑слав. искоусъ — опыт, испытание) — образное осмысление действительности; процесс или итог выражения внутреннего или внешнего (по отношению к творцу) мира в художественном образе; творчество, направленное таким образом, что оно отражает интересующее не только самого автора, но и других людей.</p><br><p>Искусство (наряду с наукой) — один из способов познания, как в естественнонаучной, так и в религиозной картине восприятия мира.</p><br><p>Понятие искусства крайне широко — оно может проявляться как чрезвычайно развитое мастерство в какой-то определённой области. Долгое время искусством считался вид культурной деятельности, удовлетворяющий любовь человека к прекрасному. Вместе с эволюцией социальных эстетических норм и оценок искусством получила право называться любая деятельность, направленная на создание эстетически-выразительных форм.</p><br><p>В масштабах всего общества, искусство — особый способ познания и отражения действительности, одна из форм художественной деятельности общественного сознания и часть духовной культуры как человека, так и всего человечества, многообразный результат творческой деятельности всех поколений. В науке искусством называют как собственно творческую художественную деятельность, так и её результат — художественное произведение.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%98%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%BE">https://ru.wikipedia.org/wiki/Искусство</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var heuristicIterator = 0;

function heuristic() {

	var openWord = "heuristicOpen";
	var spoilerContent = "heuristicContent";
	var closeWord = "heuristicClose";

	if (heuristicIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		heuristicIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		heuristicIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Эври́стика (от др.-греч. εὑρίσκω — «отыскиваю», «открываю») — отрасль знания, научная область, изучающая специфику творческой деятельности.</p><p>Под эвристикой понимают совокупность приёмов и методов, облегчающих и упрощающих решение познавательных, конструктивных, практических задач. Эвристика связана с психологией, физиологией высшей нервной деятельности, кибернетикой. Как наука эвристика развивается на стыке философии, психологии, теории искусственного интеллекта, структурной лингвистики, теории информации, математики и физики</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%B2%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Эвристика</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var epistemologyIterator = 0;

function epistemology() {

	var openWord = "epistemologyOpen";
	var spoilerContent = "epistemologyContent";
	var closeWord = "epistemologyClose";

	if (epistemologyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		epistemologyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		epistemologyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Эпистемоло́гия (от др.-греч. ἐπιστήμη «научное знание, наука», «достоверное знание» + λόγος «слово», «речь») — философско-методологическая дисциплина, исследующая знание как таковое, его строение, структуру, функционирование и развитие. Нередко (особенно в английском языке) слово выступает как синоним гносеологии.</p><br><p>Гносеоло́гия (от др.-греч. γνῶσις «познание», «знание» + λόγος «слово», «речь») — философская дисциплина, занимающаяся исследованиями, критикой и теориями познания.</p><br><p>Тенденция к разграничению этих двух понятий характерна для неклассической (современной) философии, и при таком подходе:</p><br><p>&#8226; Гносеология — изучает отношение «субъект-объект»;</p><p>&#8226; Эпистемология — изучает отношение «объект-знание».</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BF%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Эпистемология</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var philologyIterator = 0;

function philology() {

	var openWord = "philologyOpen";
	var spoilerContent = "philologyContent";
	var closeWord = "philologyClose";

	if (philologyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		philologyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		philologyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Филоло́гия (от др.-греч. φιλολογία, «любовь к слову») — совокупность наук, изучающих культуру народа, выраженную в языке и литературном творчестве.</p><br><p>В словаре Даля «филология» — (греч. любословие) наука или изучение древних, мёртвых языков; изучение живых языков — лингвистика. Лингвистика не всегда включается в филологию: во-первых, лингвистика не обязательно исследует тексты, во-вторых, не всегда затрагивает культурологическую сторону вопроса (хотя связь языка и культуры — актуальная лингво-философская проблема); для лингвистики характерна бо́льшая близость к точным наукам, чем для других дисциплин, традиционно относимых к филологии. В России лингвистика (в том числе общее языкознание) обычно изучается на факультетах, именуемых филологическими; в западноевропейских странах и в Америке под филологией подразумевают изучение древних (классическая филология) и средневековых текстов, а изучение языков и особенно теории языка считается отдельной дисциплиной.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Филология</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var linguisticsIterator = 0;

function linguistics() {

	var openWord = "linguisticsOpen";
	var spoilerContent = "linguisticsContent";
	var closeWord = "linguisticsClose";

	if (linguisticsIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		linguisticsIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		linguisticsIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Лингви́стика (от лат. lingua — язык), языкозна́ние, языкове́дение — наука, изучающая языки.</p><br><p>Это наука о естественном человеческом языке вообще и обо всех языках мира как его индивидуализированных представителях.</p><br><p>В широком смысле слова лингвистика подразделяется на научную и практическую. Чаще всего под лингвистикой подразумевается именно научная лингвистика. Является частью семиотики как науки о знаках.</p><br><p>Лингвистикой профессионально занимаются учёные-лингвисты.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Лингвистика</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var dialecticIterator = 0;

function dialectic() {

	var openWord = "dialecticOpen";
	var spoilerContent = "dialecticContent";
	var closeWord = "dialecticClose";

	if (dialecticIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		dialecticIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		dialecticIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Диале́ктика (др.-греч. διαλεκτική «искусство спорить, вести рассуждение» от διά «через; раздельно» + λέγω «говорить, излагать») — метод аргументации в философии, а также форма и способ рефлексивного теоретического мышления, исследующего противоречия, обнаруживаемые в мыслимом содержании этого мышления. В диалектическом материализме — общая теория развития материального мира и вместе с тем теория и логика познания. Диалектический метод является одним из центральных в европейской и индийской философских традициях. Само слово «диалектика» происходит из древнегреческой философии и стало популярным благодаря «Диалогам» Платона, в которых двое или более участников диалога могли придерживаться различных мнений, но стремились найти истину путём обмена своими мнениями. Начиная с Гегеля, диалектикa противопоставляется метафизике как способу мышления, который рассматривает вещи и явления как неизменные и независимые друг от друга.</p><br><p>В истории философии основные мыслители определяли диалектику как:</p><br><p>&#8226; учение о вечном становлении и изменчивости бытия (Гераклит);</p><br><p>&#8226; искусство диалога, понимаемого как постижение истины путём постановки наводящих вопросов и методичных ответов на них (Сократ);</p><br><p>&#8226; метод расчленения и связывания понятий с целью постижения сверхчувственной (идеальной) сущности вещей (Платон);</p><br><p>&#8226; наука, касающаяся общих положений научного исследования, или же, что одно и то же, — общих мест (Аристотель);</p><br><p>&#8226; учение о совмещении противоположностей (Николай Кузанский, Джордано Бруно);</p><br><p>&#8226; способ разрушения иллюзий человеческого разума, который, стремясь к цельному и абсолютному знанию, неминуемо запутывается в противоречиях (Кант);</p><br><p>&#8226; всеобщий метод познания противоречий как внутренних движущих сил развития бытия, духа и истории (Гегель);</p><br><p>&#8226; учение и метод, принимаемые за основу познания действительности и её революционного преобразования (марксизм-ленинизм).</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%B0%D0%BB%D0%B5%D0%BA%D1%82%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Диалектика</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var etymologyIterator = 0;

function etymology() {

	var openWord = "etymologyOpen";
	var spoilerContent = "etymologyContent";
	var closeWord = "etymologyClose";

	if (etymologyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		etymologyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		etymologyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Этимоло́гия (др.-греч. ἐτυμολογία от ἔτυμον — истина, основное значение слова и λόγος — слово, учение, суждение) — раздел лингвистики (сравнительно-исторического языкознания), изучающий происхождение слов (устойчивых оборотов и реже морфем). А также — методика исследований, используемых при выявлении истории происхождения слова (или морфемы) и сам результат такого выявления. Также под этимологией может пониматься любая гипотеза о происхождении того или иного конкретного слова или морфемы (например, «предложить более убедительную этимологию»), само происхождение слова (например, «у слова тетрадь греческая этимология», то есть версию происхождения — непосредственно этимон).</p><br><p>Термин «этимология» зародился в среде древнегреческих философов-стоиков и, согласно поздним свидетельствам Диогена Лаэртского, приписывается Хрисиппу (281/278—208/205 до н. э.). До XIX века термин «этимология» в языкознании мог применяться в значении «грамматика». Первоначально, у древних — учение об «истинном» («первоначальном») значении слова: см. Исидор Севильский (ок. 560—636) — энциклопедия «Этимологии».</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D1%82%D0%B8%D0%BC%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Этимология</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var historyIterator = 0;

function history() {

	var openWord = "historyOpen";
	var spoilerContent = "historyContent";
	var closeWord = "historyClose";

	if (historyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		historyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		historyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Исто́рия (др.-греч. ἱστορία[⇨]) — область знаний, а также гуманитарная наука, занимающаяся изучением человека (его деятельности, состояния, мировоззрения, социальных связей, организаций и так далее) в прошлом.</p><br><p>В более узком смысле история — наука, изучающая всевозможные источники о прошлом для того, чтобы установить последовательность событий, объективность описанных фактов и сделать выводы о причинах событий. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/История</a><br><br><p>Всемирная история — процесс развития человеческого общества в целом, для которого характерны закономерности, проявляющиеся в истории всех народов. Всемирный исторический процесс начинается с появлением человеческого общества и в зависимости от общих отличительных особенностей условно делится на хронологические периоды.</p><br><p>Иногда под всемирной историей понимается рассмотрение истории отдельных стран или совокупности историй своеобразных и относительно замкнутых цивилизаций. Прусский историограф Леопольд фон Ранке по этому поводу замечал: «Более или менее полное собрание истории отдельных народов ещё не составило бы никакой всемирной истории, ибо оно потеряло бы из виду взаимосвязь вещей. Но задача всемирной истории как науки как раз и заключается в том, чтобы познать эту взаимосвязь, показать ход развития великих событий, которые связывают все народы и управляют ими. То, что такая общность имеется, является очевидным».</p><br><p>Историческое развитие человечества реализуется двумя способами: путём постепенного прироста открытий и находок, а также путём качественных скачков или революций, составляющих эпохи в материальной и духовной эволюции.</p><br><p>Сельскохозяйственная (неолитическая) революция привела к развитию цивилизаций, оседлых сообществ, то есть перешедших от кочевого образа жизни (скотоводство и собирательство) к земледелию. В этих древних цивилизациях была изобретена письменность, позволившая передавать знания из поколения в поколение на материальных носителях. Это стимулировало развитие многообразных ремёсел, разделение труда и расслоение общества на классы.</p><br><p>Разрозненные поселения, сконцентрированные вокруг жизнеобеспечивающих источников ресурсов — плодородных естественно орошаемых земель, воды (рек и озёр), обильных выпасов для скота — позже интегрировались в более крупные образования. Этому также способствовало совершенствование транспортных средств. Эти естественные процессы развития древних сообществ, сопровождавшиеся соперничеством и конфликтами между соседними сообществами, развиваясь на протяжении тысячелетий, привели к образованию государств и, затем, сверхдержав (империй).</p><br><p>Падение Римской империи в Европе в конце античной эпохи ознаменовало начало Средневековья.</p><br><p>В середине XV века изобретение Иоганном Гутенбергом современного книгопечатания — оттисков на бумаге покрытого краской и вырезанного на деревянных досках зеркального шрифта, совершило переворот в коммуникациях, помогая завершиться Средневековью и возвестив о Новом времени, Возрождении и научно-технической революции.</p><br><p>К XVIII столетию накопление знаний и технологий, особенно в Европе, достигло критической массы, которая вдохнула жизнь в Промышленную революцию. Более четверти тысячелетия наука, знания, технологии, торговля и сопутствующие им войны ускорялись в геометрической прогрессии, создавая как благоприятные условия, так и угрозы, с которыми ныне сталкивается человеческое сообщество, населяющее планету.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%B0%D1%8F_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Всемирная_история</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var medicineIterator = 0;

function medicine() {

	var openWord = "medicineOpen";
	var spoilerContent = "medicineContent";
	var closeWord = "medicineClose";

	if (medicineIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		medicineIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		medicineIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Медици́на (лат. medicina от словосочетания ars medicina — «лечебное искусство», «искусство исцеления», и имеет тот же корень, что и глагол medeor, «исцеляю») — раздел биологии, изучающий диагностику, лечение и профилактику заболеваний, способы сохранения и укрепления здоровья и трудоспособности людей, продления жизни, а также облегчения страданий от физических и психических недугов.</p><br><p>При необходимости противопоставления медицине других направлений, таких как нетрадиционная или альтернативная, народная медицина, слово «медицина» уточняют — обычная или общепринятая, доказательная, научная, официальная, иногда конвенциональная медицина (конвенциональная от англ. conventional — обычный, традиционный; общепринятый).</p><br><p>Если методы альтернативной медицины используются совместно с общепринятыми, такую практику называют комплементарной медициной.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D0%B0">https://ru.wikipedia.org/wiki/Медицина</a><br><br><span>Продолжительность 17:08</span><br><a target="_blank" href="https://www.youtube.com/watch?v=N-Wen0YqAr0">https://www.youtube.com/watch?v=N-Wen0YqAr0</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/N-Wen0YqAr0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var etiologyIterator = 0;

function etiology() {

	var openWord = "etiologyOpen";
	var spoilerContent = "etiologyContent";
	var closeWord = "etiologyClose";

	if (etiologyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		etiologyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		etiologyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Этиоло́гия (греч. αἰτία «причина» + др.-греч. λόγος «суждение, учение») — изучение причины или первопричины с философской точки зрения. Понятие применяется в философии, физике, психологии, политологии, географии, пространственном анализе, медицине, богословии и биологии в отношении причин разнообразных феноменов и сущностей, вне контекста их свойств. Этиологическим называется миф, объясняющий происхождение отдельных вещей или явлений (например животных), имён, фамильных родов или рассказывающий мифическую историю конкретного места.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D1%82%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_(%D1%84%D0%B8%D0%BB%D0%BE%D1%81%D0%BE%D1%84%D0%B8%D1%8F)">https://ru.wikipedia.org/wiki/Этиология_(философия)</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var psychologyIterator = 0;

function psychology() {

	var openWord = "psychologyOpen";
	var spoilerContent = "psychologyContent";
	var closeWord = "psychologyClose";

	if (psychologyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		psychologyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		psychologyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Психоло́гия (от др.-греч. ψυχή «душа; характер»; λόγος «учение») — наука, изучающая закономерности возникновения, развития и функционирования психики и психической деятельности человека и групп людей. Объединяет в себе гуманитарный и естественно-научный подходы.</p><br><p>Включает в себя фундамента́льную психологию, выявляющую факты, механизмы и законы психической деятельности, прикладну́ю психологию, изучающую, с опорой на данные фундаментальной психологии, психические явления в естественных условиях, и практи́ческую психологию, занимающуюся применением психологических знаний на практике.</p><br><p>Прикладная психология тесно связана с психиатрией — отраслью медицины, назначение которой распознавание и лечение психических расстройств, и психотерапией, занимающейся вопросами лечебного воздействия на психику и через психику на организм человека, направленного на избавление человека от проблем эмоционального, личностного, социального характера.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Психология</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var physiologyIterator = 0;

function physiology() {

	var openWord = "physiologyOpen";
	var spoilerContent = "physiologyContent";
	var closeWord = "physiologyClose";

	if (physiologyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		physiologyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		physiologyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Физиоло́гия (от др.-греч. φύσις — природа и λόγος — слово) — наука о сущности живого, жизни в норме и при патологиях, то есть о закономерностях функционирования и регуляции биологических систем разного уровня организации, о пределах нормы жизненных процессов и болезненных отклонений от неё (см. патофизиология).</p><br><p>Физиология представляет собой комплекс естественнонаучных дисциплин, изучающих как жизнедеятельность организма в целом, так и отдельных систем и процессов, органов, клеток, клеточных структур (частная физиология). Физиология стремится раскрыть механизмы регуляции, закономерности жизнедеятельности организма и его взаимодействия с окружающей средой.</p><br><p>Физиология изучает основное качество живого — его жизнедеятельность, составляющие её функции и свойства, как в отношении всего организма, так и в отношении его частей. В основе представлений о жизнедеятельности находятся знания о процессах обмена веществ, энергии и информации. Жизнедеятельность направлена на достижения полезного результата и приспособления к условиям среды.</p><br><p>Физиологию традиционно делят на физиологию растений и физиологию человека и животных.</p><br><p>Физиология вместе с анатомией и гистологией является базисной теоретической основой, благодаря которой врач объединяет разрозненные знания и факты о пациенте в единое целое, оценивает его состояние, уровень дееспособности. А по степени функциональных нарушений, то есть по характеру и величине отклонения от нормы важнейших физиологических функций — стремится устранить эти отклонения и вернуть организм к норме с учётом индивидуальных, этнических, половых, возрастных особенностей организма, а также экологических и социальных условий среды обитания.</p><br><p>При коррекции нарушенных функций организма следует обращать внимание не только на особенности влияния природно-климатических производственных условий среды обитания, но и на характер антропогенного загрязнения — количество и качество вредных высокотоксичных веществ в атмосфере, воде, продуктах питания.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%B7%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Физиология</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var communicationStudiesIterator = 0;

function communicationStudies() {

	var openWord = "communicationStudiesOpen";
	var spoilerContent = "communicationStudiesContent";
	var closeWord = "communicationStudiesClose";

	if (communicationStudiesIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		communicationStudiesIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		communicationStudiesIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Коммуникация (как связь и общение) — от лат. «communicatio» — сообщение, передача и от «communicare» — делать общим, беседовать, связывать, сообщать, передавать — принятый в исследованиях термин, которым обозначают операционные системы, повседневно обеспечивающие единство и преемственность человеческой деятельности (см. в этой связи теорию коммуникации, науку о коммуникациях, коммуникационную науку, коммуникативистику, что представляет собой перевод английского термина communication studies), а также метадискурс (Р. Крэйг).</p><br><p>Процесс коммуникации (в том числе как формы взаимодействия) понимается в качестве одной из основ жизни человека и общества. При этом речь у исследователей идет как о процессах коммуникации, так и о его результатах.</p><br><p>Согласно И. П. Яковлеву и другим многочисленным исследователям, под коммуникацией как наукой следует понимать совокупность исследований роли коммуникации в обществе, имея в виду её развитие, содержание и структуру коммуникационных процессов, использование их средств и т. д.</p><br><p>Например, согласно С. В. Борисневу, под коммуникацией следует понимать социально обусловленный процесс передачи и восприятия информации в условиях межличностного и массового общения по различным каналам с помощью разных средств коммуникации.</p><br><p>М. С. Андрианов ограничивает понимание коммуникации исследованиями смысловых аспектов социального взаимодействия.</p><br><p>По Никласу Луману, под коммуникацией следует понимать «некое исторически-конкретное протекающее, зависимое от контекста событие» как совокупность действий, характерных только для социальных систем, при осуществлении которых происходит перераспределение знания и незнания, а не связь или передача информации, или перенос «семантических» содержаний от одной обладающей ими психической системы к другой.</p><br><p>Согласно Бакстеру, Силларсу и Вангелисти, коммуникация — это средство, с помощью которого люди конструируют и поддерживают свои отношения.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F_(%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%BD%D0%B0%D1%83%D0%BA%D0%B8)">https://ru.wikipedia.org/wiki/Коммуникация_(социальные_науки)</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var timeIterator = 0;

function time() {

	var openWord = "timeOpen";
	var spoilerContent = "timeContent";
	var closeWord = "timeClose";

	if (timeIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		timeIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		timeIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Вре́мя — форма протекания физических и психических процессов, условие возможности изменения. Одно из основных понятий философии и физики, мера длительности существования всех объектов, характеристика последовательной смены их состояний в процессах и самих процессов, изменения и развития, а также одна из координат единого пространства-времени, представления о котором развиваются в теории относительности.</p><br><p>В философии — это необратимое течение (протекающее лишь в одном направлении — из прошлого, через настоящее в будущее).</p><br><p>В метрологии — физическая величина, одна из семи основных величин Международной системы величин (англ. International System of Quantities, фр. International Système de grandeurs, ISQ), а единица измерения времени «секунда» — одна из семи основных единиц в Международной системе единиц (СИ) (англ. International System of Units, SI, фр. Le Système International d’Unités, SI).</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%92%D1%80%D0%B5%D0%BC%D1%8F">https://ru.wikipedia.org/wiki/Время</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var goodsIterator = 0;

function goods() {

	var openWord = "goodsOpen";
	var spoilerContent = "goodsContent";
	var closeWord = "goodsClose";

	if (goodsIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		goodsIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		goodsIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Бла́го — всё, что способно удовлетворять повседневные жизненные потребности людей, приносить людям пользу, доставлять удовольствие. В экономическо-социальном отношении под благом разумеется все, что, имея ценность, может иметь и рыночную цену, следовательно, в обширном смысле подразумеваются все имущественные блага.</p><br><p>В экономической теории предмет признается благом при наличии и совпадении следующих четырех условий:</p><br><p>1. человеческая потребность;</p><p>2. свойства предмета делают его годным быть поставленным в причинную связь с удовлетворением этой потребности;</p><p>3. познание человеком этой причинной связи;</p><p>4. возможность распоряжаться предметом таким образом, чтобы действительно употреблять его для удовлетворения этой потребности.</p><br><p>Предмет только тогда становится благом, когда совпадают эти четыре условия, но если отсутствует хотя бы одно из них, то предмет никогда не может стать благом.</p><br><p>На немецком языке Gut и на французском bien имеют и специальное значение недвижимого имущества. Имущественные блага создаются, приобретаются, меняются, распределяются на основании внутренних, управляющих хозяйственной жизнью экономических законов, изучаемых политической экономией. Приобретение ценностей или вещей, как отдельных, так и совокупности таких имущественных благ, имущества, влияет на общественное положение каждого человека, порождает различные общественные классы, зависящие от количества имущественных благ, которых достигает и которыми пользуется каждый. Различие таких классов, взаимное отношение их и взаимное влияние, переходы людей из одного класса в другой в связи с созданием различного рода человеческих единений, передвижение имущественных благ и движение самих классов, восходящее и нисходящее, происходит на основании внутренних, управляющих общественной жизнью социальных, или общественных, законов, изучаемых социологией, или обществоведением.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE_(%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D0%BA%D0%B0)">https://ru.wikipedia.org/wiki/Благо_(экономика)</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var economicsIterator = 0;

function economics() {

	var openWord = "economicsOpen";
	var spoilerContent = "economicsContent";
	var closeWord = "economicsClose";

	if (economicsIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		economicsIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		economicsIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Экономика (от др.-греч. οἰκονομία, буквально — «искусство ведения домашнего хозяйства») — совокупность общественных наук, изучающих производство, распределение и потребление товаров и услуг. Экономическая действительность является объектом экономических наук, которые подразделяются на теоретические и прикладные.</p><br><p>Теоретическое направление также называют экономической теорией — оно рассматривает особенности процесса обмена, распределения, выбора способа использования ограниченных ресурсов.</p><br><p>Прикладная экономика изучает возможности приложения законов, теорий, предложений, разработанных экономической теорией, непосредственно для функционирования отдельных элементов экономических систем.</p><br><p>Ещё в IV веке до н. э. Ксенофонт написал произведение под названием «Домострой» (др.-греч. "Οἰκονομικός"), переведённое Цицероном на латынь как лат. Oeconomicus. Всеобщее признание термин получил после того как был употреблен в заглавии труда Джона Стюарта Милля «Принципы политической экономии» (1848 г.).</p><br><p>Как самостоятельная наука экономика выделилась в XVIII веке с выходом в свет книги Адама Смита «Исследование о природе и причинах богатства народов» (распространённое название «Богатство народов») в 1776 году. Однако по замечанию Йозефа Шумпетера, внутреннюю логику экономических явлений понимали и до Адама Смита, но на интуитивном, преднаучном уровне.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D0%BA%D0%B0_(%D0%BD%D0%B0%D1%83%D0%BA%D0%B0)">https://ru.wikipedia.org/wiki/Экономика_(наука)</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var creditIterator = 0;

function credit() {

	var openWord = "creditOpen";
	var spoilerContent = "creditContent";
	var closeWord = "creditClose";

	if (creditIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		creditIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		creditIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Креди́т (лат. creditum — заём от лат. credere — доверять) — экономические отношения, при которых одна из сторон не возмещает немедленно полученные от другой стороны деньги или другие ресурсы, но обещает предоставить возмещение (оплату) или вернуть ресурсы в будущем. Фактически, кредит является юридическим оформлением экономического обязательства.</p><br><p>Кредитные отношения могут выражаться в разных формах: коммерческий кредит, банковский кредит, заём, лизинг, факторинг и т. д.</p><br><p>Другие варианты определения кредита:</p><br><p>&#8226; взаимоотношения между кредитором и заёмщиком;</p><p>&#8226; возвратное движение стоимости;</p><p>&#8226; движение платёжных средств на началах возвратности;</p><p>&#8226; движение ссуженной стоимости;</p><p>&#8226; движение ссудного капитала;</p><p>&#8226; размещение и использование ресурсов на началах возвратности.</p><br><p>Согласно определению Джона Милля, кредит «есть разрешение одному лицу пользоваться капиталом другого лица».</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B5%D0%B4%D0%B8%D1%82">https://ru.wikipedia.org/wiki/Кредит</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var obligationIterator = 0;

function obligation() {

	var openWord = "obligationOpen";
	var spoilerContent = "obligationContent";
	var closeWord = "obligationClose";

	if (obligationIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		obligationIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		obligationIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Обяза́тельство — в широком смысле, это нужда в исполнении долга, спровоцированная внутренними или внешними обстоятельствами.</p><br><p>В юридическом смысле, это относительное гражданское правоотношение, в силу которого одна сторона (должник) обязана совершить в пользу другой стороны (кредитора) определённые действия или воздержаться от определённых действий. Такими действиями могут являться: передача определённого имущества, выполнение работы, оказание услуг, уплата денег, а также другие действия. Кредитор, в пользу которого должно быть совершено такое действие, имеет право требовать от должника исполнения его обязанности.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE">https://ru.wikipedia.org/wiki/Обязательство</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var debtIterator = 0;

function debt() {

	var openWord = "debtOpen";
	var spoilerContent = "debtContent";
	var closeWord = "debtClose";

	if (debtIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		debtIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		debtIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Долг — это обязательство, а также денежные средства или другие активы, которые кредитор передаёт заёмщику (дебитору) с условием их возврата в будущем и/или выплаты вознаграждения. Долг позволяет физическим или юридическим лицам совершать те операции, на которые у них иначе не хватило бы финансовых возможностей.</p><br><p>За счёт увеличения долговых обязательств компания может формировать свой заёмный капитал, который идёт на финансирование производственной деятельности. От грамотного управления долговыми обязательствами во многом зависит успешность компании. Если компания приходит к состоянию, когда она не может рассчитаться по долгам, то её называют банкротом.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BB%D0%B3">https://ru.wikipedia.org/wiki/Долг</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var barterIterator = 0;

function barter() {

	var openWord = "barterOpen";
	var spoilerContent = "barterContent";
	var closeWord = "barterClose";

	if (barterIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		barterIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		barterIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Договор мены (бартерный обмен, ба́ртер, мена) — вид гражданско-правового договора, при котором одна сторона берёт на себя обязательство передать другой стороне некоторое имущество против обязательства другой стороны передать первой имущество равной стоимости (с точки зрения сторон договора).</p><br><p>Под бартером или бартерным обменом понимают такой договор мены, при котором происходит переход права собственности на объекты договора между его сторонами без использования средств платежа (например, денег). Обычно бартерный обмен понимают как обмен правом собственности на вещи; товарами, услугами с участием юридических лиц. Термин встречается в налоговом законодательстве, но строгого определения в отличие от термина «договор мены» не имеет. Часто хозяйственные договоры мены (обмена) именно налоговые органы рассматривают как бартерные.</p><br><p>Договор мены — более широкое понятие, поскольку включает в себя обмен правами, не сводящимися непременно к собственности на вещи. Договором мены (обмена) чаще называют договор между частными лицами.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%80%D1%82%D0%B5%D1%80">https://ru.wikipedia.org/wiki/Бартер</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var moneyIterator = 0;

function money() {

	var openWord = "moneyOpen";
	var spoilerContent = "moneyContent";
	var closeWord = "moneyClose";

	if (moneyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		moneyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		moneyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Де́ньги — всеобщий эквивалент, служащий мерой стоимости любых товаров и услуг, способный непосредственно на них обмениваться. По своей форме деньги могут быть особым товаром, ценной бумагой, знаком стоимости, различными благами или ценностями, записями по счётам.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BD%D1%8C%D0%B3%D0%B8">https://ru.wikipedia.org/wiki/Деньги</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var marketIterator = 0;

function market() {

	var openWord = "marketOpen";
	var spoilerContent = "marketContent";
	var closeWord = "marketClose";

	if (marketIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		marketIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		marketIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Рынок — совокупность процессов и процедур, обеспечивающих обмен между покупателями (потребителями) и продавцами (поставщиками) отдельных товаров и услуг.</p><br><p>Рынки могут принимать различные формы. Одним из главных критериев рынка является свобода действий участников, что обеспечивает наличие конкуренции. Чем больше число независимых участников, тем выше конкурентность рынка. Рынок с одним основным продавцом и несколькими покупателями называется монополией. Рынок одного крупнейшего покупателя и нескольких продавцов — монопсонией. Это крайности несовершенной конкуренции.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A0%D1%8B%D0%BD%D0%BE%D0%BA">https://ru.wikipedia.org/wiki/Рынок</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var politicsIterator = 0;

function politics() {

	var openWord = "politicsOpen";
	var spoilerContent = "politicsContent";
	var closeWord = "politicsClose";

	if (politicsIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		politicsIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		politicsIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Поли́тика (др.-греч. πολιτική «государственная деятельность») — понятие, включающее в себя деятельность органов государственной власти и государственного управления, а также вопросы и события общественной жизни, связанные с функционированием государства. Научное изучение политики ведётся в рамках политологии.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Политика</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var stateIterator = 0;

function state() {

	var openWord = "stateOpen";
	var spoilerContent = "stateContent";
	var closeWord = "stateClose";

	if (stateIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		stateIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		stateIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Госуда́рство — политическая форма организации общества на определённой территории, политико-территориальная суверенная организация публичной власти, обладающая аппаратом управления и принуждения, которому подчиняется всё население страны.</p><br><p>Ни в науке, ни в международном праве не существует единого и общепризнанного определения понятия «государство». «Страна» является близким, но не тождественным государству термином, как правило понимаемым более широко, чем «государство». На 2015 год не существует единого юридического определения термина «государство», всецело признанного наукой и всеми странами мира. Крупнейшая международная организация, Организация Объединённых Наций, не имеет полномочий определять, является ли то или иное образование государством или нет, это вопрос международно-правового признания другими государствами и правительствами. Один из немногих документов, дающих определение «государства» в международном праве, — Конвенция Монтевидео, подписанная в 1933 году только несколькими американскими государствами.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%BE">https://ru.wikipedia.org/wiki/Государство</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var civilizationIterator = 0;

function civilization() {

	var openWord = "civilizationOpen";
	var spoilerContent = "civilizationContent";
	var closeWord = "civilizationClose";

	if (civilizationIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		civilizationIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		civilizationIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Цивилиза́ция (от лат. civilis — гражданский, государственный):</p><br><p>1. общефилософское значение — социальная форма движения материи, обеспечивающая её стабильность и способность к саморазвитию путём саморегуляции обмена с окружающей средой (человеческая цивилизация в масштабе космического устройства);</p><p>2. историко-философское значение — единство исторического процесса и совокупность материально-технических и духовных достижений человечества в ходе этого процесса (человеческая цивилизация в истории Земли);</p><p>3. стадия всемирного исторического процесса, связанная с достижением определённого уровня социальности (стадия саморегуляции и самопроизводства при относительной независимости от природы, дифференцированности общественного сознания);</p><p>4. локализованное во времени и пространстве общество. Локальные цивилизации являются целостными системами, представляющими собой комплекс экономической, политической, социальной и духовной подсистем и развивающиеся по законам витальных циклов.</p><br><p>Одним из первых термин «цивилизация» в научный оборот ввёл философ Адам Фергюсон, который подразумевал под термином стадию в развитии человеческого общества, характеризующуюся существованием общественных страт, а также городов, письменности и других подобных явлений. Предложенная шотландским учёным стадиальная периодизация мировой истории (дикость — варварство — цивилизация) пользовалась поддержкой в научных кругах в конце XVIII — начале XIX века, но с ростом популярности в конце XIX — начале XX века плюрально-циклического подхода к истории, под общим понятием «цивилизации» всё больше стали подразумеваться «локальные цивилизации».</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A6%D0%B8%D0%B2%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Цивилизация</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var exploitationOfLabourIterator = 0;

function exploitationOfLabour() {

	var openWord = "exploitationOfLabourOpen";
	var spoilerContent = "exploitationOfLabourContent";
	var closeWord = "exploitationOfLabourClose";

	if (exploitationOfLabourIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		exploitationOfLabourIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		exploitationOfLabourIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Эксплуата́ция — присвоение результатов труда другого человека без обмена или с предоставлением взамен товаров (услуг, денег), стоимость которых меньше, чем стоимость, созданная трудом этого человека за рабочее время.</p><br><p>Экономическая эксплуатация является одной из главных тем трудовой теории стоимости, особенно в марксизме. Большинство других экономических теорий считают, что эксплуатации не существует, либо она носит внеэкономический характер (основана на насилии, обмане, зависимости, принуждении и т. п.).</p><br><p>Согласно марксизму, материальной предпосылкой для эксплуатации является такой уровень развития производительных сил, при котором человек может производить продукт не только для покрытия своих минимальных потребностей (необходимый продукт), но и некоторый излишек (прибавочный продукт), который и присваивается владельцами средств производства, организующими труд нанятого или принуждаемого к труду силой или иными обстоятельствами человека.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BA%D1%81%D0%BF%D0%BB%D1%83%D0%B0%D1%82%D0%B0%D1%86%D0%B8%D1%8F_%D1%82%D1%80%D1%83%D0%B4%D0%B0">https://ru.wikipedia.org/wiki/Эксплуатация_труда</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var slaveryIterator = 0;

function slavery() {

	var openWord = "slaveryOpen";
	var spoilerContent = "slaveryContent";
	var closeWord = "slaveryClose";

	if (slaveryIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		slaveryIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		slaveryIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Ра́бство — система общественных взаимоотношений, при которой допускается нахождение человека (раба) в собственности у другого человека (господина, рабовладельца, хозяина) или государства. Прежде в рабов обращали пленников, преступников и должников, позже и гражданских лиц, которых принуждали работать на своего хозяина. Рабство в этой форме было широко распространено до XX века, в некоторых арабских и африканских странах существует до сих пор.</p><br><p>В современном мире рабство осуждается в большинстве стран мира как преступление и запрещено законодательствами этих стран. Суть рабства, как преступления, в лишении рабов будущего полностью или частично.</p><br><p>Государства, где разрешено рабство, обычно называют рабовладельческими государствами.</p><br><p>Рабство существовало с доисторических времен в различных цивилизациях, в большинстве случаев принимая те или иные институциональные формы. В настоящее время рабство запрещено во всех странах (последней отменила рабство Мавритания в 1981 году).</p><br><p>Существует мнение, что в современном мире есть явления, неотличимые от рабства. К таковым могут относить: крепостное право, закрытое содержание домашней прислуги, детей-солдат, торговлю людьми и насильственный брак. В соответствии с таким подходом, в современном мире на рабском положении находится, по разным оценкам, от 20 до 36 млн человек.</p><br><p>В современных условиях это социальное явление, характеризующееся тотальным ограничением прав человека (лица или группы лиц), его свободы, личной неприкосновенности, принуждением к подневольному труду, к выполнению работы, не ограниченной по времени или неопределённой по характеру, к сексуальной несвободе, а также эксплуатации лица в качестве объекта права собственности (путём продажи, сдачи внаём и др.).</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B1%D1%81%D1%82%D0%B2%D0%BE">https://ru.wikipedia.org/wiki/Рабство</a><br</div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var empireIterator = 0;

function empire() {

	var openWord = "empireOpen";
	var spoilerContent = "empireContent";
	var closeWord = "empireClose";

	if (empireIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		empireIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		empireIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Импе́рия (от лат. imperium — власть) — монархическое государство во главе с императором или колониальная либо международно значимая держава, опирающаяся в своей внутренней и внешней политике на военные сословия (организованную армию) и действующая в интересах военных сословий. Как правило, империя объединяет разные народы и территории в единое государство с единым политическим центром, играющее заметную роль в регионе или даже во всем мире. Самыми известными империями являлись Римская империя, Священная Римская империя, Монгольская империя, Османская империя, Российская империя, Британская империя. В современном мире лишь японский монарх носит титул императора, но на этом основании Японию называть империей нельзя, так как самоназвание этой страны переводится как Японское государство, а не Японская империя, а также по Конституции японский император является лишь символом государства и единства народа, а главой государства является премьер-министр.</p><br><p>Словарь Даля определял Империю как «государство, властелин которого носит сан императора, неограниченного, высшего по сану правителя». Большая Советская Энциклопедия предлагает в значении империи уже 2 значения. Во-первых, это «наименование монархических государств, главой которых является император», среди которых Рим после падения республики, восточная часть Римской империи — Византийская (просуществовала до 1453 г.), государство Карла Великого (768—814 гг.), германская Священная Римская империя (962—1806 гг.), Российская империя со времени Петра I до свержения монархии (1721—1917 гг.), Франция при Наполеоне I и Наполеоне III (1-я и 2-я империя), Австрийская (1804—1918 гг., с 1868 года — Австро-Венгерская). Во-вторых, «империей иногда называют организацию колониального господства отдельных буржуазных государств. В этом смысле говорят о Британской Империи, как об организации, охватывающей вместе с Великобританией все доминионы и колонии, о Французской империи, несмотря на республиканский характер государственного строя Франции». Современная политология рассматривает Империю (лат. imperium — власть, господство), как «1) монархическое государство во главе с императором; 2) сложное по форме устройства государство, состоящее из метрополии (греч. meter — мать и polis — город) — центральной части государства и колоний (лат, colonia — поселение), подчинённых центральной власти государств (например, Римская империя, Британская империя, Российская империя)».</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Империя</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var speculationIterator = 0;

function speculation() {

	var openWord = "speculationOpen";
	var spoilerContent = "speculationContent";
	var closeWord = "speculationClose";

	if (speculationIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		speculationIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		speculationIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Спекуляция (от лат. specio) — взгляд</p><br><p>&#8226; В общенаучном, философском значении — отвлечённое, умозрительное рассуждение в противоположность рассуждению об эмпирических фактах (см. Спекуляция (философия)).</p><p>&#8226; В экономической лексике — получение дохода за счёт разницы между ценами покупки и продажи. По сути, любую торговую операцию можно считать спекулятивной. В экономической литературе часто встречается попытка разделить спекуляцию и инвестиции. Однако единого мнения нет. Подробнее смотрите в статье инвестиции.</p><p>&#8226; В переносном смысле — использование каких-либо обстоятельств, чьих-либо затруднений в своих интересах, своих планах (например, спекуляция на политических затруднениях).</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B5%D0%BA%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Спекуляция</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var bankIterator = 0;

function bank() {

	var openWord = "bankOpen";
	var spoilerContent = "bankContent";
	var closeWord = "bankClose";

	if (bankIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		bankIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		bankIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Банк (от итал. banco — скамья, лавка, стол, на которых менялы раскладывали монеты) — финансово-кредитная организация, производящая разнообразные виды операций с деньгами и ценными бумагами и оказывающая финансовые услуги правительству, юридическим и физическим лицам. Банк — это коммерческое юридическое лицо, которое:</p><br><p>&#8226; создано в целях извлечения прибыли,</p><p>&#8226; имеет право осуществлять банковские операции,</p><p>&#8226; имеет исключительное право на привлечение денежных средств юридических и физических лиц с целью их последующего размещения от своего имени; а также на открытие и ведение банковских счетов юридических и физических лиц,</p><p>&#8226; действует на основании специального разрешения (лицензии) полномочных государственных органов,</p><p>&#8226; не имеет права осуществлять производственную, торговую, страховую деятельность.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BD%D0%BA">https://ru.wikipedia.org/wiki/Банк</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var workforceIterator = 0;

function workforce() {

	var openWord = "workforceOpen";
	var spoilerContent = "workforceContent";
	var closeWord = "workforceClose";

	if (workforceIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		workforceIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		workforceIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Трудовые ресурсы — часть населения страны, которая по физическому развитию, приобретенному образованию, профессионально-квалификационному уровню способна заниматься общественно-полезной деятельностью.</p><br><p>Трудовые ресурсы — та часть населения, обладающая физическим развитием и интеллектуальными (умственными) способностями, необходимыми для трудовой деятельности. В трудовые ресурсы входят как занятые, так и потенциальные работники.</p><br><p>Понятие «трудовые ресурсы» сформулировал в одной из своих статей академик Станислав Струмилин в 1922 году.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D1%8B%D0%B5_%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81%D1%8B">https://ru.wikipedia.org/wiki/Трудовые_ресурсы</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var globalizationIterator = 0;

function globalization() {

	var openWord = "globalizationOpen";
	var spoilerContent = "globalizationContent";
	var closeWord = "globalizationClose";

	if (globalizationIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		globalizationIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		globalizationIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Глобализа́ция — процесс всемирной экономической, политической, культурной и религиозной интеграции и унификации.</p><br><p>Глобализация является характерной чертой процессов изменения структуры мирового хозяйства, понимаемого как совокупность национальных хозяйств, связанных друг с другом системой международного разделения труда, экономических и политических отношений, путём включения в мировой рынок и тесного переплетения экономики на основе транснационализации и регионализации. На этой базе происходит формирование единой мировой сетевой рыночной экономики — геоэкономики и её инфраструктуры, разрушения национального суверенитета государств, являвшихся главными действующими лицами международных отношений на протяжении многих веков. Процесс глобализации есть следствие эволюции государственно оформленных рыночных систем.</p><br><p>Основным следствием этого является мировое разделение труда, миграция (и, как правило, концентрация) в масштабах всей планеты капитала, рабочей силы, производственных ресурсов, стандартизация законодательства, экономических и технологических процессов, а также сближение и слияние культур разных стран. Это объективный процесс, который носит системный характер, то есть охватывает все сферы жизни общества. В результате глобализации мир становится более связанным и более зависимым от всех его субъектов. Происходит как увеличение количества общих для группы государств проблем, так и расширение числа и типов интегрирующихся субъектов.</p><br><p>Взгляды на истоки глобализации являются дискуссионными. Историки рассматривают этот процесс как один из этапов развития капитализма. Экономисты ведут отсчёт от транснационализации финансовых рынков. Политологи делают упор на распространение демократических организаций. Культурологи связывают проявление глобализации с вестернизацией культуры, включая американскую экономическую экспансию. Имеются информационно-технологические подходы к объяснению процессов глобализации. Различается политическая и экономическая глобализация. В качестве субъекта глобализации выступает регионализация, дающая мощный кумулятивный эффект формирования мировых полюсов экономического и технологического развития.</p><br><p>Вместе с тем происхождение самого слова «глобализация» указывает на то, что ведущую роль в данном процессе играет бурный рост международной торговли, происходящий на тех или иных исторических этапах. Впервые слово «глобализация» (в значении «интенсивная международная торговля») употреблял Карл Маркс, который в одном из писем Энгельсу конца 1850-х гг. писал: «Теперь мировой рынок существует на самом деле. С выходом Калифорнии и Японии на мировой рынок глобализация свершилась».</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%93%D0%BB%D0%BE%D0%B1%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Глобализация</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var compromiseIterator = 0;

function compromise() {

	var openWord = "compromiseOpen";
	var spoilerContent = "compromiseContent";
	var closeWord = "compromiseClose";

	if (compromiseIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		compromiseIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		compromiseIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Компромисс (лат. compromissum) — в этике и праве разрешение некой конфликтной ситуации путём взаимных уступок; уступка ради достижения какой-либо цели.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D1%81">https://ru.wikipedia.org/wiki/Компромисс</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var rationalityIterator = 0;

function rationality() {

	var openWord = "rationalityOpen";
	var spoilerContent = "rationalityContent";
	var closeWord = "rationalityClose";

	if (rationalityIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		rationalityIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		rationalityIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Рациона́льность (от лат. ratio — разум) — термин, в самом широком смысле означающий разумность, осмысленность, противоположность rrональности. В более специальном смысле — характеристика знания с точки зрения его соответствия некоторым принципам мышления. Использование этого термина часто связано с вниманием к различиям в таких принципах, поэтому принято говорить о различных типах рациональности.</p><br><p>Существуют различные модели философского рассмотрения рациональности. Так, Макс Вебер различает формальную и субстантивную рациональность. Первая состоит в способности осуществлять калькуляцию и расчет в рамках принятия экономического решения. Субстантивная рациональность относится к более обобщенной системе ценностей и стандартов, которые интегрированы в мировоззрение. В других моделях рациональности в качестве её основы рассматривались согласованность, эмпирическая адекватность, способность к росту содержательного знания.</p><br><p>В плюралистических трактовках подчёркивается, что рациональность представляет собой конструкт, выполняющий роль методологического обоснования знания, но не имеющий универсального объективного референта. Применительно к разным культурам и эпохам выделяют свои виды рациональности: рациональность Нового времени, классическая рациональность, неклассическая рациональность и т. п. Каждой из таких рациональностей свойственен свой стиль мышления, свои проблемы и методы их решения, свой особый тип разума, порождающий такое знание, которое для данной эпохи и культуры считается рациональным. Предпринимаются и попытки выделить общие для всех видов рациональности черты.</p><br><p>В философии науки проблема рациональности связана с проблемой научности и выделением рациональных методов науки. Эта проблема известна как проблема демаркации и успешного решения не имеет.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C">https://ru.wikipedia.org/wiki/Рациональность</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var qualificationIterator = 0;

function qualification() {

	var openWord = "qualificationOpen";
	var spoilerContent = "qualificationContent";
	var closeWord = "qualificationClose";

	if (qualificationIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		qualificationIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		qualificationIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Квалификация (от англ. quality — качество, в смысле степень проявления достоинств) — в некоторых областях этим термином называется либо процесс оценки уровня качества, либо сами предусмотренные уровни.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B2%D0%B0%D0%BB%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Квалификация</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var ecologyIterator = 0;

function ecology() {

	var openWord = "ecologyOpen";
	var spoilerContent = "ecologyContent";
	var closeWord = "ecologyClose";

	if (ecologyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		ecologyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		ecologyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Эколо́гия (рус. дореф. ойкологія) (от др.-греч. οἶκος — обиталище, жилище, дом, имущество и λόγος — понятие, учение, наука) — наука о взаимодействиях живых организмов и их сообществ между собой и с окружающей средой. Термин впервые предложил немецкий биолог Эрнст Геккель в 1866 году в книге «Общая морфология организмов» («Generelle Morphologie der Organismen»).</p><br><p>Современная трактовка понятия экология намного шире, чем в первые десятилетия развития этой науки. В настоящее время чаще всего под экологическими вопросами ошибочно понимаются, прежде всего, вопросы охраны окружающей среды. Во многом такое смещение смысла произошло благодаря всё более ощутимым последствиям влияния человека на окружающую среду, однако необходимо разделять понятия ecological («относящееся к науке экологии») и environmental («относящееся к окружающей среде»). Всеобщее внимание к экологии повлекло за собой расширение первоначально довольно чётко обозначенной Эрнстом Геккелем области знаний (исключительно биологических) на другие естественные, а также гуманитарные науки.</p><br><p>Образное описание экологии: наука, изучающая взаимоотношения живой и неживой природы.</p><br><p>Другое определение (экология — биологическая наука, которая исследует структуру и функционирование систем надорганизменного уровня (популяции, сообщества, экосистемы) в пространстве и времени в естественных и изменённых человеком условиях) дано на 5-м Международном экологическом конгрессе (1990) с целью противодействия размыванию понятия экологии, наблюдаемому в настоящее время. Однако это определение полностью исключает из компетенции экологии как науки аутэкологию (см. ниже), что в корне неверно.</p><br><p>Вот некоторые возможные определения науки «экология»:</p><br><p>&#8226; Экология — познание природы, исследование всех взаимоотношений живого с органическими и неорганическими компонентами окружающей среды.</p><br><p>&#8226; Экология — это наука, изучающая все сложные взаимосвязи в природе.</p><br><p>&#8226; Экология — биологическая наука, которая исследует структуру и функционирование систем надорганизменного уровня (популяции, сообщества, экосистемы), в естественных и изменённых человеком условиях.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Экология</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var sociologyIterator = 0;

function sociology() {

	var openWord = "sociologyOpen";
	var spoilerContent = "sociologyContent";
	var closeWord = "sociologyClose";

	if (sociologyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		sociologyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		sociologyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Социоло́гия (от лат. societas — общество и др.-греч. λόγος — слово) — наука об обществе, составляющих его системах и закономерностях его функционирования и развития, социальных институтах, отношениях и общностях. Социология изучает общество, раскрывая внутренние механизмы его строения и развития его структур (структурных элементов: социальных общностей, институтов, организаций и групп); закономерности социальных действий и массового поведения людей, а также отношения между личностью и обществом.</p><br><p>Как фундаментальная наука, социология объясняет социальные явления, собирает и обобщает информацию о них. Как прикладная наука, социология позволяет прогнозировать социальные явления и управлять ими.</p><br><p>С социологией тесно связаны такие гуманитарные науки, как психология, политология, культурология, антропология и другие.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%86%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Социология</a><br><br><span>Продолжительность 20:27</span><br><a target="_blank" href="https://www.youtube.com/watch?v=4hYwbGBKOgM">https://www.youtube.com/watch?v=4hYwbGBKOgM</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/4hYwbGBKOgM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var determinismIterator = 0;

function determinism() {

	var openWord = "determinismOpen";
	var spoilerContent = "determinismContent";
	var closeWord = "determinismClose";

	if (determinismIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		determinismIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		determinismIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Детермини́зм (от лат. determinare — ограничивать, очерчивать, определять границы, определять) — учение о взаимосвязи и взаимной определённости всех явлений и процессов, доктрина о всеобщей причинности.</p><br><p>Согласно детерминизму, все происходящее в мире, включая ход человеческой жизни и человеческой истории, предопределено либо судьбой, либо богами или Богом (учение о предопределении, теологический детерминизм), либо природой (космологический детерминизм), либо человеческой волей (антропологическо-этический детерминизм), либо развитием общества (социальный детерминизм).</p><br><p>На этой основе определяется понимание свободы, в том числе делается вывод, согласно которому для выбора и, соответственно, личной ответственности у людей, по существу, нет места.</p><br><p>В таком виде детерминизм может быть определён как утверждение, согласно которому имеется только одно, точно заданное возможное будущее.</p><br><p>Детерминизм может пониматься и как фатализм. Противоположностью детерминизма является индетерминизм.</p><br><p>Приверженцем абсолютного детерминизма был Пьер-Симон Лаплас. Он постулировал, что если бы какое-нибудь разумное существо смогло узнать положение и скорость всех частиц в мире, оно могло бы совершенно точно предсказать все события Вселенной. Впоследствии такое гипотетическое существо было названо демоном Лапласа.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D1%82%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B8%D0%B7%D0%BC">https://ru.wikipedia.org/wiki/Детерминизм</a><br><br><span>Продолжительность 15:28</span><br><a target="_blank" href="https://www.youtube.com/watch?v=TcyWvKfDGog">https://www.youtube.com/watch?v=TcyWvKfDGog</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/TcyWvKfDGog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}

var freedomIterator = 0;

function freedom() {

	var openWord = "freedomOpen";
	var spoilerContent = "freedomContent";
	var closeWord = "freedomClose";

	if (freedomIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		freedomIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		freedomIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Свобо́да — состояние субъекта, в котором он является определяющей причиной своих действий, то есть они не обусловлены непосредственно иными факторами, в том числе природными, социальными, межличностно-коммуникативными и индивидуально-родовыми. При этом свободу не стоит путать со вседозволенностью, когда человек вовсе не учитывает возможной пагубности своих действий для себя и окружающих.</p><br><p>Существует множество различных определений свободы. В этике понимание свободы связано с наличием свободы воли человека.</p><br><p>В философии: Свобо́да — универсалия культуры субъектного ряда, фиксирующая возможность деятельности и поведения в условиях отсутствия внешнего целеполагания.</p><br><p>В праве свобода — это закреплённая в конституции или ином законодательном акте возможность определённого поведения человека (например, свобода слова, свобода вероисповедания и т. д.). Категория свободы близка к понятию права в субъективном смысле, однако последнее предполагает наличие юридического механизма для реализации и обычно соответствующей обязанности государства или другого субъекта совершить какое-либо действие. Напротив, юридическая свобода не имеет четкого механизма реализации, ей соответствует обязанность воздерживаться от совершения каких-либо нарушающих данную свободу действий. Так, в «Декларации прав человека и гражданина» (1789, Франция) свобода человека трактуется как возможность «делать всё, что не наносит вреда другому: таким образом, осуществление естественных прав каждого человека ограничено лишь теми пределами, которые обеспечивают другим членам общества пользование теми же правами. Пределы эти могут быть определены только законом».</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B0">https://ru.wikipedia.org/wiki/Свобода</a><br><br><span>Продолжительность 15:28</span><br><a target="_blank" href="https://www.youtube.com/watch?v=TcyWvKfDGog">https://www.youtube.com/watch?v=TcyWvKfDGog</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/TcyWvKfDGog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).removeAttribute("class", "spoilerWord");
        document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
        document.getElementById(closeWord).innerHTML = '';
        document.getElementById(openWord).removeAttribute("class", "spoilerWordActive");
        document.getElementById(openWord).setAttribute("class", "spoilerWord");
        document.getElementById(closeWord).removeAttribute("class", "spoilerWordActive");
        var element = document.getElementById(openWord);
		element.scrollIntoView();
	}
}