import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pupils-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pupils-tab/pupils-tab.module').then(m => m.PupilsTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/pupils-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pupils-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
