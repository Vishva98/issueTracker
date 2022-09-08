import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { issuePojo } from '../issuePojo';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit {


  addIssueDetails = new issuePojo();

  listOfIssues:issuePojo []=[];

  oldIssues:issuePojo []=[];

  id:any;

  constructor(private route:Router,private router:ActivatedRoute) { }

  ngOnInit( ) {

    this.oldIssues = JSON.parse(localStorage.getItem('issue'));
    this.router.queryParamMap.subscribe((params) => {
     this.id = params.get('data');

  }
);
 if(this.id!=null){
  this.updateIssue()

  this.listOfIssues =JSON.parse(localStorage.getItem('issue'));

  this.listOfIssues.splice(this.id,1)
}

  }


  addIssue(){

    this.listOfIssues.push(this.addIssueDetails);

    this.addIssueDetails = new issuePojo();


  }

  submit(){
    window.localStorage.setItem('issue',JSON.stringify(this.listOfIssues));

    this.route.navigate(['/listOfIssue']);

  }

  updateIssue(){

    let m = this.oldIssues.splice(this.id,1)


    m.forEach(element => {
      this.addIssueDetails.title = element.title;
      this.addIssueDetails.description= element.description;
    });

  }



}
