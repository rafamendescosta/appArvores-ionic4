import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tree-list', loadChildren: './tree-list/tree-list.module#TreeListPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'glossary', loadChildren: './glossary/glossary.module#GlossaryPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'tree-view/:id', loadChildren: './tree-view/tree-view.module#TreeViewPageModule' },
  { path: 'about-app', loadChildren: './about-app/about-app.module#AboutAppPageModule' },
  { path: 'about-project', loadChildren: './about-project/about-project.module#AboutProjectPageModule' },
  { path: 'developers', loadChildren: './developers/developers.module#DevelopersPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
