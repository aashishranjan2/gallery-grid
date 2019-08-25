import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ImageService {
  url = `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${
    environment.apiKey
  }&gallery_id=72157704515204635&format=json&nojsoncallback=1`;

  constructor(private http: HttpClient) {}
  /**
   * @description fetchImages() gets called to fetch list of images with all the details
   */
  fetchImages(): Observable<any> {
    return this.http.get(this.url);
  }
}
