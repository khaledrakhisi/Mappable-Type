import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable{
    name: string;
    location: {
        lng: number,
        lat: number,
    };
    markerColor: string;

    constructor(){
        this.name = faker.name.firstName();

        this.location = {
            lng: parseFloat(faker.address.longitude()),
            lat: parseFloat(faker.address.latitude()),            
        }

        this.markerColor = "#FF0000"
    }

    getDescription(): string {
        return `<strong>name: </strong> ${this.name}`;
    }
}