static var alreadyVERTOLET2FON3 = false; // Статичная для функции тайм
static var dvijenieVPRAVO2FON3 = false; // статичная переменная для включения скрипта движения вертолета вправо

var vertoletObject2FON3 : GameObject;

function Wait (time : float) {
    alreadyVERTOLET2FON3 = true; // После этого время отсчета началось
    
    

    yield WaitForSeconds (time); //Ждать определенное кол-во времени
     
    //Время отсчета закончилось, включить скрипт движения вверх
    var scriptvertoletObject = vertoletObject2FON3.GetComponent ("AZVERTOLETverx3FON3"); //Найти скрипт движения вертолета вверх
    scriptvertoletObject.enabled = true; // включить движение верта вверх
    //возвращаем тайм назад
    alreadyVERTOLET2FON3 = false;

}

    function Update () {
        transform.Translate(Vector3.down * Time.deltaTime * 8);
        dvijenieVPRAVO2FON3 = true;
    
        if (dvijenieVPRAVO2FON3 == true && alreadyVERTOLET2FON3 == false) { //Кол-во секунд для ф-ции ТАЙМ
            Wait(20.0);
        }
    }