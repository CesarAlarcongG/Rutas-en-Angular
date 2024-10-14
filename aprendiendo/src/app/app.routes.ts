import { Routes } from '@angular/router';
import { ComponenteAComponent } from './componentes/componente-a/componente-a.component';
import { ComponenteBComponent } from './componentes/componente-b/componente-b.component';

export const routes: Routes = [

    {path: 'componentea', component: ComponenteAComponent},
    {path: 'componenteb', component: ComponenteBComponent}

];