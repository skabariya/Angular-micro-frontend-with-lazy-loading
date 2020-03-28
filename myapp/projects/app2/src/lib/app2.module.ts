import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { App2RoutingModule } from './app2-routing.module';

@NgModule({
  declarations: [DashboardComponent, AboutComponent],
  imports: [
    App2RoutingModule
  ],
  exports: []
})
export class App2Module {
  onstructor(@Optional() @SkipSelf() parentModule: App2Module)
  {
      if (parentModule)
          console.log('App2Module started again');
  }

  static forChild() : ModuleWithProviders
  {
      return {
          ngModule: App2Module,
      };
  }
}