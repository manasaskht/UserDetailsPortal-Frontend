import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserDetails';
  result;
  user;
 
  ngOnInit()
  {}
constructor(private http:Http) { }
onClickSubmit(data) {
  
  if(data.action == "query")
  {
    this.http.get('http://localhost:1337/findolderusers459?age='+data.details).subscribe((data) => {this.result=data.json()},(err)=>{alert("Please enter age")});
    
    this.result=JSON.stringify(this.result);
    //this.result="interests of users above this age" +this.result.interests;
   }
   
   if(data.action == "delete")
  {
    
    this.http.get('http://localhost:1337/deleteUser459?email='+data.details).subscribe((data) => {this.result=data.json()},(err)=>{alert("Please enter emailAddress")});
    
   }
   if(data.action == "retrieve")
   {
     
     this.http.get('http://localhost:1337/findProfiledetails459?email='+data.details).subscribe((data) => {this.result=data.json()},(err)=>{alert("Please enter emailAddress")});
     this.result=this.result[0];
    }
  
 
}
}
 
 
    

  //   })
  // }

    
  

