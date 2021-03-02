# Solar System

## API
El API fue separado en 2 versiones:
* live: realiza el calculo al momento sin almacenamiento
* memory: almacenamiento solicitado con un modelo de datos

### Live

#### Get Weather By Day
Calcula el clima para el día solicitado
```BASH
GET /api/live/weather?day=0
```

### Memory

#### Get Weather By Day
Obtiene el clima para el día solicitado
```BASH
GET /api/memory/weather?day=0
```

#### Get Weather History
Obtiene el historico almacenado
```BASH
GET /api/memory/history
```

#### Run Simulation
Corre la simulación para los dias requeridos
```BASH
GET /api/memory/simulate?days=0
```

#### Clean Historical
Limpia los datos de la simulación
```BASH
GET /api/memory/clean
```