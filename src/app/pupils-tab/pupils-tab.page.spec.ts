import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PupilsTabPage } from './pupils-tab.page';

describe('PupilsTabPage', () => {
  let component: PupilsTabPage;
  let fixture: ComponentFixture<PupilsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PupilsTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PupilsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
