
var BS = false;
var KRISHKA1 = false;
var KRISHKA2 = false;
var ADRES1 = false;
var ADRES2 = false;
var ADRES3 = false;
var ADRES11 = false;
var CHASTII = false;
var SRCIKLOTKL = false; 
var TPOTKL = false;
var TOCHNO = false; // кнопка ТОЧНО
var MINUS = false; // тумблер +-
var SPARENNIXY = false; // Спаренный ХУ
var GRUBO = false; // кнопка ГРУБО
var PLUS = false; // тумблер +-
var KONTROL = false;
var CU = false;
var SBROS1 = false;
var SBROS2 = false;
var CHETIRE = false;
var VOSEM = false;


var PRAVARUKA : GameObject; // Правая рука для анимации
var BSBOX : GameObject; // БОКС БС ВКЛ
var KRISHKA1BOX : GameObject; // БОКС КРЫШКА 1
var KRISHKA2BOX : GameObject; // БОКС КРЫШКА 2
var ADRES1BOX : GameObject; // БОКС АДРЕС 1
var ADRES2BOX : GameObject; // БОКС АДРЕС 2
var ADRES3BOX : GameObject; // БОКС АДРЕС 3
var ADRES11BOX : GameObject; // БОКС АДРЕС 1 В 1
var CHASTIIBOX : GameObject; // БОКС ЧАСТЫЙ
var SRCIKLBOX : GameObject; // БОКС СР. ЦИКЛ
var TPOTKLBOX : GameObject; // БОКС ТП ОТКЛ
var TOCHNOBOX : GameObject; // БОКС ТОЧНО
var PLUSBOX : GameObject; // БОКС ПЛЮС
var SPARENNIXYBOX : GameObject; // БОКС Спаренные тумблеры
var GRUBOBOX : GameObject; // БОКС ГРУБО
var MINUSBOX : GameObject; // БОКС МИНУС

var KONTROLBOX : GameObject; // БОКС РАБОТА КОНТРОЛЬ
var CUBOX : GameObject; // БОКС ЦУ
var SBROS1BOX : GameObject; // БОКС СБРОС1
var SBROS2BOX : GameObject; // БОКС СБРОС2
var CHETIREBOX : GameObject; // БОКС ЧЕТЫРЕ
var VOSEMBOX : GameObject; // БОКС ВОСЕМЬ


var TextBSVKL1 : GameObject; // Текст ВКЛ. БС 1
var TextBSVKL2 : GameObject; // Текст ВКЛ. БС 2
var TextOTKRITKRISHKI : GameObject; // ТЕКСТ Октрыть крышки 
var TextADRES1VKL : GameObject; // Текст ВКЛ АДРЕС 1 В АДРЕС
var TextADRES2VKL : GameObject; // Текст ВКЛ АДРЕС 2 В АДРЕС
var TextADRES3VKL : GameObject; // Текст ВКЛ АДРЕС 3 В АДРЕС
var TextADRES11 : GameObject; // Текст ВКЛ АДРЕС 1 В 1
var TextCHASTII : GameObject; 
var TextSRCIKLOTKL : GameObject; 
var TextTPOTKL : GameObject; 
var TextKOORDINATIenter1 : GameObject; // установить координаты
var TextKOORDINATIenter2 : GameObject;
var TextKOORDINATIenter3 : GameObject;
var TextTOCHNO1 : GameObject; // Текст нажмите точно 1
var TextTOCHNO2 : GameObject; // Текст нажмите точно 1
var TextMINUS1 : GameObject; // Текст МИНУС 1
var TextMINUS2 : GameObject; // Текст МИНУС 2
var TextPEREKLUCHITnaX1 : GameObject; // Текст переключить на Х 1
var TextPEREKLUCHITnaX2 : GameObject; // Текст переключить на Х 2
var TextGRUBO1 : GameObject; // Текст нажать ГРУБО 1
var TextGRUBO2 : GameObject; // Текст нажать ГРУБО 2
var TextPLUS1 : GameObject; // Текст нажмите + 1
var TextPLUS2 : GameObject; // Текст нажмите + 2
var TextKONTROL1 : GameObject; // Текст КОНТРОЛЬ 1
var TextKONTROL2 : GameObject; // Текст КОНТРОЛЬ 2
var TextCU1 : GameObject; //
var TextCU2 : GameObject; //
var TextSBROS1 : GameObject; // 
var TextSBROS2 : GameObject; //
var TextSBROS3 : GameObject; // 
var TextSBROS4 : GameObject; // 
var Text48odin : GameObject; // 
var Text48dva : GameObject; // 
var Text48tri : GameObject; // 


var PodsvetBS : GameObject; // Подсветка БС ВКЛ
var PodsvetX40 : GameObject; // Подсветка Х 40 км
var PodsvetY51 : GameObject; // Подсветка Y 51 км
var PodsvetY50 : GameObject; // Подсветка Y 50 км
var PodsvetX50 : GameObject; // Подсветка Y 50 км
var PodsvetSVIAZ : GameObject; // Светодиод связь
var Podsvet48 : GameObject; // Подсветка № цели 48
var PodsvetNI : GameObject; // Подсветка НИ
var Podsvet153 : GameObject; // Подсветка 1,5-3
var Podsvet1225 : GameObject; // Подсветка 12-25.
var Podsvet00 : GameObject; // Подсветка № цели 00
var Podsvet2550 : GameObject; // Подсветка 25-50
var Podsvet015 : GameObject; // подсветка высотной зоны 0-1,5

var palkax40odin : GameObject;
var palkax40dva : GameObject;
var palkax40tri : GameObject;
var palkax40chetire : GameObject;

var palkax50odin : GameObject; // Палка для Х 50 1
var palkax50dva : GameObject; // Палка для Х 50 2
var palkax50tri : GameObject; // Палка для Х 50 3
var palkax50chetire : GameObject; // Палка для Х 50 4
var palka48odin : GameObject; // палка для цель 48
var palka48dva : GameObject;
var pala00odin : GameObject; // палка для цель 00
var palka00dva : GameObject;
var palka00VKLodin : GameObject; // После нажатия четыре
var palka00VKLdva : GameObject; // После нажатия четыре
var palka00VKLtri : GameObject; // После нажатия четыре
var palka00odinOTKL0 : GameObject; // После нажатия четыре
var palka00dvaOTKL0 : GameObject; // После нажатия четыре
var palka00triOTKL0 : GameObject; // После нажатия четыре

static var TPOTKLvTP = false;


function Start () {
    TPOTKLvTP = false;

}

function Update () {
    if (Input.GetKey("return") && TPOTKLvTP == true) { // Если включили ТП ОТКЛ и нажали enter

        TextKOORDINATIenter1.SetActive (false); // деактивация надписи нажать enter 1
        TextKOORDINATIenter2.SetActive (false);
        TextKOORDINATIenter3.SetActive (false);
        TextTOCHNO1.SetActive (true); // нажать на точно 1
        TextTOCHNO2.SetActive (true); // нажать на точно 2
        TOCHNOBOX.GetComponent.<Collider>().enabled = true; // Включить БОКС кнопки ТОЧНО

        TPOTKLvTP = false; // Возвращаем
    }
}




    function OnMouseUp (){ 

    if (BS == true) { // Включаем БС
        BSBOX.GetComponent.<Collider>().enabled = false; // деАктивация коллайдера БС
        GetComponent.<Animation>().Play("БС ВКЛ"); // старт анимации ВКЛ. БС
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук 
        //Застопорить камеру
        var ACUCAMERABS = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERABSscript = ACUCAMERABS.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERABSscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.67); // Задержка 0.67 сек
        TextBSVKL1.SetActive (false); //Деактивация текста ВКЛ. БС 1
        TextBSVKL2.SetActive (false); // Деактивация текста ВКЛ. БС 2
        TextOTKRITKRISHKI.SetActive (true);
        PodsvetBS.SetActive (true); // ВКЛ. подсветку БС
        var audioBS: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioBS.Play();//
        ACUCAMERABSscript.enabled = true; // Включить поворот головы на момент анимации
        KRISHKA1BOX.GetComponent.<Collider>().enabled = true; // Вкл. БОКС ЛЕВОЙ КРЫШКИ
    }


    if (KRISHKA1 == true) { //Открываем Левую крышку
        KRISHKA1BOX.GetComponent.<Collider>().enabled = false; // ВЫКЛ БОКС ЛЕВОЙ КРЫШКИ
        GetComponent.<Animation>().Play("ЛЕВАЯ КРЫШКА АЦУ"); // Анимация
        PRAVARUKA.GetComponent.<Animation>().Play("ОТКРЫТЬ ЛЕВУЮ КРЫШКУ АЦУ");
        //Застопорить камеру
        var ACUCAMERAKRISHKA1 = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERAKRISHKA1script = ACUCAMERAKRISHKA1.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERAKRISHKA1script.enabled = false; // Отключить поворот головы на момент анимаци
        yield WaitForSeconds (0.67); // Задержка 0.67 сек
        var audioKRISHKA1: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioKRISHKA1.Play();//
        ACUCAMERAKRISHKA1script.enabled = true; // Включить поворот головы на момент анимации
        KRISHKA2BOX.GetComponent.<Collider>().enabled = true; // ВКЛ БОКС ПРАВОЙ КРЫШКИ
    }

    if (KRISHKA2 == true) { //Открываем Правую крышку
        KRISHKA2BOX.GetComponent.<Collider>().enabled = false; // ВЫКЛ БОКС ПРАВОЙ КРЫШКИ
        GetComponent.<Animation>().Play("ОТКРЫТЬ ПРАВУЮ КРЫШКУ АЦУ"); // Анимация
        PRAVARUKA.GetComponent.<Animation>().Play("РУКА ПРАВАЯ КРЫШКА АЦУ");
        //Застопорить камеру
        var ACUCAMERAKRISHKA2 = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERAKRISHKA2script = ACUCAMERAKRISHKA2.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERAKRISHKA2script.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.67); // Задержка 0.67 сек
        var audioKRISHKA2: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioKRISHKA2.Play();//
        TextOTKRITKRISHKI.SetActive (false); // Деактивация текста открыть крышки
        TextADRES1VKL.SetActive (true); //Вкл. текст АДРЕС 
        ACUCAMERAKRISHKA2script.enabled = true; // Включить поворот головы на момент анимации
        KRISHKA2BOX.GetComponent.<Collider>().enabled = true; // ВКЛ БОКС ПРАВОЙ КРЫШКИ
        ADRES1BOX.GetComponent.<Collider>().enabled = true;
    }

    if (ADRES1 == true) { //Включаем Адрес 1 в Адрес
        ADRES1BOX.GetComponent.<Collider>().enabled = false; // ВЫКЛ БОКС ПРАВОЙ КРЫШКИ
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук 
        GetComponent.<Animation>().Play("АДРЕС 1"); // Включить АДРЕС 1
        //Застопорить камеру
        var ACUCAMERAADRES1 = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERAADRES1script = ACUCAMERAADRES1.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERAADRES1script.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.67); // Задержка 0.67 сек
        var audioADRES1: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioADRES1.Play();//
        TextADRES1VKL.SetActive (false); // Деактивация текста АДРЕС 1
        TextADRES2VKL.SetActive (true); //Вкл. текст АДРЕС 2
        ACUCAMERAADRES1script.enabled = true; // Включить поворот головы на момент анимации
        ADRES2BOX.GetComponent.<Collider>().enabled = true;
    }
    
    if (ADRES2 == true) { // если нажали АДРЕС 2
        ADRES2BOX.GetComponent.<Collider>().enabled = false;
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук
        GetComponent.<Animation>().Play("АДРЕС 2"); // Включить АДРЕС 2
        //Застопорить камеру
        var ACUCAMERAADRES2 = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERAADRES2script = ACUCAMERAADRES2.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERAADRES2script.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.67); // Задержка 0.67 сек
        var audioADRES2: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioADRES2.Play();//
        TextADRES2VKL.SetActive (false); // Деактивация текста АДРЕС 2
        TextADRES3VKL.SetActive (true); //Вкл. текст АДРЕС 3
        ACUCAMERAADRES2script.enabled = true; // Включить поворот головы на момент анимации
        ADRES3BOX.GetComponent.<Collider>().enabled = true;
    }

    if (ADRES3 == true) {
        ADRES3BOX.GetComponent.<Collider>().enabled = false;
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук
        GetComponent.<Animation>().Play("АДРЕС 3"); // Включить АДРЕС 3
        //Застопорить камеру
        var ACUCAMERAADRES3 = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERAADRES3script = ACUCAMERAADRES3.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERAADRES3script.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.67); // Задержка 0.67 сек
        var audioADRES3: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioADRES3.Play();//
        TextADRES3VKL.SetActive (false); // Деактивация текста АДРЕС 3
        TextADRES11.SetActive (true); //Вкл. текст АДРЕС 1 в 1
        ACUCAMERAADRES3script.enabled = true; // Включить поворот головы на момент анимации
        ADRES11BOX.GetComponent.<Collider>().enabled = true;
        var ACUPALEC = GameObject.Find("Правый палец"); // Найти нажимающий палец
        var ACUPALECscript = ACUPALEC.GetComponent("ПАЛЕЦ"); // Найти скрипт пальца
        ACUPALECscript.enabled = true; // врубить скрипт пальца
    }
    if (ADRES11 == true) { // если включаем АДРЕС 1 в 1
        ADRES11BOX.GetComponent.<Collider>().enabled = false;
        ADRES1BOX.GetComponent.<Animation>().Play("АДРЕС 1 в 1"); // Включить АДРЕС 1 в 1
        //Застопорить камеру
        var ACUCAMERAADRES11 = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERAADRES11script = ACUCAMERAADRES11.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERAADRES11script.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioADRES11: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioADRES11.Play();//
        TextADRES11.SetActive (false); // Деактивация текста АДРЕС 11
        TextCHASTII.SetActive (true); //Вкл. текст ЧАСТЫЙ
        ACUCAMERAADRES11script.enabled = true; // Включить поворот головы на момент анимации
        CHASTIIBOX.GetComponent.<Collider>().enabled = true;

    }
    if (CHASTII == true) { // Редкий частый в ЧАстый
        CHASTIIBOX.GetComponent.<Collider>().enabled = false;
        GetComponent.<Animation>().Play("РЕДКИЙ ЧАСТЫЙ в ЧАСТЫЙ"); // Включить ЧАСТЫЙ
        //Застопорить камеру
        var ACUCAMERACHASTII = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERACHASTIIscript = ACUCAMERACHASTII.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERACHASTIIscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioCHASTII: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioCHASTII.Play();//
        TextCHASTII.SetActive (false); // Деактивация текста Частый
        TextSRCIKLOTKL.SetActive (true); //Вкл. текст СР. ЦИКЛ
        ACUCAMERACHASTIIscript.enabled = true; // Включить поворот головы на момент анимации
        SRCIKLBOX.GetComponent.<Collider>().enabled = true;

    }

    if (SRCIKLOTKL == true) {
        SRCIKLBOX.GetComponent.<Collider>().enabled = false;
        GetComponent.<Animation>().Play("СР ЦИКЛ в ОТКЛ"); // СР ЦИКЛ в ОТКЛ
        //Застопорить камеру
        var ACUCAMERASRCIKLOTKL = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERASRCIKLOTKLscript = ACUCAMERASRCIKLOTKL.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERASRCIKLOTKLscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioSRCIKLOTKL: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioSRCIKLOTKL.Play();//
        TextSRCIKLOTKL.SetActive (false); // Деактивация текста СР ЦИКЛ.
        TextTPOTKL.SetActive (true); //Вкл. текст ТП ОТКЛ
        ACUCAMERASRCIKLOTKLscript.enabled = true; // Включить поворот головы на момент анимации
        TPOTKLBOX.GetComponent.<Collider>().enabled = true;
        var ACUPALECSRCIKLOTKL = GameObject.Find("Правый палец"); // Найти нажимающий палец
        var ACUPALECSRCIKLOTKLscript = ACUPALECSRCIKLOTKL.GetComponent("ПАЛЕЦ"); // Найти скрипт пальца
        ACUPALECSRCIKLOTKLscript.enabled = false; // вырубить скрипт пальца
    } 

    if (TPOTKL == true) {
        TPOTKLBOX.GetComponent.<Collider>().enabled = false;
        GetComponent.<Animation>().Play("ТП ОТКЛ В ТП"); // ТП ОТКЛ В ТП
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук
        //Застопорить камеру
        var ACUCAMERATPOTKL = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERATPOTKLscript = ACUCAMERATPOTKL.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERATPOTKLscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.67); // Задержка 0.67 сек
        var audioTPOTKL: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioTPOTKL.Play();//
        TextTPOTKL.SetActive (false); // Деактивация текста СР ЦИКЛ.
        TextKOORDINATIenter1.SetActive (true); //Вкл. текст установить координаты, нажать enter 1
        TextKOORDINATIenter2.SetActive (true); //Вкл. текст установить координаты, нажать enter 2
        TextKOORDINATIenter3.SetActive (true); //Вкл. текст установить координаты, нажать enter 3
        ACUCAMERATPOTKLscript.enabled = true; // Включить поворот головы на момент анимации
        TPOTKLvTP = true; // Для нажатия enter
        PodsvetX40.SetActive (true); //Вкл. подсветку Х 40 км
        PodsvetY51.SetActive (true); // Подсвет У 51 км
        var ACUPALECTPOTKL = GameObject.Find("Правый палец"); // Найти нажимающий палец
        var ACUPALECTPOTKLscript = ACUPALECTPOTKL.GetComponent("ПАЛЕЦ"); // Найти скрипт пальца
        ACUPALECTPOTKLscript.enabled = true; // врубить скрипт пальца
    }

    if (TOCHNO == true) {
        TOCHNOBOX.GetComponent.<Collider>().enabled = false; // Выключить БОКС кнопки ТОЧНО
        GetComponent.<Animation>().Play("ТОЧНО"); // ТОЧНО ВКЛ
        
        //Застопорить камеру
        var ACUCAMERATOCHNO = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERATOCHNOscript = ACUCAMERATOCHNO.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERATOCHNOscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioTOCHNO: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioTOCHNO.Play();//
        TextTOCHNO1.SetActive (false); // Деактивация текста ТОЧНО 1
        TextTOCHNO2.SetActive (false); // Деактивация текста ТОЧНО 2
        TextMINUS1.SetActive (true); //Вкл. текст МИНУС 1
        TextMINUS2.SetActive (true); //Вкл. текст МИНУС 2
        ACUCAMERATOCHNOscript.enabled = true; // Включить поворот головы на момент анимации
        MINUSBOX.GetComponent.<Collider>().enabled = true;

    } 

    if (MINUS == true) {
        MINUSBOX.GetComponent.<Collider>().enabled = false;
        GetComponent.<Animation>().Play("МИНУС"); // МИНУС
        
        //Застопорить камеру
        var ACUCAMERAMINUS = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERAMINUSscript = ACUCAMERAMINUS.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERAMINUSscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioMINUS: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioMINUS.Play();//
        
        TextMINUS1.SetActive (false); //Выкл. текст МИНУС 1
        TextMINUS2.SetActive (false); //Выкл. текст МИНУС 2
        TextPEREKLUCHITnaX1.SetActive (true); // Вкл. текст ВКЛ. на Х 1
        TextPEREKLUCHITnaX2.SetActive (true); // Вкл. текст ВКЛ. на Х 2
        
        PodsvetY50.SetActive (true); // Подсветка Y 50 км ВКЛ (ДОБАВОЧНАЯ к единице)
        

        ACUCAMERAMINUSscript.enabled = true; // Включить поворот головы на момент анимации
        SPARENNIXYBOX.GetComponent.<Collider>().enabled = true;
        var ACUPALECMINUS = GameObject.Find("Правый палец"); // Найти нажимающий палец
        var ACUPALECMINUSscript = ACUPALECMINUS.GetComponent("ПАЛЕЦ"); // Найти скрипт пальца
        ACUPALECMINUSscript.enabled = false; // вырубить скрипт пальца
    } 

    if (SPARENNIXY == true) {
        SPARENNIXYBOX.GetComponent.<Collider>().enabled = false;
        GetComponent.<Animation>().Play("СПАРЕННЫЕ в икс"); // спаренные
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук
        //Застопорить камеру
        var ACUCAMERASPARENNIXY = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERASPARENNIXYscript = ACUCAMERASPARENNIXY.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERASPARENNIXYscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.67); // Задержка 0.67 сек
        var audioSPARENNIXY: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioSPARENNIXY.Play();//
        
        TextPEREKLUCHITnaX1.SetActive (false); // Выкл. текст ВКЛ. на Х 1
        TextPEREKLUCHITnaX2.SetActive (false); // Выкл. текст ВКЛ. на Х 2
        TextGRUBO1.SetActive (true);
        TextGRUBO2.SetActive (true);

        ACUCAMERASPARENNIXYscript.enabled = true; // Включить поворот головы на момент анимации
        
        var ACUPALECSPARENNIXY = GameObject.Find("Правый палец"); // Найти нажимающий палец
        var ACUPALECSPARENNIXYscript = ACUPALECSPARENNIXY.GetComponent("ПАЛЕЦ"); // Найти скрипт пальца
        ACUPALECSPARENNIXYscript.enabled = true; // врубить скрипт пальца
        GRUBOBOX.GetComponent.<Collider>().enabled = true;
    } 

    if (GRUBO == true) {
        GRUBOBOX.GetComponent.<Collider>().enabled = false;
        GetComponent.<Animation>().Play("ГРУБО ВКЛ"); // грубо
        
        //Застопорить камеру
        var ACUCAMERAGRUBO = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERAGRUBOscript = ACUCAMERAGRUBO.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERAGRUBOscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioGRUBO: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioGRUBO.Play();//
        
        TextGRUBO1.SetActive (false);
        TextGRUBO2.SetActive (false);
        TextPLUS1.SetActive (true); // Текст ПЛЮС 1
        TextPLUS2.SetActive (true);

        ACUCAMERAGRUBOscript.enabled = true; // Включить поворот головы на момент анимации
        
        var ACUPALECGRUBO = GameObject.Find("Правый палец"); // Найти нажимающий палец
        var ACUPALECGRUBOscript = ACUPALECGRUBO.GetComponent("ПАЛЕЦ"); // Найти скрипт пальца
        ACUPALECGRUBOscript.enabled = false; // вырубить скрипт пальца
        PLUSBOX.GetComponent.<Collider>().enabled = true;
    } 

    if (PLUS == true) {
        PLUSBOX.GetComponent.<Collider>().enabled = false;
        MINUSBOX.GetComponent.<Animation>().Play("ПЛЮС"); // плюс
        PRAVARUKA.GetComponent.<Animation>().Play("ТУМБЛЕР ВВЕРХ1"); // Анимация рук
        //Застопорить камеру
        var ACUCAMERAPLUS = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERAPLUSscript = ACUCAMERAPLUS.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERAPLUSscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.67); // Задержка 0.67 сек
        var audioPLUS: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioPLUS.Play();//
        
        TextPLUS1.SetActive (false); // Выкл. текст ПЛЮС 1
        TextPLUS2.SetActive (false); // Выкл. текст ПЛЮС 2
        TextKONTROL1.SetActive (true);
        TextKONTROL2.SetActive (true);

        palkax40odin.SetActive (false);
        palkax40dva.SetActive (false);
        palkax40tri.SetActive (false);
        palkax40chetire.SetActive (false); // Палка для Х 40 4
        palkax50odin.SetActive (true); // Палка для Х 50 1
        palkax50dva.SetActive (true); // Палка для Х 50 2
        palkax50tri.SetActive (true); // Палка для Х 50 3
        palkax50chetire.SetActive (true); // Палка для Х 50 4
        PodsvetX50.SetActive (true);// ДОБАВОЧНЫЙ СВЕТ, из 4 делаем пять

        ACUCAMERAPLUSscript.enabled = true; // Включить поворот головы на момент анимации
        var ACUPALECPLUS = GameObject.Find("Правый палец"); // Найти нажимающий палец
        var ACUPALECPLUSscript = ACUPALECPLUS.GetComponent("ПАЛЕЦ"); // Найти скрипт пальца
        ACUPALECPLUSscript.enabled = true; // врубить скрипт пальца
        KONTROLBOX.GetComponent.<Collider>().enabled = true;
    } 

    if (KONTROL == true) {
        KONTROLBOX.GetComponent.<Collider>().enabled = false; //Выключить КОНТРОЛЬ БОКС
        GetComponent.<Animation>().Play("РАБОТА в КОНТРОЛЬ"); //
        
        //Застопорить камеру
        var ACUCAMERAKONTROL = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERAKONTROLscript = ACUCAMERAKONTROL.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERAKONTROLscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioKONTROL: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioKONTROL.Play();//
        
        TextKONTROL1.SetActive (false);
        TextKONTROL2.SetActive (false);
        TextCU1.SetActive (true);
        TextCU2.SetActive (true);
        PodsvetSVIAZ.SetActive (true); // ВКЛ подсветку связь

        ACUCAMERAKONTROLscript.enabled = true; // Включить поворот головы на момент анимации
        CUBOX.GetComponent.<Collider>().enabled = true;

    }

    if (CU == true) {
        CUBOX.GetComponent.<Collider>().enabled = false;
        GetComponent.<Animation>().Play("ЦУ"); //
        
        //Застопорить камеру
        var ACUCAMERACU = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERACUscript = ACUCAMERACU.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERACUscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioCU: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioCU.Play();//
        
        TextCU1.SetActive (false);
        TextCU2.SetActive (false);
        TextSBROS1.SetActive (true);
        TextSBROS2.SetActive (true);
        TextSBROS3.SetActive (true);
        TextSBROS4.SetActive (true);
        Podsvet48.SetActive (true); // ВКЛ подсветку 48
        PodsvetNI.SetActive (true); // ВКЛ подсветку НИ
        Podsvet153.SetActive (true); // ВКЛ подсветку 
        Podsvet1225.SetActive (true);

        ACUCAMERACUscript.enabled = true; // Включить поворот головы на момент анимации
        SBROS1BOX.GetComponent.<Collider>().enabled = true;
        SBROS2BOX.GetComponent.<Collider>().enabled = true;
    }



    if (SBROS1 == true) {
        SBROS1BOX.GetComponent.<Collider>().enabled = false;
        SBROS2BOX.GetComponent.<Collider>().enabled = false;
        GetComponent.<Animation>().Play("СБРОС 1"); //
        
        //Застопорить камеру
        var ACUCAMERASBROS1 = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERASBROS1script = ACUCAMERASBROS1.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERASBROS1script.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioSBROS1: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioSBROS1.Play();//
        
        TextSBROS1.SetActive (false);
        TextSBROS2.SetActive (false);
        TextSBROS3.SetActive (false);
        TextSBROS4.SetActive (false);
        Text48odin.SetActive (true);
        Text48dva.SetActive (true);
        Text48tri.SetActive (true);

        Podsvet00.SetActive (true); // Доп. подсветка 00
        palka48odin.SetActive (false); // палка для цель 48
        palka48dva.SetActive (false);
        pala00odin.SetActive (true); // палка для цель 00
        palka00dva.SetActive (true);
        Podsvet1225.SetActive (false); // 12-25 выкл
        Podsvet2550.SetActive (true); // 25-50 вкл
        Podsvet153.SetActive (false); // 1,5-3 выкл подсветку 
        Podsvet015.SetActive (true); // 0,15 вкл
        PodsvetNI.SetActive (false); // ВЫКЛ подсветку НИ

        ACUCAMERASBROS1script.enabled = true; // Включить поворот головы на момент анимации
        CHETIREBOX.GetComponent.<Collider>().enabled = true;
    }


    if (SBROS2 == true) {
        SBROS1BOX.GetComponent.<Collider>().enabled = false;
        SBROS2BOX.GetComponent.<Collider>().enabled = false;
        GetComponent.<Animation>().Play("СБРОС 2"); //
        
        //Застопорить камеру
        var ACUCAMERASBROS2 = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERASBROS2script = ACUCAMERASBROS2.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERASBROS2script.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioSBROS2: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioSBROS2.Play();//
        
        TextSBROS1.SetActive (false);
        TextSBROS2.SetActive (false);
        TextSBROS3.SetActive (false);
        TextSBROS4.SetActive (false);
        Text48odin.SetActive (true);
        Text48dva.SetActive (true);
        Text48tri.SetActive (true);

        Podsvet00.SetActive (true); // Доп. подсветка 00
        palka48odin.SetActive (false); // палка для цель 48
        palka48dva.SetActive (false);
        pala00odin.SetActive (true); // палка для цель 00
        palka00dva.SetActive (true);
        Podsvet1225.SetActive (false); // 12-25 выкл
        Podsvet2550.SetActive (true); // 25-50 вкл
        Podsvet153.SetActive (false); // 1,5-3 выкл подсветку 
        Podsvet015.SetActive (true); // 0,15 вкл
        PodsvetNI.SetActive (false); // ВЫКЛ подсветку НИ

        ACUCAMERASBROS2script.enabled = true; // Включить поворот головы на момент анимации
        CHETIREBOX.GetComponent.<Collider>().enabled = true;

    }


    if (CHETIRE == true) {
        CHETIREBOX.GetComponent.<Collider>().enabled = false;

        GetComponent.<Animation>().Play("ЧЕТЫРЕ"); //
        
        //Застопорить камеру
        var ACUCAMERACHETIRE = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERACHETIREscript = ACUCAMERACHETIRE.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERACHETIREscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioCHETIRE: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioCHETIRE.Play();//
        
        
        palka48dva.SetActive (true);
        palka00dva.SetActive (true);
        palka48odin.SetActive (false); // палка для цель 48 (ОТ 8)
        pala00odin.SetActive (true); // палка для цель 00 (ОТ 8)
        palka00VKLodin.SetActive (false);
        palka00VKLdva.SetActive (false);
        palka00VKLtri.SetActive (false);
        palka00odinOTKL0.SetActive (true);
        palka00dvaOTKL0.SetActive (true);
        palka00triOTKL0.SetActive (true);


        ACUCAMERACHETIREscript.enabled = true; // Включить поворот головы на момент анимации
        VOSEMBOX.GetComponent.<Collider>().enabled = true;

    }

    if (VOSEM == true) {
        VOSEMBOX.GetComponent.<Collider>().enabled = false;
        GetComponent.<Animation>().Play("ВОСЕМЬ"); //
        
        //Застопорить камеру
        var ACUCAMERAVOSEM = GameObject.Find("Camera"); // Найти камеру
        var ACUCAMERAVOSEMscript = ACUCAMERAVOSEM.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        ACUCAMERAVOSEMscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        var audioVOSEM: AudioSource = GetComponent.<AudioSource>(); // ПРОИГРЫВАНИЕ АУДИО
        audioVOSEM.Play();//
        
        
        palka48odin.SetActive (true); // палка для цель 48 (ОТ 8)
        pala00odin.SetActive (false); // палка для цель 00 (ОТ 8)
        Podsvet1225.SetActive (true); // 12-25 вкл
        Podsvet2550.SetActive (false); // 25-50 выкл
        Podsvet153.SetActive (true); // 1,5-3 вкл подсветку 
        Podsvet015.SetActive (false); // 0,15 выкл
        PodsvetNI.SetActive (true); // ВКЛ подсветку НИ

        Text48odin.SetActive (false); // 
        Text48dva.SetActive (false);
        Text48tri.SetActive (false);

        ACUCAMERAVOSEMscript.enabled = true; // Включить поворот головы на момент анимации
        var ACUITOGTERRAIN = GameObject.Find("Terrain"); // Найти террайн
        var ACUITOGTERRAINscript = ACUITOGTERRAIN.GetComponent("ACUGUIITOG"); //Найти скрипт итога
        ACUITOGTERRAINscript.enabled = true; // Вкючить итог
    }
}