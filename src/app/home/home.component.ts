import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../shared/services/country-list.service';
import { filter} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countryData :Object;
  constructor(private _countryList_: CountryListService) { }

  filteredKeys = ['name', 'capital', 'region', 'subregion', 'population', 'area', 'alpha3Code'];


  ngOnInit() {

    this._countryList_.getSpecificCountryDetails().subscribe((res) => {
      const filtered= Object.keys(res).filter(
        key => this.filteredKeys.includes(key)).reduce(
          (obj,key)=>{
            obj[key] = res[key];
            return obj;
          },{});
          this.countryData = filtered;
     // this.countryData.pipe(filter(num => num % 2 === 0));
     console.log(this.countryData,"filtered");
     
    });
  }

// this.filtered.reduce((obj, key) => ({ ...obj, [key]: this.raw[key] }), {});
//     console.log(filtered);

}
