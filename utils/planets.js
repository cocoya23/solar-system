function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function calculatePlanetPosition(planet, day) {
    let pos = day * planet.velocity;
    let angle = map(pos, 0, 360, 0, Math.PI*2) + Math.PI/2;
    let x = Math.cos(angle) * planet.distance;
    x = Math.round((x + Number.EPSILON) * 100)/100;
    let y = Math.sin(angle) * planet.distance;
    y = Math.round((y + Number.EPSILON) * 100)/100;
    return {x, y};
}

function calculateMeta(planet1, planet2, planet3, day){
    let area = getArea(planet1, planet2, planet3)
    let perimeter = getPerimeter(planet1, planet2, planet3)
    let prevPlanets = calculatePlanets(PLANETS, day - 1)
    let prevPerimeter = getPerimeter(prevPlanets.ferengi, prevPlanets.betasoide, prevPlanets.vulcano)
    let nextPlanets = calculatePlanets(PLANETS, day + 1)
    let nextPerimeter = getPerimeter(nextPlanets.ferengi, nextPlanets.betasoide, nextPlanets.vulcano)
    let isSunInside = isInside(planet1, planet2, planet3)
    let arePlanetsCollinear = areCollinear(planet1, planet2, planet3)
    let isMaxPerimeter = (perimeter >= prevPerimeter && perimeter >= nextPerimeter)
    return {area, perimeter, isSunInside, arePlanetsCollinear, isMaxPerimeter}
}

function getArea(planet1, planet2, planet3) {
    let x1 = planet1.position.x
    let y1 = planet1.position.y
    let x2 = planet2.position.x
    let y2 = planet2.position.y
    let x3 = planet3.position.x
    let y3 = planet3.position.y
    return Math.round((Math.abs(((x1 * (y2 - y3)) + (x2 * (y3 - y1)) + (x3 * (y1 - y2))) / 2) + Number.EPSILON)*100)/100;
}

function areCollinear(planet1, planet2, planet3) {
    let distance12 = distanceBetweenPlanets(planet1, planet2)
    let distance23 = distanceBetweenPlanets(planet2, planet3)
    let distance31 = distanceBetweenPlanets(planet3, planet1)
    let difa = Math.round((Math.abs((distance12 + distance23) - distance31))*100)/100
    let difb = Math.round((Math.abs((distance31 + distance23) - distance12))*100)/100
    let difc = Math.round((Math.abs((distance12 + distance31) - distance23))*100)/100
    return (difa <= 1.5 || difb <= 1.5 || difc <= 1.5)
}

function getPerimeter(planet1, planet2, planet3) {
    let distance12 = distanceBetweenPlanets(planet1, planet2)
    let distance23 = distanceBetweenPlanets(planet2, planet3)
    let distance31 = distanceBetweenPlanets(planet3, planet1)
    return distance12 + distance23 + distance31
}

function distanceBetweenPlanets(planet1, planet2){
    let ca = Math.abs(planet2.position.x-planet1.position.x)
    let cb = Math.abs(planet2.position.y-planet1.position.y)
    return Math.round(Math.sqrt(ca*ca+cb*cb)*100)/100
}

function isInside(planet1, planet2, planet3) {
    let sun = {
        position: {x: 0, y: 0} 
    }
    let totalArea = getArea(planet1, planet2, planet3);
    let subArea1 = getArea(sun, planet1, planet2);
    let subArea2 = getArea(sun, planet2, planet3);
    let subArea3 = getArea(sun, planet1, planet3);
    let subArea = Math.floor(subArea1 + subArea2 + subArea3);
    return subArea == Math.floor(totalArea);
}

function calculatePlanets(planets, day) {
    planets = JSON.parse(JSON.stringify(planets))
    for(const planet in planets) {
        planets[planet].day = day
        planets[planet].position = calculatePlanetPosition(planets[planet], day)
    }
    return planets
}

function calculateSolarSystem(day){
    let planets = calculatePlanets(PLANETS, day)
    let extras = calculateMeta(planets.ferengi, planets.betasoide, planets.vulcano, day)
    return {
        planets,
        meta: extras
    }
}

const PLANETS = {
    ferengi: {
        distance: 500,
        velocity: 1,
        day: 0,
        position: {x: 0, y: 0} 
    },
    betasoide: {
        distance: 2000,
        velocity: 3,
        day: 0,
        position: {x: 0, y: 0} 
    },
    vulcano: {
        distance: 1000,
        velocity: -5,
        day: 0,
        position: {x: 0, y: 0} 
    }
}

module.exports = Object.freeze ({calculateSolarSystem})