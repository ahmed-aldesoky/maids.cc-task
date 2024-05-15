import { Component, HostListener, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../services/auth.service';
import { IUser } from '../../../../../models/auth.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  user: any = '';
  bodyElement = document.body;
  bodyHtml: any = document.querySelector('html');
  isAR: boolean = true;
  toggleSideMenuValue: boolean = false;
  currentUser: IUser | false = this.authService.getCurrentUser();
  isNavbarFixed: boolean = false;
  showOverlay: boolean = false;


  ngOnInit(): void {
    // this.user = this.authService.getCurrentUser() as any;

  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }
  confirmModalLogout(template: TemplateRef<any>) {
    // this.bsModalRef = this.modalService.show(
    //   template,
    //   Object.assign({}, { class: 'modal-dialog-centered' })
    // );
  }

  // Logout(template?: string) {
  //   this.authService.logout(localStorage.getItem('ICS-token')!);

  //   // this.bsModalRef?.hide();
  //   this.router.navigate(['/login']);
  // }
}



