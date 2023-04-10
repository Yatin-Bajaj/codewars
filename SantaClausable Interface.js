function isSantaClausable(obj) {
    const container = ["sayHoHoHo", "distributeGifts", "goDownTheChimney"];
    for (let i = 0; i < container.length; i++) {
        if (!(typeof obj[container[i]] == "function")) {
            return false;
        }
    }
    return true;

}

function isSantaClausable(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function (methodName) {
        return typeof obj[methodName] == 'function';
    });
}