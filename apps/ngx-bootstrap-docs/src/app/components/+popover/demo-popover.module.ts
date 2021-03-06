import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { DocsModule } from '../../docs/index';
import { DEMO_COMPONENTS } from './demos/index';
import { PopoverSectionComponent } from './popover-section.component';
import { routes } from './demo-popover.routes';

@NgModule({
  declarations: [
    PopoverSectionComponent,
    ...DEMO_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    DocsModule,
    PopoverModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [PopoverSectionComponent],
  entryComponents: [...DEMO_COMPONENTS]
})
export class DemoPopoverModule {}
