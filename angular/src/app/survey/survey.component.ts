import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { RestcallService } from '../restcall.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  model: Model = new Model("","","","","","","","","","","");

  title = 'swe645';
  count = 0;
  obj : any
  selectedItemsList = [{}];
  checkedIDs = [];
  selectedItemsString = "";

  checkboxesDataList = [
    {
      label: 'Students',
      isChecked: false
    },
    {
      label: 'Location',
      isChecked: false
    },
    {
      label: 'Campus',
      isChecked: false
    },
    {
      label: 'Atmosphere',
      isChecked: false
    },
    {
      label: 'Dorm Rooms',
      isChecked: false
    },
    {
      label: 'Sports',
      isChecked: false
    }
  ];

  constructor(private service:RestcallService) { }

  ngOnInit(): void {
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  public submit(){

    this.fetchSelectedItems()

    for (let i of this.selectedItemsList) {
      this.obj = this.selectedItemsList[this.count]
      this.selectedItemsString += this.obj.label + ", "
      this.count++;
    }
    this.model.likes = this.selectedItemsString.slice(0,-2)
    console.warn(this.model)

    this.service.submit(this.model).subscribe((result) => { console.warn("result", result) })
    
  }

}
