static var Audioraket = true; //для Звук ракет  для обращения в другой скрипт
var angle = 0;
public var impact: AudioClip; //Для аудио
public var impactdva: AudioClip;
var TextUgol : GameObject; //Текст ПН на себя
var KontrPZpervdva : GameObject; // Подсветка КОНТР ПЗ 1
var KontrPZvtor : GameObject; // Подсветка КОНТР ПЗ 2
var pervnapr : GameObject; // Подсветка 1 направляющей
var podsvetV : GameObject; // Подсветка шкалы Вольтметра
var podsvetU : GameObject; // Подсветка транспаранта Учебный
var uchebni : GameObject; // Транспарант учебный
var ZVUKVPOXOD : GameObject; 
public var impactPUSH: AudioClip;

function Start () {
    //uchebni.GetComponent(Renderer).material.color = Color(.100, .112, .800, .255); //синий цвет транспаранта УЧЕБНЫЙ
}

function Update() {
    
    //Если нажата клавиша вверх
    if (Input.GetKey("up")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 80;
        angle = Mathf.Clamp( angle, 1, 68 );
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);

        //Отключаем клавишу вверх
        if (Audioraket == false) {
            angle += Input.GetAxis("Vertical") * Time.deltaTime * 1;   
        }
    }
    //Если нажата вниз
    if (Input.GetKey("down")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 80;
        angle = Mathf.Clamp( angle, 1, 68 );
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);
        //Если нажата ручка, увеличить угол поворота до 83 ВН
        if (KNOPKI.RUCHKA == true && POVOROT.DOVERNUT == false) {
            angle += Input.GetAxis("Vertical") * Time.deltaTime * 80;
            angle = Mathf.Clamp( angle, -7, 68 );
            transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);
           
        }
    }

    
    //Если Ракеты находятся в 83 ВН, начать перевод качающей части.
    if (POVOROT.DOVERNUT == false && Input.GetKey("down") && transform.localRotation.x > -10 && transform.localRotation.x < 0) {
        RAKETI = GameObject.Find("РАКЕТЫ 2"); // Найти ракеты "объект"\
        RAKETI.GetComponent.<AudioSource>().Play(); //Для аудио
        Audioraket = false; 
        VIZIRPOX = GameObject.Find("ВИЗИР Local"); // Найти визир "объект"
        OPORA = GameObject.Find("mesh40"); // найти "опору" объект
        OPORA.GetComponent.<Animation>().Play("ОПОРА в походное"); // Анимация ракеты в поход
        VIZIRPOX.GetComponent.<Animation>().Play("Визир грубый в поход");
        RAKETI.GetComponent.<Animation>().Play("Ракеты в походное"); // анимация опоры в поход
        TextUgol.SetActive (false);
        KontrPZpervdva.SetActive (false); 
        KontrPZvtor.SetActive (false); 
        podsvetV.SetActive (false); 
        pervnapr.SetActive (false);
        podsvetU.SetActive (false);
        //uchebni.GetComponent(Renderer).material.color = Color(.5, .800, .800, .255);// Голубой цвет транспаранта
        angle = Mathf.Clamp(angle, 0, 0); //Угол вращения 0
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.zero); //Застопорить в нулевом положении Вектор3
        
    }
    if (POVOROT.DOVERNUT == false) {
        var POVOROtscript = GameObject.Find("ПОВОРОТ");
        POVOROtscript.GetComponent("POVOROT").enabled = false;
    }
    if (Input.GetKey("down") && transform.localRotation.x > 0.01 && transform.localRotation.x < 2) {
        var audioPRIVODdown : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPRIVODdown.PlayOneShot(impact, 1.0F);

    }
    if (Input.GetKey("up") && transform.localRotation.x > 0.01 && transform.localRotation.x < 0.55) {
        var audioPRIVODup : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPRIVODup.PlayOneShot(impact, 1.0F);

    }

    
}










