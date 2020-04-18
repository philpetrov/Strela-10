//Меню
// Прописываем переменные для галочек
var azcMASSA = false; // Масса тумблер
var SCEPLENIE = false; //Педаль сцепления
var TOPLIVO = false; //Педаль топлива
var STARTER = false; //Стартер
var KONTROLODIN = false; // Контроль первый ВОЛЬТМЕТРА
var batarei = false; // батареи тумблер
var KONTROL = false; // Контроль тумблер
var NEITRAL = false; // Ручка нейтраль
var strelka : GameObject; // Стрелка Вольтметра
var DIM : GameObject; // ДЫМ
var TextMASSA : GameObject; // Текст включить МАССУ Машины
var TextSCEPLENIE : GameObject; // Текст включить 
var TextTOPLIVO : GameObject; // Текст вкл батареи
var TextStarter : GameObject;
var TextKONTROLODIN : GameObject;
var TextKONTROL : GameObject; // Текст проконтролировать
var TextBatarei : GameObject;
var azcMASSABOX : GameObject; // Для деактивации коллайдера МАССЫ
var SCEPLENIEBOX : GameObject;  // Для деактивации коллайдера генератора
var TOPLIVOBOX : GameObject;
var STARTERBOX : GameObject;
var KONTROLODINBOX : GameObject;
var BatareiBOX : GameObject; // Для деактивации коллайдера ПРИВОД
var KONTROLBOX : GameObject; // Для деактивации коллайдера Боевое
var pravaruka : GameObject; // Правая рука
var RUCHKAsceplenie : GameObject; // Ручка сцепления
var TextRUCHKAsceplenie : GameObject; // Текст проверить сцепление
var CameraOKNO : GameObject; // Камера внешняя
private var already = false;

function Wait (time : float) {
    yield WaitForSeconds (time);
    DIM.SetActive (false); // деактивация ДЫМА
}

    function Update () {
         // После этого время отсчета началось
        if (already == true) { //Кол-во секунд для ф-ции ТАЙМ
            Wait(10.0);
  
        }
    }


function Start () 
{
  var TextMASSA = GameObject.Find("Текст МАССА ВКЛ"); // Активация надписи "Текст массу" типа assign!
    azcMASSABOX = GameObject.Find("АЗС МАССА");
    SCEPLENIEBOX = GameObject.Find("Педаль сцепления"); // assign коллайдер для объекта генератора тумблера
    TOPLIVOBOX = GameObject.Find("педаль топлива");
    STARTERBOX = GameObject.Find("стартер кнопка");
    KONTROLODINBOX = GameObject.Find("Контроль кнопка (1)");
    BatareiBOX = GameObject.Find("Тумблер БАТАРЕЙ");
    KONTROLBOX = GameObject.Find("Контроль кнопка");

    ///

}
// Действия при нажатии
function OnMouseUp (){
    if (NEITRAL == true) { //Если нажали на ручку коробки передач

        GetComponent.<Animation>().Play("РУЧКА НЕЙТРАЛЬ"); // старт анимации РУЧКИ НЕЙТРАЛЬ
        pravaruka.GetComponent.<Animation>().Play("РУКА НЕЙТРАЛЬ");
        RUCHKAsceplenie.GetComponent.<Collider>().enabled = false; // деАктивация коллайдера ручки сцепления
        azcMASSABOX.GetComponent.<Collider>().enabled = true; // Активация коллайдера массы
        TextMASSA.SetActive (true); //активация текста массы
        TextRUCHKAsceplenie.SetActive (false); // Деактивация ручки сцепления
        var AZCAMERAPOVOROTA = GameObject.Find("Camera механик"); // Найти камеру
        var AZCAMERAPOVOROTAscript = AZCAMERAPOVOROTA.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        AZCAMERAPOVOROTAscript.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.2); // Задержка 0.2 сек
        var audioRUCHKAsceplenie: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioRUCHKAsceplenie.Play();// аудио
        yield WaitForSeconds (0.35); // Задержка 0.35 сек
        AZCAMERAPOVOROTAscript.enabled = true; // включить поворот камеры
    }

    if (azcMASSA == true) {
        SCEPLENIEBOX.GetComponent.<Collider>().enabled =  true; // Активация коллайдера  педали сцепления, ИЗНАЧАЛЬНО ДЕАКТИВИРОВАН!
        GetComponent.<Animation>().Play("АЗС МАССА"); // старт анимации включения АЗС МАССЫ
        pravaruka.GetComponent.<Animation>().Play("АЗС МАССА РУКА");
        TextMASSA.SetActive (false); //Деактивация текста массы
        TextSCEPLENIE.SetActive (true); // Активация надписи "Cцепление"
        azcMASSABOX.GetComponent.<Collider>().enabled =  false; // Деактивация коллайдера массы
        var AZCAMERAPOVOROTA2 = GameObject.Find("Camera механик"); // Найти камеру
        var AZCAMERAPOVOROTA2script = AZCAMERAPOVOROTA2.GetComponent("SimpleMouseRotator"); //Найти скрипт поворота камеры 
        AZCAMERAPOVOROTA2script.enabled = false; // Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.6); // Задержка 0.3 сек
        var audioAZS: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioAZS.Play();// аудио
        yield WaitForSeconds (0.1); // Задержка 0.2 сек
        AZCAMERAPOVOROTA2script.enabled = true; // включить поворот камеры
    }
    if (SCEPLENIE == true) {
        
        GetComponent.<Animation>().Play("Педаль сцепления"); // старт анимации нажатия на педаль
        noga = GameObject.Find("Bip001 L нога"); // Прикрепить к тумблеру объект ногу
        noga.GetComponent.<Animation>().Play("Педаль сцепления нога"); // Отклонение стрелки вправо
        TextSCEPLENIE.SetActive (false);  // Деактивация надписи "ВКЛ генератор"
        TextTOPLIVO.SetActive (true); // Текст батареи вкл
        SCEPLENIEBOX.GetComponent.<Collider>().enabled =  false; // Деактивировать коллайдер генератора
        TOPLIVOBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер ПРИВОД
        yield WaitForSeconds (0.2); // Задержка 0.3 сек
        var audioSceplenie: AudioSource = GetComponent.<AudioSource>(); //Для аудио сцепления
        audioSceplenie.Play();// аудио   
        
    }
   
    if (TOPLIVO == true) {
        GetComponent.<Animation>().Play("Педаль топлива");
        nogaTOPLIVO = GameObject.Find("Bip001R"); // Прикрепить к тумблеру объект ногу
        nogaTOPLIVO.GetComponent.<Animation>().Play("Педаль топлива нога"); // Отклонение стрелки вправо
        TOPLIVOBOX.GetComponent.<Collider>().enabled = false; 
        STARTERBOX.GetComponent.<Collider>().enabled = true; 
        TextTOPLIVO.SetActive (false);
        TextStarter.SetActive (true);
        yield WaitForSeconds (1); // Задержка 1 сек
        var audioToplivo: AudioSource = GetComponent.<AudioSource>(); //Для аудио тумбл
        audioToplivo.Play();// аудио 
        var MEXPALEC = GameObject.Find("Правый палец"); // Найти нажимающий палец Механика
        var MEXPALECscript = MEXPALEC.GetComponent("ПАЛЕЦ"); // Найти скрипт пальца
        MEXPALECscript.enabled = true; // врубить скрипт пальца
    }

    if (STARTER == true) {
        CameraOKNO.SetActive (true); // Включить внешнюю камеру
        already = true; //для дыма
        GetComponent.<Animation>().Play("Стартер");
        AMPERMETRODIN = GameObject.Find("Амперметр1"); // Прикрепить к тумблеру объект ногу
        AMPERMETRODIN.GetComponent.<Animation>().Play("Амперметр");
        MasloGP = GameObject.Find("Масло стрелка");
        MasloGP.GetComponent.<Animation>().Play("Масло");
        Maslo = GameObject.Find("Масло стрелка обычное");
        Maslo.GetComponent.<Animation>().Play("Масло обычное");
        Vozdux =  GameObject.Find("Воздух стрелка");
        Vozdux.GetComponent.<Animation>().Play("Воздух");
        PedalVIKL = GameObject.Find("педаль топлива");
        PedalVIKL.GetComponent.<Animation>().Play("Педаль топлива ВЫКЛ");
        nogaTOPLIVOVIKL = GameObject.Find("Bip001R"); // Прикрепить к тумблеру объект ногу
        nogaTOPLIVOVIKL.GetComponent.<Animation>().Play("Педаль топлива нога ВЫКЛ"); // Отклонение стрелки вправо
        Temperatura = GameObject.Find("Температура стрелка");
        Temperatura.GetComponent.<Animation>().Play("Температура");
        STARTERBOX.GetComponent.<Collider>().enabled = false;
        KONTROLODINBOX.GetComponent.<Collider>().enabled = true;
        TextStarter.SetActive (false);
        TextKONTROLODIN.SetActive (true);
        noga = GameObject.Find("Bip001 L нога"); // ДОБАВИЛ
        noga.GetComponent.<Animation>().Play("Педаль сцепления нога ВЫКЛ"); // ДОБАВИЛ
        pedal = GameObject.Find("Педаль сцепления");// ДОБАВИЛ
        pedal.GetComponent.<Animation>().Play("Педаль сцепления ВЫКЛ"); // ДОБАВИЛ
        var audioStarter: AudioSource = GetComponent.<AudioSource>(); //Для аудио тумбл
        audioStarter.Play();// аудио 
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        MESTOMEXANIKA = GameObject.Find("Место механика"); // Найти место мех
        MESTOMEXANIKA.GetComponent.<AudioSource>().enabled = true; //звук
        yield WaitForSeconds (0.6); 
        DIM.SetActive (true); // активация ДЫМА
        yield WaitForSeconds (10.0); // 10 сек
        CameraOKNO.SetActive (false); // Выключить внешнюю камеру
    }

    if (KONTROLODIN == true) {
        GetComponent.<Animation>().Play("Контроль 1");
        VVOLTMETR = GameObject.Find("Амперметр1");
        VVOLTMETR.GetComponent.<Animation>().Play("Амперметр в вольтметр");
        KONTROLODINBOX.GetComponent.<Collider>().enabled = false;
        BatareiBOX.GetComponent.<Collider>().enabled = true;
        TextKONTROLODIN.SetActive (false);
        TextBatarei.SetActive (true);
        var audioKONTROLODIN: AudioSource = GetComponent.<AudioSource>(); //Для аудио тумбл
        audioKONTROLODIN.Play();// аудио 
    }

    if (batarei == true) {
        GetComponent.<Animation>().Play("Батареи ВКЛ"); // старт анимации батареи
        TextKONTROL.SetActive (true);
        TextBatarei.SetActive (false);
        BatareiBOX.GetComponent.<Collider>().enabled =  false; // Деактивировать коллайдер батаери тумблера
        KONTROLBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер контроля
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        var audioBatarei: AudioSource = GetComponent.<AudioSource>(); //Для аудио батареи
        audioBatarei.Play();// аудио батарем
    }


    if (KONTROL == true) {
        GetComponent.<Animation>().Play("КОНТРОЛЬ"); // старт анимации Боевое
        strelka = GameObject.Find("Стрелка В"); // Прикрепить к тумблеру объект стрелку
        strelka.GetComponent.<Animation>().Play("Стрелка"); // Отклонение стрелки вправо
        TextKONTROL.SetActive (false); // Деативация надписи "нажать на Боевое"
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        var audioKONTROL: AudioSource = GetComponent.<AudioSource>(); //Для аудио БОЕВОЕ
        audioKONTROL.Play();// аудио БОЕВОЕ
        var GUIMEX = GameObject.Find("Место механика"); // Найти место
        var scriptGUIMEX = GUIMEX.GetComponent("GUI механика"); //найти скрипт пальца
        scriptGUIMEX.enabled = true;
        var MENU = GameObject.Find("Место механика");
        var scriptMENU = MENU.GetComponent("MENUMEX"); //найти скрипт меню
        scriptMENU.enabled = false;
        var CENTRscript = GameObject.Find("SOLDAT");
        CENTRscript.GetComponent("Мыш центр 2").enabled = false;
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        Cursor.lockState = CursorLockMode.None; // освободить курсор
    }

}
