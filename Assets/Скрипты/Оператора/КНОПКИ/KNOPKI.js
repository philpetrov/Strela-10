// Скрипт перехода в ПОХОДНОЕ
#pragma strict
var RUCHIKA = false; // Для нажатия ручки этот скрипт
static var RUCHKA = false; //Ручка для обращения в другой скрипт
var Boevoedva = false;
static var Boivoe = false;
var OSVESHENIE = false; //Освещение
var OSVESHENIEdva = false;
var RUKABOEV : GameObject;
var RUKASTOP : GameObject;
var LAMPA : GameObject; // ОСВЕЩЕНИЕ (свет на лампу)
var LAMPAobject : GameObject; // Сама лампа
var SVETviklDVA : GameObject; // Тумблер освещения 2
var OSVESHENIEbox : GameObject; // бокс от тумблера ОСВЕЩЕНИЕ
var OSVESHENIEobjectDVA : GameObject; // тумблер ОСВЕЩЕНИЕ мнимый, для второго нажатия
var OSVESHENIEboxDVA : GameObject; // бокс от тумблера ОСВЕЩЕНИЕ, для второго нажатия



function Start () {
    
    


         
}

function Update () {
    if (AudioRaket.SVETifDVCHITIRE == true) {
        LAMPA.SetActive (false); //Отключаем объект свет
        LAMPAobject.GetComponent(Renderer).material.color = Color(1, 1, 1, 1);
    }
    if (GUIPODSKAZKA.POVOROTactive == true && KNOPKIPEREVOD.OSVESHENIEstaticVKLUCHEN == true) {
        SVETviklDVA = GameObject.Find("тумблер СВЕТ 2");
        SVETviklDVA.GetComponent.<Animation>().Play("ОСВЕЩЕНИЕ ВКЛ 2"); // старт анимации 
        GUIPODSKAZKA.POVOROTactive =false;
        LAMPA.SetActive (true); // Включаем объект ("свет")
        OSVESHENIEobjectDVA.SetActive (true); //Включаем мнимный объект для использования
        OSVESHENIEbox.GetComponent.<Collider>().enabled =  false; // Коллайдер отключить
        OSVESHENIEboxDVA.GetComponent.<Collider>().enabled =  true; //Коллайдер включить мнимого
        LAMPAobject.GetComponent(Renderer).material.color = Color(1, 0.98, 0.1, 1);
    }
}

//Обратился в другом скрипте
function OnMouseUp () { 
        
    if (Boevoedva == true) {
        RUKABOEV.GetComponent.<Animation>().Play("Рука Боевое 2"); // Рука тумблер Боевое аним
        Boivoe = true;
        yield WaitForSeconds (1.3); // Задержка 1.5 сек
        GetComponent.<Animation>().Play("Боевое в Походное"); //тумблер боевое в походное
        yield WaitForSeconds (0.75); // Задержка 0.75 сек
        var audioBoevoe: AudioSource = GetComponent.<AudioSource>(); //Для аудио БОЕВОЕ
        audioBoevoe.Play();// аудио БОЕВОЕ
    }


    if (RUCHIKA == true) {
            RUKASTOP = GameObject.Find("Bip001");
            RUCHKA = true; //Для обращения статичной переменной в другом скрипте
            RUKASTOP.GetComponent.<Animation>().Play("Ручка стопора 2");
            GetComponent.<Animation>().Play("Ручка ПОХОДН");
            yield WaitForSeconds (1.24); // Задержка 0.9 сек
            var audioRUCHKA: AudioSource = GetComponent.<AudioSource>(); //Для аудио ручки
            audioRUCHKA.Play();// аудио РУчки
    }

    //ОСВЕЩЕНИЕ
    if (OSVESHENIE == true && AudioRaket.OSVESHENIEposlednee == false) { //Если нажали в первый раз освещение и 24 ВКЛ
        GetComponent.<Animation>().Play("ОСВЕЩЕНИЕ ВКЛ 2"); // старт анимации тумблера
        LAMPA.SetActive (true); // Включаем объект ("свет")
        OSVESHENIEobjectDVA.SetActive (true); //Включаем мнимный объект для использования
        OSVESHENIEbox.GetComponent.<Collider>().enabled =  false; // Коллайдер отключить
        OSVESHENIEboxDVA.GetComponent.<Collider>().enabled =  true; //Коллайдер включить мнимого
        LAMPAobject.GetComponent(Renderer).material.color = Color(1, 0.98, 0.1, 1);
        var tumblSVETaudio: AudioSource = GetComponent.<AudioSource>(); //Для аудио 
        tumblSVETaudio.Play();// аудио 
    }

    if (OSVESHENIEdva == true && AudioRaket.OSVESHENIEposlednee == false) {//Если нажали во второй раз освещение и 24 ВКЛ
        SVETviklDVA = GameObject.Find("тумблер СВЕТ 2"); // 
        SVETviklDVA.GetComponent.<Animation>().Play("ОСВЕЩЕНИЕ ВЫКЛ 2"); // старт анимации 
        LAMPA.SetActive (false); //Отключаем объект свет
        OSVESHENIEboxDVA.GetComponent.<Collider>().enabled =  false; //Коллайдер отключить мнимого
        OSVESHENIEbox.GetComponent.<Collider>().enabled =  true; // Коллайдер включить
        var tumblSVETaudioVIKL: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        LAMPAobject.GetComponent(Renderer).material.color = Color(1, 1, 1, 1);
        tumblSVETaudioVIKL.Play();// аудио 
    }




}
