var rotateSpeed = 120.0; // скорость поворота
var angle = 0; // значение угла

function Update() {
    if (Input.GetKey("up")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 80;
        angle = Mathf.Clamp(angle, 0, 20);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);
    }
    else {
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.zero);
    }
    if (Input.GetKey("down")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 80;
        angle = Mathf.Clamp(angle, -13, 0);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);
    }

    //Сброс в исходное при выходе из визира
    if (AZPUSHKA.TextProdoljit == true && AZKNOPKI.SBROSenter1 == true) { //Сброс пульта в исходное при выходе из визира 1 раз
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.zero);
    }



    //Сброс в исходное 
    if (AudioRaket.SVET == false) {
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.zero);
    }
}

//angle += Input.GetAxis("Horizontal") * Time.deltaTime * 80;
//transform.localRotation = Quaternion.AngleAxis(angle, Vector3.zero);