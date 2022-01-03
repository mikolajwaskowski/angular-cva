import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsInputComponent } from './components/products-input/products-input.component';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { TooltipContentComponent } from './components/tooltip-content/tooltip-content.component';
import { ChevronIconComponent } from './components/icons/chevron/chevron.component';
import { QuestionIconComponent } from './components/icons/question/question.component';
import { ProductsInputItemComponent } from './components/products-input-item/products-input-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsInputComponent,
    TooltipDirective,
    TooltipContentComponent,
    ChevronIconComponent,
    QuestionIconComponent,
    ProductsInputItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
