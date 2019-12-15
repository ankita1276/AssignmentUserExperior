import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../shared/services/country-list.service';

@Component({
  selector: 'app-languagedetails',
  templateUrl: './languagedetails.component.html',
  styleUrls: ['./languagedetails.component.scss']
})
export class LanguagedetailsComponent implements OnInit {
  languageData :Object
  constructor(private _countryList_: CountryListService) { }

  ngOnInit() {
    this._countryList_.getSpecificCountryDetails().subscribe((res) => {
      this.languageData =res ;
      
    });

  }

}
