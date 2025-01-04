import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './__services/account.service';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private accountService = inject(AccountService);
 

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
    console.log('hamout el current tekhdem;')
    const userString = localStorage.getItem('user');
    if(userString==null){
      console.log('dkhalna lel if');
      return;
    } 
    else{
      console.log('mchina lel else');
      const user = JSON.parse(userString);
      console.log('localStorage content:', localStorage.getItem('user'));
      this.accountService.currentUser.set(user);
      return user;
    }

  }

}
