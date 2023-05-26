import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService implements OnInit {
    isDarkMode$ = new BehaviorSubject(null);
    isCollapsed$ = new BehaviorSubject(null);

    constructor() { }
    ngOnInit(): void {
    }

    getMode() {
        const isDarkMode = localStorage.getItem('code_challenge_is_dark_mode');
        if (isDarkMode) {
            this.isDarkMode$.next(JSON.parse(isDarkMode));
        }
        return this.isDarkMode$;
    }


    setMode(mode: boolean) {
        localStorage.setItem('code_challenge_is_dark_mode', JSON.stringify(mode));
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