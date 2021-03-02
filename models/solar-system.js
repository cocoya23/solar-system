class PrivateSolarSystem {
    constructor() {
        this.historical = []
    }

    clean() {
        this.historical = []
    }
}

class SolarSystem {
    constructor() {
        throw new Error('Use Singleton.getInstance()')
    }
    static getInstance() {
        if (!SolarSystem.instance) {
            SolarSystem.instance = new PrivateSolarSystem();
        }
        return SolarSystem.instance;
    }
}
module.exports = SolarSystem;