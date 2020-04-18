#pragma strict

var PRPVKL = false; //ВКЛ. ПРП. 1Ж2-3
var RABOTAprp = false; // перекл. РАБОТА 1 ПРП 
var IARKOST = false; // Яркость
var RABOTAprp2 = false; // перекл. в РАБОТА 2 ПРП 
var VIZIR = false; // Визир
var vRABOTA1 = false; // Перекл. в РАБОТА

var TextVKLPRP1 : GameObject; // ВКЛ ПРП. 1/2
var TextVKLPRP2 : GameObject; // ВКЛ ПРП 2/2
var TextVKLKONTROL1 : GameObject; //Текст вкл. Работу в контроль 1 1/2
var TextVKLKONTROL1dva : GameObject; //Текст вкл. Работу в контроль 1 2/2 
var TextPROVERITpodsvet1 : GameObject; //Текст проверить индикацию 1/2
var TextPROVERITpodsvet2 : GameObject; //Текст проверить индикацию 2/2
var TextIarkost1 : GameObject; //Текст установить яркость
var TextIarkost2 : GameObject;
var TextRABOTA2 : GameObject;
var TextRABOTA2dva : GameObject;
var TextPROVERITpodsvet1VIKL : GameObject; //Текст проверить погасшие стрелки 1/2
var TextPROVERITpodsvet2VIKL : GameObject; //Текст проверить погасшие стрелки 2/2
var TextPROVERITvizir : GameObject; // Текст проверить визир
var TextPROVERITvizir2 : GameObject;// Текст проверить визир 2/2
var TextProdoljenieEnterVIZIR : GameObject; // Текст в визире
var Text1RABOTA : GameObject; // Текст из РАБОТЫ 2 в РАБОТА 1/2
var Text1RABOTA2 : GameObject; // Текст из РАБОТЫ 2 в РАБОТА 2/2

var podsvetPRPvkl : GameObject;
var podsvetStrelok : GameObject;
var podsvetCENTRkruga : GameObject;
var podsvetKORPUSAazimuta : GameObject;


var PRPVKLBOX : GameObject; // Бокс от ВКЛ. ПРП. 1Ж2-3
var RABOTABOX : GameObject; // Бокс Работа
var RABOTA2BOX : GameObject; // Бокс в Работа 2
var LEVARUKA : GameObject; // Левая рука
var IARKOSTBOX : GameObject; // Яркость объект
var VIZIRBOX : GameObject;
var CameraODIN : GameObject; //Камера оператора
var CameraPULT : GameObject; //Камеру оператора
var CameraVIZIR : GameObject;//Камера в визире
var RABOTA3BOX : GameObject;
var AZGUIITOG : GameObject; // Объект на котором висит ИТОГ -terrain

static var RABOTAvkluchena = false; //Определяем, что РАБОТА 1 включена
static var RABOTA2vkluchena = false; //Определяем, что РАБОТА 2 включена
static var zashelvVIZIR = false; // Чтобы в Update отключить меню
static var Vixodizvizira = false; //Для выхода из визира

function Start () {

}

function Update () {
    if (Input.GetKey("return") && RABOTAvkluchena == true) { // Если нажали ентер в работе 1
        TextPROVERITpodsvet1.SetActive (false); //Текст проверить загорание false
        TextPROVERITpodsvet2.SetActive (false);
        TextIarkost1.SetActive (true); //Текст установить Яркость тру
        TextIarkost2.SetActive (true);
        IARKOSTBOX.GetComponent.<Collider>().enabled = true; //Вкл. коллайдер яркости
        RABOTAvkluchena = false; // Возвращаем статичную
    }

    if  (Input.GetKey("return") && RABOTA2vkluchena == true) { //Если нажали ентер в работе 1
        TextPROVERITpodsvet1VIKL.SetActive (false); //ВЫКЛ. Текст проверить погасшие стрелки 1/2
        TextPROVERITpodsvet2VIKL.SetActive (false); //ВЫКЛ. Текст проверить погасшие стрелки 2/2
        TextPROVERITvizir.SetActive (true); //ВКЛ. текст проверьте визир 1/2
        TextPROVERITvizir2.SetActive (true);
        VIZIRBOX.GetComponent.<Collider>().enabled = true; //Вкл. коллайдер визира
        RABOTA2vkluchena = false; // Возвращаем статичную
    }

    if (Vixodizvizira == true && Input.GetKey("return")) { //Если выходим из визира при нажатии ENTER
        CameraODIN.SetActive (true); //Включаем камеру с оператора
        CameraPULT.SetActive (true); //Включаем камеру с оператора
        CameraVIZIR.SetActive (false); // ВЫключаем камеру в визире
        TextProdoljenieEnterVIZIR.SetActive (false); // деАктивируем текст для продолжения после окончания анимации совмещения
        Text1RABOTA.SetActive (true); // ВКЛ. текст из РАБОТЫ 2 в РАБОТА 1/2
        Text1RABOTA2.SetActive (true); // ВКЛ. текст из РАБОТЫ 2 в РАБОТА 2/2
        TextPROVERITvizir.SetActive (false); //ВКЛ. текст проверьте визир 1/2
        TextPROVERITvizir2.SetActive (false);
        RABOTA3BOX.GetComponent.<Collider>().enabled = true; // включить коллайдер РАБОТЫ 3
        Vixodizvizira = false;

    }
    if (zashelvVIZIR == true && Input.GetKey("return")) { // Если выходим из проверки сомещения кольца

    }
}

function OnMouseUp (){
    if (PRPVKL == true) {
        RABOTABOX.GetComponent.<Collider>().enabled = true; // Активация коллайдера РАБОТА, ИЗНАЧАЛЬНО ДЕАКТИВИРОВАН!
        GetComponent.<Animation>().Play("ПРП ВКЛ"); // старт анимации вкл ПРП
        TextVKLPRP1.SetActive (false);
        TextVKLPRP2.SetActive (false);
        TextVKLKONTROL1.SetActive (true); // Активация надписи "Текст вкл в КОНТРОЛЬ 1"
        TextVKLKONTROL1dva.SetActive (true);
        podsvetPRPvkl.SetActive (true);
        PRPVKLBOX.GetComponent.<Collider>().enabled =  false; // Деактивация коллайдера
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audioPRP: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPRP.Play();// аудио
        (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = false; //вырубить скрипт пальца
    }

    if (RABOTAprp == true) {
        RABOTABOX.GetComponent.<Collider>().enabled = false; // деАктивация коллайдера РАБОТА
        TextVKLKONTROL1.SetActive (false); // деАктивация надписи "Текст вкл в КОНТРОЛЬ 1"
        TextVKLKONTROL1dva.SetActive (false); // 
        TextPROVERITpodsvet1.SetActive (true); // ВКЛ. текст проверить подсвет
        TextPROVERITpodsvet2.SetActive (true);
        podsvetStrelok.SetActive (true); //Подсветка стрелок ВКЛ.
        podsvetCENTRkruga.SetActive (true); //Подсветка центр круга
        podsvetKORPUSAazimuta.SetActive (true);//Подсветка корпуса азимута
        RABOTAvkluchena = true; // Работа включена
        GetComponent.<Animation>().Play("РАБОТА 1");
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ РОД РАБОТЫ");
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации

        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы 
        var audioRABOTA1: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioRABOTA1.Play();// аудио
        
    }

    if (IARKOST == true) {
        TextIarkost1.SetActive (false); //Текст установить Яркость выкл
        TextIarkost2.SetActive (false);
        TextRABOTA2.SetActive (true); //Текст вкл. РАБОТА во 2
        TextRABOTA2dva.SetActive (true);//Текст вкл. РАБОТА во 2 2/2
        IARKOSTBOX.GetComponent.<Collider>().enabled = false; //Выкл. коллайдер яркости
        RABOTA2BOX.GetComponent.<Collider>().enabled = true; //Вкл. коллайдер в РАБОТА 2
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ РОД РАБОТЫ");
        IARKOSTBOX.GetComponent.<Animation>().Play("Яркость"); //Анимация ручки - увеличение яркости
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        //УВЕЛИЧИТЬ ЯРКОСТЬ
        podsvetStrelok.GetComponent.<Light>().intensity = 3.3; //Меняем интенсивность света 
        podsvetCENTRkruga.GetComponent.<Light>().intensity = 3.3; //Меняем интесивность
        podsvetKORPUSAazimuta.GetComponent.<Light>().intensity = 3.0;//Подсветка корпуса азимута
        // аудио
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы 

    }

    if (RABOTAprp2 == true) {
        RABOTA2BOX.GetComponent.<Collider>().enabled = false; //Выкл. коллайдер в РАБОТА 2
        RABOTABOX.GetComponent.<Animation>().Play("РАБОТА 2");
        podsvetStrelok.GetComponent.<Light>().intensity = 0; //Меняем интенсивность света - гасим подсветки
        podsvetCENTRkruga.GetComponent.<Light>().intensity = 0; //Меняем интесивность
        podsvetKORPUSAazimuta.SetActive (false);//Подсветка корпуса азимута
        TextRABOTA2.SetActive (false); //Текст выкл. РАБОТА во 2
        TextRABOTA2dva.SetActive (false);//Текст выкл. РАБОТА во 2 2/2
        TextPROVERITpodsvet1VIKL.SetActive (true); //ВКЛ. Текст проверить погасшие стрелки 1/2
        TextPROVERITpodsvet2VIKL.SetActive (true); //ВКЛ. Текст проверить погасшие стрелки 2/2
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ РОД РАБОТЫ");
        RABOTA2vkluchena = true; // Работа 2 включена
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        var audioRABOTA2: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioRABOTA2.Play();// аудио
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы 

    }

    if (VIZIR == true) { //Если нажали на визир
        VIZIRBOX.GetComponent.<Collider>().enabled = false; //Выкл. коллайдер визира
        //ПОЯВЛЕНИЕ КАМЕРЫ В ВИЗИРЕ (УБЕЖДАЕМСЯ О СОВМЕЩЕНИИ КОЛЬЦА)
        CameraODIN.SetActive (false); //Выключаем камеру с оператора
        CameraPULT.SetActive (false); //Выключаем камеру с оператора
        CameraVIZIR.SetActive (true); // Включаем камеру в визире
        TextPROVERITvizir.SetActive (false); //ВЫКЛ. текст проверьте визир 1/2
        TextPROVERITvizir2.SetActive (false); //ВЫКЛ. текст проверьте визир 2/2
        zashelvVIZIR = true; // Чтобы в Update отключить меню
        //

        yield WaitForSeconds (1.0); //Задержка 2.0 сек (Анимация совмещения после раскрутки ГСН)
        TextProdoljenieEnterVIZIR.SetActive (true); // Активируем текст для продолжения после окончания анимации совмещения
        Vixodizvizira = true;
        
    }

    if (vRABOTA1 == true) {
        RABOTA3BOX.GetComponent.<Collider>().enabled = false; // выключить коллайдер РАБОТЫ 3
        Text1RABOTA.SetActive (false); // ВЫКЛ. текст из РАБОТЫ 2 в РАБОТА 1/2
        Text1RABOTA2.SetActive (false); // ВЫКЛ. текст из РАБОТЫ 2 в РАБОТА 2/2
        LEVARUKA.GetComponent.<Animation>().Play("Ручка УСИЛЕНИЕ");
        RABOTABOX.GetComponent.<Animation>().Play("из РАБОТЫ 2 в РАБОТА");
        
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = false; // вырубить скрипт пальца
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        var audioRABOTA3: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioRABOTA3.Play();// аудио
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы 
        (GameObject.Find("Terrain").GetComponent("AZGUIITOG") as MonoBehaviour).enabled = true; //Включить итог

    }
}