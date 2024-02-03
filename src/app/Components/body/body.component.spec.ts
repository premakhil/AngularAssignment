import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';

import { AppModule } from '../../app.module';

fdescribe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("should hide book details if it is currently displaying",()=>{

    component.bookDetails="This is a test";

    component.getBookDetails(2);

    expect(component.bookDetails).toEqual("");

    
    


  });
  it("should display book details if it is not showing anything",()=>{

    component.bookDetails="";

    component.getBookDetails(1);

    expect(component.bookDetails).toEqual(component.bookArray[1].desc);

    

  });
});
