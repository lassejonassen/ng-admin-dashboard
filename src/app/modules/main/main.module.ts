import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { SmallBoxComponent } from 'src/app/components/small-box/small-box.component';
import { SimpleComponent } from './pages/search/simple/simple.component';
import { EnhancedComponent } from './pages/search/enhanced/enhanced.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ChartjsComponent } from './pages/charts/chartjs/chartjs.component';
import { FlotComponent } from './pages/charts/flot/flot.component';
import { InlineComponent } from './pages/charts/inline/inline.component';
import { UplotComponent } from './pages/charts/uplot/uplot.component';
import { UiComponent } from './pages/ui/ui.component';
import { GeneralComponent } from './pages/ui/general/general.component';
import { IconsComponent } from './pages/ui/icons/icons.component';
import { ButtonsComponent } from './pages/ui/buttons/buttons.component';
import { SlidersComponent } from './pages/ui/sliders/sliders.component';
import { ModalsComponent } from './pages/ui/modals/modals.component';
import { NavbarComponent } from './pages/ui/navbar/navbar.component';
import { TimelineComponent } from './pages/ui/timeline/timeline.component';
import { RibbonsComponent } from './pages/ui/ribbons/ribbons.component';
import { FormsComponent } from './pages/forms/forms.component';
import { AdvancedComponent } from './pages/forms/advanced/advanced.component';
import { EditorsComponent } from './pages/forms/editors/editors.component';
import { ValidationComponent } from './pages/forms/validation/validation.component';
import { TablesComponent } from './pages/tables/tables.component';
import { DataComponent } from './pages/tables/data/data.component';
import { JsgridComponent } from './pages/tables/jsgrid/jsgrid.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { MailboxComponent } from './pages/mailbox/mailbox.component';
import { InboxComponent } from './pages/mailbox/inbox/inbox.component';
import { ComposeComponent } from './pages/mailbox/compose/compose.component';
import { ReadComponent } from './pages/mailbox/read/read.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { InvoiceComponent } from './pages/examples/invoice/invoice.component';
import { ProfileComponent } from './pages/examples/profile/profile.component';
import { EcommerceComponent } from './pages/examples/ecommerce/ecommerce.component';
import { ProjectsComponent } from './pages/examples/projects/projects.component';
import { ProjectAddComponent } from './pages/examples/project-add/project-add.component';
import { ProjectEditComponent } from './pages/examples/project-edit/project-edit.component';
import { ProjectDetailComponent } from './pages/examples/project-detail/project-detail.component';
import { ContactsComponent } from './pages/examples/contacts/contacts.component';
import { FaqComponent } from './pages/examples/faq/faq.component';
import { ContactUsComponent } from './pages/examples/contact-us/contact-us.component';
import { LoginComponent } from './pages/examples/login/login.component';
import { LoginV1Component } from './pages/examples/login/login-v1/login-v1.component';
import { RegisterV1Component } from './pages/examples/login/register-v1/register-v1.component';
import { ForgotPasswordV1Component } from './pages/examples/login/forgot-password-v1/forgot-password-v1.component';
import { RecoverPasswordV1Component } from './pages/examples/login/recover-password-v1/recover-password-v1.component';
import { LoginV2Component } from './pages/examples/login-v2/login-v2.component';
import { RegisterV2Component } from './pages/examples/login-v2/register-v2/register-v2.component';
import { ForgotPasswordV2Component } from './pages/examples/login-v2/forgot-password-v2/forgot-password-v2.component';
import { RecoverPasswordV2Component } from './pages/examples/login-v2/recover-password-v2/recover-password-v2.component';
import { LockscreenComponent } from './pages/examples/lockscreen/lockscreen.component';
import { LegacyUserMenuComponent } from './pages/examples/legacy-user-menu/legacy-user-menu.component';
import { LanguageMenuComponent } from './pages/examples/language-menu/language-menu.component';
import { Error404Component } from './pages/examples/error404/error404.component';
import { Error500Component } from './pages/examples/error500/error500.component';
import { PaceComponent } from './pages/examples/pace/pace.component';
import { BlankComponent } from './pages/examples/blank/blank.component';
import { StarterComponent } from './pages/examples/starter/starter.component';
import { PrintComponent } from './pages/examples/invoice/print/print.component';
import { EnhancedResultsComponent } from './pages/search/enhanced-results/enhanced-results.component';
import { SimpleResultsComponent } from './pages/search/simple-results/simple-results.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    SmallBoxComponent,
    SimpleComponent,
    EnhancedComponent,
    WidgetsComponent,
    ChartsComponent,
    ChartjsComponent,
    FlotComponent,
    InlineComponent,
    UplotComponent,
    UiComponent,
    GeneralComponent,
    IconsComponent,
    ButtonsComponent,
    SlidersComponent,
    ModalsComponent,
    NavbarComponent,
    TimelineComponent,
    RibbonsComponent,
    FormsComponent,
    AdvancedComponent,
    EditorsComponent,
    ValidationComponent,
    TablesComponent,
    DataComponent,
    JsgridComponent,
    CalendarComponent,
    GalleryComponent,
    KanbanComponent,
    MailboxComponent,
    InboxComponent,
    ComposeComponent,
    ReadComponent,
    ExamplesComponent,
    InvoiceComponent,
    ProfileComponent,
    EcommerceComponent,
    ProjectsComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    ProjectDetailComponent,
    ContactsComponent,
    FaqComponent,
    ContactUsComponent,
    LoginComponent,
    LoginV1Component,
    RegisterV1Component,
    ForgotPasswordV1Component,
    RecoverPasswordV1Component,
    LoginV2Component,
    RegisterV2Component,
    ForgotPasswordV2Component,
    RecoverPasswordV2Component,
    LockscreenComponent,
    LegacyUserMenuComponent,
    LanguageMenuComponent,
    Error404Component,
    Error500Component,
    PaceComponent,
    BlankComponent,
    StarterComponent,
    PrintComponent,
    EnhancedResultsComponent,
    SimpleResultsComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
