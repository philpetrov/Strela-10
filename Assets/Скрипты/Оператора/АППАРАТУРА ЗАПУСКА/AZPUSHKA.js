var angle = 0;
var NIZ : GameObject;
var CameraODIN : GameObject;
var CameraVIZIR : GameObject;
var KOLCO : GameObject;
static var TextProdoljit = false;
static var PRODOLJIT2 = false; //Чтобы выйти из визира во второй раз
static var PRODOLJIT3 = false; //Чтобы выйти из визира в третий раз (режим ФОН 2)
static var PRODOLJIT4 = false; //Чтобы выйти из визира в третий раз (режим ФОН 3)
static var PushkavOblastiFON1 = false; //Статичная (пушка в области для появления самолета)
static var PushkavOblastiFON2 = false; //Статичная (пушка в области для появления самолета ФОН 2)
static var PushkavOblastiFON3 = false; //Статичная (пушка в области для появления самолета ФОН 3)

public var impact: AudioClip; //Для аудио



function Update() {
    
    //Если нажата клавиша вверх
    if (Input.GetKey("up")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 100;
        angle = Mathf.Clamp( angle, 1, 68 );
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);

    }
    //Если нажата вниз
    if (Input.GetKey("down")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 50;
        angle = Mathf.Clamp( angle, 1, 68 );
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);

    }

    
    if (Input.GetKey("down") && transform.localRotation.x > 0.01 && transform.localRotation.x < 2) {
        var audioPRIVODdown : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPRIVODdown.PlayOneShot(impact, 1.0F);

    }
    if (Input.GetKey("up") && transform.localRotation.x > 0.01 && transform.localRotation.x < 0.55) {
        var audioPRIVODup : AudioSource = GetComponent.<AudioSource>(); //Для аудио
        audioPRIVODup.PlayOneShot(impact, 1.0F);

    }

    if (AZKNOPKI.UgolNIZ == true && transform.localRotation.x > 0.22) { //Активация стрелки низ (1ый визир)

        NIZ.SetActive (true); // Активируем НИЗ
        TextProdoljit = true; // Статичная для КНОПОК, чтобы появился текст нажмите ENTER
        
    }
   
    if (AZKNOPKI.UgolNIZ == true && transform.localRotation.x < 0.22) { //деАктивация стрелки низ (1ый визир)
        NIZ.SetActive (false); // деактивируем НИЗ
    }

    

    if (AZKNOPKI.SLEJENIEkolco == true) { //Если нажали на визир 2 раз
        TextProdoljit = false;
    }
     
    //Проверка ФОНА 1 (2-ой заход в ВИЗИР)
    if (AZKNOPKI.UgolNIZ2 == true && transform.localRotation.x > 0.22) { //Активация стрелки низ (2ой визир)

        NIZ.SetActive (true); // Активируем НИЗ
    }
   
    if (AZKNOPKI.UgolNIZ2 == true && transform.localRotation.x < 0.22) { //деАктивация стрелки низ (2ой визир)

        NIZ.SetActive (false); // деактивируем НИЗ
    }

    //Угол для появления 1-ого или 2-ого вертолета
    if (AZKNOPKI.zashelvVIZIRvertolet1 == true && transform.localRotation.x > 0.19 && transform.localRotation.x < 0.33) { //Активация стрелки низ (2ой визир)
        //Условие для загорания текста "Продолжение ENTER" в кнопках
        //PRODOLJIT2 = true; //Чтобы выйти из визира во 2 раз, в КНОПКАХ...

        PushkavOblastiFON1 = true; //Статичная (пушка в области для появления самолета [В ПОВОРОТЕ])

    }
   


    //Проверка ФОНА 2 (3-ий заход в ВИЗИР)
    if (AZKNOPKI.UgolNIZ3 == true && transform.localRotation.x > 0.22) { //Активация стрелки низ (3ий визир)

        NIZ.SetActive (true); // Активируем НИЗ
    }
   
    if (AZKNOPKI.UgolNIZ3 == true && transform.localRotation.x < 0.22) { //деАктивация стрелки низ (3ий визир)

        NIZ.SetActive (false); // деактивируем НИЗ
    }


    //Угол для появления 1-ого или 2-ого вертолета ФОН 2
    if (AZKNOPKI.zashelvVIZIRvertolet2FON == true && transform.localRotation.x > 0.19 && transform.localRotation.x < 0.33) { //Активация стрелки низ (2ой визир)
        //Условие для загорания текста "Продолжение ENTER" в кнопках
       //PRODOLJIT3 = true; //Чтобы выйти из визира в 3 раз, в КНОПКАХ...

        PushkavOblastiFON2 = true; //Статичная (пушка в области для появления самолета [В ПОВОРОТЕ])
      
    }
    
    //ПРОВЕРКА ФОНА 3 (4-ый захд в ВИЗИР)

    if (AZKNOPKI.UgolNIZ4 == true && transform.localRotation.x > 0.22) { //Активация стрелки низ (4ий визир)

        NIZ.SetActive (true); // Активируем НИЗ
    }
   
    if (AZKNOPKI.UgolNIZ4 == true && transform.localRotation.x < 0.22) { //деАктивация стрелки низ (3ий визир)

        NIZ.SetActive (false); // деактивируем НИЗ
    }

    if (AZKNOPKI.SLEJENIEkolco3 == true && transform.localRotation.x < 0.25 && transform.localRotation.x > 0.0087 && Input.GetAxis("Vertical")) {
      
        

    }

    //Угол для появления 1-ого или 2-ого вертолета ФОН 3
    if (AZKNOPKI.zashelvVIZIRvertolet3FON == true && transform.localRotation.x > 0.19 && transform.localRotation.x < 0.33) { //Активация стрелки низ (2ой визир)
        //Условие для загорания текста "Продолжение ENTER" в кнопках
        //PRODOLJIT4 = true; //Чтобы выйти из визира в 4 раз, в КНОПКАХ...

        PushkavOblastiFON3 = true; //Статичная (пушка в области для появления самолета [В ПОВОРОТЕ])

    }

    if (transform.localRotation.x < 0.19 || transform.localRotation.x > 0.33) { //Если пушка не в области
        PushkavOblastiFON1 = false; //Статичная (пушка в области для появления самолета [В ПОВОРОТЕ]) ФАЛС
        PushkavOblastiFON2 = false;
        PushkavOblastiFON3 = false;

    }


}