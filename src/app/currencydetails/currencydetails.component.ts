import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../shared/services/country-list.service';

@Component({
  selector: 'app-currencydetails',
  templateUrl: './currencydetails.component.html',
  styleUrls: ['./currencydetails.component.scss']
})
export class CurrencydetailsComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  currencyData: Object

  // tslint:disable-next-line: variable-name
  constructor(private _countryList_: CountryListService) { }

  ngOnInit() {
    this._countryList_.getSpecificCountryDetails().subscribe((res) => {
      this.currencyData = res;
    });
  }
}
