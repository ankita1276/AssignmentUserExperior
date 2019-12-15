import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../shared/services/country-list.service';

@Component({
  selector: 'app-currencydetails',
  templateUrl: './currencydetails.component.html',
  styleUrls: ['./currencydetails.component.scss']
})
export class CurrencydetailsComponent implements OnInit {
  currencyData : Object

  constructor(private _countryList_: CountryListService) { }

  ngOnInit() {
    this._countryList_.getSpecificCountryDetails().subscribe((res) => {
      console.log(res.currencies[0].name);
      this.currencyData = res ;
    });
  }
}
