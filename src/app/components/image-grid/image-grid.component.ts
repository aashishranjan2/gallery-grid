import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ImageService } from '../../service/image.service';
import { DOCUMENT } from '@angular/platform-browser';
import { ImageList } from '../../models/image-list.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-image',
    templateUrl: './image-grid.component.html',
    styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent implements OnInit{
    observableImageList: Observable<ImageList[]>;
    imageList: ImageList[] = [];
    imageCount: number = 0;
    loader: boolean = true;
    constructor(private imageService: ImageService,
        @Inject(DOCUMENT) private document: Document) {

    }
    ngOnInit() {
        this.observableImageList = this.imageService.fetchImages();
        this.observableImageList.subscribe(
            data => {
            this.imageCount = Math.round(10000 / data['photos'].total);
            this.repeatImageSet(this.imageCount, data['photos'].photo);
        },
        error => error);
    }
  
    /**
   * @description repeatImageSet(count, photoList) takes count and photoList as a parameter. Count iterates to the number of times
   * to copy the same list of photos in an array to populate on the screen
   */
    repeatImageSet(count: number, photoList: ImageList) {
        for(let i = 0; i < count; i++) {
            this.imageList.push(photoList);
        }
        this.imageList = this.imageList.flat();
        this.loader = false;
    }
}