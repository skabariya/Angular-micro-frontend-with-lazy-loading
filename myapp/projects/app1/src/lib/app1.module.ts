import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { App1RoutingModule } from './app1-routing.module';

@NgModule({
  declarations: [DashboardComponent, AboutComponent],
  imports: [
    App1RoutingModule
  ],
  exports: []
})
export class App1Module { 
   
  constructor(@Optional() @SkipSelf() parentModule: App1Module)
  {
      if (parentModule)
          console.log('App1Module started again');
  }

  static forChild() : ModuleWithProviders
  {
      return {
          ngModule: App1Module,
      };
  }
}
