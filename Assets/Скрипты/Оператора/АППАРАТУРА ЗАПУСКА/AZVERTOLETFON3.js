static var alreadyVERTOLETFON3 = false; // Статичная для функции тайм
static var dvijenieVPRAVOFON3 = false; // статичная переменная для включения скрипта движения вертолета вправо

var vertolet1FON3 : GameObject;

function Wait (time : float) {
    alreadyVERTOLETFON3 = true; // После этого время отсчета началось
   
    

    yield WaitForSeconds (time); //Ждать определенное кол-во времени
    
    
    //Время отсчета закончилось, включить скрипт движения вверх
    
    var scriptvertolet1FON3 = vertolet1FON3.GetComponent ("AZVERTOLETverxFON3"); //Найти скрипт движения вертолета вверх
    scriptvertolet1FON3.enabled = true; // включить движение верта вверх
    //возвращаем тайм назад
    alreadyVERTOLETFON3 = false;

}

    function Update () {
        transform.Translate(Vector3.down * Time.deltaTime * 8);
        dvijenieVPRAVOFON3 = true;
    
        if (dvijenieVPRAVOFON3 == true && alreadyVERTOLETFON3 == false) { //Кол-во секунд для ф-ции ТАЙМ
            Wait(20.0);
        }
    }