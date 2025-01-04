import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from '../../__services/members.service';
import { Member } from '../../models/member';
import { MemberCardComponent } from "../member-card/member-card.component";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit{
  privateMemberService = inject(MembersService);
  members: Member[]= [];


  ngOnInit(): void {
    this.loadMember()
  }

  loadMember(){
    this.privateMemberService.getMembers().subscribe({
      next: members => this.members = members
    })
  }
}
