import { CanActivateFn } from '@angular/router';
import { AccountService } from '../__services/account.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  let accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  if(accountService.currentUser()){
    return true;
  } else{
    toastr.error('you shall not pass!');
    return false;
  }

  return true;
};
