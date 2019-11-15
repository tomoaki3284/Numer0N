class Card{

    static getCardSrcByNumber(card) {
        switch(card) {
            case "0":
                    console.log("getCardSrcByNumber: 0 " + card);
                return "\"asset/css/cards/" + "0.jpg\"";

            case "1":
                    console.log("getCardSrcByNumber: 1 " + card);
                return "\"asset/css/cards/" + "1.jpg\"";

            case "2":
                    console.log("getCardSrcByNumber: 2 " + card);
                return "\"asset/css/cards/" + "2.png\"";

            case "3":
                    console.log("getCardSrcByNumber: 3 " + card);
                return "\"asset/css/cards/" + "3.jpg\"";

            case "4":
                    console.log("getCardSrcByNumber: 4 " + card);
                return "\"asset/css/cards/" + "4.jpg\"";

            case "5":
                    console.log("getCardSrcByNumber: 5 " + card);
                return "\"asset/css/cards/" + "5.jpg\"";

            case "6":
                    console.log("getCardSrcByNumber: 6 " + card);
                return "\"asset/css/cards/" + "6.jpg\"";

            case "7":
                    console.log("getCardSrcByNumber: 7 " + card);
                return "\"asset/css/cards/" + "7.jpg\"";

            case "8":
                    console.log("getCardSrcByNumber: 8 " + card);
                return "\"asset/css/cards/" + "8.jpg\"";

            default:
                console.log("getCardSrcByNumber: " + card);
                return "\"asset/css/cards/" + "9.jpg\"";
        }
    }
}