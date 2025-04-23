function faceCardValue (cardNumber) {
    switch (cardNumber) {
        case "J":
            return 10
            break;
        case "Q":
            return 10
            break;
        case "K":
            return 10
            break;
        case "A":
            return 11
            break;
        default:
            return false
    }
}

module.exports = faceCardValue