import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Moon, Sun, Eye, ShoppingCart, Menu } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
    Moon,
    Sun,
    Eye,
    ShoppingCart,
    Menu,
};

@NgModule({
    imports: [
        FeatherModule.pick(icons)
    ],
    exports: [
        FeatherModule
    ]
})
export class IconsModule { }