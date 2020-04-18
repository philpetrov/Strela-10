//Скрипт движения самолета спустя 20 секунд (в данном случае вправо)

var vertolet2FON3 : GameObject;

function Start () {
        
    Wait(8.0);
}


function Wait (time : float) {
    
    yield WaitForSeconds (time); //Ждать определенное кол-во времени
    
    vertolet2FON3.SetActive (false);//Отключить вертолет
    //Время отсчета закончилось, включить скрипт движения вверх
    
    //Включаем обратно анимацию кольца, выключаем движение за вертолетом кольца
    var KOLCO = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо
    KOLCO.GetComponent.<Animation>().enabled = true; // Включить анимацию кольца
    var scriptKOLCO = KOLCO.GetComponent ("AZOXVAT2FON3"); //Найти скрипт движения кольца за вертолетом
    scriptKOLCO.enabled = false; // выключить Охват цели
    
    var scriptvertolet2FON3vpered = vertolet2FON3.GetComponent ("AZVERTOLET3FON3"); //Найти скрипт движения верта вперед
    var scriptvertolet2FON3vpavo = vertolet2FON3.GetComponent ("AZVERTOLETverx3FON3"); //Найти скрипт движения верта вправо
    scriptvertolet2FON3vpered.enabled = false; // выключить скрипт верта вперед
    scriptvertolet2FON3vpavo.enabled = false; // выключить скрипт верта вправо
   
}

    function Update() {
        transform.Translate(Vector3.right * Time.deltaTime * 8); //Движение вправо
    }