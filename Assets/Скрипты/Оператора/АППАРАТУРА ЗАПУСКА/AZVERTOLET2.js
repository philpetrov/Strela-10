static var alreadyVERTOLET2 = false; // Статичная для функции тайм
static var dvijenieVPRAVO2 = false; // статичная переменная для включения скрипта движения вертолета вправо

var vertoletObject2FON1 : GameObject;

function Wait (time : float) {
    alreadyVERTOLET2 = true; // После этого время отсчета началось

  

    yield WaitForSeconds (time); //Ждать определенное кол-во времени
     
    //Время отсчета закончилось, включить скрипт движения вверх
   
    var scriptvertoletObject = vertoletObject2FON1.GetComponent ("AZVERTOLETverx2"); //Найти скрипт движения вертолета вверх
    scriptvertoletObject.enabled = true; // включить движение верта вверх
    //возвращаем тайм назад
    alreadyVERTOLET2 = false;

}

    function Update () {
        transform.Translate(Vector3.down * Time.deltaTime * 8);
        dvijenieVPRAVO2 = true;
    
        if (dvijenieVPRAVO2 == true && alreadyVERTOLET2 == false) { //Кол-во секунд для ф-ции ТАЙМ
            Wait(20.0);
        }
    }