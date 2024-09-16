import { Component, OnInit } from '@angular/core';
import { FileHandle } from '../util/FileHandle';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private sanit: DomSanitizer, private apiServ: ApiService){

  }

  pics: FileHandle[] =[];
  name: string = 'hello';
  showPic: boolean =false;
  

  onFileSelected(event: any){
    console.log(event)
    const file = event.target.files[0]
    const fileHandle: FileHandle = {
      file: file,
      url: this.sanit.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
    }
    this.pics.push(fileHandle)
    this.showPic=true;
    console.log(fileHandle.url)
  }

  sendImage(){
    const formData = new FormData();
    for(var i = 0;i<this.pics.length;i++){
      formData.append(
        'imgfile',
      this.pics[i].file,
      this.pics[i].file.name
      );
      }

      // formData.forEach((data) => console.log(data));
    
    let data = this.apiServ.sendImageData(formData);
    console.log(data);
  }

  // removeImg(file:FileHandle){
  //   console.log("Hi")
  // }


}
