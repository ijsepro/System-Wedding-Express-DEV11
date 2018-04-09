import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'vendors', title: 'Vendors',  icon:'ti-archive', class: '' },
    { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: 'messeges', title: 'Messages',  icon:'ti-comments', class: '' },
    { path: 'task-manager', title: 'Task Manager',  icon:'ti-clipboard', class: '' },
    { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
    { path: 'appoinments', title: 'Appointments',  icon:'ti-notepad', class: '' },
    { path: 'acc-settings', title: 'Account Settings',  icon:'ti-settings', class: '' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: RouteInfo[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);


      for(var i = 0;i<this.menuItems.length;i++) {
        console.log(this.menuItems[i])
      }
    }
    isNotMobileMenu(){
      true;
        // if($(window).width() > 991){
        //     return false;
        // }
        // return true;
    }

}
