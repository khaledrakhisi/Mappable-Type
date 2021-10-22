import mapboxgl from "mapbox-gl";

export interface Mappable{    
    location: {
        lng: number,
        lat: number,
    }

    getDescription(): string;

    markerColor: string;
}

export class CustomMap {
    private mapBox = null;
    public zoomLevel: number = 1;
    public position: Mappable;

    constructor (HtmlElementId: string) {        

        this.position = { 
            ...this.position,
            location : {lng: 0, lat: 0}
        };

        mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhbGVkciIsImEiOiJja3BzN2t1OHMwZHQxMm5vY25tY3Q3NHI5In0.akzVvXBLn643NdB94sZaGg';
        this.mapBox = new mapboxgl.Map({
            container: document.getElementById(HtmlElementId), // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [this.position.location.lng, this.position.location.lat], // starting position [lng, lat]
            zoom: this.zoomLevel, // starting zoom
        });
    }

    public addMarker(mappableObject : Mappable){
        const marker = new mapboxgl.Marker({color: mappableObject.markerColor,});
        marker.setLngLat(mappableObject.location);
        marker.addTo(this.mapBox);
        marker.setPopup(
            new mapboxgl.Popup({
                offset: 25,
                
            }).setHTML(mappableObject.getDescription()))
    }
}