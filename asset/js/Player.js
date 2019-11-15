class Player {
    // char card#
    constructor(cards){
        this.cards = cards;
        //maybe some img tag, need for manipulate innerHTML to flip card on Board
        this.setCards();
    }
    
    // compare this.cards with guess and return "$eats - $bites" form of string
    compareGuess(guess) {
        let bites = 0;
        let eats = 0;
        for(let i=0; i<this.cards.length; i++){
            if(this.cards.charAt(i) === guess.charAt(i))
                eats++;
            else
                for(let j=0; j<this.cards.length; j++)
                    if(j != i && this.cards.charAt(i) === guess.charAt(j))
                        bites++;
        }
        let result = eats + " - " + bites;
        return result;
    }

    setCards() {
        let card1 = this.cards.charAt(0);
        let card2 = this.cards.charAt(1);
        let card3 = this.cards.charAt(2);
        this.card1Src = Card.getCardSrcByNumber(card1);
        this.card2Src = Card.getCardSrcByNumber(card2);
        this.card3Src = Card.getCardSrcByNumber(card3);
    }

    getNthCardImg(place) {
        console.log("getNthCardImg: actual: " + place);
        switch(place){
            case 1:
                console.log("Nth: place 1");
                return "<img src=" + this.card1Src + " alt=\"\">";

            case 2:
                    console.log("Nth: place 2");
                return "<img src=" + this.card2Src + " alt=\"\">";

            default:
                    console.log("Nth: place 3");
                return "<img src=" + this.card3Src + " alt=\"\">";
        }
    }

    // test
    printCards() {
        console.log(this.cards);
    }
}