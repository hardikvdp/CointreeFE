import { Component, OnInit } from '@angular/core';
import { CointreeService } from 'src/app/service/cointree.service';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-cointreesearch',
  templateUrl: './cointreesearch.component.html',
  styleUrls: ['./cointreesearch.component.css']
})
export class CointreesearchComponent implements OnInit {

  items: any = ['BTC', 'ETH', 'XRP']
  selectdeItem : string = 'BTC';
  
  constructor(public fb: FormBuilder, public service:CointreeService) { }
  
  ngOnInit(): void {    
    this.service.getData(this.selectdeItem);
  }
  
   filterForm = this.fb.group({
    name: ['']
  })

  onSubmit() {
    if(this.filterForm.value["name"] != '')
      this.selectdeItem = this.filterForm.value["name"];
   
   this.service.getData(this.selectdeItem);
  }


}
