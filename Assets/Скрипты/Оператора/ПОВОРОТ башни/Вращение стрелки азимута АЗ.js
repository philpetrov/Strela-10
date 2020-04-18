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


    if (angle > 0) {
        speedrotRIGHT = 60;
        speedrotLEFT = 30;
    }
    if (angle < 0) {
        speedrotRIGHT = 30;
        speedrotLEFT = 60;
    }
    if (angle == 0) {
        speedrotRIGHT = 60;
        speedrotLEFT = 60;
    }


}