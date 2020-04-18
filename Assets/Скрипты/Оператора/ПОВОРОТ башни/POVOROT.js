//Скрипт вращения пусковой установки до начала перехода в ПОХОДНОЕ
static var DOVERNUT = true; //"Довернуть" для обращения в другой скрипт
var anglePOVOROT = 0; //Начальный угол
var TextIspolzKnopku : GameObject; // Используйте кнопки ТЕКСТ
var TextRAZVOROT : GameObject; // Развернуть вращ часть ТЕКСТ1
var TextRAZVOROTDVA : GameObject; //Развернуть вращ часть ТЕКСТ2
var TextPEREVOD : GameObject; // Текст Тумблер в походное
var TextRUCHKA : GameObject; // Текст повернуть ручку стопора
var TextDovernut : GameObject; // Текст довернуть;
var TextUgol : GameObject; // Текст придать люльке угол
var Boevoe2Box : GameObject; // коллайдер Боевое
var RuchkaSTBOX : GameObject; // Ручка стопора КОЛЛАЙДЕР
var speedrotLEFT : int = 60; //Скорость вращения
var speedrotRIGHT : int = 60; // Ск вправо
public var impact: AudioClip;



function Start () {

    //Здесь прописываем, чтобы при появлении подсказки "GUIPODSKAZKA", что машина в боевом положении, отключались все
    //вращения, нажатия и пр., а в подсказке при нажатии "ПРОДОЛЖИТЬ" включаьлись обратно.
    var MENUOPERODIN = GameObject.Find("Terrain");
    MENUOPERODIN.GetComponent("GUIPODSKAZKA").enabled = true; //Активировать подсказку что БМ в боевом
    var object = GameObject.Find("Camera (2)");
    var scriptMouse = object.GetComponent("SimpleMouseRotator");
    var PALEC = GameObject.Find("Bip001 R Finger12 (2)"); // Найти палец
    var scriptPALEC = PALEC.GetComponent("ПАЛЕЦ"); //найти скрипт пальца
    var CENTR = GameObject.Find("Camera (2)");
    var CENTRscript = CENTR.GetComponent("Мыш центр 2");
    var POVOROT = GameObject.Find("ПОВОРОТ");
    var POVOROTscript = POVOROT.GetComponent("POVOROT");
    var VRASHENIEstrelki = GameObject.Find("Стрелка local"); // Найти стрелку азимута
    var VRASHENIEstrelkiSCRIPT = VRASHENIEstrelki.GetComponent("Вращение стрелки азимута"); //Скрипт стрелки
   
    var VRASHENIEpushki = GameObject.Find("ракеты 2");
    var VRASHENIEpushkiSCRIPT = VRASHENIEpushki.GetComponent("PUSHKA"); //Скрипт пушки

    
    scriptMouse.enabled = false; //застопорить мышь
    scriptPALEC.enabled = false; //выключить нажатие пальца
    CENTRscript.enabled = false;
    POVOROTscript.enabled = false;
    VRASHENIEstrelkiSCRIPT.enabled = false;//Выключить вращение стрелки на момент подсказки.
    VRASHENIEpushkiSCRIPT.enabled = false;
    Cursor.lockState = CursorLockMode.None; //освободить курсор
}

function Update() {
    
    // Если нажата любая из стрелок клавиатуры, то активировать надписи следующего действия (РАЗВОРОТА в ноль)
    if (Input.GetKey("left") || Input.GetKey("right") || Input.GetKey("up") || Input.GetKey("down")) {
        TextIspolzKnopku.SetActive (false);
        TextRAZVOROT.SetActive (true);
        TextRAZVOROTDVA.SetActive (true);
    }

    if (Input.GetAxis("Horizontal") > 0) {
  
    }
    //Условие вращения вправо
    if (Input.GetKey("right")) {
        anglePOVOROT += Input.GetAxis("Horizontal") * Time.deltaTime * speedrotRIGHT;
        anglePOVOROT = Mathf.Clamp(anglePOVOROT, -3000, 3000);
        transform.localRotation = Quaternion.AngleAxis(anglePOVOROT, Vector3.up);
        var audioPRIVODright : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPRIVODright.PlayOneShot(impact, 1.0F);
        
    }
    //Условия вращения влево
    if (Input.GetKey("left"))
    {
        anglePOVOROT += Input.GetAxis("Horizontal") * Time.deltaTime * speedrotLEFT;
        anglePOVOROT = Mathf.Clamp(anglePOVOROT, -3000, 3000);
        transform.localRotation = Quaternion.AngleAxis(anglePOVOROT, Vector3.up);
        var audioPRIVODleft : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPRIVODleft.PlayOneShot(impact, 1.0F);
    }
    //Если нажата ручка стопора
    if (KNOPKI.RUCHKA == true) {
        GetComponent("KNOPKI").enabled = false;
        GameObject.Find("тумблер БОЕВОЕ 2").GetComponent(KNOPKI).enabled = false; //Отключить скрипт с тумблера БОЕВОЕ
    }


    if (KNOPKI.RUCHKA == false && anglePOVOROT > 0) {
        speedrotRIGHT = 60;
        speedrotLEFT = 30;
    }
    if (KNOPKI.RUCHKA == false && anglePOVOROT < 0) {
        speedrotRIGHT = 30;
        speedrotLEFT = 60;
    }
    if (KNOPKI.RUCHKA == false && anglePOVOROT == 0) {
        speedrotRIGHT = 60;
        speedrotLEFT = 60;
    }
    //Если подвели к 52-58 ДУ или 10-2 ДУ, то 1. деактивировать надписи поворота к 0,
    //2. активировать надписи "НАЖАТЬ на РУЧКУ СТОПОРА"
    //
    //3. активировать скрипт медленного поворота ??
    
    if (transform.localRotation.y > 0.1 && transform.localRotation.y < 0.3 || transform.localRotation.y < -0.1 && transform.localRotation.y > -0.3)
    {
        TextRAZVOROT.SetActive (false); // Деактивация текста развернуть к нулю 1
        TextRAZVOROTDVA.SetActive (false); // Деактивация текста развернуть к нулю 2
        TextPEREVOD.SetActive (true); // Активация текста нажмите на ручку стопора
        //GetComponent("MEDLENPOVOROT").enabled = true; //Включаем скрипт медленного вращения
    }
    
    if (TextPEREVOD.activeSelf) // ЕСЛИ надпись РУЧКИ активна, до деактивировать надписи разворота
    {
        TextRAZVOROT.SetActive (false); // Деактивация текста развернуть к нулю 1
        TextRAZVOROTDVA.SetActive (false); // Деактивация текста развернуть к нулю 2
        Boevoe2Box.GetComponent.<Collider>().enabled =  true; //Активация коллайдера тумблера ПЕРЕВОД
    }
    if (KNOPKI.Boivoe == true) {
        Boevoe2Box.GetComponent.<Collider>().enabled = false; //деАктивировать коллайдер тумблера ПЕРЕВОД
        TextPEREVOD.SetActive (false); //Текст перевод в поход выкл
        TextRUCHKA.SetActive (true); //текст ручка стопора активизировать
        RuchkaSTBOX.GetComponent.<Collider>().enabled = true; //Коллайдер ручки стопора активизировать

    }
    if (TextRUCHKA.activeSelf) // Если текст ручки активизирован
    {
        TextRAZVOROT.SetActive (false); // Деактивация текста развернуть к нулю 1
        TextRAZVOROTDVA.SetActive (false); // Деактивация текста развернуть к нулю 2
    }

    if (KNOPKI.RUCHKA == true){ //Если поворачиваем ручку стопора
        TextRUCHKA.SetActive (false);
        RuchkaSTBOX.GetComponent.<Collider>().enabled = false;
    }


    if (KNOPKI.RUCHKA == true && anglePOVOROT > 0){ //Если поворачиваем ручку стопора и угол больше нуля
        speedrotLEFT = 1; //Замедленная скорость вращения влево
        speedrotRIGHT = 20;
        TextDovernut.SetActive (true);

    }
  
    if (KNOPKI.RUCHKA == true && anglePOVOROT < 0){ //Если поворачиваем ручку стопора и угол меньше нуля
        speedrotLEFT = 20; //Скорость вращения влево
        speedrotRIGHT = 1; //Скорость вращения вправо
        TextDovernut.SetActive (true);
    }

    //ЧТО ТО НУЖНО МЕНЯТЬ!!!
    if (KNOPKI.RUCHKA == true && anglePOVOROT == 0 || KNOPKI.RUCHKA == true && anglePOVOROT == 360 || 
        KNOPKI.RUCHKA == true && anglePOVOROT == -360 || KNOPKI.RUCHKA == true && anglePOVOROT == 720 ||
        KNOPKI.RUCHKA == true && anglePOVOROT == -720 || KNOPKI.RUCHKA == true && anglePOVOROT == 1080 ||
        KNOPKI.RUCHKA == true && anglePOVOROT == -1080 || KNOPKI.RUCHKA == true && anglePOVOROT == 1440 ||
        KNOPKI.RUCHKA == true && anglePOVOROT == -1440 || KNOPKI.RUCHKA == true && anglePOVOROT == 1800 ||
        KNOPKI.RUCHKA == true && anglePOVOROT == -1800 || KNOPKI.RUCHKA == true && anglePOVOROT == 2160 ||
        KNOPKI.RUCHKA == true && anglePOVOROT == -2160 || KNOPKI.RUCHKA == true && anglePOVOROT == 2520 ||
        KNOPKI.RUCHKA == true && anglePOVOROT == -2520 || KNOPKI.RUCHKA == true && anglePOVOROT == 2880 ||
        KNOPKI.RUCHKA == true && anglePOVOROT == -2880) { // Если нажал в ПОХОДНОЕ и угол 0
        
        speedrotLEFT = 0;
        speedrotRIGHT = 0;
        anglePOVOROT = Mathf.Clamp(anglePOVOROT, -3000, 3000); //Угол вращения 0
        transform.localRotation = Quaternion.AngleAxis(anglePOVOROT, Vector3.zero); //Застопорить в нулевом положении Вектор3
        TextDovernut.SetActive (false);
        TextUgol.SetActive (true);
        DOVERNUT = false;
        
    }

}
    
    //GetComponent("KNOPKI").enabled = false; // Деактивация другого скрипта

