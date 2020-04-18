var angle = 0;

function Update() {


    if (Input.GetKey("up")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 105;
        angle = Mathf.Clamp(angle, 0, 90);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);

        if (KNOPKI.Boevoe2 == true) // Если нажал в ПОХОДНОЕ
        {
            angle += Input.GetAxis("Vertical") * Time.deltaTime * 105;
            angle = Mathf.Clamp(angle, 0, 0);
            transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);
        }
    }
    if (Input.GetKey("down")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 105;
        angle = Mathf.Clamp(angle, 0, 90);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);

        if (KNOPKI.Boevoe2 == true) // Если нажал в ПОХОДНОЕ
        {

            angle += Input.GetAxis("Vertical") * Time.deltaTime * 105;
            angle = Mathf.Clamp(angle, 0, 0);
            transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);
        }
    }
    if (POVOROT.DOVERNUT == false && Input.GetKey("down") && transform.localRotation.x > 0.005 && transform.localRotation.x < 0.01) {
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.zero);
    }
}