#pragma strict

var VKLPOU = false;  // ВКЛ. ПОУ
var AOZ = false; // галочка 1 БЛОК У  (проверка лампы КОНТР. ВЕНТ)
var AOZ2 = false; // галочка 2 БЛОК У  (нажатие в КОНТР. ВМП)
var AOZ3 = false; // галочка 2 БЛОК У  (гасится РЕЖИМ ИЗМЕРЕН)
var KONTRVMP = false; // галочка ВКЛ. КОНТР.ВМП
var BOEVOIDEJURNI = false; // галочка тумблера Боевой - Дежурный 
var AOZ4 = false; // галочка 4 БОКСА БЛОКА У для проверки 115 В
var KONTROLUP4 = false; // Если нажали на КОНТРОЛЬ УПЧ
var KONTROLVZ = false; // Если нажмем на КОНТРОЛЬ ВЗ
var KONTROLPOMEX = false; // Если нажмем на КОНТРОЛЬ ПОМЕХ
var KONTROLSD = false; // Если нажмем на КОНТРОЛЬ СД
var KONTROLNS = false; // Если нажмем на КОНТРОЛЬ НС
var tripiatdeciat = false; // Если нажмем +30 50
var Deciattridcat = false;  // Если нажмем 10 30
var minuspiatdeciat = false; //Если нажмем -50
var MANEVR = false; // Если нажмем маневр
var BOEVOIDEJURNIOFF = false; // галочка тумблера Боевой - Дежурный ВЫКЛ
var AOZOFF = false; // ВЫКЛ. АОЗ

var VKLPOUBOX : GameObject; // тумблер ВКЛ ПОУ
var BlokUBOX : GameObject; // БЛОК У БОКС 1
var BlokUKONTRVMPBOX2 : GameObject; //Блок У БОКС 2 для нажатия контр. ВМП
var BlokUproveritRIJIMBOX3 : GameObject; // БЛОК У БОКС 3 для проверки (гасится режим ИЗМЕРЕН)
var BlokUproverit115BOX4 : GameObject; // БЛОК У БОКС 4 для проверки 115 В
var USLOVIERABOTIBOX : GameObject; // Бокс условие работы для включения КОНТР. ВМП
var BOEVOIDEJURNIIBOX : GameObject; // Бокс БОЕВОЙ - ДЕЖУРНЫЙ
var KONTROLUP4BOX : GameObject; // БОКС КОНТРОЛЬ УПЧ
var KONTROLVZBOX : GameObject; // БОКС КОНТРОЛЬ ВЗ
var KONTROLPOMEXBOX : GameObject; // БОКС КОНТРОЛЬ ПОМЕХ
var KONTROLSDBOX : GameObject; // БОКС КОНТРОЛЬ СД
var KONTROLNSBOX : GameObject; // БОКС КОНТРОЛЬ НС
var tripiatdeciatBOX : GameObject; // БОКС +30 - +50
var DeciattridcatBOX : GameObject; // БОКС +30 - 10
var minuspiatdeciatBOX : GameObject; //БОКС -10 - -50
var MANEVRBOX : GameObject; //БОКС МАНЕВР
var BOEVOIDEJURNII2BOX : GameObject; // Бокс БОЕВОЙ-ДЕЖУРНЫЙ 2
var AOZOFFBOX : GameObject; // ВЫКЛ. АОЗ

var Soldatmashina : GameObject; // солдат в машине ("soldier")
var SoldatmashinaCAMERA : GameObject; // солдат в машине (КАМЕРА) ("soldiercam")
var SoldatBLOKU : GameObject; // Солдат БЛОК У ("Солдат БЛОК У")
var SoldatBLOKUcamera : GameObject; //Солдат БЛОК У (КАМЕРА) ("Солдат БЛОК У камера")
var PodsvetVKLAOZ : GameObject; // Подсветка ВКЛ.АОЗ
var PodsvetKONTRVENT : GameObject; // Подсветка КОНТР.ВЕНТ.
var PodsvetDejurnii : GameObject; // ПОдсветка Дежурный
var PodsvetRejimIzmerenii : GameObject; // Подсветка Режим измерений
var PodsvetIZLUCHENIE : GameObject; // Подсветка ВНИМАНИЕ - ИЗЛУЧЕНИЕ
var PodsvetBOEVOI : GameObject; // Подсветка БОЕВОЙ
var Podsvet115V : GameObject; // Подсветка 115 В
var PodsvetZONA : GameObject; // Подсветка ЗОНА
var PodsvetNAZAD : GameObject; // Подсветка НАЗАД
var PodsvetSIGNAL : GameObject; //  Подсветка СИГНАЛ
var PodsvetAP4 : GameObject; // ПОДСВЕТКА АПЧ
var PodsvetTOKMAGN : GameObject; // Подсвтека ТОГ МАГН.
var PodsvetKONTROLNS : GameObject; //Подсветка КОНТРОЛЬ НС

var LEVARUKA : GameObject; // Левая рука для анимации
var SIGNALstrelka : GameObject; // Сигнал стрелка
var AP4strelka : GameObject; // АПЧ стрелка
var TOKMAGNstrelka : GameObject; // ТОК МАГН. СТРЕЛКА

var TextVKLPOU1 : GameObject; //Текст ВКЛ ПОУ 1
var TextVKLPOU2 : GameObject; //Текст ВКЛ ПОУ 2
var TextVKLPOU3 : GameObject; //Текст ВКЛ ПОУ 3
var TextProveritKONTRVENT : GameObject; // Текст проверить КОНТР. ВЕНТ
var TextProveritKONTRVENT2 : GameObject; // Текст проверить КОНТР. ВЕНТ2
var TextPodojdat180odin : GameObject; // Текст пододать 180 с
var TextPodojdat180dva : GameObject;
var TextPodojdat180tri : GameObject;
var TextDojditecDejurnii : GameObject; // Текст дождатся 20 секунд до загорания ДЕЖУРНЫЙ
var TextustanovitKONTRVMP1 : GameObject; // Текст установить КОНТР.ВМП на блоке У (ВВЕРХУ!)
var TextustanovitKONTRVMP2 : GameObject; // Текст установить КОНТР.ВМП на блоке У 2
var TextustanovitKONTRVMP1VNIZU : GameObject; // Текст установить КОНТР.ВМП на блоке У (ВИД ВНИЗУ!)
var TextustanovitKONTRVMP2VNIZU : GameObject; // Текст установить КОНТР.ВМП на блоке У 2 (ВИД ВНИЗУ!)
var TextDejurniiVNIZU1 : GameObject; // Текст Дежурный - БОЕВОЙ на ПОУ ... 1 (ВНИЗУ)
var TextDejurniiVNIZU2 : GameObject; //Текст Дежурный - БОЕВОЙ на ПОУ ... 2 (ВНИЗУ)
var TextDejurniiVNIZU3 : GameObject; //Текст Дежурный - БОЕВОЙ на ПОУ ... 3 (ВНИЗУ)
var TextDejurniiVVERXY1 : GameObject; // Текст Дежурный - БОЕВОЙ на ПОУ ... 1 (ВВЕРХУ)
var TextDejurniiVVERXY2 : GameObject; //Текст Дежурный - БОЕВОЙ на ПОУ ... 2 (ВВЕРХУ)
var TextProveritRejimIZMERENVverxy : GameObject; // Текст проверить гасится РЕЖИМ ИЗМЕРЕНИЙ ВВЕРХУ
var TextProveritRejimIZMERENVvnizu1 : GameObject; // Текст ПРОВЕРИТЬ РЕЖИМ ИЗМЕРЕН. текст внизу 1
var TextProveritRejimIZMERENVvnizu2 : GameObject; // Текст ПРОВЕРИТЬ РЕЖИМ ИЗМЕРЕН. текст внизу 1
var TextProveritRejimIZMERENVvnizu3 : GameObject; // Текст ПРОВЕРИТЬ РЕЖИМ ИЗМЕРЕН. текст внизу 1
var TextDofditecBOEVOIVVERXY : GameObject; // Текст дождитесь загорания лампы БОЕВОЙ ВВЕРХУ
var TextProverit115VVERXY : GameObject; // Текст проверить загорание 115 В ВВЕРХУ!
var TextProverit115VVERXY2 : GameObject; // Текст проверить загорание 115 В ВВЕРХУ!
var TextProveritstrelkiVNIZU : GameObject; // Текст проверить загорание стрелки ВНИЗУ!
var TextProveritstrelki2VNIZU : GameObject; // Текст проверить загорание стрелки 2 ВНИЗУ!
var TextProveritstrelki3VNIZU : GameObject; // Текст проверить загорание стрелки 3 ВНИЗУ!
var TextProveritstrelki4VNIZU : GameObject; // Текст проверить загорание стрелки 4 ВНИЗУ!
var TextNajatKONTROLUP4VNIZU : GameObject; // Текст НАЖАТЬ КОНТРОЛЬ УПЧ ВНИЗУ 1
var TextNajatKONTROLUP4VNIZU2 : GameObject; // Текст НАЖАТЬ КОНТРОЛЬ УПЧ ВНИЗУ 2
var TextNajatKONTROLVZVNIZU1 : GameObject;// Текст НАЖАТЬ КОНТРОЛЬ ВЗ ВНИЗУ 1
var TextNajatKONTROLVZVNIZU2 : GameObject;// Текст НАЖАТЬ КОНТРОЛЬ ВЗ ВНИЗУ 1
var TextKONTRPOMEX : GameObject; // Текст вкл. КОНТР ПОМЕХ 1
var TextKONTROLSD1 : GameObject; // Текст вкл. КОНТР CД 1
var TextKONTROLSD2 : GameObject; // Текст вкл. КОНТР CД 2
var TextKONTROLSD3 : GameObject; // Текст вкл. КОНТР CД 3
var TextKONTROLNS1 : GameObject; // Текст вкл. КОНТР НС 1
var TextKONTROLNS2 : GameObject; // Текст вкл. КОНТР НС 2
var TextTemperatura1 : GameObject; // Текст ВКЛ. Температуру 1 
var TextTemperatura2 : GameObject; // Текст ВКЛ. Температуру 2
var TextTemperatura3 : GameObject; // Текст ВКЛ. Температуру 3
var TextTemperatura4 : GameObject; // Текст ВКЛ. Температуру 4 
var TextTemperatura5 : GameObject; // Текст ВКЛ. Температуру 5
var TextVIKLBOEVOI1VNIZU : GameObject; // Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ 1 ВНИЗУ
var TextVIKLBOEVOI2VNIZU : GameObject; // Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ 1 ВНИЗУ
var TextVIKLBOEVOIVVERXY : GameObject; // Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ ВВЕРХУ
var TextVIKLAOZ : GameObject; // Текст ВЫКЛ АОЗ ВВЕРХУ

var CameraUsloviaRaboti : GameObject; // Камера на УСЛОВИЯ РАБОТЫ
var CameraStrelki : GameObject; // Камера на стрелки

var PO500ZVUK : GameObject; // Звук ПО500-А с объектом.

static var KONTRVMPproveren = false; //Статичная после проверки КОНТР. ВМП доступ в Update для нажатия ENTER
static var KONTRVMPvkluchen = false;

static var dvadcatsecproshlo = false; // 20 секунд не прошло
static var zaderjkaBOIVOIproshlo = false; // Задержка БОЕВОЙ не прошло

static var vernulickPOUposleLAMPIVMP = false; // Нажали ентер после проверки лампы ВМП
static var vernulickPOUposleREjimIZMEREN = false; // Нажали ентер после проверки РЕЖИМ измерений и вернулись к ПОУ

static var RejimIZMERENIIpogasla = false; // После проверки погашенной РЕЖИМА ИЗМЕРЕНИЯ ENTER
static var Strelkiprovereni = false; // Статичная, стрелки еще не проверены.

static var TemperaturaUstanovlena = false; // Температура или МАНЕВР установлены

static var NIZcamera = false; // Для меню 
static var VERXcamera = false; // Для меню 

private var zaderjkasekund = false; // Приват, для залдержки в UPdate 20 секунд
private var zaderjkaBOEVOI = false; // Приват, для задержки лампы БОЕВОЙ 13 секунд





function Wait (time : float) {

    if (zaderjkasekund == true) { // Если нажали ВКЛ. ПОУ
        yield WaitForSeconds (time); //Ждать 20 секунд
    
        dvadcatsecproshlo = true; // 20 секунд прошло
        zaderjkasekund = false;
    }

    if (zaderjkaBOEVOI == true) { // Если нажали ВКЛ. БОЕВОЙ
        yield WaitForSeconds (time); //Ждать 13 секунд

        zaderjkaBOIVOIproshlo = true; // Задержка Боевой прошла
        zaderjkaBOEVOI = false; //Возвращаем
    }

    

}

    function Start () {

        VERXcamera = true;
    }


    function Update () {

        if (dvadcatsecproshlo == true && vernulickPOUposleLAMPIVMP == true) { // Условие  доступа к ручке УСЛОВИЯ РАБОТЫ, до 20 секунд и возвращения к ПОУ
            PodsvetDejurnii.SetActive (true); // ВКЛ. подсветку ДЕЖУРНЫЙ
            TextDojditecDejurnii.SetActive (false); // деАктивация надписи дождитесь загорания ДЕЖУРНЫЙ
           
            TextustanovitKONTRVMP1.SetActive (true);// ВКЛ Текст установить КОНТР.ВМП на блоке У
            TextustanovitKONTRVMP2.SetActive (true);
            BlokUKONTRVMPBOX2.GetComponent.<Collider>().enabled = true; // Активация 2 коллайдера БЛОКА У
            dvadcatsecproshlo = false;
            vernulickPOUposleLAMPIVMP = false;
            VERXcamera = true;
            NIZcamera = false;
        }

        if (zaderjkaBOIVOIproshlo == true && vernulickPOUposleREjimIZMEREN == true) { // Условие доступа к БОКСУ БОКА У для проверки 115 В
            BlokUproverit115BOX4.GetComponent.<Collider>().enabled = true; // Активация коллайдера БЛОКА У для проверки 115 В
            TextDofditecBOEVOIVVERXY.SetActive (false); // Выкл текст дождитесь
            TextProverit115VVERXY.SetActive (true); // ВКЛ текст 115 ВВЕРХУ 1
            TextProverit115VVERXY2.SetActive (true); // ВКЛ текст 115 ВВЕРХУ 2
            PodsvetBOEVOI.SetActive (true); // ВКЛ подсветку сигнальной лампы БОЕВОЙ
            
            SIGNALstrelka.GetComponent.<Animation>().Play("СИГНАЛ АОЗ");
            AP4strelka.GetComponent.<Animation>().Play("АПЧ стрелка АОЗ");
            TOKMAGNstrelka.GetComponent.<Animation>().Play("ТОК МАГН");
            zaderjkaBOIVOIproshlo = false;
            vernulickPOUposleREjimIZMEREN = false;

        }

        if (Input.GetKey("return") && KONTRVMPproveren == true) { // Если нажали ентер при проверке КОНТР. ВМП
            Soldatmashina.SetActive (true); // активация солата в машине ("soldier")
            SoldatmashinaCAMERA.SetActive (true); //активация солдата в машине (КАМЕРЫ) ("soldiercam")
            SoldatBLOKU.SetActive (false); // деАктивация солдата у БЛОКА У ("Солдат БЛОК У")
            SoldatBLOKUcamera.SetActive (false); // деАктивация камеры солдата у БЛОКА У ("Солдат БЛОК У камера")
            TextPodojdat180odin.SetActive (false); // деАктивация надписи подождать 180 сек
            TextPodojdat180dva.SetActive (false); // деАктивация надписи подождать 180 сек
            TextPodojdat180tri.SetActive (false); // деАктивация надписи подождать 180 сек
            TextDojditecDejurnii.SetActive (true);
            vernulickPOUposleLAMPIVMP = true; // Нажали ентер после проверки лампы ВМП
            KONTRVMPproveren = false;
            VERXcamera = true;
            NIZcamera = false;
        }

        if (zaderjkasekund == true) { //Кол-во секунд для ф-ции ТАЙМ
            Wait(20.0);
        }

        if (zaderjkaBOEVOI == true) {
            Wait(13.0); // Задержка 13 секунд для загорания лампы БОЕВОЙ

        }



        if (Input.GetKey("return") && KONTRVMPvkluchen == true) { //Если возвращаемся для включения ДЕЖУРНЫЙ - БОЕВОЙ
            
            Soldatmashina.SetActive (true); // активация солата в машине ("soldier")
            SoldatmashinaCAMERA.SetActive (true); //активация солдата в машине (КАМЕРЫ) ("soldiercam")
            SoldatBLOKU.SetActive (false); // деАктивация солдата у БЛОКА У ("Солдат БЛОК У")
            SoldatBLOKUcamera.SetActive (false); // деАктивация камеры солдата у БЛОКА У ("Солдат БЛОК У камера")
            CameraUsloviaRaboti.SetActive (false); // Выключение камеры на УСЛОВИЕ РАБОТЫ
            BOEVOIDEJURNIIBOX.GetComponent.<Collider>().enabled = true; // Активация коллайдера БОЕВОЙ - ДЕЖУРНЫЙ
            KONTRVMPvkluchen = false;
            VERXcamera = true;
            NIZcamera = false;
            (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = true; // Включить нажимающий палец (ВВЕРХУ)
        }

        if (Input.GetKey("return") && RejimIZMERENIIpogasla == true) { // Если нажали enter и уже проверили погасшую РЕЖИМ ИЗМЕРЕНИЙ
            Soldatmashina.SetActive (true); // активация солата в машине ("soldier")
            SoldatmashinaCAMERA.SetActive (true); //активация солдата в машине (КАМЕРЫ) ("soldiercam")
            SoldatBLOKU.SetActive (false); // деАктивация солдата у БЛОКА У ("Солдат БЛОК У")
            SoldatBLOKUcamera.SetActive (false); // деАктивация камеры солдата у БЛОКА У ("Солдат БЛОК У камера")
            TextProveritRejimIZMERENVvnizu1.SetActive (false); // Выкл. ПРОВЕРИТЬ РЕЖИМ ИЗМЕРЕН. текст внизу 1
            TextProveritRejimIZMERENVvnizu2.SetActive (false); // Выкл. ПРОВЕРИТЬ РЕЖИМ ИЗМЕРЕН. текст внизу 2
            TextProveritRejimIZMERENVvnizu3.SetActive (false); // Выкл. ПРОВЕРИТЬ РЕЖИМ ИЗМЕРЕН. текст внизу 3
            TextDofditecBOEVOIVVERXY.SetActive (true); // Текст дождитесь загорания лампы БОЕВОЙ ВВЕРХУ
            vernulickPOUposleREjimIZMEREN = true; // для доступа к БОКСУ спустя 13 сек
            RejimIZMERENIIpogasla = false;
            VERXcamera = true;
            NIZcamera = false;
        }

        if (Input.GetKey("return") && Strelkiprovereni == true) { // Если проверили 3 стрелки снизу, то включить др. надпись
            Strelkiprovereni = false; // Возвращаем
            TextProveritstrelkiVNIZU.SetActive (false); // ВЫКЛ текст проверить стрелки ВНИЗУ
            TextProveritstrelki2VNIZU.SetActive (false); // ВЫКЛ текст проверить стрелки 2 ВНИЗУ
            TextProveritstrelki3VNIZU.SetActive (false); // ВЫКЛ текст проверить стрелки 3 ВНИЗУ
            TextProveritstrelki4VNIZU.SetActive (false); // ВЫКЛ текст проверить стрелки 4 ВНИЗУ
            TextNajatKONTROLUP4VNIZU.SetActive (true); // ВКЛ текст нажать КОНТРОЛЬ УПЧ
            TextNajatKONTROLUP4VNIZU2.SetActive (true); // ВКЛ текст нажать КОНТРОЛЬ УПЧ 2
            KONTROLUP4BOX.GetComponent.<Collider>().enabled = true; // Включаем БОКС КОНТРОЛЬ УПЧ
        }

        if (Input.GetKey("return") && TemperaturaUstanovlena == true) {// Если Температура или МАНЕВР установлены и нажимаем ENTER
            
            TextVIKLBOEVOIVVERXY.SetActive (true);// Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ ВВЕРХУ ВКЛ
            BOEVOIDEJURNII2BOX.GetComponent.<Collider>().enabled = true; //  ВКЛ. БОКС БОЕВОЙ ДЕЖУРНЫЙ ВЫКЛ
            Soldatmashina.SetActive (true); // активация солата в машине ("soldier")
            SoldatmashinaCAMERA.SetActive (true); //активация солдата в машине (КАМЕРЫ) ("soldiercam")
            SoldatBLOKU.SetActive (false); // деАктивация солдата у БЛОКА У ("Солдат БЛОК У")
            SoldatBLOKUcamera.SetActive (false); // деАктивация камеры солдата у БЛОКА У ("Солдат БЛОК У камера")
            TemperaturaUstanovlena = false;
            VERXcamera = true;
            NIZcamera = false;
            CameraUsloviaRaboti.SetActive (false); // Выключение камеры на УСЛОВИЕ РАБОТЫ
            CameraStrelki.SetActive (true); // Камера для проверок стрелок
            (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = true; // Включить нажимающий палец (ВВЕРХУ)
            }
        }





    function OnMouseUp (){
        if (VKLPOU == true) { // Если включили ПОУ
            VKLPOUBOX.GetComponent.<Collider>().enabled = false; // деАктивация тумблера ВКЛ ПОУ
            BlokUBOX.GetComponent.<Collider>().enabled = true; // Активация коллайдера БЛОКА У
            GetComponent.<Animation>().Play("ВКЛ ПОУ"); // старт анимации ВКЛ ПОУ
            TextVKLPOU1.SetActive (false); //Деактивация текста 1 - вкл ПОУ 
            TextVKLPOU2.SetActive (false);
            TextVKLPOU3.SetActive (false);
            TextProveritKONTRVENT.SetActive (true); // Активация надписи "Проверить КОНТР. ВЕНТ"
            TextProveritKONTRVENT2.SetActive (true); // Активация надписи "Проверить КОНТР. ВЕНТ"2
            
            // ВКЛЮЧЕНИЕ СЧЕТЧИКА ЧАСОВ
            (GameObject.Find("цифры 4").GetComponent("AOZVREMIA4") as MonoBehaviour).enabled = true; // включить скрипт ращения предпоследней цифры
            (GameObject.Find("цифры 5").GetComponent("AOZVREMIA5") as MonoBehaviour).enabled = true; // включить скрипт вращения последней цифры
            
            
            //Застопорить камеру
            (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации
             (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = false; // Отключить нажимающий палец
            zaderjkasekund = true; // Пошло время 20 секунд

            yield WaitForSeconds (0.06); // Задержка 0.06 сек
            PodsvetKONTRVENT.SetActive (true); // Активация подсветки КОНТР ВЕНТ
            PodsvetVKLAOZ.SetActive (true); // Активация подсветки ВКЛ. АОЗ
            PodsvetSIGNAL.SetActive (true); //  Подсветка СИГНАЛ
            PodsvetAP4.SetActive (true); // ПОДСВЕТКА АПЧ
            PodsvetTOKMAGN.SetActive (true); // Подсвтека ТОГ МАГН.
            Podsvet115V.SetActive (true); // Загорание 115 В
            

            yield WaitForSeconds (0.3); // Задержка 0.3 сек
            PO500ZVUK.SetActive (true); // Звук ПО - 500 А
            var audioVKLPOU: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audioVKLPOU.Play();// аудио
            (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы 
        }

        if (AOZ == true) { // Если нажали на БЛОК У для проверки лампы КОНТР. ВМП
            BlokUBOX.GetComponent.<Collider>().enabled = false; // деАктивация коллайдера БЛОКА У
            Soldatmashina.SetActive (false); // Деактивация солата в машине ("soldier")
            SoldatmashinaCAMERA.SetActive (false); //Деактивация солдата в машине (КАМЕРЫ) ("soldiercam")
            SoldatBLOKU.SetActive (true); // Активация солдата у БЛОКА У ("Солдат БЛОК У")
            SoldatBLOKUcamera.SetActive (true); // Активация камеры солдата у БЛОКА У ("Солдат БЛОК У камера")
            TextProveritKONTRVENT.SetActive (false); // деАктивация надписи "Проверить КОНТР. ВЕНТ"
            TextProveritKONTRVENT2.SetActive (false); // деАктивация надписи "Проверить КОНТР. ВЕНТ"2
            KONTRVMPproveren = true; // для нажатия enter
            VERXcamera = false;
            NIZcamera = true;
            
        }

        if (AOZ2 == true) { // Если нажали на Блок АОЗ 2 раз (для нажатия КОНТРОЛЬ ВМП.)
            BlokUKONTRVMPBOX2.GetComponent.<Collider>().enabled = false; // деАктивация 2 коллайдера БЛОКА У
            USLOVIERABOTIBOX.GetComponent.<Collider>().enabled = true; // Включаем бокс условия работы для включения КОНТР. ВМП
            Soldatmashina.SetActive (false); // Деактивация солата в машине ("soldier")
            SoldatmashinaCAMERA.SetActive (false); //Деактивация солдата в машине (КАМЕРЫ) ("soldiercam")
            SoldatBLOKU.SetActive (true); // Активация солдата у БЛОКА У ("Солдат БЛОК У")
            SoldatBLOKUcamera.SetActive (true); // Активация камеры солдата у БЛОКА У ("Солдат БЛОК У камера")
            TextustanovitKONTRVMP1VNIZU.SetActive (true);// ВКЛ Текст установить КОНТР.ВМП на блоке У (ВИД ВНИЗУ!)
            TextustanovitKONTRVMP2VNIZU.SetActive (true);
            TextustanovitKONTRVMP1.SetActive (false);// ВЫКЛ Текст установить КОНТР.ВМП на блоке У (СВЕРХУ!)
            TextustanovitKONTRVMP2.SetActive (false);
            CameraUsloviaRaboti.SetActive (true); // Включение камеры на УСЛОВИЕ РАБОТЫ
            VERXcamera = false;
            NIZcamera = true;
            
        }

        if (KONTRVMP == true) {// Если нажали на условие работы для включения КОНТР.ВМП
            USLOVIERABOTIBOX.GetComponent.<Collider>().enabled = false; // Отключаем бокс условия работы для включения КОНТР. ВМП
            GetComponent.<Animation>().Play("КОНТР.ВМП ВКЛ"); //Анимация ручки в контр. ВМП
            LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ РОД РАБОТЫ");
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации
            TextustanovitKONTRVMP1VNIZU.SetActive (false);// ВЫКЛ Текст установить КОНТР.ВМП на блоке У (ВИД ВНИЗУ!)
            TextustanovitKONTRVMP2VNIZU.SetActive (false);
            TextDejurniiVNIZU1.SetActive (true); // ВКЛ Текст Дежурный - БОЕВОЙ на ПОУ ... 1 (ВНИЗУ) 
            TextDejurniiVNIZU2.SetActive (true); // ВКЛ Текст Дежурный - БОЕВОЙ на ПОУ ... 2 (ВНИЗУ)
            TextDejurniiVNIZU3.SetActive (true); // ВКЛ Текст Дежурный - БОЕВОЙ на ПОУ ... 3 (ВНИЗУ)
            TextDejurniiVVERXY1.SetActive (true); // ВКЛ Текст Дежурный - БОЕВОЙ на ПОУ ... 3 (ВВЕРХУ)
            TextDejurniiVVERXY2.SetActive (true); // ВКЛ Текст Дежурный - БОЕВОЙ на ПОУ ... 3 (ВВЕРХУ)
            (GameObject.Find("нажимающий палец внизу (АОЗ)").GetComponent("ПАЛЕЦ АОЗ внизу") as MonoBehaviour).enabled = false; // вырубить скрипт пальца ВНИЗУ
            yield WaitForSeconds (0.6); // Задержка 0.6 сек
            PodsvetRejimIzmerenii.SetActive (true); // Подсветка Режим Измерений ВКЛ.
            yield WaitForSeconds (0.6); // Задержка 0.6 сек
            
            var audioVKLVMP: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audioVKLVMP.Play();// аудио
            KONTRVMPvkluchen = true; // Статичная, чтобы нажать enter и вернуться в исходное
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы 
            (GameObject.Find("нажимающий палец внизу (АОЗ)").GetComponent("ПАЛЕЦ АОЗ внизу") as MonoBehaviour).enabled = true; // врубить скрипт пальца ВНИЗУ
            
        }

        if (BOEVOIDEJURNI == true) { //Если нажимаем тумблер ДЕЖУРНЫЙ - БОЕВОЙ
            GetComponent.<Animation>().Play("БОЕВОЙ-ДЕЖУРНЫЙ В БОЕВОЙ");
            BOEVOIDEJURNIIBOX.GetComponent.<Collider>().enabled = false; // деАктивация коллайдера БОЕВОЙ - ДЕЖУРНЫЙ
            BlokUproveritRIJIMBOX3.GetComponent.<Collider>().enabled = true; // Активация бокса Блока У
            
            TextDejurniiVVERXY1.SetActive (false); // ВЫКЛ Текст Дежурный - БОЕВОЙ на ПОУ ... 3 (ВВЕРХУ)
            TextDejurniiVVERXY2.SetActive (false); // ВЫКЛ Текст Дежурный - БОЕВОЙ на ПОУ ... 3 (ВВЕРХУ)
            TextProveritRejimIZMERENVverxy.SetActive (true); // Вкл. текст вверху

            //Застопорить камеру
            (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации

            yield WaitForSeconds (0.06); // Задержка 0.06 сек
            PodsvetDejurnii.SetActive (false); //Гаснет сигнальная ДЕЖУРНЫЙ
            PodsvetIZLUCHENIE.SetActive (true); // Загорается лампа ИЗЛУЧЕНИЕ

            yield WaitForSeconds (0.3); // Задержка 0.3 сек
            var audioVKLtumblerBOIVOI: AudioSource = GetComponent.<AudioSource>(); //Для аудио тумблера
            zaderjkaBOEVOI = true; // пошла задержка для функции Тайм 13 сеекунд
            audioVKLtumblerBOIVOI.Play();// аудио
            
            (GameObject.Find("Camera (3)").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы на момент анимации
            (GameObject.Find("Bip001 L Finger12 (2)").GetComponent("ПАЛЕЦ 2") as MonoBehaviour).enabled = false; // Выключить нажимающий палец (ВВЕРХУ)
        }

        if (AOZ3 == true) { // галочка 2 БЛОК У  (гасится РЕЖИМ ИЗМЕРЕН)
            BlokUproveritRIJIMBOX3.GetComponent.<Collider>().enabled = false; // деАктивация бокса Блока У 3
            PodsvetRejimIzmerenii.SetActive (false); // Подсветка Режим Измерений ВЫКЛ.
            Soldatmashina.SetActive (false); // Деактивация солата в машине ("soldier")
            SoldatmashinaCAMERA.SetActive (false); //Деактивация солдата в машине (КАМЕРЫ) ("soldiercam")
            SoldatBLOKU.SetActive (true); // Активация солдата у БЛОКА У ("Солдат БЛОК У")
            SoldatBLOKUcamera.SetActive (true); // Активация камеры солдата у БЛОКА У ("Солдат БЛОК У камера")
            TextProveritRejimIZMERENVverxy.SetActive (false); // Выкл. текст вверху
            TextustanovitKONTRVMP1VNIZU.SetActive (false);// ВЫКЛ Текст установить КОНТР.ВМП на блоке У (ВИД ВНИЗУ!)
            TextustanovitKONTRVMP2VNIZU.SetActive (false);
            TextDejurniiVNIZU1.SetActive (false); // ВКЛ Текст Дежурный - БОЕВОЙ на ПОУ ... 1 (ВНИЗУ) 
            TextDejurniiVNIZU2.SetActive (false); // ВКЛ Текст Дежурный - БОЕВОЙ на ПОУ ... 2 (ВНИЗУ)
            TextDejurniiVNIZU3.SetActive (false); // ВКЛ Текст Дежурный - БОЕВОЙ на ПОУ ... 3 (ВНИЗУ)
            TextProveritRejimIZMERENVvnizu1.SetActive (true); // Вкл. ПРОВЕРИТЬ РЕЖИМ ИЗМЕРЕН. текст внизу 1
            TextProveritRejimIZMERENVvnizu2.SetActive (true); // Вкл. ПРОВЕРИТЬ РЕЖИМ ИЗМЕРЕН. текст внизу 2
            TextProveritRejimIZMERENVvnizu3.SetActive (true); // Вкл. ПРОВЕРИТЬ РЕЖИМ ИЗМЕРЕН. текст внизу 3
            RejimIZMERENIIpogasla = true;
            VERXcamera = false;
            NIZcamera = true;
            
        }

        if (AOZ4 == true) { //Если нажали на БЛОК У 4 раз для проверки 115 В
            BlokUproverit115BOX4.GetComponent.<Collider>().enabled = false; // деАктивация коллайдера БЛОКА У для проверки 115 В
            Soldatmashina.SetActive (false); // Деактивация солата в машине ("soldier")
            SoldatmashinaCAMERA.SetActive (false); //Деактивация солдата в машине (КАМЕРЫ) ("soldiercam")
            SoldatBLOKU.SetActive (true); // Активация солдата у БЛОКА У ("Солдат БЛОК У")
            SoldatBLOKUcamera.SetActive (true); // Активация камеры солдата у БЛОКА У ("Солдат БЛОК У камера")
            TextProverit115VVERXY.SetActive (false); // ВЫКЛ текст 115 ВВЕРХУ
            TextProverit115VVERXY2.SetActive (false); // ВЫКЛ текст 115 ВВЕРХУ 2
            TextProveritstrelkiVNIZU.SetActive (true); // ВКЛ текст проверить стрелки ВНИЗУ
            TextProveritstrelki2VNIZU.SetActive (true); // ВКЛ текст проверить стрелки 2 ВНИЗУ
            TextProveritstrelki3VNIZU.SetActive (true); // ВКЛ текст проверить стрелки 3 ВНИЗУ
            TextProveritstrelki4VNIZU.SetActive (true); // ВКЛ текст проверить стрелки 4 ВНИЗУ
            CameraStrelki.SetActive (true); // Камера для проверок стрелок
            Strelkiprovereni = true; // Статичная, стрелки проверены.
            VERXcamera = false;
            NIZcamera = true;
           
        }

        if (KONTROLUP4 == true) { // Если нажали на КОНТРОЛЬ УПЧ
            
            GetComponent.<Animation>().Play("КОНТРОЛЬ УПЧ ВКЛ"); //Анимация кнопки УПЧ ВКЛ
            
            KONTROLUP4BOX.GetComponent.<Collider>().enabled = false; //Отключаем БОКС КОНТРОЛЬ УПЧ
            KONTROLVZBOX.GetComponent.<Collider>().enabled = true; // Включаем БОКС КОНТРОЛЬ ВЗ
            TextNajatKONTROLUP4VNIZU.SetActive (false); // ВЫКЛ текст нажать КОНТРОЛЬ УПЧ
            TextNajatKONTROLUP4VNIZU2.SetActive (false); // ВЫКЛ текст нажать КОНТРОЛЬ УПЧ 2
            TextNajatKONTROLVZVNIZU1.SetActive (true); // ВКЛ текст нажать КОНТРОЛЬ ВЗ ВНИЗУ 1
            TextNajatKONTROLVZVNIZU2.SetActive (true); // ВКЛ текст нажать КОНТРОЛЬ ВЗ ВНИЗУ 2
            
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации

            TOKMAGNstrelka.GetComponent.<Animation>().Play("ТОК МАГН. 3,5"); //Анимация
            yield WaitForSeconds (0.36); // Задержка 0.36 сек
            var audioVKLUP4: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audioVKLUP4.Play();// аудио
            
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы на момент анимации
        }

        if (KONTROLVZ == true) { //Если нажали на контроль ВЗ
            KONTROLVZBOX.GetComponent.<Collider>().enabled = false; // Отключаем БОКС КОНТРОЛЬ ВЗ
            KONTROLPOMEXBOX.GetComponent.<Collider>().enabled = true; // Включаем БОКС КОНТРОЛЬ ПОМЕХ
            CameraUsloviaRaboti.SetActive (true); // Включение камеры на УСЛОВИЕ РАБОТЫ
            CameraStrelki.SetActive (false); //  ВЫКЛ Камеру для проверок стрелок

            GetComponent.<Animation>().Play("КОНТРОЛЬ ВЗ ВКЛ"); //Анимация кнопки ВЗ ВКЛ
            
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации

            TextNajatKONTROLVZVNIZU1.SetActive (false); // ВЫКЛ текст нажать КОНТРОЛЬ ВЗ ВНИЗУ 1
            TextNajatKONTROLVZVNIZU2.SetActive (false); // ВЫКЛ текст нажать КОНТРОЛЬ ВЗ ВНИЗУ 2
            TextKONTRPOMEX.SetActive (true); // ВКЛ текст КОНТР ПОМЕХ

            yield WaitForSeconds (0.06); // Задержка 0.06 сек

            PodsvetZONA.SetActive (true); // Загорается ЗОНА
            PodsvetNAZAD.SetActive (true); // Загорается НАЗАД

            yield WaitForSeconds (0.3); // Задержка 0.3 сек
            var audioVKLVZ: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audioVKLVZ.Play();// аудио
            
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы на момент анимации
            

        }

        if (KONTROLPOMEX == true) { //Если нажали на КОНТРОЛЬ ПОМЕХ
            KONTROLPOMEXBOX.GetComponent.<Collider>().enabled = false; // Отключаем БОКС КОНТРОЛЬ ПОМЕХ
            KONTROLSDBOX.GetComponent.<Collider>().enabled = true; // Включаем БОКС КОНТРОЛЬ СД

            LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ БОРТ");
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации

            USLOVIERABOTIBOX.GetComponent.<Animation>().Play("ручка из КОНТР.ВМП в КОНТРОЛЬ ПОМЕХ"); //Анимация в КОНТРОЛЬ ПОМЕХ
            TextKONTRPOMEX.SetActive (false); // Отключаем текст ВКЛ КОНТР ПОМЕХ
            TextKONTROLSD1.SetActive (true); // ВКЛ СД ТЕКСТ 1
            TextKONTROLSD2.SetActive (true); // ВКЛ СД ТЕКСТ 2
            TextKONTROLSD3.SetActive (true); // ВКЛ СД ТЕКСТ 3 


            (GameObject.Find("нажимающий палец внизу (АОЗ)").GetComponent("ПАЛЕЦ АОЗ внизу") as MonoBehaviour).enabled = false; // вырубить скрипт пальца ВНИЗУ

            yield WaitForSeconds (0.8); // Задержка 0.8 сек
            var audioVKLPOMEX: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audioVKLPOMEX.Play();// аудио
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы 
            (GameObject.Find("нажимающий палец внизу (АОЗ)").GetComponent("ПАЛЕЦ АОЗ внизу") as MonoBehaviour).enabled = true; // врубить скрипт пальца ВНИЗУ
        }

        if (KONTROLSD == true) { //Если нажали на КОНТРОЛЬ СД
            KONTROLSDBOX.GetComponent.<Collider>().enabled = false; // Отключаем БОКС КОНТРОЛЬ СД
            KONTROLNSBOX.GetComponent.<Collider>().enabled = true; // Включаем БОКС КОНТРОЛЬ НС
            
            GetComponent.<Animation>().Play("КОНТРОЛЬ СД ВКЛ"); //Анимация кнопки СД ВКЛ
            TextKONTROLSD1.SetActive (false); // ВЫКЛ СД ТЕКСТ 1
            TextKONTROLSD2.SetActive (false); // ВЫКЛ СД ТЕКСТ 2
            TextKONTROLSD3.SetActive (false); // ВЫКЛ СД ТЕКСТ 3 
            TextKONTROLNS1.SetActive (true); // ВКЛ. Текст КОНТРОЛЬ НС 1
            TextKONTROLNS2.SetActive (true); // ВКЛ. Текст КОНТРОЛЬ НС 2

            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации


            yield WaitForSeconds (0.06); // Задержка 0.06 сек
            PodsvetRejimIzmerenii.SetActive (true); // Подсветка Режим Измерений ВКЛ.
            PodsvetKONTRVENT.SetActive (false); // деАктивация подсветки КОНТР ВЕНТ
            PodsvetZONA.SetActive (false); // Гаснет ЗОНА
            PodsvetNAZAD.SetActive (false); // Гаснет НАЗАД
            yield WaitForSeconds (0.3); // Задержка 0.3 сек
            var audioVKLSD: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audioVKLSD.Play();// аудио
            
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы на момент анимации
        }
        

        if (KONTROLNS == true) { // Если нажали КОНТРОЛЬ НС
            USLOVIERABOTIBOX.GetComponent.<Animation>().Play("ручка из КОНТРОЛЬ ПОМЕХ в КОНТРОЛЬ НС"); //Анимация ручки в НС ВКЛ
            LEVARUKA.GetComponent.<Animation>().Play("ВКЛЮЧИТЬ РУКОЙ РОД РАБОТЫ");
            KONTROLNSBOX.GetComponent.<Collider>().enabled = false; // Отключаем БОКС КОНТРОЛЬ НС
            tripiatdeciatBOX.GetComponent.<Collider>().enabled = true; //  ВКЛ. БОКС +30 - +50
            DeciattridcatBOX.GetComponent.<Collider>().enabled = true; //  ВКЛ. БОКС +30 - 10
            minuspiatdeciatBOX.GetComponent.<Collider>().enabled = true; //  ВКЛ.БОКС -10 - -50
            MANEVRBOX.GetComponent.<Collider>().enabled = true; //  ВКЛ.БОКС МАНЕВР
            
            TextKONTROLNS1.SetActive (false); // ВЫКЛ. Текст КОНТРОЛЬ НС 1
            TextKONTROLNS2.SetActive (false); // ВЫКЛ. Текст КОНТРОЛЬ НС 2
            TextTemperatura1.SetActive (true); // ВКЛ. Температуру 1
            TextTemperatura2.SetActive (true); // ВКЛ. Температуру 2
            TextTemperatura3.SetActive (true); // ВКЛ. Температуру 3
            TextTemperatura4.SetActive (true); // ВКЛ. Температуру 4
            TextTemperatura5.SetActive (true); // ВКЛ. Температуру 5

            (GameObject.Find("нажимающий палец внизу (АОЗ)").GetComponent("ПАЛЕЦ АОЗ внизу") as MonoBehaviour).enabled = false; // вырубить скрипт пальца ВНИЗУ
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации
            yield WaitForSeconds (0.5); // Задержка 0.5 сек
            PodsvetKONTROLNS.SetActive (true); // Подсветка КОНТРОЛЬ НС ВКЛ
            yield WaitForSeconds (0.7); // Задержка 0.7 сек
            var audioVKLNS: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audioVKLNS.Play();// аудио
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы 

            
        }


        if (tripiatdeciat == true) { // Если нажмем +30 50
            
            USLOVIERABOTIBOX.GetComponent.<Animation>().Play("из КОНТРОЛЬ НС в +30");

            LEVARUKA.GetComponent.<Animation>().Play("Ручка УСИЛЕНИЕ");

            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации

            tripiatdeciatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ. БОКС +30 - +50
            DeciattridcatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ. БОКС +30 - 10
            minuspiatdeciatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ.БОКС -10 - -50
            MANEVRBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ.БОКС МАНЕВР

            TextTemperatura1.SetActive (false); // ВЫКЛ. Температуру 1
            TextTemperatura2.SetActive (false); // ВЫКЛ. Температуру 2
            TextTemperatura3.SetActive (false); // ВЫКЛ. Температуру 3
            TextTemperatura4.SetActive (false); // ВЫКЛ. Температуру 4
            TextTemperatura5.SetActive (false); // ВЫКЛ. Температуру 5
            TextVIKLBOEVOI1VNIZU.SetActive (true); // Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ 1 ВНИЗУ
            TextVIKLBOEVOI2VNIZU.SetActive (true); // Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ 2 ВНИЗУ

            yield WaitForSeconds (0.6); // Задержка 0.6 сек
            var audiotripiatdeciat: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audiotripiatdeciat.Play();// аудио
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы на момент анимации
            TemperaturaUstanovlena = true; // Температура или МАНЕВР установлены
        }


        if (Deciattridcat == true) {  // Если нажмем 10 30
            USLOVIERABOTIBOX.GetComponent.<Animation>().Play("из КОНТРОЛЬ НС в -10");
            tripiatdeciatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ. БОКС +30 - +50
            DeciattridcatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ. БОКС +30 - 10
            minuspiatdeciatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ.БОКС -10 - -50
            MANEVRBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ.БОКС МАНЕВР
           
            LEVARUKA.GetComponent.<Animation>().Play("Ручка УСИЛЕНИЕ");

            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации

            TextTemperatura1.SetActive (false); // ВЫКЛ. Температуру 1
            TextTemperatura2.SetActive (false); // ВЫКЛ. Температуру 2
            TextTemperatura3.SetActive (false); // ВЫКЛ. Температуру 3
            TextTemperatura4.SetActive (false); // ВЫКЛ. Температуру 4
            TextTemperatura5.SetActive (false); // ВЫКЛ. Температуру 5
            TextVIKLBOEVOI1VNIZU.SetActive (true); // Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ 1 ВНИЗУ
            TextVIKLBOEVOI2VNIZU.SetActive (true); // Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ 2 ВНИЗУ


            yield WaitForSeconds (0.6); // Задержка 0.6 сек
            var audioDeciattridcat: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audioDeciattridcat.Play();// аудио
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы на момент анимации
            TemperaturaUstanovlena = true; // Температура или МАНЕВР установлены
        }

        if (minuspiatdeciat == true) { //Если нажмем -50
            USLOVIERABOTIBOX.GetComponent.<Animation>().Play("из КОНТРОЛЬ НС в -50");

            tripiatdeciatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ. БОКС +30 - +50
            DeciattridcatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ. БОКС +30 - 10
            minuspiatdeciatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ.БОКС -10 - -50
            MANEVRBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ.БОКС МАНЕВР

            LEVARUKA.GetComponent.<Animation>().Play("Ручка УСИЛЕНИЕ");

            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации

            TextTemperatura1.SetActive (false); // ВЫКЛ. Температуру 1
            TextTemperatura2.SetActive (false); // ВЫКЛ. Температуру 2
            TextTemperatura3.SetActive (false); // ВЫКЛ. Температуру 3
            TextTemperatura4.SetActive (false); // ВЫКЛ. Температуру 4
            TextTemperatura5.SetActive (false); // ВЫКЛ. Температуру 5
            TextVIKLBOEVOI1VNIZU.SetActive (true); // Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ 1 ВНИЗУ
            TextVIKLBOEVOI2VNIZU.SetActive (true); // Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ 2 ВНИЗУ

            yield WaitForSeconds (0.6); // Задержка 0.6 сек
            var audiominuspiatdeciat: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audiominuspiatdeciat.Play();// аудио
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы 
            TemperaturaUstanovlena = true; // Температура или МАНЕВР установлены
        }

        if (MANEVR == true) { // Если нажмем маневр
            USLOVIERABOTIBOX.GetComponent.<Animation>().Play("из КОНТРОЛЬ НС в МАНЕВР");
            tripiatdeciatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ. БОКС +30 - +50
            DeciattridcatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ. БОКС +30 - 10
            minuspiatdeciatBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ.БОКС -10 - -50
            MANEVRBOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ.БОКС МАНЕВР

            LEVARUKA.GetComponent.<Animation>().Play("Ручка УСИЛЕНИЕ");


            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = false; // Отключить поворот головы на момент анимации

            TextTemperatura1.SetActive (false); // ВЫКЛ. Температуру 1
            TextTemperatura2.SetActive (false); // ВЫКЛ. Температуру 2
            TextTemperatura3.SetActive (false); // ВЫКЛ. Температуру 3
            TextTemperatura4.SetActive (false); // ВЫКЛ. Температуру 4
            TextTemperatura5.SetActive (false); // ВЫКЛ. Температуру 5
            TextVIKLBOEVOI1VNIZU.SetActive (true); // Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ 1 ВНИЗУ
            TextVIKLBOEVOI2VNIZU.SetActive (true); // Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ 2 ВНИЗУ


            yield WaitForSeconds (0.6); // Задержка 0.6 сек
            var audioMANEVR: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audioMANEVR.Play();// аудио
            (GameObject.Find("Camera (3) снизу").GetComponent("SimpleMouseRotator") as MonoBehaviour).enabled = true; // Включить поворот головы 
            TemperaturaUstanovlena = true; // Температура или МАНЕВР установлены
        }

        if (BOEVOIDEJURNIOFF == true) { // Если выключаем Боевой ДЕЖУРНЫЙ в ДЕЖУРНЫЙ
            BOEVOIDEJURNII2BOX.GetComponent.<Collider>().enabled = false; //  ВЫКЛ. БОКС БОЕВОЙ ДЕЖУРНЫЙ ВЫКЛ
            AOZOFFBOX.GetComponent.<Collider>().enabled = true; // ВКЛ. БОКС ВЫКЛ АОЗ
            SIGNALstrelka.GetComponent.<Animation>().Play("СИГНАЛ АОЗ ВЫКЛ");
            AP4strelka.GetComponent.<Animation>().Play("АПЧ ВЫКЛ");
            TOKMAGNstrelka.GetComponent.<Animation>().Play("ТОК МАГН ВЫКЛ");


            BOEVOIDEJURNIIBOX.GetComponent.<Animation>().Play("БОЕВОЙ-ДЕЖУРНЫЙ В ДЕЖУРНЫЙ");
            TextVIKLBOEVOIVVERXY.SetActive (false);// Текст ВЫКЛ. БОЕВОЙ ДЕЖУРНЫЙ ВВЕРХУ
            TextVIKLAOZ.SetActive (true); // Текст ВЫКЛ АОЗ

            yield WaitForSeconds (0.06); // Задержка 0.06 сек
            PodsvetDejurnii.SetActive (true); //Загорается сигнальная ДЕЖУРНЫЙ
            PodsvetIZLUCHENIE.SetActive (false); // Гаснет лампа ИЗЛУЧЕНИЕ
            PodsvetBOEVOI.SetActive (false); // Гаснет Боевой
            PodsvetRejimIzmerenii.SetActive (false); // Подсветка Режим Измерений ВЫКЛ.
            PodsvetKONTROLNS.SetActive (false); // Подсветка КОНТРОЛЬ НС ВЫКЛ

            yield WaitForSeconds (0.3); // Задержка 0.26 сек
            var audioBOEVOIDEJURNIOFF: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audioBOEVOIDEJURNIOFF.Play();// аудио
            
            
        }


        if (AOZOFF == true) { // Еслви выключаем АОЗ
            AOZOFFBOX.GetComponent.<Collider>().enabled = false; // ВЫКЛ. БОКС ВЫКЛ АОЗ
            TextVIKLAOZ.SetActive (false); // Текст ВЫКЛ АОЗ
            VKLPOUBOX.GetComponent.<Animation>().Play("ПОУ ВЫКЛ");

            yield WaitForSeconds (0.06); // Задержка 0.06 сек
            PodsvetDejurnii.SetActive (false); //Гаснет сигнальная ДЕЖУРНЫЙ
            PodsvetKONTRVENT.SetActive (false); // деАктивация подсветки КОНТР ВЕНТ
            PodsvetVKLAOZ.SetActive (false); // деАктивация подсветки ВКЛ. АОЗ
            PodsvetSIGNAL.SetActive (false); //  выкл Подсветка СИГНАЛ
            PodsvetAP4.SetActive (false); // выкл ПОДСВЕТКА АПЧ
            PodsvetTOKMAGN.SetActive (false); // выкл Подсвтека ТОГ МАГН.
            Podsvet115V.SetActive (false); // выкл Загорание 115 В
            

            yield WaitForSeconds (0.3); // Задержка 0.3 сек
            PO500ZVUK.SetActive (false); // Звук ПО - 500 А
            var audioAOZOFF: AudioSource = GetComponent.<AudioSource>(); //Для аудио
            audioAOZOFF.Play();// аудио

            // ВЫКЛЮЧЕНИЕ СЧЕТЧИКА ЧАСОВ

            (GameObject.Find("цифры 4").GetComponent("AOZVREMIA4") as MonoBehaviour).enabled = false; // Отключить скрипт вращения предпоследней цифры
            (GameObject.Find("цифры 5").GetComponent("AOZVREMIA5") as MonoBehaviour).enabled = false; // Отключить скрипт вращения последней цифры

            CameraStrelki.SetActive (false); // Камера для проверок стрелок

            (GameObject.Find("Terrain").GetComponent("AOZITOG") as MonoBehaviour).enabled = true; // Результат
        }
    }
