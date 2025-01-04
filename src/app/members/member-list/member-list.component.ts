import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from '../../__services/members.service';
import { MemberCardComponent } from "../member-card/member-card.component";
import{ PaginationModule} from 'ngx-bootstrap/pagination';
import { UserParams } from '../../models/userParams';
import { AccountService } from '../../__services/account.service';
import { FormsModule } from '@angular/forms';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent,PaginationModule,FormsModule, ButtonsModule],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit{
  MemberService = inject(MembersService);
  genderList = [
    { value: 'male', display: 'Males' },
    { value: 'female', display: 'Females' },
    { value: 'male+female', display: 'Both' }
  ];
  
  

  ngOnInit(): void {
    if(!this.MemberService.paginatedResult()) this.loadMember()
  }

  loadMember(){
    this.MemberService.getMembers();
  }

  resetFilters(){
    this.MemberService.resetUserParams();
    this.loadMember();
  }

  pageChanged(event: any){
    if(this.MemberService.userParams().pageNumber != event.page){
      this.MemberService.userParams().pageNumber = event.page;
      this.loadMember();
    }
  }
}
