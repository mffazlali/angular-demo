import { Component } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
  fileInfo='';

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileInfo = `Selected File: ${file.name} (${file.size} bytes)`;
  }

  onFileDrop(event: any) {
    event.preventDefault();
    const file: File = event.dataTransfer.files[0];
    this.fileInfo = `Dropped File: ${file.name} (${file.size} bytes)`;
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  browseFiles() {
    const fileInput: HTMLElement = document.getElementById('file-input') as HTMLElement;
    fileInput.click();
  }
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   this.fileInfo = `Selected File: ${file.name} (${file.size} bytes)`;
  // }

  uploadFile() {
    if (this.fileInfo) {
      // Perform file upload logic here
      // You can use services or APIs to upload the file to a server
      // Example:
      // const formData = new FormData();
      // formData.append('file', file);
      // this.uploadService.uploadFile(formData)
      //   .subscribe(response => {
      //     // Handle the response from the server
      //   }, error => {
      //     // Handle any errors that occur during the upload
      //   });
    } else {
      this.fileInfo = 'No file selected.';
    }
  }
}
