import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form = this.formBuilder.group({
    inputOne: this.formBuilder.group({
      port: ['', Validators.required],
      endpoint: ['', Validators.required]
    }),
    inputTwo: this.formBuilder.group({
      port: ['', Validators.required],
      endpoint: ['', Validators.required]
    })
  });

  files = [];
  fileResponses = [];
  inputOneText;
  inputTwoText;
  loading;
  input1;
  input2;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) { }

  onSubmit() {
    console.warn(this.form.value);
    this.inputOneText = 'Hello world';
    this.inputTwoText = 'Hello World';

    this.loading = true;

    for (const file of this.files) {
      // this.http.get('http://api.plos.org/search?q=title:DNA')
      //   .subscribe(res => {
      //     this.fileResponses.push(
      //       {
      //         fileName: file.name,
      //         inputOneResponse: res,
      //         inputTwoResponse: res
      //       }
      //     );
      //   }, err => {
      //
      //   }, () => {
      //     this.loading = false;
      // });
      this.fileResponses.push(
        {
          fileName: file.name,
          inputOneResponse: this.input1,
          inputTwoResponse: this.input2
        }
      );
    }
  }

  fileChange(event) {
    if (event.target.files.length > 0) {
      for (const file of event.target.files) {
        this.files.push(file);
      }
    }
  }
}
