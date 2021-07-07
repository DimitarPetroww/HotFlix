import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UploadService {

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<any> {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "HotFlix")
      formData.append("cloud_name", "douwa5b0u")

     return this.http.post("https://api.cloudinary.com/v1_1/douwa5b0u/auto/upload", formData)
  }
}
