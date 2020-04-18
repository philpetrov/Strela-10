var angle = 0;
public var impact: AudioClip;
public var impactdva: AudioClip;


function Start () {
  
}
function Update() {
    

    if (Input.GetKey("up")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 80;
        angle = Mathf.Clamp( angle, 1, 68 );
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);
        
        if (KNOPKI.Boevoe2 == true) // Если нажал в ПОХОДНОЕ
        {
            angle += Input.GetAxis("Vertical") * Time.deltaTime * 80;
            angle = Mathf.Clamp( angle, 0, 0 );
            transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);
        }
    }
    if (Input.GetKey("down")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 80;
        angle = Mathf.Clamp( angle, 1, 68 );
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);
     
        if (KNOPKI.Boevoe2 == true) // Если нажал в ПОХОДНОЕ
        {
           
            angle += Input.GetAxis("Vertical") * Time.deltaTime * 80;
            angle = Mathf.Clamp( angle, 0, 0 );
            transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);
        }
    }

    if (POVOROT.DOVERNUT == false && Input.GetKey("down") && transform.localRotation.x > 0.005 && transform.localRotation.x < 0.01) {
        Audioraket = false; 
        RAKETI = GameObject.Find("РАКЕТЫ 2"); // Найти
        OPORA = GameObject.Find("mesh40"); // найти
        OPORA.GetComponent.<Animation>().Play("ОПОРА в походное"); // Анимация ракеты в поход
        RAKETI.GetComponent.<Animation>().Play("Ракеты в походное"); // анимация опоры в поход
        angle = Mathf.Clamp(angle, 0, 0); //Угол вращения 0
        TextUgoldva = GameObject.Find("Макс.угол"); // Найти текст
        TextUgoldva.SetActive (false);
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










