//Меню (СТАРТОВАЯ ОБЛОЖКА)
// Прописываем переменные для галочек
var Play = false;
var Quit = false;

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
	if (Play == true) {
	    Application.LoadLevel ("Справка 1 лист"); 
	    var audioNachat : AudioSource = GetComponent.<AudioSource>(); //Для аудио
	    audioNachat.Play();// аудио

	    var Playzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
	    var Playzagruzkascript = Playzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
	    Playzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
	}
	if (Quit == true) {
	    Application.Quit();}
	    var audioExit : AudioSource = GetComponent.<AudioSource>(); //Для аудио
	    audioExit.Play();// аудио

	    var Quitzagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
	    var Quitzagruzkascript = Quitzagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
	    Quitzagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
}

