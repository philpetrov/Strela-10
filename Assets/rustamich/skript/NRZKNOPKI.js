#pragma strict

var PITANIEVIKL = false;
var PITANIEVIKL1 = false;
var PERECL = false; //0-1
var PERECL1 = false; //1-2
var PERECL2 = false; //2-3
var PERECL3 = false; //3-4
var PERECL4 = false; //4-5
var PERECL5 = false; //5-6
var PERECL6 = false; // 6-1
var RABOTA = false;
var SLESENIE = false; //СЛЕЖЕНИЕ-ПУСК
var BORT = false;

var PITANIEBOX : GameObject; // Тумблер питание выкл
var PITANIEVIKL1BOX : GameObject; // Тумблер питание ВЫКЛ в ВЫКЛ БОКС
var TextVKPITANIE : GameObject; // Текст включить ПИТАНИЕ
var TextVKPITANIE2 : GameObject; // Текст включить ПИТАНИЕ продолжение текста
var TextPERECL : GameObject; // Текст УСТАНОВИТЬ 
var TextPERECL2 : GameObject;
var TextNAZHATRABOTA1 : GameObject; //пункт проверки, нажать РАБОТА 1
var TextNAZHATRABOTA2 : GameObject; //пункт проверки, нажать РАБОТА 2
var PERECLBOX : GameObject; // ПЕРЕКЛЮЧАТЕЛЬ
var LEVARUKA : GameObject; // Левый локоть
var RABOTABOX : GameObject; // РАБОТА на 1ЛУ
var PUSKBOX : GameObject; // СЛЕЖЕНИЕ-ПУСК
var PERVPOSTBOX : GameObject; // 1-2 НА ПЕРЕКЛЮЧАТЕЛЕ
var VTOROIPOSTBOX : GameObject; // 2-3 НА ПЕРЕКЛЮЧАТЕЛЕ
var TRETIPOSTBOX : GameObject; // 3-4 НА ПЕРЕКЛЮЧАТЕЛЕ
var CHETIRIPOSTBOX : GameObject; // 4-5 НА ПЕРЕКЛЮЧАТЕЛЕ
var PIATPOSTBOX : GameObject; // 5-6 НА ПЕРЕКЛЮЧАТЕЛЕ
var SHESTPOSTBOX : GameObject; // 6-1 НА ПЕРЕКЛЮЧАТЕЛЕ
var RUCHKAPERECL : GameObject; // ручка переключателя для анимации
var PRAVARUKA : GameObject; // ********
var PITANIEVIKLTUMBLER : GameObject;
var PodsvetISPR : GameObject; // Подсветка ИСПР
var PodsvetGOTOV : GameObject; // Подсветка ГОТОВ
var PodsvetBORT : GameObject; // Подсветка БОРТ

var TextVIKLPITANIE1 : GameObject; //выкл тумблер питание 1
var TextVIKLPITANIE2 : GameObject; //выкл тумблер питание 2
var TextBORT : GameObject; // ВКЛЮЧИТЬ БОРТ
var TextBORT1 : GameObject; // ВКЛЮЧИТЬ БОРТ
var TextSlejenie1 : GameObject; //Включить СЛЕЖЕНИЕ до 1 упора 1
var TextSlejenie2 : GameObject; //Включить СЛЕЖЕНИЕ до 1 упора 2
var BORTBOX : GameObject; //БОКС БОРТА
var KRISHKA : GameObject; // Крышка контейнера

var GSNAudio : GameObject; // Раскрутка ГСН Аудио
var CameraOKNO : GameObject; // Камера ОКНО

function Start () {

}

function Update () {

}

function OnMouseUp () {

    

    // 1 пункт проверки НРЗ
    if (PERECL == true) {
        PERECLBOX.GetComponent.<Collider>().enabled = false; // Отключить бокс (из АВТ.)
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ БОРТ"); // Анимация рук 
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        GetComponent.<Animation>().Play("ПЕРЕКЛЮЧАТЕЛЬ 1ЛУ НА 1");
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        var audioPERECL: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPERECL.Play();// ауди
        yield WaitForSeconds (0.5); // Задержка 0.5 сек
        PERVPOSTBOX.GetComponent.<Collider>().enabled = true; // Включить бокс (1 пост)
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы 

    }

    if (PERECL1 == true) {
        PERVPOSTBOX.GetComponent.<Collider>().enabled = false; // Отключить бокс(1-2) (из АВТ.)
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ БОРТ"); // Анимация рук 
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        RUCHKAPERECL.GetComponent.<Animation>().Play("ПЕРЕКЛЮЧАТЕЛЬ 1ЛУ НА 2");  //АНИМАЦИЯ ПЕРЕКЛЮЧЕНИЯ С 1 НА 2 
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        var audioPERECL1: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPERECL1.Play();// ауди
        yield WaitForSeconds (0.6); // Задержка 0.6 сек            
        VTOROIPOSTBOX.GetComponent.<Collider>().enabled = true; // Включить бокс (2-3) бокс 
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы     
    }

    if (PERECL2 == true) {
        VTOROIPOSTBOX.GetComponent.<Collider>().enabled = false; // Отключить бокс(2-3) (из АВТ.)
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ БОРТ"); // Анимация рук   
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        RUCHKAPERECL.GetComponent.<Animation>().Play("ПЕРЕКЛЮЧАТЕЛЬ 1ЛУ НА 3"); //АНИМАЦИЯ ПЕРЕКЛЮЧЕНИЯ С 2 НА 3 
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        var audioPERECL2: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPERECL2.Play();// ауди
        yield WaitForSeconds (0.6); // Задержка 0.6 сек            
        TRETIPOSTBOX.GetComponent.<Collider>().enabled = true; // Включить бокс(3-4) 
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы     

    }

    if (PERECL3 == true) {
        TRETIPOSTBOX.GetComponent.<Collider>().enabled = false; // Отключить бокс(3-4) (из АВТ.)
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ БОРТ"); // Анимация рук 
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        RUCHKAPERECL.GetComponent.<Animation>().Play("ПЕРЕКЛЮЧАТЕЛЬ 1ЛУ НА 4"); //АНИМАЦИЯ ПЕРЕКЛЮЧЕНИЯ С 3 НА 4   
        yield WaitForSeconds (0.3); // Задержка 0.3сек
        var audioPERECL3: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPERECL3.Play();// ауди
        yield WaitForSeconds (0.6); // Задержка 0.6 сек            
        CHETIRIPOSTBOX.GetComponent.<Collider>().enabled = true;  // Включить бокс(4-5) 
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы     
    }

    if (PERECL4 == true) {
        CHETIRIPOSTBOX.GetComponent.<Collider>().enabled = false; // Отключить бокс(4-5) (из АВТ.)
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ БОРТ"); // Анимация рук  
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        RUCHKAPERECL.GetComponent.<Animation>().Play("ПЕРЕКЛЮЧАТЕЛЬ 1ЛУ НА 5"); //АНИМАЦИЯ ПЕРЕКЛЮЧЕНИЯ С 4 НА 5   
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        var audioPERECL4: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPERECL4.Play();// ауди
        yield WaitForSeconds (0.6); // Задержка 0.6 сек            
        PIATPOSTBOX.GetComponent.<Collider>().enabled = true; // Включить бокс(5-6) 
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы     
    }

    if (PERECL5 == true) {
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ БОРТ"); // Анимация рук     
        PIATPOSTBOX.GetComponent.<Collider>().enabled = false; // Отключить бокс(5-6) (из АВТ.)
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        RUCHKAPERECL.GetComponent.<Animation>().Play("ПЕРЕКЛЮЧАТЕЛЬ 1ЛУ НА 6"); //АНИМАЦИЯ ПЕРЕКЛЮЧЕНИЯ С 5 НА 6  
        TextVKPITANIE.SetActive (true); // активация текста "Установить тумблер"
        TextVKPITANIE2.SetActive (true);
        TextPERECL.SetActive (false); // деАктивация надписи "Установить переключатель"
        TextPERECL2.SetActive (false);
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        
        
        var audioPERECL5: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPERECL5.Play();// аудио           
        (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = true; //врубить скрипт пальца
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы     
        PITANIEBOX.GetComponent.<Collider>().enabled = true; // Активация коллайдера
    }
    
    // 2 пункт проверки НРЗ
    if (PITANIEVIKL == true) {    
        GetComponent.<Animation>().Play("вкл 1ЛУ"); // старт анимации включения ПИТАНИЕ
        PodsvetGOTOV.SetActive (true); // активация светодиода ГОТОВ
        TextNAZHATRABOTA1.SetActive (true); // Активация надписи нажать РАБОТА 1
        TextNAZHATRABOTA2.SetActive (true);
        TextVKPITANIE.SetActive (false); // Деактивация текста "Установить тумблер"
        TextVKPITANIE2.SetActive (false);
        PITANIEBOX.GetComponent.<Collider>().enabled = false; // Деактивация коллайдера
        
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audioPITANIE: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPITANIE.Play();// аудио
        RABOTABOX.GetComponent.<Collider>().enabled = true; // Активировать коллайдер РАБОТА
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы     
    }
    
    // 3 пункт проверки нажимаем РАБОТА
    
    if (RABOTA == true) {
        GetComponent.<Animation>().Play("ВКЛРАБОТА"); // старт анимации включения РАБОТА
        RABOTABOX.GetComponent.<Collider>().enabled = false; // ОТКЛЮЧЕНИЕ БОКСА РАБОТА 
        PodsvetISPR.SetActive (true); // активация светодиода ИСПР.
        TextNAZHATRABOTA1.SetActive (false); // деАктивация надписи нажать РАБОТА 1
        TextNAZHATRABOTA2.SetActive (false);
        TextVIKLPITANIE1.SetActive (true); // Активация надписи "ВЫКЛЮЧИТЬ ТУМБЛЕР ПИТАНИЕ" 1
        TextVIKLPITANIE2.SetActive (true); // Активация надписи "ВЫКЛЮЧИТЬ ТУМБЛЕР ПИТАНИЕ" 2
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        
        yield WaitForSeconds (0.36); // Задержка 0.36 сек
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить поворот головы     
        var audioRABOTA: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioRABOTA.Play();// аудио
        PITANIEVIKL1BOX.GetComponent.<Collider>().enabled = true; // ВКЛ. БОКС 2 ПИТАНИЯ
    }


    if (PITANIEVIKL1 == true) { //Нажимаем ПИТАНИЕ ВЫКЛ
        PITANIEVIKL1BOX.GetComponent.<Collider>().enabled = false; // ВЫКЛ. БОКС 2 ПИТАНИЯ
        PITANIEVIKLTUMBLER.GetComponent.<Animation>().Play("ПИТАНИЕВЫКЛ В ВЫКЛ"); // старт анимации выключения ПИТАНИЕ
        TextVIKLPITANIE1.SetActive (false); // деАктивация надписи "ВЫКЛЮЧИТЬ ТУМБЛЕР ПИТАНИЕ" 1
        TextVIKLPITANIE2.SetActive (false); // деАктивация надписи "ВЫКЛЮЧИТЬ ТУМБЛЕР ПИТАНИЕ" 2
        TextBORT.SetActive (true); // Активация надписи "ВКЛЮЧИТЬ БОРТ"
        TextBORT1.SetActive (true); // Активация надписи "ВКЛЮЧИТЬ БОРТ" вторая часть
        PodsvetGOTOV.SetActive (false); // ДЕактивация светодиод ПОХОД
        PodsvetISPR.SetActive (false); //Подсветка испр выкл.

        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audioPITANIE1: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPITANIE1.Play();// ауди
        

        BORTBOX.GetComponent.<Collider>().enabled =  true; // активация коллайдера БОКС
        (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = false; //вырубить скрипт пальца
       
    }

   
    if (BORT == true) {
        BORTBOX.GetComponent.<Collider>().enabled = false; // деактивация коллайдера БОКС
        LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ БОРТ"); // Анимация рук
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; //Отключить поворот головы на момент анимации
        TextBORT.SetActive (false); // деАктивация надписи "ВКЛЮЧИТЬ БОРТ"
        TextBORT1.SetActive (false); // деАктивация надписи "ВКЛЮЧИТЬ БОРТ" вторая часть
        TextSlejenie1.SetActive (true); // Активация надписи "ВКЛЮЧИТЬ СЛЕЖЕНИЕ" 1
        TextSlejenie2.SetActive (true); // Активация надписи "ВКЛЮЧИТЬ СЛЕЖЕНИЕ" 2
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        GetComponent.<Animation>().Play("БОРТ ВКЛ-ВЫКЛ"); // старт анимации
        yield WaitForSeconds (0.2); // Задержка 0.2 сек
        var audioBORT: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioBORT.Play();// аудио
        PodsvetBORT.SetActive (true); // Активация подсветки БОРТ
        PodsvetGOTOV.SetActive (true); // активация светодиод ГОТОВ

        GSNAudio.SetActive (true); //Активация объекта со звуком ГСН.
        (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = true; //врубить скрипт пальца
        PUSKBOX.GetComponent.<Collider>().enabled = true; // ВКЛ БОКСА СЛЕЖЕНИЕ-ПУСК
        (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; //Включить голову
        
        
    }

    if (SLESENIE == true) { // нажимаем слежение
        CameraOKNO.SetActive (true); // Камера ОКНО ВКЛ
        PUSKBOX.GetComponent.<Collider>().enabled = false; // Отключить бокс пуск
        LEVARUKA.GetComponent.<Animation>().Play("Убрать левую руку");
        PRAVARUKA.GetComponent.<Animation>().Play("Правая рука на Слежение"); // Анимация рук        
        TextSlejenie1.SetActive (false); // деАктивация надписи "ВКЛЮЧИТЬ СЛЕЖЕНИЕ" 1
        TextSlejenie2.SetActive (false); // деАктивация надписи "ВКЛЮЧИТЬ СЛЕЖЕНИЕ" 2
        
        yield WaitForSeconds (0.6); // Задержка 0.6 сек
        
        GetComponent.<Animation>().Play("ВКЛЮЧИТЬ СЛЕЖЕНИЕ"); //АНИМАЦИЯ включения СЛЕЖЕНИЕ          
        KRISHKA.GetComponent.<Animation>().Play("Открыть крышку"); // Крышку контейнера открыть
        PodsvetISPR.SetActive (true); //Подсветка испр вкл.
        
        yield WaitForSeconds (0.3); // Задержка 0.3 сек
        
       
        PRAVARUKA.GetComponent.<Animation>().Play("Правая рука со слежения"); // Анимация рук 
        GetComponent.<Animation>().Play("ВЫКЛЮЧИТЬ СЛЕЖЕНИЕ"); //АНИМАЦИЯ вЫключения СЛЕЖЕНИЕ
        
        yield WaitForSeconds (0.4); // Задержка 0.4 сек
        var audioSLESENIE: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioSLESENIE.Play();// аудио

        yield WaitForSeconds (0.6); // Задержка 1 сек
        LEVARUKA.GetComponent.<Animation>().Play("Вернуть левую руку");

        yield WaitForSeconds (2.0); // Задержка 2 сек

        (GameObject.Find("Terrain").GetComponent("NRZITOG") as MonoBehaviour).enabled = true; //врубить скрипт итога

           
    }


}
        
            
         

          
        
        