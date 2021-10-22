import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable{
    companyName: string;
    catchPharse: string;
    location : {
        lat: number,
        lng: number,
    }
    markerColor: string;

    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPharse = faker.company.catchPhrase();
        
        this.location = {
            lng: parseFloat(faker.address.longitude()),
            lat: parseFloat(faker.address.latitude()),            
        }

        this.markerColor = "#00FF00"
    }

    getDescription(): string{
        return `
            <div>
                <h2>${this.companyName}</h2>GmbH
                <h3><strong>Phrase: </strong>${this.catchPharse}</h3>
            </div>
        `;
    }
}