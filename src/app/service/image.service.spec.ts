import { TestBed } from "@angular/core/testing";
import { ImageService } from "./image.service";
import { of, Observable } from "rxjs";
import { ImageGridComponent } from "../components/image-grid/image-grid.component";

let service: ImageService;
const response = {
  photos: {
    page: 1,
    pages: 1,
    perpage: 100,
    total: 1,
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

describe("ImageService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGridComponent],
      providers: [{ provide: ImageService, useValue: imageServiceStub }]
    }).compileComponents();
  });
  beforeEach(() => {
    service = TestBed.get(ImageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should call fetchImages() method to fetch the response from the server", () => {
    service.fetchImages();
    expect(service.fetchImages()).toBeDefined();
  });
});
