import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import converterJson from 'src/app/models/convertedJson.json';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public converted_json:string;

  constructor() { 
    this.converted_json="";
  }

  ngOnInit(): void {
  }

  fileUpload(event:any){
    console.log(event);
    console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event)=>{
      console.log(event);
      let binaryData = event.target?.result;
      let workBook = XLSX.read(binaryData, {type:'binary'});
      workBook.SheetNames.forEach(sheet=>{
        const data = XLSX.utils.sheet_to_json(workBook.Sheets[sheet]);
        console.log(data);
        this.converted_json = JSON.stringify(data, undefined,4);
      })
      console.log(workBook);
    }
  }
}
