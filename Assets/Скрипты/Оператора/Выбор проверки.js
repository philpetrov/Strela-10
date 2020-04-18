//Меню
// Прописываем переменные для галочек
var PEREVODPROV = false;
var PEREVODKONTR = false;
var AZPROV = false;
var AZKONTR = false;
var PRPPROV = false;
var PRPKONTR = false;
var AOZPROV = false;
var AOZKONTR = false;
var NRZPROV = false;
var NRZKONTR = false;
var GLAVNOE = false;
var QUIT = false;

// Допускаем изменение цвета (скопировано из инструкции по Unity)
var rend: Renderer;

function Start() {
    rend = GetComponent.<Renderer>();
}

// При наведении меняется цвет 
function OnMouseEnter () {
    rend.material.color = Color.red;
}


// ...и становится белым при отведении.
function OnMouseExit () {
    rend.material.color = Color.white;
}

//Для перехода на сцену с ЗРК после нажатия "Начать" 
//и для выхода из проги при нажатии "Выход" 
function OnMouseUp (){
    if (PEREVODPROV == true) {
        Application.LoadLevel ("ПЕРЕВОД БМ (обучающий)"); 
        var audioNachat : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioNachat.Play();// аудио

        var PEREVODPROVzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var PEREVODPROVzagruzkascript = PEREVODPROVzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        PEREVODPROVzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }

    if (PEREVODKONTR == true) {
        Application.LoadLevel ("ПЕРЕВОД БМ (контрольный)"); 
        var audioExit : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioExit.Play();// аудио

        var PEREVODKONTRzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var PEREVODKONTRzagruzkascript = PEREVODKONTRzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        PEREVODKONTRzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }

    if (AZPROV == true) {
        Application.LoadLevel ("АЗ (обучающий)"); 
        var audioClick : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioClick.Play();// аудио

        var AZPROVzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var AZPROVzagruzkascript = AZPROVzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        AZPROVzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }

    if (AZKONTR == true) {
        Application.LoadLevel ("АЗ (контрольный)"); 
        var audioClick2 : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioClick2.Play();// аудио

        var AZKONTRzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var AZKONTRzagruzkascript = AZKONTRzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        AZKONTRzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }

    if (PRPPROV == true) {
        Application.LoadLevel ("ПРП (обучающий)"); 
        var audioClick3 : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioClick3.Play();// аудио

        var PRPPROVzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var PRPPROVzagruzkascript = PRPPROVzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        PRPPROVzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }
   
    if (PRPKONTR == true) {
        Application.LoadLevel ("ПРП (контрольный)"); 
        var audioClick4 : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioClick4.Play();// аудио

        var PRPKONTRzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var PRPKONTRzagruzkascript = PRPKONTRzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        PRPKONTRzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }

    if (AOZPROV == true) {
        Application.LoadLevel ("АОЗ (обучающий)"); 
        var audioClick5 : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioClick5.Play();// аудио

        var AOZPROVzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var AOZPROVzagruzkascript = AOZPROVzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        AOZPROVzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }
   
    if (AOZKONTR == true) {
        Application.LoadLevel ("АОЗ (контрольный)"); 
        var audioClick6 : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioClick6.Play();// аудио

        var AOZKONTRzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var AOZKONTRzagruzkascript = AOZKONTRzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        AOZKONTRzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }

    if (NRZPROV == true) {
        Application.LoadLevel ("НРЗ (обучающий)"); 
        var audioClick7 : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioClick7.Play();// аудио

        var NRZPROVzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var NRZPROVzagruzkascript = NRZPROVzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        NRZPROVzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }

    if (NRZKONTR == true) {
        Application.LoadLevel ("НРЗ (контрольный)"); 
        var audioClick8 : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioClick8.Play();// аудио

        var KONTRzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var KONTRzagruzkascript = KONTRzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        KONTRzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...

    }

    if  (GLAVNOE == true) {
        Application.LoadLevel ("Главное меню"); 
        var audioGLAVNOE : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioGLAVNOE.Play();// аудио

        var GLAVNOEzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var GLAVNOEzagruzkascript = GLAVNOEzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        GLAVNOEzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }

    if  (QUIT == true) {
        Application.Quit();
        var audioQUIT : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioQUIT.Play();// аудио

        var QUITzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var QUITzagruzkascript = QUITzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        QUITzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }
}