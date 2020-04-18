

//Скрипт вращения пусковой установки до начала перехода в ПОХОДНОЕ
var anglePOVOROT = 0; //Начальный угол
var TextIspolzKnopku : GameObject; // Используйте кнопки ТЕКСТ
var TextVIZIR : GameObject; // Текст проверить 3-30 в визире
var VIZIRBOXA : GameObject;
var speedrotLEFT : int = 60; //Скорость вращения
var speedrotRIGHT : int = 60; // Ск вправо

var vertolet : GameObject; //Вертолет номер 1
var vertolet2 : GameObject; //Вертолет номер 2
var vertolet1FON2 : GameObject; //Вертолет номер 1 (ФОН 2)
var vertolet2FON2 : GameObject; //Вертолет номер 2 (ФОН 2)
var vertolet1FON3 : GameObject; //Вертолет номер 1 (ФОН 2)
var vertolet2FON3 : GameObject; //Вертолет номер 2 (ФОН 2)
var KOLCO : GameObject;

public var impact: AudioClip;

static var POVOROTvOblastiFON1vert1 = false; // Для появления вертолета 1 при определенном угле (ФОН 1)
static var POVOROTvOblastiFON1vert2 = false; // Для появления вертолета 2 при определенном угле (ФОН 1)
static var POVOROTvOblastiFON2vert1 = false; // Для появления вертолета 1 при определенном угле (ФОН 2)
static var POVOROTvOblastiFON2vert2 = false; // Для появления вертолета 2 при определенном угле (ФОН 2)
static var POVOROTvOblastiFON3vert1 = false; // Для появления вертолета 1 при определенном угле (ФОН 3)
static var POVOROTvOblastiFON3vert2 = false; // Для появления вертолета 2 при определенном угле (ФОН 3)
static var SignalOdin = false;
static var SignalDva = false;
static var SignalTri = false;


function Start () {

}

function Update() {
    
    // Если нажата любая из стрелок клавиатуры, то активировать надписи следующего действия 
    if (Input.GetKey("left") || Input.GetKey("right") || Input.GetKey("up") || Input.GetKey("down")) {
        TextIspolzKnopku.SetActive (false); //Деактивировать надпись использ. стрелки
        TextVIZIR.SetActive (true); //Активировать надпись смотреть в визир
        
    }

    if (TextVIZIR.activeSelf) { //Если активна надпись нажать на визир
        VIZIRBOXA.GetComponent.<Collider>().enabled = true;
    }

        if (anglePOVOROT > 0) {
            speedrotRIGHT = 60;
            speedrotLEFT = 30;
        }
        if (anglePOVOROT < 0) {
            speedrotRIGHT = 30;
            speedrotLEFT = 60;
        }
        if (anglePOVOROT == 0) {
            speedrotRIGHT = 60;
            speedrotLEFT = 60;
        }
    
    //Условие вращения вправо
    if (Input.GetKey("right")) {
        anglePOVOROT += Input.GetAxis("Horizontal") * Time.deltaTime * speedrotRIGHT;
        anglePOVOROT = Mathf.Clamp(anglePOVOROT, -3000, 3000);
        transform.rotation = Quaternion.AngleAxis(anglePOVOROT, Vector3.up);
        var audioPRIVODright : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPRIVODright.PlayOneShot(impact, 1.0F);

    }
    //Условия вращения влево
    if (Input.GetKey("left"))
    {
        anglePOVOROT += Input.GetAxis("Horizontal") * Time.deltaTime * speedrotLEFT;
        anglePOVOROT = Mathf.Clamp(anglePOVOROT, -3000, 3000);
        transform.rotation = Quaternion.AngleAxis(anglePOVOROT, Vector3.up);
        var audioPRIVODleft : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPRIVODleft.PlayOneShot(impact, 1.0F);


    }


    //Если подвели к 52-58 ДУ или 10-2 ДУ, то 1. деактивировать надписи поворота к 0,
    //2. активировать надписи "НАЖАТЬ на РУЧКУ СТОПОРА"
    //
    //3. активировать скрипт медленного поворота ??
    
    //ФОН 1 - Для появления 1 - ого вертолета, область (+20 и -18 градусов)
    if (AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -20, 18) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 342, 380) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 702, 740) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1062, 1100) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1422, 1460) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1782, 1820) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2142, 2180) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2502, 2540) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2862, 2900) ||
        
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -380, -342) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -740, -702) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1100, -1062) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1460, -1422) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1820, -1782) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2180, -2142) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2540, -2502) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2900, -2862) ) { 
       
        POVOROTvOblastiFON1vert1 = true; //Статичная (пушка в области для появления 1-ого вертолета)
        POVOROTvOblastiFON1vert2 = false;
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZKOLCOZAKOLCOM") as MonoBehaviour).enabled = false; // деАктивировать скрипт следования за прицелом
        
    }

    // ФОН 1 - Для появления 2 - ого вертолета, область (между +200  и +160 градусов - [180+-20] )
    if (AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 160, 200) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 520, 560) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 880, 920) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1240, 1280) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1600, 1640) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1960, 2000) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2320, 2360) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2680, 2720) ||

        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -200, -160) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -560, -520) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -920, -880) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1280, -1240) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1640, -1600) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2000, -1960) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2360, -2320) ||
        AZKNOPKI.zashelvVIZIRvertolet1 == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2720, -2680) ) {

        POVOROTvOblastiFON1vert2 = true; //Статичная (пушка в области для появления 2-ого вертолета)
        POVOROTvOblastiFON1vert1 = false; //Статичная (пушка в области для НЕ появления 1-ого вертолета)
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZKOLCOZAKOLCOM") as MonoBehaviour).enabled = false; // деАктивировать скрипт следования за прицелом
        
    }
    //ФОН 2 - Для появления 1 - ого вертолета, область (+20 и -18 градусов)
    if (AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -20, 18) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 342, 380) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 702, 740) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1062, 1100) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1422, 1460) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1782, 1820) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2142, 2180) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2502, 2540) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2862, 2900) ||
        
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -380, -342) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -740, -702) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1100, -1062) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1460, -1422) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1820, -1782) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2180, -2142) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2540, -2502) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2900, -2862) ) { 
        
        
        POVOROTvOblastiFON2vert1 = true; //Статичная (пушка в области для появления 1-ого вертолета)
        POVOROTvOblastiFON2vert2 = false;
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZKOLCOZAKOLCOM") as MonoBehaviour).enabled = false; // деАктивировать скрипт следования за прицелом
    }

    //ФОН 2 - Для появления 2 - ого вертолета, область (между +200  и +160 градусов - [180+-20] )
    if (AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 160, 200) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 520, 560) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 880, 920) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1240, 1280) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1600, 1640) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1960, 2000) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2320, 2360) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2680, 2720) ||

        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -200, -160) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -560, -520) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -920, -880) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1280, -1240) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1640, -1600) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2000, -1960) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2360, -2320) ||
        AZKNOPKI.zashelvVIZIRvertolet2FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2720, -2680) ) {
        
        
        POVOROTvOblastiFON2vert2 = true; //Статичная (пушка в области для появления 2-ого вертолета)
        POVOROTvOblastiFON2vert1 = false;
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZKOLCOZAKOLCOM") as MonoBehaviour).enabled = false; // деАктивировать скрипт следования за прицелом
    }
    //ФОН 3 - Для появления 1 - ого вертолета, область (+20 и -18 градусов)
    if (AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -20, 18) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 342, 380) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 702, 740) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1062, 1100) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1422, 1460) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1782, 1820) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2142, 2180) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2502, 2540) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2862, 2900) ||
        
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -380, -342) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -740, -702) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1100, -1062) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1460, -1422) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1820, -1782) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2180, -2142) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2540, -2502) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2900, -2862) ) { 
        
        POVOROTvOblastiFON3vert1 = true; //Статичная (пушка в области для появления 1-ого вертолета)
        POVOROTvOblastiFON3vert2 = false; //Статичная (пушка в области для НЕ появления 2-ого вертолета)
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZKOLCOZAKOLCOM") as MonoBehaviour).enabled = false; // деАктивировать скрипт следования за прицелом
    }

    //ФОН 3 - Для появления 2 - ого вертолета, область (между +200  и +160 градусов - [180+-20] )
    if (AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 160, 200) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 520, 560) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 880, 920) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1240, 1280) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1600, 1640) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 1960, 2000) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2320, 2360) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , 2680, 2720) ||

        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -200, -160) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -560, -520) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -920, -880) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1280, -1240) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -1640, -1600) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2000, -1960) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2360, -2320) ||
        AZKNOPKI.zashelvVIZIRvertolet3FON == true && anglePOVOROT == Mathf.Clamp ( anglePOVOROT , -2720, -2680) ) {

        POVOROTvOblastiFON3vert2 = true; //Статичная (пушка в области для появления 2-ого вертолета)
        POVOROTvOblastiFON3vert1 = false;
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZKOLCOZAKOLCOM") as MonoBehaviour).enabled = false; // деАктивировать скрипт следования за прицелом
    }
    //ФОН 1 - Вертолет + анимация кольца
    if (AZPUSHKA.PushkavOblastiFON1 == true && POVOROTvOblastiFON1vert1 == true) {//(ФОН 1) Если определенный угол из пушки и определенный угол из поворота == тру, то {
        vertolet.SetActive (true); //Активировать вертолет номер 1
        KOLCO.GetComponent.<Animation>().enabled = false; // Выключить анимацию
        var KOLCO = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZOXVAT") as MonoBehaviour).enabled = true; // включить движение кольца, до этого обычная анимация
        AZKNOPKI.zashelvVIZIRvertolet1 = false; // Чтобы не появлялся второй вертолет
        POVOROTvOblastiFON1vert1 = false; //Чтобы убрать вертолет
        SignalOdin = true;
    }

    //ФОН 1 - Вертолет + анимация кольца
    if (AZPUSHKA.PushkavOblastiFON1 == true && POVOROTvOblastiFON1vert2 == true) {//(ФОН 1) Если определенный угол из пушки и определенный угол из поворота == тру, то {
        vertolet2.SetActive (true); //Активировать вертолет номер 2
        var KOLCO2 = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо
        KOLCO2.GetComponent.<Animation>().enabled = false; // Выключить анимацию
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZOXVAT2") as MonoBehaviour).enabled = true; // включить движение кольца, до этого обычная анимация
        AZKNOPKI.zashelvVIZIRvertolet1 = false; // Чтобы не появлялся второй вертолет
        POVOROTvOblastiFON1vert2 = false; //Чтобы убрать вертолет
        SignalOdin = true;
    }

    //ФОН 2 - Вертолет + анимация кольца
    if (AZPUSHKA.PushkavOblastiFON2 == true && POVOROTvOblastiFON2vert1 == true) {//(ФОН 2) Если определенный угол из пушки и определенный угол из поворота == тру, то {
        vertolet1FON2.SetActive (true); //Активировать вертолет номер 1
        var KOLCOFON2vert1 = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо
        KOLCOFON2vert1.GetComponent.<Animation>().enabled = false; // Выключить анимацию
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZOXVATFON2") as MonoBehaviour).enabled = true; // включить движение кольца, до этого обычная анимация
        AZKNOPKI.zashelvVIZIRvertolet2FON = false; // Чтобы не появлялся второй вертолет
        POVOROTvOblastiFON2vert1 = false; //Чтобы убрать вертолет
        
    }

    //ФОН 2 - Вертолет + анимация кольца
    if (AZPUSHKA.PushkavOblastiFON2 == true && POVOROTvOblastiFON2vert2 == true) {//(ФОН 2) Если определенный угол из пушки и определенный угол из поворота == тру, то {
        vertolet2FON2.SetActive (true); //Активировать вертолет номер 2
        var KOLCOFON2vert2 = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо
        KOLCOFON2vert2.GetComponent.<Animation>().enabled = false; // Выключить анимацию
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZOXVAT2FON2") as MonoBehaviour).enabled = true; // включить движение кольца, до этого обычная анимация
        AZKNOPKI.zashelvVIZIRvertolet2FON = false; // Чтобы не появлялся второй вертолет
        POVOROTvOblastiFON2vert2 = false; //Чтобы убрать вертолет
        
    }

    //ФОН 3 - Вертолет + анимация кольца
    if (AZPUSHKA.PushkavOblastiFON3 == true && POVOROTvOblastiFON3vert1 == true) {//(ФОН 3) Если определенный угол из пушки и определенный угол из поворота == тру, то {
        vertolet1FON3.SetActive (true); //Активировать вертолет номер 1
        var KOLCOFON3vert1 = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо
        KOLCOFON3vert1.GetComponent.<Animation>().enabled = false; // Выключить анимацию
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZOXVATFON3") as MonoBehaviour).enabled = true; // включить движение кольца, до этого обычная анимация
        AZKNOPKI.zashelvVIZIRvertolet3FON = false; // Чтобы не появлялся второй вертолет
        POVOROTvOblastiFON3vert1 = false; // Чтобы убрать вертолет
        SignalTri = true;
    }

    //ФОН 3 - Вертолет + анимация кольца
    if (AZPUSHKA.PushkavOblastiFON3 == true && POVOROTvOblastiFON3vert2 == true) {//(ФОН 3) Если определенный угол из пушки и определенный угол из поворота == тру, то {
        vertolet2FON3.SetActive (true); //Активировать вертолет номер 2
        var KOLCOFON3vert2 = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо
        KOLCOFON3vert2.GetComponent.<Animation>().enabled = false; // Выключить анимацию
        (GameObject.Find("КОЛЬЦО объект").GetComponent("AZOXVAT2FON3") as MonoBehaviour).enabled = true; // включить движение кольца, до этого обычная анимация
        AZKNOPKI.zashelvVIZIRvertolet3FON = false; // Чтобы не появлялся второй вертолет
        POVOROTvOblastiFON3vert2 = false; // Чтобы убрать вертолет
        SignalTri = true;
    }



}
    
//GetComponent("KNOPKI").enabled = false; // Деактивация другого скрипта