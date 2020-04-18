//Скрипт движения самолета спустя 20 секунд (в данном случае вправо)

var vertolet1FON2 : GameObject;

function Start () {
        
    Wait(5.0);
}


function Wait (time : float) {
    
    
    yield WaitForSeconds (time); //Ждать определенное кол-во времени
    vertolet1FON2.SetActive (false);//Отключить вертолет
    //Время отсчета закончилось, включить скрипт движения вверх
    
    //Включаем обратно анимацию кольца, выключаем движение за вертолетом кольца
    var KOLCO = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо
    KOLCO.GetComponent.<Animation>().enabled = true; // Включить анимацию кольца
    var scriptKOLCO = KOLCO.GetComponent ("AZOXVATFON2"); //Найти скрипт движения кольца за вертолетом
    scriptKOLCO.enabled = false; // выключить Охват цели
    
    var scriptvertolet1FON2vpered = vertolet1FON2.GetComponent ("AZVERTOLETFON2"); //Найти скрипт движения верта вперед
    var scriptvertolet1FON2vpavo = vertolet1FON2.GetComponent ("AZVERTOLETverxFON2"); //Найти скрипт движения верта вправо
    scriptvertolet1FON2vpered.enabled = false; // выключить скрипт верта вперед
    scriptvertolet1FON2vpavo.enabled = false; // выключить скрипт верта вправо
    

}

    function Update() {
        transform.Translate(Vector3.right * Time.deltaTime * 8); //Движение вправо
    }