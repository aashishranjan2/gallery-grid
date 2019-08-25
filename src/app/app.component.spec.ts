import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { ImageService } from './service/image.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ImageGridComponent
      ],
      imports: [HttpClientModule],
      providers: [ImageService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'image-grid'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('image-grid');
  });
});
