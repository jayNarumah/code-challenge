import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService implements OnInit {
    isDarkMode$ = new BehaviorSubject(null);
    isCollapsed$ = new BehaviorSubject(false);

    constructor() { }
    ngOnInit(): void {

    }

    getMode() {
        return this.isDarkMode$;
    }


    setMode(mode: boolean) {
        return this.isDarkMode$.next(mode);
    }
    setCollapsibe(data: boolean) {
        this.isCollapsed$.next(data);
        localStorage.setItem('code_challenge_is_collapsed', JSON.stringify(data));
    }

    isCollapsed() {
        const is_collapse = localStorage.getItem('code_challenge_is_collapsed');
        if (is_collapse) {
            this.isCollapsed$.next(JSON.parse(is_collapse));
        }
        return this.isCollapsed$;

    }
}