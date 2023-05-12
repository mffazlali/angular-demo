import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploaderComponent),
      multi: true,
    },
  ],
})
export class FileUploaderComponent implements ControlValueAccessor {
  files!: FileList;
  filesInfo: { name: string }[] = [];
  filesMode = false;

  onFileSelected(event: any) {
    const fileList: FileList = event.target.files;
    this.fileReader(fileList);
    this.filesMode = true;
    this.value(fileList);
  }

  onFileDrop(event: any) {
    event.preventDefault();
    const fileList: FileList = event.dataTransfer.files;
    this.fileReader(fileList);
    this.filesMode = true;
    this.value(fileList);
  }

  fileReader(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.filesInfo.push({ name: files.item(i)?.name ?? '' });
    }
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
    const fileInput: HTMLElement = document.getElementById(
      'file-input'
    ) as HTMLElement;
    fileInput.click();
  }

  onChange: any = () => {};

  onTouch: any = () => {};

  value(val: any) {
    this.files = val;
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(obj: any): void {
    this.files = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void;
}
