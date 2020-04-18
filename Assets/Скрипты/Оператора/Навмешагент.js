var agent: NavMeshAgent;
var hit: RaycastHit;
    
function Start() {
    agent = GetComponent.<NavMeshAgent>();
}

function Update() {
    if (Input.GetMouseButtonDown(0)) {
        var hit: RaycastHit;
        
        if (Physics.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit, 100)) {
            agent.destination = hit.point;
        }
    }
}