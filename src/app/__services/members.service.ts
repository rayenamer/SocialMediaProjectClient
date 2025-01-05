import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member } from '../models/member';
import { of, tap } from 'rxjs';
import { Photo } from '../models/photo';
import { PaginatedResult } from '../models/pagination';
import { UserParams } from '../models/userParams';
import { AccountService } from './account.service';
import { setPaginatedResponse, setPaginationHeader } from './PaginationHelper';
@Injectable({
  providedIn: 'root'
})
// Hey, if you are stealing my code, invite me for an after-work! 😉
// rayenamer@aiesec.net || rayen.ameur@esprit.tn
// whatsapp:92164742
export class MembersService {

  private http = inject(HttpClient);
  private accountService = inject(AccountService);
  baseUrl = environment.apiUrl;
  //members = signal<Member[]>([]); //signal listens
  paginatedResult = signal<PaginatedResult<Member[]> | null>(null);
  memberCache = new Map();
  user = this.accountService.currentUser();
  userParams = signal<UserParams>(new UserParams(this.user));

  resetUserParams(){
    this.userParams.set(new UserParams(this.user));
  }

  getMembers() {
    const response = this.memberCache
    .get(Object.values(this.userParams()).join('-'));

    if(response) return setPaginatedResponse(response, this.paginatedResult);
    let params = setPaginationHeader
    (
      this.userParams().pageNumber,
      this.userParams().pageSize
    );

    params = params.append('minAge',this.userParams().minAge);
    params = params.append('maxAge',this.userParams().maxAge);
    params = params.append('gender',this.userParams().gender);
    params = params.append('orderby', this.userParams().orderby);

    return this.http.get<Member[]>
    (
      this.baseUrl + 'users',
      {observe: 'response',params}
    ).subscribe({
      next: response => {
        setPaginatedResponse(response,this.paginatedResult);
        this.memberCache.set(Object.values(this.userParams()).join('-'),response);
      },
    })
    
  }
  

  getMember(username: string) {

    const member: Member = [...this.memberCache.values()]
      .reduce((arr, elem) => arr.concat(elem.body),[])
      .find((m: Member) => m.userName === username)

    if(member) return of(member);
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
  updateMember(member: Member) {

    return this.http.put(this.baseUrl + 'users', member).pipe(
      //do something with the observable without changing it
      //tap(() => {
      //  //update the signal
      //  this.members.update(members => members.map(m => m.userName === member.userName
      //    ? member : m))
      //})
    )
  }

  setMainPhoto(photo: Photo) {
    return this.http
      .put(this.baseUrl + 'users/set-main-photo/' + photo.id, {})
      .pipe(
        //tap(() => {
        //this.members.update((members => members.map(m => {
        //  if (m.photos.includes(photo)) {
        //    m.photoUrl = photo.url
        //  }
        //  return m;
        //})))
        //}
        //)
  )
  }

  deletePhoto(photo: Photo) {
    return this.http.delete(this.baseUrl + 'users/delete-photo/' + photo.id).pipe(
      //tap(() => {
      //  this.members.update(members => members.map(m => {
      //    if (m.photos.includes(photo)) {
      //      m.photos = m.photos.filter(x => x.id === photo.id)
      //    }
      //    return m
      //  }))
      //})
    )
  }
}
//observable who??