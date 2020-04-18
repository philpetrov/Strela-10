//Меню
// Прописываем переменные для галочек
var dvchetire = false;
var dvvosem = false;
var privod = false;
var boevoe = false;
var animat : AnimationClip;

//При нажатии
function OnMouseUp (){
    if (dvchetire == true) {
	    GetComponent.<Animation>().Play("24 ВКЛ"); // старт анимации
	}
    if (dvvosem == true) {
	    GetComponent.<Animation>().Play("28 ВКЛ"); // старт анимации
	}
}

//Destroy(gameObject,.5f); //Для удаления объекта