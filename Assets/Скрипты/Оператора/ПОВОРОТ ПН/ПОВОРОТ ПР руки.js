var rotateSpeed = 120.0; // скорость поворота
var angle = 200; // максим. значение угла

function Update() {
    var rotateAmount = rotateSpeed * Time.deltaTime;

    if (Input.GetKey("right")) {
        angle += Input.GetAxis("Horizontal") * Time.deltaTime * 80;
        angle = Mathf.Clamp( angle, 0, 20 );
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.left);
    }
    else {
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.zero);
    }
    if (Input.GetKey("left")) {
        angle += Input.GetAxis("Horizontal") * Time.deltaTime * 80;
        angle = Mathf.Clamp(angle, -20, 0);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.left);
    }

    if (Input.GetKey("up")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 80;
        angle = Mathf.Clamp(angle, 0, 7);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.down);
    }

    if (Input.GetKey("down")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 80;
        angle = Mathf.Clamp(angle, -10, 0);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.down);
    }


}