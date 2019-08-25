import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ImageGridComponent } from "./image-grid.component";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ImageService } from "../../service/image.service";
import { of } from "rxjs";
import { ImageList } from 'src/app/models/image-list.model';

const response = {
  photos: {
    page: 1,
    pages: 1,
    perpage: 100,
    total: 10000,
    photo: [
      {
        id: "28923229607",
        owner: "150303845@N07",
        secret: "f25332ed12",
        server: "1777",
        farm: 2,
        title: "Play misty for me",
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
        is_primary: 0,
        has_comment: 0
      }
    ]
  },
  stat: "ok"
};

const imageServiceStub = {
  fetchImages: () => {
    return of(response);
  }
};

describe("ImageGridComponent", () => {
  let component: ImageGridComponent;
  let fixture: ComponentFixture<ImageGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGridComponent],
      providers: [{ provide: ImageService, useValue: imageServiceStub }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    // spyOn(component, "repeatImageSet");
    expect(component).toBeTruthy();
  });

  //   describe('when component is initialized', () => {
  //     it('should call queueChosenVideoToPlay() and set playListVideos', () => {
  //       expect(component.playListVideos[0]['videos'].length).toEqual(9);
  //     });
  //   });

  //   describe('when playlist has selected', () => {
  //     it('should call setVideosToPlay() with selected playlist and updates video count as -1', () => {
  //       component.setVideosToPlay('All Videos');
  //       expect(component.videosCount).toEqual(-1);
  //     });

  it("should call repeatImageSet()", () => {
    const photo = {
        id: "28923229607",
        owner: "150303845@N07",
        secret: "f25332ed12",
        server: "1777",
        farm: 2,
        title: "Play misty for me",
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
        is_primary: 0,
        has_comment: 0
        };
        component.imageList = response['photos'].photo;
        component.imageCount = 1;
        component.repeatImageSet(1, photo);
    expect(component.imageCount).toEqual(1);
    expect(component.imageList[0].title).toEqual('Play misty for me');
    expect(component.imageList[0]).toEqual(photo);
  });
});
