static var alreadyVERTOLET = false; // Статичная для функции тайм
static var dvijenieVPRAVO = false; // статичная переменная для включения скрипта движения вертолета вправо

var vertoletObject1FON1 : GameObject;

function Wait (time : float) {
    alreadyVERTOLET = true; // После этого время отсчета началось

    

    yield WaitForSeconds (time); //Ждать определенное кол-во времени
     
    //Время отсчета закончилось, включить скрипт движения вверх
    
    var scriptvertoletObject = vertoletObject1FON1.GetComponent ("AZVERTOLETverx"); //Найти скрипт движения вертолета вверх
    scriptvertoletObject.enabled = true; // включить движение верта вверх
    //возвращаем тайм назад
    alreadyVERTOLET = false;

}

function Update () {
    transform.Translate(Vector3.down * Time.deltaTime * 8);
    dvijenieVPRAVO = true;
    
    if (dvijenieVPRAVO == true && alreadyVERTOLET == false) { //Кол-во секунд для ф-ции ТАЙМ
        Wait(20.0);
    }
}


