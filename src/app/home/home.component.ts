import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { AccountService } from '../__services/account.service';
import { MembersService } from '../__services/members.service';
import { Member } from '../models/member';
import { User } from '../models/user';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

  //member?: Member;
  //user?:User;
  private accounService = inject(AccountService);
  private memberService = inject(MembersService)

 //ngOnInit(): void {
 //  const user = this.accounService.currentUser();
 //  if(user){
 //    this.memberService.getMember(user.userName).subscribe({
 //      next: member => this.member = member
 //    })
 //    console.log('user.userName')
 //  }
 //}
  registerMode = false;

  registerToggle(){
    this.registerMode = !this.registerMode
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }


}
