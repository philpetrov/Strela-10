// Скрипт для сигнала о том что можно энтер нажать 2 раз
static var SIGNAL = false;
static var SIGNAL2 = false; // (режим ФОН 2)
static var SIGNAL3 = false; // (режим ФОН 3)

function Update () {
  
    // (режим ФОН 1)
    if (AZPOVOROT.SignalOdin == true) { // Из пушки в кнопки...
        SIGNAL = true;
        AZPOVOROT.SignalOdin = false;
    }

    //(режим ФОН 2)

    if (AZPOVOROT.SignalDva == true) { // Из пушки в кнопки...
        SIGNAL2 = true;
        AZPOVOROT.SignalDva = false;
    }

    if (AZKNOPKI.vishelizVIZIRA3 == true) { //Если вышел из визира третий раз (в режиме ФОН 2)
        
        SIGNAL2 = false;
    }
    //(режим ФОН 3)

    if (AZPOVOROT.SignalTri == true) { // Из пушки в кнопки...
        SIGNAL3 = true;
        AZPOVOROT.SignalTri = false;
    }
    if (AZKNOPKI.vishelizVIZIRA4 == true) { //Если вышел из визира 4 раз (в режиме ФОН 3)
        
        SIGNAL3 = false;
    }

}