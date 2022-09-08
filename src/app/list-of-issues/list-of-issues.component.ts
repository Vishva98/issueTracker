import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { issuePojo } from '../issuePojo';

@Component({
  selector: 'app-list-of-issues',
  templateUrl: './list-of-issues.component.html',
  styleUrls: ['./list-of-issues.component.scss']
})
export class ListOfIssuesComponent implements OnInit {
   listOfIssues:issuePojo[]=[];

   editItem :issuePojo[]=[];

   deleteId:number;
  constructor(private route:Router) { }

  ngOnInit() {
    this.listOfIssues = JSON.parse(localStorage.getItem('issue'));
  }
   delete(id){
    this.deleteId= id;
    this.listOfIssues.splice(this.deleteId,1);

   }

   edit(i){
      localStorage.setItem('issue',JSON.stringify(this.listOfIssues))
     this.route.navigate(['/createIssue'],{queryParams:{data:i}});
   }


   create(){
    this.route.navigate(['/createIssue'],{ queryParams: this.listOfIssues });
   }

   ngOnChanges(){
    alert()
   }
}
