var angle = 0;

function Update() {


    if (Input.GetKey("up")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 125;
        angle = Mathf.Clamp(angle, 0, 90);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);

    }
    if (Input.GetKey("down")) {
        angle += Input.GetAxis("Vertical") * Time.deltaTime * 70;
        angle = Mathf.Clamp(angle, 0, 90);
        transform.localRotation = Quaternion.AngleAxis(angle, Vector3.right);

    }

}