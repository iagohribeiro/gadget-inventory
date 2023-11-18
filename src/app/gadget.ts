export class Gadget {
    constructor(public id: string, public model:string, public brand:string, public serial:string, public coverage:string){
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.serial = serial;
        this.coverage = coverage;
    }
}
