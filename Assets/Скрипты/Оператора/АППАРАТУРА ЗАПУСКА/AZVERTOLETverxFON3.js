//Скрипт движения самолета спустя 20 секунд (в данном случае вправо)

var vertolet1FON3 : GameObject;

function Start () {
        
    Wait(5.0);
}


function Wait (time : float) {

    yield WaitForSeconds (time); //Ждать определенное кол-во времени
    vertolet1FON3.SetActive (false);//Отключить вертолет
    //Время отсчета закончилось, включить скрипт движения вверх
    
    //Включаем обратно анимацию кольца, выключаем движение за вертолетом кольца
    var KOLCO = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо
    KOLCO.GetComponent.<Animation>().enabled = true; // Включить анимацию кольца
    var scriptKOLCO = KOLCO.GetComponent ("AZOXVATFON3"); //Найти скрипт движения кольца за вертолетом
    scriptKOLCO.enabled = false; // выключить Охват цели
    
    var scriptvertolet1FON3vpered = vertolet1FON3.GetComponent ("AZVERTOLETFON3"); //Найти скрипт движения верта вперед
    var scriptvertolet1FON3vpavo = vertolet1FON3.GetComponent ("AZVERTOLETverxFON3"); //Найти скрипт движения верта вправо
    scriptvertolet1FON3vpered.enabled = false; // выключить скрипт верта вперед
    scriptvertolet1FON3vpavo.enabled = false; // выключить скрипт верта вправо
    

}

    function Update() {
        transform.Translate(Vector3.right * Time.deltaTime * 8); //Движение вправо
    }