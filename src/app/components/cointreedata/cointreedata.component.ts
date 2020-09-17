import { Component, OnInit } from '@angular/core';
import { CointreeService } from 'src/app/service/cointree.service';

@Component({
  selector: 'app-cointreedata',
  templateUrl: './cointreedata.component.html',
  styleUrls: ['./cointreedata.component.css']
})
export class CointreedataComponent implements OnInit {

  constructor(public service:CointreeService) { }

  ngOnInit(): void {
  }

}
