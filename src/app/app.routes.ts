import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes = [
    {
        path: 'contact',
        component: ContactComponent
    }
]

export default RouterModule.forRoot(routes)