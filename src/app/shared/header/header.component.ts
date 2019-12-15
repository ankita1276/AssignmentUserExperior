import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../services/country-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  countryNames: any;
  selectedCountry: Object;
  isCountrySelected: boolean =true
  constructor(private _countryList_: CountryListService) { }

  ngOnInit() {
    this.getCountryList();
    console.log(this._countryList_.getService());
  }

  getCountryList() {
    this._countryList_.getService().subscribe((res) => {
      console.log(res);
      this.countryNames = res;
    });
  }

  countryChange(countrycode) {
    console.log(countrycode,"code");
    
    this.isCountrySelected = false;
    this._countryList_.getCountryDetails(countrycode).subscribe((res) => {
      this.selectedCountry = res;
      console.log( this.selectedCountry);
      this._countryList_.setSpecificCountryDetails(this.selectedCountry);
    });
  }
}
