import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  private backedApi = 'kdjl';
  sendImageData(formData: FormData): any{
    return this.httpClient.post(this.backedApi,formData);
  }

  
}
