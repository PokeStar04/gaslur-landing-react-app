export default class Nft{
    constructor(
        id = 1,
        name= "",
        price =1,
        timer = 1,
        picture = './ressources/...'


    ){

        this.id = id;
        this.name = name;
        this.price = price;
        this.timer = timer;
        this.picture = picture;
    }
}