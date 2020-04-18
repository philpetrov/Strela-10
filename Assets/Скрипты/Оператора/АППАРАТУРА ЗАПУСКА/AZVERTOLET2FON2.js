static var alreadyVERTOLET2FON2 = false; // Статичная для функции тайм
static var dvijenieVPRAVO2FON2 = false; // статичная переменная для включения скрипта движения вертолета вправо

var vertoletObject2FON2 : GameObject;
var lovushkaLEVvert2FON2 : GameObject; // Огневая ловушка левая 2 вертолета ФОН 2
var lovushkaPRAVvert2FON2 : GameObject; // Огневая ловушка правая 2 вертолета ФОН 2
var KOLCO : GameObject; // КОЛЬЦО Объект

function Start () {
    yield WaitForSeconds (5.0); // Задержка 5 сек
    AZPOVOROT.SignalDva = true; // Текст продолжение в ВИЗИРЕ ВКЛ
    (GameObject.Find("КОЛЬЦО объект").GetComponent("AZOXVAT2FON2") as MonoBehaviour).enabled = false;// Выкл. скрипт охвата 2 верта ФОНА 2
    KOLCO.GetComponent.<Animation>().Play("КОЛЬЦО СЛЕЖЕНИЕ"); //Включить дрожание кольца слежения
    KOLCO.GetComponent.<Animation>().wrapMode = WrapMode.Loop; // Зациклили анимацию
    KOLCO.GetComponent.<Animation>().enabled = true; // Включить анимацию
    yield WaitForSeconds (3.0); // Задержка 3 сек
    lovushkaLEVvert2FON2.SetActive (false); // Отключаем работу ловушек
    lovushkaPRAVvert2FON2.SetActive (false); // Отключаем работу ловушек
    
}

function Wait (time : float) {
    alreadyVERTOLET2FON2 = true; // После этого время отсчета началось
   
    

    yield WaitForSeconds (time); //Ждать определенное кол-во времени
    
    //Время отсчета закончилось, включить скрипт движения вверх
    
    var scriptvertoletObject = vertoletObject2FON2.GetComponent ("AZVERTOLETverx2FON2"); //Найти скрипт движения вертолета вверх
    scriptvertoletObject.enabled = true; // включить движение верта вверх
    //возвращаем тайм назад
    alreadyVERTOLET2FON2 = false;

}

    function Update () {
        transform.Translate(Vector3.down * Time.deltaTime * 8);
        dvijenieVPRAVO2FON2 = true;
    
        if (dvijenieVPRAVO2FON2 == true && alreadyVERTOLET2FON2 == false) { //Кол-во секунд для ф-ции ТАЙМ
            Wait(20.0);
        }
    }