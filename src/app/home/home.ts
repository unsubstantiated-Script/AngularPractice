import {Component, inject} from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';
import {HousingLocationInfo} from '../housinglocation';
import {HousingService} from "../housing.service";

@Component({
    selector: 'app-home',
    imports: [HousingLocation],
    template: `
        <section>
            <form>
                <input type="text" placeholder="Filter by city "/>
                <button class="primary" type="button">Search</button>
            </form>
        </section>
        <section class="results">
            @for (housingLocation of housingLocationList; track $index) {
                <app-housing-location [housingLocation]="housingLocation"/>
            }
        </section>
    `,
    styleUrls: [`./home.css`],
})
export class Home {
    readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

    housingLocationList: HousingLocationInfo[] = [];
    housingService = inject(HousingService);

    constructor() {
        this.housingLocationList = this.housingService.getAllHousingLocations();
    }
}
