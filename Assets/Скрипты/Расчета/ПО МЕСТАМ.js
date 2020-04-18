public
//Меню
// Прописываем переменные для галочек
var Oper = false;
var Koman = false;
var Vodila = false;
// Допускаем изменение цвета (скопировано из инструкции по Unity)
var rend: Renderer;


function Start() {
	rend = GetComponent.<Renderer>();
}


// При наведении меняется цвет 
function OnMouseEnter () {
	rend.material.color = Color.red;
}


// ...и становится черным при отведении.
function OnMouseExit () {
    rend.material.color = Color.white;
}

//При нажатии
function OnMouseUp (){
    if (Koman == true) {
        Application.LoadLevel ("Выбор проверки командира");
        var audioKoman: AudioSource = GetComponent.<AudioSource>(); //Для аудио КНОПКИ
        audioKoman.Play();// аудио КНОПКИ

        var Komanzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var Komanzagruzkascript = Komanzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        Komanzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }

    if (Oper == true) {
        Application.LoadLevel ("Выбор проверки оператора");
        var audioOK: AudioSource = GetComponent.<AudioSource>(); //Для аудио КНОПКИ
        audioOK.Play();// аудио КНОПКИ

        var Operzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var Operzagruzkascript = Operzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        Operzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }

    if (Vodila == true) {
        Application.LoadLevel ("Выбор проверки механика");
        var audioVodila: AudioSource = GetComponent.<AudioSource>(); //Для аудио КНОПКИ
        audioVodila.Play();// аудио КНОПКИ

        var Vodilazagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var Vodilazagruzkascript = Vodilazagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        Vodilazagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }
	}
	
	
