//Меню
// Прописываем переменные для галочек
var ZAPUSKPROV = false;
var ZAPUSKKONTR = false;

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
    

    if (ZAPUSKPROV == true) {
        Application.LoadLevel ("Запуск двигателя (обучающий)"); 
        var audioClick : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioClick.Play();// аудио

        var ZAPUSKPROVzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var ZAPUSKPROVzagruzkascript = ZAPUSKPROVzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        ZAPUSKPROVzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }
   
    if (ZAPUSKKONTR == true) {
        Application.LoadLevel ("механика сцена 5 контрольный"); 
        var audioClick2 : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioClick2.Play();// аудио

        var ZAPUSKKONTRzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var ZAPUSKKONTRzagruzkascript = ZAPUSKKONTRzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        ZAPUSKKONTRzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
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