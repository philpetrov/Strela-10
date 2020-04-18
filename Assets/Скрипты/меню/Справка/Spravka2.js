// Справка 2
// Прописываем переменные для галочек
var Dalee = false;
var Propustit = false;

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
    

    if (Dalee == true) {
        Application.LoadLevel ("Посадка расчета"); 
        var audioClick : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioClick.Play();// аудио

        var Daleezagruzka = GameObject.Find("ЗАГРУЗКА"); // Найти объект со скриптом загрузки
        var Daleezagruzkascript = Daleezagruzka.GetComponent("ZAGRUZKA"); //Найти скрипт ОКНА ЗАГРУЗКА...
        Daleezagruzkascript.enabled = true; // ВКЛЮЧИТЬ ОКНО СРИПТА ЗАКГРУЗКА...
    }

   
}