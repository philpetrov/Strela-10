var angle = 0; // максим. значение угла

function Update() {



    if (Input.GetKey("right")) {
        angle += Input.GetAxis("Horizontal") * Time.deltaTime * 80;
        angle = Mathf.Clamp(angle, 0, 20);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.up);
    }
    else {
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.zero);
    }
    if (Input.GetKey("left")) {
        angle += Input.GetAxis("Horizontal") * Time.deltaTime * 160;
        angle = Mathf.Clamp(angle, -20, 0);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.up);
    }


    //Сброс в исходное 
    if (AudioRaket.SVET == false) {
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.zero);
    }
}