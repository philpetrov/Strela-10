#pragma strict
//КНОПКИ АППАРАТУРЫ ЗАПУСКА!!!

var dvchetire = false; // 24 В тумблер
var dvvosem = false; // 28 В тумблер
var KONTROL = false; //Контроль 30 В
var PRIVOD = false;
var PULT = false;
var VIZIR = false;
var RODRABOTI = false;
var RODRABOTIodin = false;
var RODRABOTIdva = false;
var RODRABOTItri = false;
var BORT = false;
var VIZIRkolcosovmeshenie = false; //Для проверки совмещения кольца
var USILENIE = false;
var RE4 = false;
var SLEJENIE = false;
var SLEJENIE2 = false; // Для нажатия на слежение во 2 раз ( в режиме ФОН 2)
var SLEJENIE3 = false; // Для нажатия на слежение в 3 раз ( в режиме ФОН 3)
var VIZIRfon1 = false;
var FON2 = false;
var VIZIRfon2 = false;
var PSP = false; // тумблер ПСП
var FON3 = false;
var VIZIRfon3 = false;
var B1 = false;
var dvvosemVIKL = false;
var BOIVOE = false;
var dvchitireVIKL = false;

var uchebni : GameObject; // Транспарант учебный
var BORTnaPO : GameObject; // Транспарант БОРТ
var podsvetV : GameObject; // Подсветка шкалы Вольтметра
var podsvetU : GameObject; // Подсветка транспаранта Учебный
var podsvetPZodin : GameObject; //Подсветка контр ПЗ 1
var podsvetPZdva : GameObject; //Подсветка контр ПЗ 2
var podsvetPERVnapr : GameObject;
var TextVKLDVCH : GameObject; // Текст включить 24 В
var TextVKLDVVOS : GameObject; // Текст включить 28 В
var TextKONTROLVOLT : GameObject; // Текст КОНТРОЛЬ 30 В
var TextPRIVODVKL : GameObject;
var TextPlavnost : GameObject;
var TextISPOLZstrelki : GameObject;
var TextRODPABOTIodin : GameObject;
var TextRODPABOTIdva : GameObject;
var TextBORTvkl : GameObject;
var TextUsilenie : GameObject;
var TextRe4 : GameObject; // Текст Речь
var TextSlejenie : GameObject; // Текст слежение
var TextVizirnaNEBO1 : GameObject;
var TextVizirnaNEBO2 : GameObject;
var TextFON2 : GameObject;
var TextFON3 : GameObject;
var dvchetireBOX : GameObject; // Для деактивации коллайдера 24 В
var dvvosemBOX : GameObject;  // Для деактивации коллайдера 28 В
var KONTROLVOLTBOX : GameObject; // Для деактивации коллайдера ПРИВОД
var PRIVODbox : GameObject;
var PULTBOX : GameObject;
var VIZIRBOX : GameObject;
var pereklRODRABOTIBOX : GameObject; // бокс переключателя (из АВТ.)
var pervPOSTBOX : GameObject; // бокс переключателя (1 пост)
var vtoroiPOSTBOX : GameObject; // бокс переключателя (2 пост)
var tretiiPOSTBOX : GameObject; // бокс переключателя (3 пост)
var bortBOX : GameObject;
var usilenieBOX : GameObject;
var RE4BOX : GameObject; //Коллайдер ручки РЕЧЬ
var SLEJENIEBOX : GameObject;
var SLEJENIEBOX2 : GameObject; // Второй объект с боксом от слежения
var SLEJENIEBOX3 : GameObject;  // Третий объект с боксом от слежения (ФОН 3)
var pereklFONBOX : GameObject;
var pereklFONBOX2 : GameObject; //Бокс ФОН из 2 в 3
var CameraODIN : GameObject;
var CameraVIZIR : GameObject;
var CameraPULT : GameObject;
var SOLDATodin : GameObject;
var SOLDATodinCAMERA : GameObject;
var SOLDATdva : GameObject;
var SOLDATdvaCAMERA : GameObject;
var LEVARUKA : GameObject;
var PRAVARUKA : GameObject;
var RUCHKARODARABOTI : GameObject;
var PODSVETpervnapr : GameObject;
var PODSVETvtornapr : GameObject;
var PODSVETtrinapr : GameObject;
var PODSVETchitirenapr : GameObject; // Подсветка 4 поста
var PODSVETbort : GameObject; // Подсветка трансп. БОРТ
var AudioGSN : GameObject; //Объект со звуком ГСН 
var AudioKomandir : GameObject; // Объект со звуком Командира
var RAKETI : GameObject; // Ракеты для открытия крышки
var SoldatVneshn1 : GameObject; // Солдат для внешн камеры 1/2 КНОПКИ
var SoldatVneshn2 : GameObject; // Солдат для внешн камеры 2/2 КНОПКИ
var SoldatVneshnPULT1 : GameObject; // Солдат для внешн камеры 1/2 ПУЛЬТ
var SoldatVneshnPULT2 : GameObject; // Солдат для внешн камеры 2/2 ПУЛЬТ
var SoldatVIZIR : GameObject; // Солдат у ВИЗИРА
var VIZIRBOX2 : GameObject; // БОКС визира для проверки ФОНА 1
var VIZIRBOX3 : GameObject; // БОКС визира для проверки ФОНА 2
var VIZIRBOX4 : GameObject; // БОКС визира для проверки ФОНА 3
var TextProdoljenieEnter : GameObject; //Текст для продолжения ENTER
var TextNavediteVIZIR : GameObject; 
var TextNavediteVIZIR2 : GameObject; 
var AudioGSNtixo : GameObject;
var AudioGSNslejenie : GameObject; 
var TEXTIspolzNavediteFON2 : GameObject; 
var TEXTIspolzNavedite2FON2 : GameObject; 
var pereklFON : GameObject; // Объект перекл. ФОН
var tumblerB1BOX : GameObject;
var TextB1VKL : GameObject;
var Text28VIKL : GameObject; // Текст "выключить 28 В"
var DVVOSEMVIKLBOX : GameObject;
var BOIVOEBOX : GameObject;
var TextBOIVOE : GameObject;
var DVCHITIREVIKLBOX : GameObject;
var Text24VIKL : GameObject;
var transpBoivoe : GameObject; // Транспарант Боевое
var podsvetBoivoi : GameObject; // Подсветка транспаранта Боевое
var KOLCO : GameObject; // Кольцо слежения
var VIZIRkolcoSOVMBOX : GameObject; // Бокс кольца для проверки совмещения
var TextProverkaSovmeshenia : GameObject; // Текст проверить охват
var AZGUIITOG : GameObject; // Объект на котором висит ИТОГ
var verhvertushka : GameObject; //Верхний пропеллер
var zadnvertushka : GameObject;//задний пропеллер
var vertolet1FON1 : GameObject; // вертолет 1 Фона 1
var vertolet2FON1 : GameObject; //вертолет 2 Фона 1
var vertolet1FON2 : GameObject; // вертолет 1 Фона 2
var vertolet2FON2 : GameObject; //вертолет 2 Фона 2
var PodsvetGOTOVNRZ : GameObject; //Подсветка ГОТОВ НРЗ
var PodsvetISPRNRZ : GameObject; // Подсветка исправен НРЗ
var strelka : GameObject; // Стрелка Вольтметра
var CameraOKNO : GameObject; // Внешняя Камера
var TextVKLPSP : GameObject; // Включить ПСП Текст
var PSPBOX : GameObject; // БОКС тумблера ПСП

static var SLEJENIEkolco = false; // Для движения кольца
static var SLEJENIEkolco2 = false; // Для движения кольца (проверка ФОНА 2)
static var SLEJENIEkolco3 = false; // Для движения кольца (проверка ФОНА 3)
static var TextProdoljitOTKL = false; // Для отключения текста ПРОДОЛЖИТЬ из визира
static var UgolNIZ = false; // Для загорания низ при определенном угле
static var UgolNIZ2 = false; // Для загорания низ при определенном угле (2Ой заход в ВИЗИР)
static var UgolNIZ3 = false; // Для загорания низ при определенном угле (3ий заход в ВИЗИР)
static var UgolNIZ4 = false; // Для загорания низ при определенном угле (4ый заход в ВИЗИР)
static var SBROSenter1 = false; //Для того чтобы сбросить статичную TextProdoljit1
static var vishelizVIZIRA1 = false; // Вышел из ВИЗИРА 1 раз
static var vishelizVIZIRA2 = false; // Вышел из ВИЗИРА 2 раз
static var vishelizVIZIRA3 = false; // Вышел из ВИЗИРА 3 раз
static var vishelizVIZIRA4 = false; // Вышел из ВИЗИРА 4 раз
static var KOLCOsovmestilos = false; // Кольцо совместилось
static var zashelvVIZIRkolcosovmesh = false; // Чтобы в Update отключить меню
static var zashelvVIZIRvertolet1 = false; //Сигнал для вертолета зашел в визир ФОН 1
static var zashelvVIZIRvertolet2FON = false; //Сигнал для вертолета зашел в визир ФОН 2
static var zashelvVIZIRvertolet3FON = false; //Сигнал для вертолета зашел в визир ФОН 3


function Start () {
    var SOLDATodin = GameObject.Find("soldier");
    var SOLDATodinCAMERA = GameObject.Find("soldiercam");
    var SOLDATdva = GameObject.Find("солдат в машине2 (ПОХОД)");
    var SOLDATdvaCAMERA = GameObject.Find("Солдат в походное");
    var TextRODPABOTIodin = GameObject.Find("Текст РОД РАБОТЫ");
    var TextRODPABOTIdva = GameObject.Find("Текст РОД РАБОТЫ 2");
    var SoldatVneshn1 = GameObject.Find("солдат КНОПКИ (для внешн. камеры НОГИ)");
    var SoldatVneshn2 = GameObject.Find("солдат КНОПКИ (ГОЛОВА для внешн.)");
    var SoldatVIZIR = GameObject.Find("солдат у ВИЗИРА (для внешн.)");
    var pereklFONBOX = GameObject.Find("перекл. ФОН");
    //Надо всавить после появления вертолета!!!
    //verhvertushka = GameObject.Find("Вертушка верхняя"); //Находим верхний пропеллер
    verhvertushka.GetComponent.<Animation>().Play("Вертушка верхняя"); //Проигрываем цикличную анимацию верхнего пропеллера
    //zadnvertushka = GameObject.Find("Вертушка задняя"); //Находим задний пропеллер
    zadnvertushka.GetComponent.<Animation>().Play("Вертушка задняя"); //Проигрываем цикличную анимацию заднего пропеллера
}
function Update () {

   


    if (SLEJENIEkolco == true) {
        SoldatVneshnPULT1.SetActive (false);//Отключаем солдата для внешн. камеры 1/2
        SoldatVneshnPULT2.SetActive (false);
    }

    if (AZPUSHKA.TextProdoljit == true) {
        TextProdoljenieEnter.SetActive (true); // Активириуем текст продолжить 1ый раз
        if (vishelizVIZIRA1 == true) { //Если вышел из визира в 1 раз
            TextProdoljenieEnter.SetActive (false); // деактивируем текст продолжить 1 раз

        }
    }

    if (AZPOVOROT.SignalOdin == true) { // Если навелись на небо (режим ФОН 1) ИЗМЕНИЛ после вертолета!!! AZVERTOLET.dvijenieVPRAVO == true || AZVERTOLET2.dvijenieVPRAVO2 == true
        TextProdoljenieEnter.SetActive (true); //Включаем текст нажать на ENTER 2 раз
        TextVizirnaNEBO1.SetActive (false); // Выключаем текст 1/2 наведитесь на небо 
        TextVizirnaNEBO2.SetActive (false); // Выключаем текст 2/2 наведитесь на небо  
    }
   
    if (AZPOVOROT.SignalDva == true) { // Если навелись на небо (режим ФОН 2)
        TextProdoljenieEnter.SetActive (true); //Включаем текст нажать на ENTER 2 раз
        TextVizirnaNEBO1.SetActive (false); // Выключаем текст 1/2 наведитесь на небо 
        TextVizirnaNEBO2.SetActive (false); // Выключаем текст 2/2 наведитесь на небо  
    }

    if (AZPOVOROT.SignalTri == true) { // Если навелись на небо (режим ФОН 3)
        TextProdoljenieEnter.SetActive (true); //Включаем текст нажать на ENTER 2 раз
        TextVizirnaNEBO1.SetActive (false); // Выключаем текст 1/2 наведитесь на небо 
        TextVizirnaNEBO2.SetActive (false); // Выключаем текст 2/2 наведитесь на небо  
    }

    if (Input.GetKey("return") && AZPUSHKA.TextProdoljit == true && SBROSenter1 == true) { // возвращение из визира к руке 1 раз
        AZPUSHKA.TextProdoljit = false; // Чтобы убрать текст Продолжить в дальнейшем
        vishelizVIZIRA1 = true;
        VIZIRBOX.GetComponent.<Collider>().enabled = false; //Деактивировать коробку визира
        var pereklRODRABOTIBOX = GameObject.Find("перекл. РОД РАБОТЫ");
        pereklRODRABOTIBOX.GetComponent.<Collider>().enabled = true; //Включаем бокс переключателя
        TextProdoljenieEnter.SetActive (false); // деАктивириуем текст продолжить
        TextRODPABOTIodin.SetActive (true);
        TextRODPABOTIdva.SetActive (true);
        CameraODIN.SetActive (true);
        CameraPULT.SetActive (false);
        CameraVIZIR.SetActive (false);
        SOLDATodin.SetActive (true);
        SOLDATodinCAMERA.SetActive (true);
        SOLDATdva.SetActive (false);
        SOLDATdvaCAMERA.SetActive (false);
        SoldatVneshn1.SetActive (true); //Включаем солдата для внешн. камеры
        SoldatVneshn2.SetActive (true);
        SoldatVIZIR.SetActive (false);// Отключаем солдата у ВИЗИРА для внешней камеры
        (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = false; // вырубить скрипт пальца
        (GameObject.Find("ПОВОРОТ").GetComponent("AZPOVOROT") as MonoBehaviour).enabled = false; // вырубить скрипт ПОВОРОТ
        (GameObject.Find("ракеты 2 (2)").GetComponent("AZPUSHKA") as MonoBehaviour).enabled = false; // вырубить скрипт ПУШКИ
        (GameObject.Find("ВИЗИР груб 2 (1)").GetComponent("VIZIRAZ") as MonoBehaviour).enabled = false; // деАктивировать скрипт визира
        (GameObject.Find("Стрелка local").GetComponent("Вращение стрелки азимута АЗ") as MonoBehaviour).enabled = false; // 
        (GameObject.Find("левая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        (GameObject.Find("правая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        (GameObject.Find("ПН2 local").GetComponent("POVOROTPN") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        SBROSenter1 = false; // Для появления текста "Продолжение Enter" при проверке совмещения Кольца
        CameraOKNO.SetActive (false); //деАктивировать внешнюю камеру
    }
  
    if (Input.GetKey("return") && AZSIGNAL.SIGNAL == true) { // возвращение из визира к руке 2 раз (в режиме ФОН 1)
        pereklFONBOX.GetComponent.<Collider>().enabled = true; //Включаем бокс переключателя ФОН
        VIZIRBOX.GetComponent.<Collider>().enabled = false; //Первый бокс визира выключить
        VIZIRBOX2.GetComponent.<Collider>().enabled = false;  // Бокс 2 Визира выкл
        CameraODIN.SetActive (true);
        CameraPULT.SetActive (false);
        CameraVIZIR.SetActive (false);
        SOLDATodin.SetActive (true);
        SOLDATodinCAMERA.SetActive (true);
        SOLDATdva.SetActive (false);
        SOLDATdvaCAMERA.SetActive (false);
        SoldatVneshn1.SetActive (true); //Включаем солдата для внешн. камеры
        SoldatVneshn2.SetActive (true);
        SoldatVIZIR.SetActive (false);// Отключаем солдата у ВИЗИРА для внешней камеры
        TextFON2.SetActive (true); // Включаем текст включить ФОН 2
        (GameObject.Find("ПОВОРОТ").GetComponent("AZPOVOROT") as MonoBehaviour).enabled = false; // вырубить скрипт ПОВОРОТ
        (GameObject.Find("ракеты 2 (2)").GetComponent("AZPUSHKA") as MonoBehaviour).enabled = false; // вырубить скрипт ПУШКИ
        (GameObject.Find("ВИЗИР груб 2 (1)").GetComponent("VIZIRAZ") as MonoBehaviour).enabled = false; // деАктивировать скрипт визира
        (GameObject.Find("Стрелка local").GetComponent("Вращение стрелки азимута АЗ") as MonoBehaviour).enabled = false; // 
        (GameObject.Find("левая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        (GameObject.Find("правая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        (GameObject.Find("ПН2 local").GetComponent("POVOROTPN") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        PRAVARUKA.GetComponent.<Animation>().Play("Правая рука со слежения"); // Убрать со слежения
        LEVARUKA.GetComponent.<Animation>().Play("Вернуть левую руку"); // Вернуть левую руку
        AZSIGNAL.SIGNAL = false;
        CameraOKNO.SetActive (false); //деАктивировать внешнюю камеру

        //Деактивируем скрипты охвата
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZOXVAT") as MonoBehaviour).enabled = false;// Выкл. скрипт охвата 1 верта ФОНА 1
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZOXVAT2") as MonoBehaviour).enabled = false;// Выкл. скрипт охвата 2 верта ФОНА 1
            TextProdoljenieEnter.SetActive (false); // деАктивириуем текст продолжить
            TextNavediteVIZIR.SetActive (false); // Выключаем текст 1/2 используя наведитесь ( в машине)
            TextNavediteVIZIR2.SetActive (false); // Выключаем текст 2/2 используя наведитесь ( в машине)
            AudioGSN.SetActive (false); // Выключаем звук ГСН в режиме слежения
            AudioGSNtixo.SetActive (true); // Включаем тихую ГСН
            vertolet1FON1.SetActive (false);//Деактивируем 1-ый вертолет из ФОНА 1
            vertolet2FON1.SetActive (false);//Деактивируем 2-ой вертолет из ФОНА 1
            KOLCO.GetComponent.<Animation>().enabled = true; // Включить анимацию кольца
    }

    if (Input.GetKey("return") && AZSIGNAL.SIGNAL2 == true) { // возвращение из визира к руке 3 раз (режим ФОН 2)

        PSPBOX.GetComponent.<Collider>().enabled = true; // Бокс тумблера ПСП
        VIZIRBOX3.GetComponent.<Collider>().enabled = false;  // Бокс 3 Визира выкл (режима ФОН 2)
        CameraODIN.SetActive (true);
        CameraPULT.SetActive (false);
        CameraVIZIR.SetActive (false);
        SOLDATodin.SetActive (true);
        SOLDATodinCAMERA.SetActive (true);
        SOLDATdva.SetActive (false);
        SOLDATdvaCAMERA.SetActive (false);
        SoldatVneshn1.SetActive (true); //Включаем солдата для внешн. камеры
        SoldatVneshn2.SetActive (true);
        SoldatVIZIR.SetActive (false);// Отключаем солдата у ВИЗИРА для внешней камеры
        TextVKLPSP.SetActive (true); // Вкл текст ВКЛ ПСП
        TEXTIspolzNavediteFON2.SetActive (false); //1/2 Используя визир, наведите ...в режиме-ФОН 2, выключить текст
        TEXTIspolzNavedite2FON2.SetActive (false); // 2/2
        vertolet1FON2.SetActive (false);//Деактивируем 1-ый вертолет из ФОНА 2
        vertolet2FON2.SetActive (false);//Деактивируем 2-ой вертолет из ФОНА 2
        (GameObject.Find("ПОВОРОТ").GetComponent("AZPOVOROT") as MonoBehaviour).enabled = false; // вырубить скрипт ПОВОРОТ
        (GameObject.Find("ракеты 2 (2)").GetComponent("AZPUSHKA") as MonoBehaviour).enabled = false; // вырубить скрипт ПУШКИ
        (GameObject.Find("ВИЗИР груб 2 (1)").GetComponent("VIZIRAZ") as MonoBehaviour).enabled = false; // деАктивировать скрипт визира
        (GameObject.Find("Стрелка local").GetComponent("Вращение стрелки азимута АЗ") as MonoBehaviour).enabled = false; // 
        (GameObject.Find("левая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        (GameObject.Find("правая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        (GameObject.Find("ПН2 local").GetComponent("POVOROTPN") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = true; // врубить скрипт пальца
        PRAVARUKA.GetComponent.<Animation>().Play("Правая рука со слежения"); // Убрать со слежения
        LEVARUKA.GetComponent.<Animation>().Play("Вернуть левую руку"); // Вернуть левую руку
        AZSIGNAL.SIGNAL2 = false;
        CameraOKNO.SetActive (false); //деАктивировать внешнюю камеру
        
        //Деактивируем скрипты охвата
        AudioGSN.SetActive (false); // Выключаем звук ГСН в режиме слежения
        AudioGSNtixo.SetActive (true); // Включаем тихую ГСН
        TextProdoljenieEnter.SetActive (false); // деАктивириуем текст продолжить
        TextNavediteVIZIR.SetActive (false); // Выключаем текст 1/2 используя наведитесь ( в машине)
        TextNavediteVIZIR2.SetActive (false); // Выключаем текст 2/2 используя наведитесь ( в машине)
        VIZIRBOX3.GetComponent.<Collider>().enabled = false;
        VIZIRBOX.GetComponent.<Collider>().enabled = false;
        KOLCO.GetComponent.<Animation>().enabled = true; // Включить анимацию кольца
    }

    if (Input.GetKey("return") && AZSIGNAL.SIGNAL3 == true) { // возвращение из визира к руке 4 раз (режим ФОН 3)

        pereklFONBOX2.GetComponent.<Collider>().enabled = false; //Выключаем 2 бокс переключателя ФОН (Для: из 2 в 3)
        tumblerB1BOX.GetComponent.<Collider>().enabled = true; //Включаем бокс тумблера B1
        VIZIRBOX4.GetComponent.<Collider>().enabled = false;  // Бокс 4 Визира выкл (режима ФОН 3)
        CameraODIN.SetActive (true);
        CameraPULT.SetActive (false);
        CameraVIZIR.SetActive (false);
        SOLDATodin.SetActive (true);
        SOLDATodinCAMERA.SetActive (true);
        SOLDATdva.SetActive (false);
        SOLDATdvaCAMERA.SetActive (false);
        SoldatVneshn1.SetActive (true); //Включаем солдата для внешн. камеры
        SoldatVneshn2.SetActive (true);
        SoldatVIZIR.SetActive (false);// Отключаем солдата у ВИЗИРА для внешней камеры
        TextB1VKL.SetActive (true); // Включаем текст включить B1!
        TEXTIspolzNavediteFON2.SetActive (false); //1/2 Используя визир, наведите ...в режиме-ФОН 2, выключить текст
        TEXTIspolzNavedite2FON2.SetActive (false); // 2/2
        (GameObject.Find("ПОВОРОТ").GetComponent("AZPOVOROT") as MonoBehaviour).enabled = false; // вырубить скрипт ПОВОРОТ
        (GameObject.Find("ракеты 2 (2)").GetComponent("AZPUSHKA") as MonoBehaviour).enabled = false; // вырубить скрипт ПУШКИ
        (GameObject.Find("ВИЗИР груб 2 (1)").GetComponent("VIZIRAZ") as MonoBehaviour).enabled = false; // деАктивировать скрипт визира
        (GameObject.Find("Стрелка local").GetComponent("Вращение стрелки азимута АЗ") as MonoBehaviour).enabled = false; // 
        (GameObject.Find("левая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        (GameObject.Find("правая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        (GameObject.Find("ПН2 local").GetComponent("POVOROTPN") as MonoBehaviour).enabled = false; // деАктивировать скрипт 
        PRAVARUKA.GetComponent.<Animation>().Play("Правая рука со слежения"); // Убрать со слежения
        LEVARUKA.GetComponent.<Animation>().Play("Вернуть левую руку"); // Вернуть левую руку
        AZSIGNAL.SIGNAL3 = false;
        CameraOKNO.SetActive (false); //деАктивировать внешнюю камеру

        AudioGSN.SetActive (false); // Выключаем звук ГСН в режиме слежения
        AudioGSNtixo.SetActive (true); // Включаем тихую ГСН
        TextProdoljenieEnter.SetActive (false); // деАктивириуем текст продолжить
        TextNavediteVIZIR.SetActive (false); // Выключаем текст 1/2 используя наведитесь ( в машине)
        TextNavediteVIZIR2.SetActive (false); // Выключаем текст 2/2 используя наведитесь ( в машине)
        VIZIRBOX4.GetComponent.<Collider>().enabled = false;
    }
    

    if (Input.GetKey("return") && KOLCOsovmestilos == true) { //Надо в UPDATE!!!
        CameraODIN.SetActive (true); //Включаем камеру с оператора
        CameraPULT.SetActive (true); //Включаем камеру с оператора
        CameraVIZIR.SetActive (false); // ВЫключаем камеру в визире
        SoldatVneshnPULT1.SetActive (true);//Включаем солдата для внешн. камеры 1/2
        SoldatVneshnPULT2.SetActive (true);//Включаем солдата для внешн. камеры 2/2
        SoldatVneshn1.SetActive (true);
        SoldatVIZIR.SetActive (false);// Выключаем солдата у ВИЗИРА для внешней камеры
        TextProdoljenieEnter.SetActive (false); // деАктивируем текст для продолжения после окончания анимации совмещения
        TextProverkaSovmeshenia.SetActive (false); //Выкл. надпись ПРОВЕРИТЬ СОВМЕЩЕНИЕ
        TextUsilenie.SetActive (true); // ВКЛ. текст УСИЛЕНИЕ для ГСН
        usilenieBOX.GetComponent.<Collider>().enabled = true; // включить коллайдер ручки усиление
        KOLCOsovmestilos = false;
        CameraOKNO.SetActive (false); //ДеАктивировать внешнюю камеру

    }

    if (zashelvVIZIRkolcosovmesh == true && Input.GetKey("return")) { // Если выходим из проверки сомещения кольца

    }

}

function OnMouseUp (){
    if (dvchetire == true) {
        dvvosemBOX.GetComponent.<Collider>().enabled =  true; // Активация коллайдера 28 В, ИЗНАЧАЛЬНО ДЕАКТИВИРОВАН!
        GetComponent.<Animation>().Play("24 ВКЛ АЗ"); // старт анимации включения 24 В
        TextVKLDVCH.SetActive (false);
        TextVKLDVVOS.SetActive (true); // Активация надписи "Текст включить 28 В"
        dvchetireBOX.GetComponent.<Collider>().enabled =  false; // Деактивация коллайдера
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audio24: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audio24.Play();// аудио
    }

    if (dvvosem == true) {
        GetComponent.<Animation>().Play("28 ВКЛ АЗ"); // старт анимации включения 28 В
        strelka.GetComponent.<Animation>().Play("стрелка ВКЛ"); // Отклонение стрелки вправо
        //uchebni.GetComponent(Renderer).material.color = Color(.100, .112, .800, .255); //синий цвет транспаранта УЧЕБНЫЙ
        TextVKLDVVOS.SetActive (false);  // Деактивация надписи "Текст включить 28 В"
        TextKONTROLVOLT.SetActive (true); // Текст "нажать на 30 В" активен
        podsvetV.SetActive (true); // Подсветка Вольт
        podsvetU.SetActive (true);
        podsvetPZodin.SetActive (true);
        podsvetPZdva.SetActive (true);
        podsvetPERVnapr.SetActive (true);
        dvvosemBOX.GetComponent.<Collider>().enabled =  false; // Деактивировать коллайдер 28 В
        KONTROLVOLTBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер КОНТР 30
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audio28: AudioSource = GetComponent.<AudioSource>(); //Для аудио 28 В
        audio28.Play();// аудио 28 В
    }

    if (KONTROL == true) {

        KONTROLVOLTBOX.GetComponent.<Collider>().enabled =  false;
        PRIVODbox.GetComponent.<Collider>().enabled = true;
        GetComponent.<Animation>().Play("КОНТР.30 В ВКЛ"); // старт анимации включения КОНТР 30 В
        strelka.GetComponent.<Animation>().Play("Стрелка КОНТР"); // Отклонение стрелки вправо
        TextKONTROLVOLT.SetActive (false);
        TextPRIVODVKL.SetActive (true);
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audioKONTROL: AudioSource = GetComponent.<AudioSource>(); //Для аудио КОНТР
        audioKONTROL.Play();// аудио КОНТР В
    }

    if (PRIVOD == true) {
        GetComponent.<Animation>().Play("ПРИВОД ВКЛ АЗ");
        (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = false; // вырубить скрипт пальца
        TextPRIVODVKL.SetActive (false);
        TextPlavnost.SetActive (true);
        PRIVODbox.GetComponent.<Collider>().enabled = false;
        PULTBOX.GetComponent.<Collider>().enabled = true;
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audioPRIVOD: AudioSource = GetComponent.<AudioSource>(); //Для аудио тумблера
        audioPRIVOD.Play();// аудио тумблера
    }

    if (PULT == true) { //Если нажали на пульт
        PULTBOX.GetComponent.<Collider>().enabled = false;
        TextPlavnost.SetActive (false);
        TextISPOLZstrelki.SetActive (true); //Используйте стрелки для вращения
        SOLDATodin.SetActive (false);
        SOLDATodinCAMERA.SetActive (false);
        SOLDATdva.SetActive (true);
        SOLDATdvaCAMERA.SetActive (true);
        SoldatVneshn1.SetActive (false);// деактивировать солдата с КНОПОК
        SoldatVneshn2.SetActive (false);// деактивировать солдата с КНОПОК
        SoldatVneshnPULT1.SetActive (true); // Активировать солдата на пульте для внешней камеры
        SoldatVneshnPULT2.SetActive (true); // Активировать солдата на пульте для внешней камеры
        (GameObject.Find("ПОВОРОТ").GetComponent("AZPOVOROT") as MonoBehaviour).enabled = true; // врубить скрипт ПОВОРОТ
        (GameObject.Find("ракеты 2 (2)").GetComponent("AZPUSHKA") as MonoBehaviour).enabled = true; // врубить скрипт ПУШКИ
        (GameObject.Find("ВИЗИР груб 2 (1)").GetComponent("VIZIRAZ") as MonoBehaviour).enabled = true; // Активировать скрипт визира
        (GameObject.Find("Стрелка local").GetComponent("Вращение стрелки азимута АЗ") as MonoBehaviour).enabled = true; // 
        (GameObject.Find("левая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = true; // Активировать скрипт 
        (GameObject.Find("правая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = true; // Активировать скрипт 
        (GameObject.Find("ПН2 local").GetComponent("POVOROTPN") as MonoBehaviour).enabled = true; // Активировать скрипт 
        CameraOKNO.SetActive (true); //Активировать внешнюю камеру
    }

    if (VIZIR == true) { //Если нажал на визир 
        CameraOKNO.SetActive (true); //Активировать внешнюю камеру
        VIZIRBOX.GetComponent.<Collider>().enabled = false;
        CameraODIN.SetActive (false);
        CameraPULT.SetActive (false);
        CameraVIZIR.SetActive (true);
        UgolNIZ = true; // Статичная, для определения в скрипте вращения пушки, для загорания НИЗ
        SoldatVneshnPULT1.SetActive (false);//Отключаем солдата для внешн. камеры 1/2
        SoldatVneshnPULT2.SetActive (false);//Отключаем солдата для внешн. камеры 2/2
        SoldatVIZIR.SetActive (true);// Включаем солдата у ВИЗИРА для внешней камеры
        SBROSenter1 = true; // одно из разрешений на нажатие enter

    }

    if (RODRABOTI == true) { //Если нажали на род работы 1 раз (из АВТ. на 1 пост)
        SBROSenter1 = false; // запрет на нажатие enter
        UgolNIZ = false; // Сбрасываем статичную для загорания низа в первом ВИЗИРЕ
        GetComponent.<Animation>().Play("РОД РАБОТЫ на 1");
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ РОД РАБОТЫ");
        pereklRODRABOTIBOX.GetComponent.<Collider>().enabled = false; // Отключить первый бокс (из АВТ.)
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false;// Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        var audioRODRABOTIavto: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioRODRABOTIavto.Play();// аудио
        yield WaitForSeconds (0.8); // Задержка 0.8 сек
        pervPOSTBOX.GetComponent.<Collider>().enabled = true; // Включить второй бокс (1 пост)
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true;// Включить поворот головы 
    }

    if (RODRABOTIodin == true) { //Если нажали на род работы 2 раз (из 1. на 2 пост)
        RUCHKARODARABOTI.GetComponent.<Animation>().Play("РОД РАБОТЫ на 2");
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ РОД РАБОТЫ");
        pervPOSTBOX.GetComponent.<Collider>().enabled = false;
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false;// Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.5); // Задержка 0.5 сек
        PODSVETpervnapr.SetActive (false); //Переключение подсветок
        PODSVETvtornapr.SetActive (true);
        yield WaitForSeconds (0.1); // Задержка 0.1 сек
        var audioRODRABOTIodin: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioRODRABOTIodin.Play();// аудио
        yield WaitForSeconds (0.8); // Задержка 0.8 сек
        vtoroiPOSTBOX.GetComponent.<Collider>().enabled = true;
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true;// Включить поворот головы 
    }

    if (RODRABOTIdva == true) { //Если нажали на род работы 3 раз (со 2. на 3 пост)
        RUCHKARODARABOTI.GetComponent.<Animation>().Play("РОД РАБОТЫ на 3");
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ РОД РАБОТЫ");
        vtoroiPOSTBOX.GetComponent.<Collider>().enabled = false;
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false;// Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.5); // Задержка 0.5 сек
        PODSVETvtornapr.SetActive (false);
        PODSVETtrinapr.SetActive (true);
        yield WaitForSeconds (0.1); // Задержка 0.2 сек
        var audioRODRABOTIdva: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioRODRABOTIdva.Play();// аудио
        yield WaitForSeconds (0.8); // Задержка 0.8 сек
        tretiiPOSTBOX.GetComponent.<Collider>().enabled = true;
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true;// Включить поворот головы 
    }

    if (RODRABOTItri == true) { //Если нажали на род работы 4 раз (с 3 на 4 пост)
        RUCHKARODARABOTI.GetComponent.<Animation>().Play("РОД РАБОТЫ на 4");
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ РОД РАБОТЫ");
        tretiiPOSTBOX.GetComponent.<Collider>().enabled = false;
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false;// Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.5); // Задержка 0.5 сек
        PODSVETtrinapr.SetActive (false);
        PODSVETchitirenapr.SetActive (true);
        TextRODPABOTIodin.SetActive (false); // Выкл 1/2 надпись про перекл. постов
        TextRODPABOTIdva.SetActive (false); // Выкл 2/2 надпись про перекл. постов
        TextBORTvkl.SetActive (true);// Вкл. надпись ВКЛ БОРТ
        yield WaitForSeconds (0.1); // Задержка 0.1 сек
        var audioRODRABOTItri: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioRODRABOTItri.Play();// аудио
        yield WaitForSeconds (0.8); // Задержка 0.8 сек
        bortBOX.GetComponent.<Collider>().enabled = true;
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true;// Включить поворот головы 
        
    }

    if (BORT == true) {
        GetComponent.<Animation>().Play("БОРТ ВКЛ");
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ БОРТ");
        bortBOX.GetComponent.<Collider>().enabled = false; // Выключить БОКС БОРТА
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false;// Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        //BORTnaPO.GetComponent(Renderer).material.color = Color(.100, .112, .800, .255); //синий цвет транспаранта БОРТ
        PODSVETbort.SetActive (true); //ВКЛ. подсветку БОРТа
        PodsvetGOTOVNRZ.SetActive (true); //ВКЛ. подсветку ГОТОВ НРЗ.
        TextBORTvkl.SetActive (false);// Выкл. надпись ВКЛ БОРТ
        TextProverkaSovmeshenia.SetActive (true); //Вкл. надпись ПРОВЕРИТЬ СОВМЕЩЕНИЕ
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        var audioBORT: AudioSource = GetComponent.<AudioSource>(); // аудио включения тумблера
        audioBORT.Play();// аудио включения тумблера
        AudioGSN.SetActive (true); //ВКЛ объект с аудио ГСН
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true;// Включить поворот головы 
        KOLCO.SetActive (true); //Включаем кольцо в визире
        VIZIRkolcoSOVMBOX.GetComponent.<Collider>().enabled = true; //Включаем бокс Визира для проверки совмещения
    }

    if (VIZIRkolcosovmeshenie == true) { //Если нажали на визир для проверки совмещения
        CameraOKNO.SetActive (true); //Активировать внешнюю камеру
        //ПОЯВЛЕНИЕ КАМЕРЫ В ВИЗИРЕ (УБЕЖДАЕМСЯ О СОВМЕЩЕНИИ КОЛЬЦА)
        CameraODIN.SetActive (false); //Выключаем камеру с оператора
        CameraPULT.SetActive (false); //Выключаем камеру с оператора
        CameraVIZIR.SetActive (true); // Включаем камеру в визире
        SoldatVneshnPULT1.SetActive (false);//Отключаем солдата для внешн. камеры 1/2
        SoldatVneshnPULT2.SetActive (false);//Отключаем солдата для внешн. камеры 2/2
        SoldatVneshn1.SetActive (false);
        SoldatVIZIR.SetActive (true);// Включаем солдата у ВИЗИРА для внешней камеры
        VIZIRkolcoSOVMBOX.GetComponent.<Collider>().enabled = false; //Выключаем бокс Визира для проверки совмещения
        zashelvVIZIRkolcosovmesh = true; // Чтобы в Update отключить меню
        //
        KOLCO.GetComponent.<Animation>().Play("Совмещение кольца");
        yield WaitForSeconds (2.0); //Задержка 2.0 сек (Анимация совмещения после раскрутки ГСН)
        TextProdoljenieEnter.SetActive (true); // Активируем текст для продолжения после окончания анимации совмещения
        KOLCOsovmestilos = true;
    }


    if (USILENIE == true) {
        usilenieBOX.GetComponent.<Collider>().enabled = false; // выключить коллайдер ручки усиление
        LEVARUKA.GetComponent.<Animation>().Play("Ручка УСИЛЕНИЕ"); //Анимация руки уменьшая УСИЛЕНИЕ
        GetComponent.<Animation>().Play("УСИЛЕНИЕ уменьшить"); //Анимация ручки
        TextUsilenie.SetActive (false); //Выключить текст УСИЛЕНИЕ
        TextRe4.SetActive (true);
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false;// Выключить поворот головы 
        yield WaitForSeconds (1.2); // Задержка 1.2 сек
        AudioGSN.SetActive (false); //Выключить громкий звук ГСН (вместе с объектом)
        AudioGSNtixo.SetActive (true); // Включить тихий звук ГСН (объект, на нем звук)
        //var AudioGSN2: AudioSource = GetComponent.<AudioSource>(); //Включить звук с ручки усиления
        //AudioGSN2.Play();// аудио
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true;// Включить поворот головы 
        AudioKomandir.SetActive (true); // Включаем разговоры командира с объектом
        RE4BOX.GetComponent.<Collider>().enabled = true; // Включить коллайдер ручки РЕЧЬ
        KOLCOsovmestilos = false; // Обращаем обратно
    }

    if (RE4 == true) {
        RE4BOX.GetComponent.<Collider>().enabled = false; // Выключить коллайдер ручки РЕЧЬ
        SLEJENIEBOX.GetComponent.<Collider>().enabled = true; // Включить коллайдер ручки СЛЕЖЕНИЕ
        GetComponent.<Animation>().Play("РЕЧЬ УВЕЛИЧИТЬ");
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ БОРТ"); // Анимация руки
        TextRe4.SetActive (false);
        TextSlejenie.SetActive (true);
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false;// Выключить поворот головы 
        yield WaitForSeconds (1.2);
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true;// Включить поворот головы 
        AudioKomandir.SetActive (false); //Выключаем разговоры командира с объектом
        var AudioKomandir2: AudioSource = GetComponent.<AudioSource>(); //Включить звук с ручки РЕЧИ
        AudioKomandir2.Play();// аудио

    }

    if (SLEJENIE == true) { //Если нажали на слежение
        PRAVARUKA.GetComponent.<Animation>().Play("Правая рука на Слежение"); //Анимация правой руки
        LEVARUKA.GetComponent.<Animation>().Play("Убрать левую руку");
        GetComponent.<Animation>().Play("кнопка СЛЕЖЕНИЕ");
        SLEJENIEBOX.GetComponent.<Collider>().enabled = false; //Отключаем бокс от СЛЕЖЕНИЕ
        VIZIRBOX2.GetComponent.<Collider>().enabled = true;  // Бокс 2 Визира вкл
        TextSlejenie.SetActive (false); //Отключаем текст СЛЕЖЕНИЕ
        TextNavediteVIZIR.SetActive (true); //Текст используйте визир для наводки на небо (текст в машине)
        TextNavediteVIZIR2.SetActive (true); 
        CameraOKNO.SetActive (true); //Активировать внешнюю камеру
        yield WaitForSeconds (0.6); //Задержка
        RAKETI.GetComponent.<Animation>().Play("Открыть крышку");
        yield WaitForSeconds (0.6); //Задержка
        AudioGSNslejenie.SetActive (true); // Включаем звук ГСН в режиме слежения
        AudioGSNtixo.SetActive (false); // Выключаем тихую ГСН
        PodsvetISPRNRZ.SetActive (true); // Включаем подсветку ИСПР.
        var Krishka: AudioSource = GetComponent.<AudioSource>(); //Включить звук крышки контейнера с кнопки
        Krishka.Play();// аудио
        yield WaitForSeconds (3.0); //Раскрутка ГСН закончилась
        AudioGSNslejenie.SetActive (false); // Выключаем звук раскрутки ГСН в режиме слежения
        AudioGSN.SetActive (true); // Включаем звук ГСН раскрученного
    }

    if (VIZIRfon1 == true) { //Если нажать на визир в режиме ФОН1
        SLEJENIEBOX.GetComponent.<Animation>().Play("кнопка СЛЕЖЕНИЕ ВЫКЛ"); //Отжать кнопку слежение
        KOLCO.GetComponent.<Animation>().wrapMode = WrapMode.Loop; // Зациклили анимацию
        KOLCO.GetComponent.<Animation>().Play("КОЛЬЦО СЛЕЖЕНИЕ"); //Включить дрожание кольца слежения
        TextNavediteVIZIR.SetActive (false); // Выключаем текст 1/2 используйте визир для наводки на небо (текст в машине)
        TextNavediteVIZIR2.SetActive (false);// Выключаем текст 2/2 
        TextVizirnaNEBO1.SetActive (true); //наведитесь на небо  1/2 Текст включаем
        TextVizirnaNEBO2.SetActive (true); 
        VIZIRBOX2.GetComponent.<Collider>().enabled = false; // Выключаем второй бокс визира
        CameraODIN.SetActive (false); //Выключаем камеру с оператора
        CameraPULT.SetActive (false); //Выключаем камеру с оператора
        CameraVIZIR.SetActive (true); // Включаем камеру в визире
        SoldatVneshnPULT1.SetActive (false);//Отключаем солдата для внешн. камеры 1/2
        SoldatVneshnPULT2.SetActive (false);//Отключаем солдата для внешн. камеры 2/2
        SoldatVneshn1.SetActive (false);
        SoldatVIZIR.SetActive (true);// Включаем солдата у ВИЗИРА для внешней камеры
        SLEJENIEkolco = true; // В скрипте пушки включаем анимацию движения кольца
        UgolNIZ2 = true; // в скрипте пушки включаем стрелку НИЗ при 2 заходе в визир
        zashelvVIZIRvertolet1 = true; //В скрипте поворота включаем вертолет

        yield WaitForSeconds (1.2); // Задержка 1.2 сек
        (GameObject.Find("ПОВОРОТ").GetComponent("AZPOVOROT") as MonoBehaviour).enabled = true; // врубить скрипт ПОВОРОТ
        (GameObject.Find("ракеты 2 (2)").GetComponent("AZPUSHKA") as MonoBehaviour).enabled = true; // врубить скрипт ПУШКИ
        (GameObject.Find("ВИЗИР груб 2 (1)").GetComponent("VIZIRAZ") as MonoBehaviour).enabled = true; // Активировать скрипт визира
        (GameObject.Find("Стрелка local").GetComponent("Вращение стрелки азимута АЗ") as MonoBehaviour).enabled = true; // 
        (GameObject.Find("левая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = true; // Активировать скрипт 
        (GameObject.Find("правая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = true; // Активировать скрипт 
        (GameObject.Find("ПН2 local").GetComponent("POVOROTPN") as MonoBehaviour).enabled = true; // Активировать скрипт 
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZKOLCOZAKOLCOM") as MonoBehaviour).enabled = true; // Активировать скрипт следования за прицелом

    }
    // 
    //
        

        
    

    if (FON2 == true) { //Если перевели перекл. ФОН из 1 во 2
        GetComponent.<Animation>().Play("ФОН во 2"); //Анимация переключателя
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ РОД РАБОТЫ"); //Анимация руки
        TextFON2.SetActive (false); // Выключаем текст включить ФОН 2
        TextSlejenie.SetActive (true); // Текст нажать на слежение активировать
        pereklFONBOX.GetComponent.<Collider>().enabled = false; //Выключаем бокс переключателя ФОН1
        SLEJENIEBOX2.GetComponent.<Collider>().enabled = true; //Включаем объект с боксом от слежения 2
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (1.2); //Задержка
        var FONaudio: AudioSource = GetComponent.<AudioSource>(); //Включить звук перекл. ФОН
        FONaudio.Play(); // проиграть
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот камеры
    }

    if (SLEJENIE2 == true) { // Если нажал на слежение во 2 раз (режим ФОН 2)
        PRAVARUKA.GetComponent.<Animation>().Play("Правая рука на Слежение"); //Анимация правой руки
        LEVARUKA.GetComponent.<Animation>().Play("Убрать левую руку");
        SLEJENIEBOX.GetComponent.<Animation>().Play("кнопка СЛЕЖЕНИЕ");
        SLEJENIEBOX2.GetComponent.<Collider>().enabled = false; //Отключаем 2 бокс от СЛЕЖЕНИЯ
        VIZIRBOX3.GetComponent.<Collider>().enabled = true;  // Бокс 3 Визира вкл (для проверки ФОНА 2)
        TextSlejenie.SetActive (false); //Отключаем текст СЛЕЖЕНИЕ
        TEXTIspolzNavediteFON2.SetActive (true); // Используя визир, наведите -ФОН 2
        TEXTIspolzNavedite2FON2.SetActive (true);
        yield WaitForSeconds (1.2); //Задержка
        var Slejenie2audio: AudioSource = GetComponent.<AudioSource>(); //Включить звук нажатия на слежение
        Slejenie2audio.Play(); // проиграть
        AudioGSN.SetActive (true); //Включить громкий звук ГСН (вместе с объектом)
        AudioGSNtixo.SetActive (false); // Выключить тихий звук ГСН (объект, на нем звук)
    }

    if (VIZIRfon2 == true) { //Если нажать на визир в режиме ФОН2
        CameraOKNO.SetActive (true); //Активировать внешнюю камеру

        SLEJENIEBOX.GetComponent.<Animation>().Play("кнопка СЛЕЖЕНИЕ ВЫКЛ"); //Отжать кнопку слежение
        TextNavediteVIZIR.SetActive (true); // Включаем текст 1/2 наведитесь на небо (текст в визире)
        TextNavediteVIZIR2.SetActive (true);// Включаем текст 2/2 наведитесь на небо  
        TextVizirnaNEBO1.SetActive (false); //Текст используйте визир для наводки на небо (текст в машине) выключить
        TextVizirnaNEBO2.SetActive (false); 
        VIZIRBOX3.GetComponent.<Collider>().enabled = false; // Выключаем третий бокс визира (для проверки ФОНА 2)
        CameraODIN.SetActive (false); //Выключаем камеру с оператора
        CameraPULT.SetActive (false); //Выключаем камеру с оператора
        CameraVIZIR.SetActive (true); // Включаем камеру в визире
        SoldatVneshnPULT1.SetActive (false);//Отключаем солдата для внешн. камеры 1/2
        SoldatVneshnPULT2.SetActive (false);//Отключаем солдата для внешн. камеры 2/2
        SoldatVneshn1.SetActive (false);
        SoldatVIZIR.SetActive (true);// Включаем солдата у ВИЗИРА для внешней камеры
        SLEJENIEkolco2 = true; // В скрипте пушки включаем анимацию движения кольца
        UgolNIZ3 = true; // в скрипте пушки включаем стрелку НИЗ при 2 заходе в визир
        zashelvVIZIRvertolet2FON = true; // Для вертолета, чтобы определить углы
        var KOLCO2 = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо

        yield WaitForSeconds (1.2); // Задержка 1.2 сек

        (GameObject.Find("ПОВОРОТ").GetComponent("AZPOVOROT") as MonoBehaviour).enabled = true; // врубить скрипт ПОВОРОТ
        (GameObject.Find("ракеты 2 (2)").GetComponent("AZPUSHKA") as MonoBehaviour).enabled = true; // врубить скрипт ПУШКИ
        (GameObject.Find("ВИЗИР груб 2 (1)").GetComponent("VIZIRAZ") as MonoBehaviour).enabled = true; // Активировать скрипт визира
        (GameObject.Find("Стрелка local").GetComponent("Вращение стрелки азимута АЗ") as MonoBehaviour).enabled = true; // 
        (GameObject.Find("левая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = true; // Активировать скрипт 
        (GameObject.Find("правая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = true; // Активировать скрипт 
        (GameObject.Find("ПН2 local").GetComponent("POVOROTPN") as MonoBehaviour).enabled = true; // Активировать скрипт 
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZKOLCOZAKOLCOM") as MonoBehaviour).enabled = true; // Активировать скрипт следования за прицелом
    }

    if (PSP == true) { // Если включили тумблер ПСП
        GetComponent.<Animation>().Play("ПСП ВКЛ"); //Анимация переключателя 
        pereklFONBOX2.GetComponent.<Collider>().enabled = true; //Включаем 2 бокс переключателя ФОН (Для: из 2 в 3)
        TextFON3.SetActive (true); // Включаем текст включить ФОН 2
        TextVKLPSP.SetActive (false);
        PSPBOX.GetComponent.<Collider>().enabled = false; // ВЫкл БОКС ПСП
        (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = false; // вырубить скрипт пальца
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audioPSP: AudioSource = GetComponent.<AudioSource>(); //Для аудио PSP
        audioPSP.Play();// аудио PSP play
    }

    if (FON3 == true) { //Если перевели перекл. ФОН из 2 в 3
        pereklFON.GetComponent.<Animation>().Play("ФОН в 3"); //Анимация переключателя в 3
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ РОД РАБОТЫ"); //Анимация руки
        TextFON3.SetActive (false); // Выключаем текст включить ФОН 3
        TextSlejenie.SetActive (true); // Текст "нажать на слежение" активировать
        pereklFONBOX2.GetComponent.<Collider>().enabled = false; //Выключаем бокс переключателя ФОН2
        SLEJENIEBOX3.GetComponent.<Collider>().enabled = true; //Включаем объект с боксом от слежения 2
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (1.2); //Задержка
        var FON2audio: AudioSource = GetComponent.<AudioSource>(); //Включить звук перекл. ФОН
        FON2audio.Play(); // проиграть
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // включить поворот камеры
    }

    if (SLEJENIE3 == true) { // Если нажал на слежение в 3 раз (режим ФОН 3)
        PRAVARUKA.GetComponent.<Animation>().Play("Правая рука на Слежение"); //Анимация правой руки
        LEVARUKA.GetComponent.<Animation>().Play("Убрать левую руку");
        SLEJENIEBOX.GetComponent.<Animation>().Play("кнопка СЛЕЖЕНИЕ");
        SLEJENIEBOX3.GetComponent.<Collider>().enabled = false; //Отключаем 3 бокс от СЛЕЖЕНИЯ
        VIZIRBOX4.GetComponent.<Collider>().enabled = true;  // Бокс 4 Визира вкл (для проверки ФОНА 3)
        TextSlejenie.SetActive (false); //Отключаем текст СЛЕЖЕНИЕ
        TEXTIspolzNavediteFON2.SetActive (true); // Используя визир, наведите -ФОН 2
        TEXTIspolzNavedite2FON2.SetActive (true);
        yield WaitForSeconds (1.2); //Задержка
        var Slejenie3audio: AudioSource = GetComponent.<AudioSource>(); //Включить звук нажатия на слежение
        Slejenie3audio.Play(); // проиграть
        AudioGSN.SetActive (true); //Включить громкий звук ГСН (вместе с объектом)
        AudioGSNtixo.SetActive (false); // Выключить тихий звук ГСН (объект, на нем звук)
    }

    if (VIZIRfon3 == true) { //Если нажать на визир в режиме ФОН3
        CameraOKNO.SetActive (true); //Активировать внешнюю камеру
        SLEJENIEBOX.GetComponent.<Animation>().Play("кнопка СЛЕЖЕНИЕ ВЫКЛ"); //Отжать кнопку слежение
        TextNavediteVIZIR.SetActive (true); // Включаем текст 1/2 наведитесь на небо (текст в визире)
        TextNavediteVIZIR2.SetActive (true);// Включаем текст 2/2 наведитесь на небо  
        TextVizirnaNEBO1.SetActive (false); //Текст используйте визир для наводки на небо (текст в машине) выключить
        TextVizirnaNEBO2.SetActive (false); 
        VIZIRBOX4.GetComponent.<Collider>().enabled = false; // Выключаем 4 бокс визира (для проверки ФОНА 3)
        CameraODIN.SetActive (false); //Выключаем камеру с оператора
        CameraPULT.SetActive (false); //Выключаем камеру с оператора
        CameraVIZIR.SetActive (true); // Включаем камеру в визире
        SoldatVneshnPULT1.SetActive (false);//Отключаем солдата для внешн. камеры 1/2
        SoldatVneshnPULT2.SetActive (false);//Отключаем солдата для внешн. камеры 2/2
        SoldatVneshn1.SetActive (false);
        SoldatVIZIR.SetActive (true);// Включаем солдата у ВИЗИРА для внешней камеры
        SLEJENIEkolco3 = true; // В скрипте пушки включаем анимацию движения кольца
        UgolNIZ4 = true; // в скрипте пушки включаем стрелку НИЗ при 2 заходе в визир
        zashelvVIZIRvertolet3FON = true; // Для вертолета, чтобы определить углы
        var KOLCO3 = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо
        yield WaitForSeconds (1.2); // Задержка 1.2 сек

        (GameObject.Find("ПОВОРОТ").GetComponent("AZPOVOROT") as MonoBehaviour).enabled = true; // врубить скрипт ПОВОРОТ
        (GameObject.Find("ракеты 2 (2)").GetComponent("AZPUSHKA") as MonoBehaviour).enabled = true; // врубить скрипт ПУШКИ
        (GameObject.Find("ВИЗИР груб 2 (1)").GetComponent("VIZIRAZ") as MonoBehaviour).enabled = true; // Активировать скрипт визира
        (GameObject.Find("Стрелка local").GetComponent("Вращение стрелки азимута АЗ") as MonoBehaviour).enabled = true; // 
        (GameObject.Find("левая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = true; // Активировать скрипт 
        (GameObject.Find("правая ручка").GetComponent("POVOROTLEVRUSCHKI") as MonoBehaviour).enabled = true; // Активировать скрипт 
        (GameObject.Find("ПН2 local").GetComponent("POVOROTPN") as MonoBehaviour).enabled = true; // Активировать скрипт 
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZKOLCOZAKOLCOM") as MonoBehaviour).enabled = true; // Активировать скрипт следования за прицелом
    }

    if (B1 == true) { // Если нажали на тумблер охлаждение
        LEVARUKA.GetComponent.<Animation>().Play("Включить рукой ОХЛАЖДЕНИЕ");
        TextB1VKL.SetActive (false); // Выключаем текст включить B1!
        tumblerB1BOX.GetComponent.<Collider>().enabled = false; //Выключаем бокс тумблера B1
        Text28VIKL.SetActive (true); // Текст "выключить 28 В" включить
        DVVOSEMVIKLBOX.GetComponent.<Collider>().enabled = true; // Активировать коллайдер 28 В (для выключения)
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (1.2); // Задержка 1.2 сек
        var B1Audio: AudioSource = GetComponent.<AudioSource>(); //Включить звук нажатия на B1
        B1Audio.Play(); // проиграть
        (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = true; // врубить скрипт пальца
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // включить поворот камеры
    }

    if (dvvosemVIKL == true) { // Еслт выключим 28 В
        dvvosemBOX.GetComponent.<Animation>().Play("28 ВЫКЛ АЗ");
        Text28VIKL.SetActive (false); // Выкл текст про 28
        TextBOIVOE.SetActive (true); // Вкл текст боевое
        DVVOSEMVIKLBOX.GetComponent.<Collider>().enabled = false; // деАктивировать коллайдер 28 В (для выключения)
        BOIVOEBOX.GetComponent.<Collider>().enabled = true; // Активировать коллайдер Боевое
        //BORTnaPO.GetComponent(Renderer).material.color = Color(1, 1, 1, 1); //Сброс цвета транспаранта БОРТ в исходное
        PODSVETbort.SetActive (false); //ВЫКЛ. подсветку БОРТа
        PODSVETchitirenapr.SetActive (false); // ВЫКЛ. подсветку транспаранта
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audio28VIKL: AudioSource = GetComponent.<AudioSource>(); //Для аудио тумблера
        audio28VIKL.Play(); // аудио тумблера
    }

    if (BOIVOE == true) { // Включить в боевое
        GetComponent.<Animation>().Play("РЕЖИМ В БОЕВОЙ");//Анимация
        TextBOIVOE.SetActive (false); // Выкл текст боевое
        Text24VIKL.SetActive (true); // Вкл текст про 24
        BOIVOEBOX.GetComponent.<Collider>().enabled = false; // деАктивировать коллайдер Боевое (для выключения)
        DVCHITIREVIKLBOX.GetComponent.<Collider>().enabled = true; //Активировать коллайдер 24 В
        PODSVETbort.SetActive (false); //ВЫКЛ. подсветку БОРТа
        podsvetU.SetActive (false); // Гаснет транспарант учебный
        
        podsvetBoivoi.SetActive (true);//Подсветка трансп. Боевой ВКЛ
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audioBOIVOEVIKL: AudioSource = GetComponent.<AudioSource>(); //Для аудио тумблера
        audioBOIVOEVIKL.Play(); // аудио тумблера 
        yield WaitForSeconds (0.05); // Задержка 0.05 сек
 
        
    }

    if (dvchitireVIKL == true) { // Если выкл. 24 В.
        dvchetireBOX.GetComponent.<Animation>().Play("24 ВЫКЛ АЗ");//Анимация
        Text24VIKL.SetActive (false); // Выкл текст про 24
        DVCHITIREVIKLBOX.GetComponent.<Collider>().enabled = false; // Деактивация коллайдера
        podsvetV.SetActive (false); //Гаснет подсвет Вольтметра
        podsvetPZodin.SetActive (false); // Гаснут подсветки ПЗ
        podsvetPZdva.SetActive (false); // Гаснут подсветки ПЗ
        podsvetBoivoi.SetActive (false);//Подсветка трансп. Боевой ВЫКЛ  
        podsvetPZodin.SetActive (false); //Гаснет подсветка ПЗ1
        podsvetPZdva.SetActive (false); //Гаснет подсветка ПЗ2
        //transpBoivoe.GetComponent(Renderer).material.color = Color(1, 1, 1, 1); //Сброс цвета трансп. Боевой
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audio24VIKL: AudioSource = GetComponent.<AudioSource>(); //Для аудио тумблера
        audio24VIKL.Play(); // аудио тумблера
        yield WaitForSeconds (1.0); // Задержка 1 сек
        (GameObject.Find("Terrain").GetComponent("AZGUIITOG") as MonoBehaviour).enabled = true; // Включ скрипт ИТОГА
    }
}