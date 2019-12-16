import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../services/country-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  countryNames: any;
  // tslint:disable-next-line: ban-types
  selectedCountry: Object;
  isCountrySelected = true;
  // tslint:disable-next-line: variable-name
  constructor(private _countryList_: CountryListService) { }

  ngOnInit() {
    this.getCountryList();
  }

  getCountryList() {
    this._countryList_.getService().subscribe((res) => {
      this.countryNames = res;
    });
  }

  countryChange(countrycode) {
    this.isCountrySelected = false;
    this._countryList_.getCountryDetails(countrycode).subscribe((res) => {
      this.selectedCountry = res;
      this._countryList_.setSpecificCountryDetails(this.selectedCountry);
    });
  }
}
