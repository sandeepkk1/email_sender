import { Component } from '@angular/core';



@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent {

  data={
    to:"",
    subject:"",
    message:""
  }



doSubmitForm(){
  console.log("try to submit form")
  console.warn("data",this.data)
}

}
