//Меню
// Прописываем переменные для галочек
var dvchetire = false; // 24 В тумблер
var dvvosem = false; // 28 В тумблер
var privod = false; // Привод тумблер
var boevoe = false; // Боевое тумблер
var pedal = false; // Педаль стопора ПО-ПОХОДНОМУ
var ruchka = false; // Ручка стопора по-походному
var PULT = false; // Пульт наведения
var OSVESHENIE = false; //Освещение
var OSVESHENIEdva = false;
var podsvetV : GameObject; // Подсветка шкалы Вольтметра
var podsvetU : GameObject; // Подсветка транспаранта Учебный
var strelka : GameObject; // Стрелка Вольтметра
var noga : GameObject; // Нога оператора
var plecho : GameObject; // Плечо оператора
var pohod : GameObject; // Подсветка ПОХОД
var KontrPZperv : GameObject; // Подсветка КОНТР ПЗ 1
var KontrPZvtor : GameObject; // Подсветка КОНТР ПЗ 2
var pervnapr : GameObject; // Подсветка 1 направляющей
var uchebni : GameObject; // Транспарант учебный
var TextVKLDVCH : GameObject; // Текст включить 24 В
var TextVKLDVVOS : GameObject; // Текст включить 28 В
var TextPrivod : GameObject; // Текст вкл тумблер Привод
var TextBoevoe : GameObject; // Текст вкл тумблер БОЕВОЕ
var TextPedal : GameObject; // Текст Педаль;
var TextRuchka : GameObject; // Текст ручка СТОПОРА;
var TextPULT : GameObject; // Текст пульт наведения;
var dvchetireBOX : GameObject; // Для деактивации коллайдера 24 В
var dvvosemBOX : GameObject;  // Для деактивации коллайдера 28 В
var PrivodBOX : GameObject; // Для деактивации коллайдера ПРИВОД
var BoevoeBOX : GameObject; // Для деактивации коллайдера Боевое
var PedalBOX : GameObject; // Для деактивации коллайдера Педали
var RuchkaBOX : GameObject; // Для деактивации коллайдера Ручки стопора
var PULTBOX : GameObject; // Для деактивации коллайдера Пульта
var POVOROT : GameObject; // Активация объектов для поворота
var PEREVOD : GameObject; // Деактивация объектов ПЕРЕВОДА
var Raketi : GameObject; // Ракеты
var Vizir : GameObject; //Визир грубый
var LAMPA : GameObject; // ОСВЕЩЕНИЕ (свет на лампу)
var LAMPAobject : GameObject; // Сама лампа
var OSVESHENIEbox : GameObject; // бокс от тумблера ОСВЕЩЕНИЕ
var OSVESHENIEobjectDVA : GameObject; // тумблер ОСВЕЩЕНИЕ мнимый, для второго нажатия
var OSVESHENIEboxDVA : GameObject; // бокс от тумблера ОСВЕЩЕНИЕ, для второго нажатия
var audioPedal: AudioSource;
var audioRaketi: AudioSource;
static var OSVESHENIEstatic = false;
static var OSVESHENIEstaticVKLUCHEN = false;

function Start () 
{
    TextVKLDVCH = GameObject.Find("Текст 24 ВКЛ"); // Активация надписи "Текст включить 24 В" типа assign!
    dvvosemBOX =  GameObject.Find("28 В"); // assign коллайдер для объекта 28 В
    PrivodBOX = GameObject.Find("ПРИВОД тумблер"); // assign коллайдер тумблера ПРИВОД
    BoevoeBOX = GameObject.Find("тумблер БОЕВОЕ 1"); //assign коллайдер тумблера БОЕВОЕ
    PedalBOX = GameObject.Find ("Педаль 1"); // assign коллайдер Педали

}
// Действия при нажатии
function OnMouseUp (){
    if (dvchetire == true) {
        dvvosemBOX.GetComponent.<Collider>().enabled =  true; // Активация коллайдера 28 В, ИЗНАЧАЛЬНО ДЕАКТИВИРОВАН!
        GetComponent.<Animation>().Play("24 ВКЛ"); // старт анимации включения 24 В
        pohod.SetActive (true); // активация подсветки лампы ПОХОД
        TextVKLDVCH.SetActive (false);
        TextVKLDVVOS.SetActive (true); // Активация надписи "Текст включить 28 В"
        dvchetireBOX.GetComponent.<Collider>().enabled =  false; // Деактивация коллайдера
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audio24: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audio24.Play();// аудио
        OSVESHENIEstatic = true; //Для освещения
    }
    if (dvvosem == true) {
        GetComponent.<Animation>().Play("28 ВКЛ"); // старт анимации включения28 В
        strelka = GameObject.Find("Line"); // Прикрепить к тумблеру объект стрелку
        strelka.GetComponent.<Animation>().Play("стрелка"); // Отклонение стрелки вправо
        TextVKLDVVOS.SetActive (false);  // Деактивация надписи "Текст включить 28 В"
        TextPrivod.SetActive (true); // Текст "нажать на ПРИВОД" активен
        dvvosemBOX.GetComponent.<Collider>().enabled =  false; // Деактивировать коллайдер 28 В
        PrivodBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер ПРИВОД
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audio28: AudioSource = GetComponent.<AudioSource>(); //Для аудио 28 В
        audio28.Play();// аудио 28 В
    }
    if (privod == true) {
        GetComponent.<Animation>().Play("ПРИВОД"); // старт анимации ПРИВОД\
        TextBoevoe.SetActive (true);
        TextPrivod.SetActive (false);
        PrivodBOX.GetComponent.<Collider>().enabled =  false; // Деактивировать коллайдер ПРИВОД
        BoevoeBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер БОЕВОЕ
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audioPrivod: AudioSource = GetComponent.<AudioSource>(); //Для аудио Привод
        audioPrivod.Play();// аудио ПРИВОД
    }
    
    if (boevoe == true) {
        GetComponent.<Animation>().Play("Боевое"); // старт анимации Боевое
        TextBoevoe.SetActive (false); // Деативация надписи "нажать на Боевое"
        TextPedal.SetActive (true); // Активация текста "Нажать на педаль"
        BoevoeBOX.GetComponent.<Collider>().enabled =  false; // Деактивировать коллайдер БОЕВОЕ
        PedalBOX.GetComponent.<Collider>().enabled =  true; // Активировать коллайдер Педали
        yield WaitForSeconds (0.38); // Задержка 0.38 сек
        var audioBoevoe: AudioSource = GetComponent.<AudioSource>(); //Для аудио БОЕВОЕ
        audioBoevoe.Play();// аудио БОЕВОЕ
    }

    if (pedal == true) 
    {
        GetComponent.<Animation>().Play("педаль стопора"); // старт анимации педаль стопора
        noga = GameObject.Find("Bip001 L нога"); // Прикрепить к педали объект - ногу
        noga.GetComponent.<Animation>().Play("Нога"); // старт анимации ноги
        PedalBOX.GetComponent.<Collider>().enabled =  false; // Деактивировать коллайдер Педали
        audioPedal.Play();// аудио Педаль
        yield WaitForSeconds(0.3);
        Raketi.GetComponent.<Animation>().Play("Ракеты"); //старт анимации подъема ракет
        Vizir.GetComponent.<Animation>().Play("Визир грубый");
        TextPedal.SetActive (false); // Деактивация текста "Нажать на педаль"
        pohod.SetActive (false); // Деактивация ламы ПОХОД
        audioRaketi.Play();// аудио БОЕВОЕ
        yield WaitForSeconds(4.0); //Задержка 4 секунды последующих действий
        TextRuchka.SetActive (true); // Активация надписи "Повернуть ручку"
        KontrPZperv.SetActive (true); // Активация лампы КОНТР ПЗ 1
        KontrPZvtor.SetActive (true); // Активация лампы КОНТР ПЗ 2
        pervnapr.SetActive (true); //активация подсветки 1 направляющей лампы
        podsvetU.SetActive (true); // Активация подсветки транспаранта УЧЕБНЫЙ
        podsvetV.SetActive (true);  // Активация подсветки шкалы Вольтметра (Нужно после того, как спустятся ракеты!!!)
        RuchkaBOX.GetComponent.<Collider>().enabled =  true; //Активация коллайдера ручки стопара
    }

    if (ruchka == true)
    {
        GetComponent.<Animation>().Play("ручка стопора");
        plecho.GetComponent.<Animation>().Play("рука стопор");
        var audioRuchka: AudioSource = GetComponent.<AudioSource>(); //Для аудио Ручки
        audioRuchka.Play();// аудио Ручка
        TextRuchka.SetActive (false); // Деактивация текста "Ручка"
        RuchkaBOX.GetComponent.<Collider>().enabled =  false; //Деактивация коллайдера ручки стопара
        PULTBOX.GetComponent.<Collider>().enabled =  true; //Активация коллайдера Пульта
        TextPULT.SetActive (true); //Активация текста используйте пульт наведения
        
      
    }
    if (PULT == true)
    {
        POVOROT.SetActive (true);
        var GUI = GameObject.Find("Terrain");
        var GUIscript = GUI.GetComponent("MENUOPERPEREVOD");
        var MENUPOVOROT = GameObject.Find("Terrain");
        var MENUPOVOROTscript = MENUPOVOROT.GetComponent("MENUOPERPOVOROTODIN");
        MENUPOVOROTscript.enabled = true;
        GUIscript.enabled = false;
        PEREVOD.SetActive (false);
    }

    //ОСВЕЩЕНИЕ
    if (OSVESHENIEstatic == true && OSVESHENIE == true) { //Если нажали в первый раз освещение и 24 ВКЛ
        GetComponent.<Animation>().Play("ОСВЕЩЕНИЕ ВКЛ"); // старт анимации тумблера
        LAMPA.SetActive (true); // Включаем объект ("свет")
        OSVESHENIEobjectDVA.SetActive (true); //Включаем мнимный объект для использования
        OSVESHENIEbox.GetComponent.<Collider>().enabled =  false; // Коллайдер отключить
        OSVESHENIEboxDVA.GetComponent.<Collider>().enabled =  true; //Коллайдер включить мнимого
        LAMPAobject.GetComponent(Renderer).material.color = Color(1, 0.98, 0.1, 1);
        var tumblSVETaudio: AudioSource = GetComponent.<AudioSource>(); //Для аудио 
        tumblSVETaudio.Play();// аудио 
        Debug.Log ("Hello1");
        OSVESHENIEstaticVKLUCHEN = true;
    }

    if (OSVESHENIEdva == true && OSVESHENIEstatic == true) {//Если нажали во второй раз освещение и 24 ВКЛ
        SVETvikl = GameObject.Find("тумблер СВЕТ"); // 
        SVETvikl.GetComponent.<Animation>().Play("ОСВЕЩЕНИЕ ВЫКЛ"); // старт анимации ноги
        LAMPA.SetActive (false); //Отключаем объект свет
        OSVESHENIEboxDVA.GetComponent.<Collider>().enabled =  false; //Коллайдер отключить мнимого
        OSVESHENIEbox.GetComponent.<Collider>().enabled =  true; // Коллайдер включить
        var tumblSVETaudioVIKL: AudioSource = GetComponent.<AudioSource>(); //Для аудио
        LAMPAobject.GetComponent(Renderer).material.color = Color(1, 1, 1, 1);
        tumblSVETaudioVIKL.Play();// аудио 
        Debug.Log ("2");
    }
}






//yield WaitForSeconds(4.0); //Задержка 4 секунды последующих действий, анимация рук к пульту
//GetComponent.<Animation>().Stop("24 ВКЛ");
    //var anim : AnimationClip;
    //Destroy(gameObject,.5f); //Для удаления объекта

    //target = GameObject.Find("");// Найти объект
//GetComponent.<Animation>().Play("стрелка");


//if (AnimVKLDVCH.IsPlaying("24 ВКЛ"))
//{
  //  TextVKLDVCH.active = false; // Деактивация надписи "Текст включить 24 В"
//}
