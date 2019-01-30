import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'treeList',
        children: [
          {
            path: '',
            loadChildren: '../tree-list/tree-list.module#TreeListPageModule'
          }
        ]
      },
      {
        path: 'Map',
        children: [
          {
            path: '',
            loadChildren: '../map/map.module#MapPageModule'    // map page
          }
        ]
      },
      {
        path: 'Glossary',
        children: [
          {
            path: '',
            loadChildren: '../glossary/glossary.module#GlossaryPageModule'
          }
        ]
      },
      {
        path: 'Info',
        children: [
          {
            path: '',
            loadChildren: '../info/info.module#InfoPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/Map',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
