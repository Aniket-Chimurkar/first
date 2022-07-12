import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './User';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first';
  constructor(private rs : RestService){}
  columns = ["Id","EmployeeName","StarTimeUtc","EndTimeUtc","EntryNotes"];
  index  =  ["Id","EmployeeName","StarTimeUtc","EndTimeUtc","EntryNotes"];
  users : Users[] = [];


  ngOnInit(): void{
    this.rs.getUsers().subscribe(
      (response)=>{
        this.users = response;
      }
    )
  }

}

