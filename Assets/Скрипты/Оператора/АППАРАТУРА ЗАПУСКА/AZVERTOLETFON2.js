static var alreadyVERTOLETFON2 = false; // Статичная для функции тайм
static var dvijenieVPRAVOFON2 = false; // статичная переменная для включения скрипта движения вертолета вправо

var vertolet1FON2 : GameObject;
var lovushkaLEVvert1FON2 : GameObject; // Огневая ловушка левая 1 вертолета ФОН 2
var lovushkaPRAVvert1FON2 : GameObject; // Огневая ловушка правая 1 вертолета ФОН 2
var KOLCO : GameObject; // КОЛЬЦО

function Start () {
    yield WaitForSeconds (5.0); // Задержка 5 сек
    AZPOVOROT.SignalDva = true; // Текст продолжение в ВИЗИРЕ ВКЛ
    (GameObject.Find("КОЛЬЦО объект").GetComponent("AZOXVATFON2") as MonoBehaviour).enabled = false;// Выкл. скрипт охвата 1 верта ФОНА 2
    KOLCO.GetComponent.<Animation>().Play("КОЛЬЦО СЛЕЖЕНИЕ"); //Включить дрожание кольца слежения
    KOLCO.GetComponent.<Animation>().wrapMode = WrapMode.Loop; // Зациклили анимацию
    KOLCO.GetComponent.<Animation>().enabled = true; // Включить анимацию
    yield WaitForSeconds (3.0); // Задержка 3 сек
    lovushkaLEVvert1FON2.SetActive (false); // Отключаем работу ловушек
    lovushkaPRAVvert1FON2.SetActive (false); // Отключаем работу ловушек
    
    
}

function Wait (time : float) {
    alreadyVERTOLETFON2 = true; // После этого время отсчета началось

  

    yield WaitForSeconds (time); //Ждать определенное кол-во времени
     
    //Время отсчета закончилось, включить скрипт движения вверх
    
    var scriptvertolet1FON2 = vertolet1FON2.GetComponent ("AZVERTOLETverxFON2"); //Найти скрипт движения вертолета вверх
    scriptvertolet1FON2.enabled = true; // включить движение верта вверх
    //возвращаем тайм назад
    alreadyVERTOLETFON2 = false;

}

    function Update () {
        transform.Translate(Vector3.down * Time.deltaTime * 8);
        dvijenieVPRAVOFON2 = true;
    
        if (dvijenieVPRAVOFON2 == true && alreadyVERTOLETFON2 == false) { //Кол-во секунд для ф-ции ТАЙМ
            Wait(20.0);
        }
    }