import { Component,OnInit } from '@angular/core';
import {  
  FileHandle  
} from './file-handle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'radiomemory';
  
  uploadedFiles: FileHandle[] | undefined;  
    constructor() {}  
    ngOnInit(): void {}  
    filesDropped(files: FileHandle[]) {  
        this.uploadedFiles = files;  
    }  
  

}
