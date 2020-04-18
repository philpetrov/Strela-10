//Скрипт движения самолета спустя 20 секунд (в данном случае вправо)
var vertolet1FON1 : GameObject;

function Start () {
        
        Wait(5.0);
}


function Wait (time : float) {
   
    yield WaitForSeconds (time); //Ждать определенное кол-во времени
    vertolet1FON1.SetActive (false);//Отключить вертолет
    //Время отсчета закончилось, включить скрипт движения вверх
    
    //Включаем обратно анимацию кольца, выключаем движение за вертолетом кольца
    var KOLCO = GameObject.Find("КОЛЬЦО объект"); //Найти кольцо
    KOLCO.GetComponent.<Animation>().enabled = true; // Включить анимацию кольца
    var scriptKOLCO = KOLCO.GetComponent ("AZOXVAT"); //Найти скрипт движения кольца за вертолетом
    scriptKOLCO.enabled = false; // выключить Охват цели
    
    var scriptvertolet1FON1vpered = vertolet1FON1.GetComponent ("AZVERTOLET"); //Найти скрипт движения верта вперед
    var scriptvertolet1FON1vpavo = vertolet1FON1.GetComponent ("AZVERTOLETverx"); //Найти скрипт движения верта вправо
    scriptvertolet1FON1vpered.enabled = false; // выключить скрипт верта вперед
    scriptvertolet1FON1vpavo.enabled = false; // выключить скрипт верта вправо
    

}

function Update() {
    transform.Translate(Vector3.right * Time.deltaTime * 8); //Движение вправо
}

