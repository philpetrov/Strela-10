#pragma strict

var TextIspolzKnopku : GameObject; // Используйте кнопки ТЕКСТ
var TextPEREVOD : GameObject; // Текст Тумблер в походное
var PULT : GameObject; // 
static var Boevoe2 = false; //Боевое2 тумблер
var Boevoe2Box : GameObject; // коллайдер Боевое



function Update () {

    if (Input.GetKey("left") || Input.GetKey("right") || Input.GetKey("up") || Input.GetKey("down")) {
        TextIspolzKnopku.SetActive (false);
        TextPEREVOD.SetActive (true);
        Boevoe2Box.GetComponent.<Collider>().enabled =  true; //Активация коллайдера тумблера Боевое
    }
         
}
function OnMouseUp (){
   
    if (Boevoe2 == true) {
        GetComponent.<Animation>().Play("Боевое в Походное"); // старт анимации включения 24 В
    }
}
// PULT.GetComponent.<Animation>().Play("пульт вправо");