var PRIVOD = false;
var DVVOSEM = false;
var DVCHITIRE = false;
var strelka : GameObject; // Стрелка Вольтметра
var pohod : GameObject; // Подсветка ПОХОД
var Textpr : GameObject; //Текст выкл ПРИВОД
var TextDVVOSEM : GameObject; // Текст 28 В в положен ВЫКЛ.
var TextDVCHETIRE : GameObject; // Текст 24 В в положен ВЫКЛ.
var PRIVODBOX : GameObject; // Коллайдер ПРИВОДА
var DVVOSEMBOX : GameObject; // Коллайдер 28 В
var DVCHITIREBOX : GameObject; // Коллайдер 24 В
var SOLDATPULT : GameObject; //Солдат Пульта
var SOLDATRUKA : GameObject; //Солдат Рука
var SOLDATCAMERAODIN : GameObject; //Солдат камера 
var SOLDATCAMERADVA : GameObject; //Солдат камера 
var CameraOKNO : GameObject; // Внешняя камера
static var SVET = true; 
static var OSVESHENIEposlednee = true;
private var already = false;
public var impact: AudioClip;
static var SVETifDVCHITIRE = false;

function Start () {
    
}

function Wait (time : float) {
    already = true; // После этого время отсчета началось

    var MENUOPERODIN = GameObject.Find("Terrain");
    MENUOPERODIN.GetComponent("MENUOPERPOVOROTODIN").enabled = false; //ДеАктивировать 1ое меню для поворота
    yield WaitForSeconds (time); //Ждать определенное кол-во времени
    pohod.SetActive (true); //Время отсчета закончилось, лампа поход ВКЛ
    PRIVODBOX.GetComponent.<Collider>().enabled =  true; //Активация коллайдера ПРИВОДА
    CameraOKNO.SetActive (false); // Выключить внешнюю камеру
    already = false;

}

function Update () {
    if  (PUSHKA.Audioraket == false) {
        SVET = false;
        PUSHKA.Audioraket = true;

        SOLDATRUKA.SetActive (true); //Активация левой руки
        SOLDATCAMERADVA.SetActive (true); //Активация 3-ей камеры
        SOLDATPULT.SetActive (false);
        SOLDATCAMERAODIN.SetActive (false);
        
        OSVESHENIEposlednee = false; // Для того чтобы нажимать при появлении последней руки
        var MENUOPERADVA = GameObject.Find("Terrain");
        MENUOPERADVA.GetComponent("MENUOPERPOVOROTDVA").enabled = true; //Активировать 2ое меню для поворота

        var PUSHKAscript = GameObject.Find("ракеты 2"); //Найти объект ракеты, для поиска скрипта
        PUSHKAscript.GetComponent("PUSHKA").enabled = false; // Отключить скрипт вращения ракет
        var VIZIRscript = GameObject.Find("ВИЗИР груб 2 (1)"); //Найти объект визира грубого, для поиска скрипта
        VIZIRscript.GetComponent("VIZIR").enabled = false; // Отключить скрипт вращения визира грубог
    }

        if (SVET == false && !already) { //Кол-во секунд для ф-ции ТАЙМ
            Wait(4.1);
        }
       
        if (already == true) {
            Textpr.SetActive (true);
            
        }
        if (already == false || SVET == true) {
            Textpr.SetActive (false);
        }
}

function OnMouseUp (){

    if (PRIVOD == true) {
        SVET = true; //Для того чтоы текст убрать
        already = true; //Для того чтоы текст убрать
        GetComponent.<Animation>().Play("ПРИВОД 2"); // старт анимации выключения тумблера привод
        var audioPrivod: AudioSource = GetComponent.<AudioSource>(); //Для аудио привода тумблера
        audioPrivod.Play();// аудио тумблера ПРИВОД
        PRIVODBOX.GetComponent.<Collider>().enabled =  false;
        DVVOSEMBOX.GetComponent.<Collider>().enabled =  true;
        TextDVVOSEM.SetActive (true); //Текст 28 ВЫКЛ (АКТИВАЦИЯ)
        var POVOROtPNscript = GameObject.Find("ПН2 local"); //Отключаем скрипт вращения пульта
        POVOROtPNscript.GetComponent("POVOROTPNPEREVODBM").enabled = false;
        var POVOROtlevRUCHKIscript = GameObject.Find("левая ручка");
        POVOROtlevRUCHKIscript.GetComponent("POVOROTLEVRUCHKIPEREVODBM").enabled = false;
        var POVOROtpravRUCHKIscript = GameObject.Find("правая ручка");
        POVOROtpravRUCHKIscript.GetComponent("POVOROTLEVRUCHKIPEREVODBM").enabled = false;
    }

    if (DVVOSEM == true) {
        var audioDVVOSEM: AudioSource = GetComponent.<AudioSource>(); //Для аудио 28 тумблера
        audioDVVOSEM.Play();// аудио 28 тумблера 
        GetComponent.<Animation>().Play("28 ВКЛ (2)"); // старт анимации выключения тумблера 28
        strelka = GameObject.Find("Line 2"); // Прикрепить к тумблеру объект стрелку
        strelka.GetComponent.<Animation>().Play("стрелка ВЫКЛ"); // Отклонение стрелки влево
        DVVOSEMBOX.GetComponent.<Collider>().enabled = false; //деактивация коллайдера 28 В
        DVCHITIREBOX.GetComponent.<Collider>().enabled = true;
        TextDVVOSEM.SetActive (false); //Текст 28 ВЫКЛ (ДЕАКТИВАЦИЯ)
        TextDVCHETIRE.SetActive (true); //Текст 24 ВЫКЛ (Активация)

    }
    
    if (DVCHITIRE == true) {
        SVETifDVCHITIRE = true; //если вырубаем 24 В
        var audioDVCHITIRE: AudioSource = GetComponent.<AudioSource>(); //Для аудио 24 тумблера
        audioDVCHITIRE.Play();// аудио 24 тумблера 
        GetComponent.<Animation>().Play("24 ВЫКЛ"); // старт анимации выключения тумблера 24
        DVCHITIREBOX.GetComponent.<Collider>().enabled = false;
        Cursor.lockState = CursorLockMode.None; //освободить курсор
        TextDVCHETIRE.SetActive (false); //Текст 24 ВЫКЛ (ДЕАктивация)
        yield WaitForSeconds (0.5); // Задержка 0.5 сек
        var MENUDVA = GameObject.Find("Terrain"); //Найти меню 2 перевода
        var scriptMENUDVA = MENUDVA.GetComponent("MENUOPERPOVOROTDVA");
        scriptMENUDVA.enabled = false;
        var ITOG = GameObject.Find("Terrain"); //Найти меню итога
        var scriptITOG = ITOG.GetComponent("GUIITOG");
        scriptITOG.enabled = true;
        POVOROT.DOVERNUT = true; // ИЗМЕНИЛ!!!!
        PUSHKA.Audioraket =true; //ИЗМЕНИЛ!!!
        KNOPKI.RUCHKA = false; //СБРОСИЛ
        KNOPKI.Boivoe = false;
        already = false; //Сбросил;
        SVET = true; 
        pohod.SetActive (false); //Лампа поход выкл
        PUSHKA.Audioraket = true;
        
    }
}


