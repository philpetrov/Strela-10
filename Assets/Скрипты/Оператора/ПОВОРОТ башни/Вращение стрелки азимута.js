//Вращение стрелки азимута
var angle = 0;
var speedrotLEFT : int = 60; //Скорость вращения
var speedrotRIGHT : int = 60; // Ск вправо

function Update() {

    //Вращение вправо
    if (Input.GetKey("right")) {
        angle += Input.GetAxis("Horizontal") * Time.deltaTime * speedrotRIGHT;
        angle = Mathf.Clamp(angle, -3000, 3000);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.down);

    }
    //Вращение влево
    if (Input.GetKey("left")) {
        angle += Input.GetAxis("Horizontal") * Time.deltaTime * speedrotLEFT;
        angle = Mathf.Clamp(angle, -3000, 3000);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.down);

    }

    if (KNOPKI.RUCHKA == false && angle > 0) {
        speedrotRIGHT = 60;
        speedrotLEFT = 30;
    }
    if (KNOPKI.RUCHKA == false && angle < 0) {
        speedrotRIGHT = 30;
        speedrotLEFT = 60;
    }
    if (KNOPKI.RUCHKA == false && angle == 0) {
        speedrotRIGHT = 60;
        speedrotLEFT = 60;
    }
    if (KNOPKI.RUCHKA == true && angle > 0) { //Если поворачиваем ручку стопора
        speedrotLEFT = 1; //Скорость вращения влево
        speedrotRIGHT = 20; //Скорость вращения вправо

    }
    if (KNOPKI.RUCHKA == true && angle < 0) { //Если поворачиваем ручку стопора и угол меньше нуля
        speedrotLEFT = 20; // Скорость вращения влево
        speedrotRIGHT = 1; //Скорость вращения вправо

    }


    // Если подвел в 0 с одной стороны
   if (KNOPKI.RUCHKA == true && angle == 0 || KNOPKI.RUCHKA == true && angle == 360 || 
        KNOPKI.RUCHKA == true && angle == -360 || KNOPKI.RUCHKA == true && angle == 720 ||
        KNOPKI.RUCHKA == true && angle == -720 || KNOPKI.RUCHKA == true && angle == 1080 ||
        KNOPKI.RUCHKA == true && angle == -1080 || KNOPKI.RUCHKA == true && angle == 1440 ||
        KNOPKI.RUCHKA == true && angle == -1440 || KNOPKI.RUCHKA == true && angle == 1800 ||
        KNOPKI.RUCHKA == true && angle == -1800 || KNOPKI.RUCHKA == true && angle == 2160 ||
        KNOPKI.RUCHKA == true && angle == -2160 || KNOPKI.RUCHKA == true && angle == 2520 ||
        KNOPKI.RUCHKA == true && angle == -2520 || KNOPKI.RUCHKA == true && angle == 2880 ||
        KNOPKI.RUCHKA == true && angle == -2880) { // Если нажал в ПОХОДНОЕ и угол 0 { // Если нажал в ПОХОДНОЕ и угол 0

        speedrotLEFT = 0;
        speedrotRIGHT = 0;
        angle = Mathf.Clamp(angle, -3000, 3000);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.zero);

    }


}