import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackofficeService } from './backoffice.service';
import { IArticles } from '../interfaces/iarticles';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss'],
})
export class BackofficeComponent {
  form!: FormGroup;
  articleData: IArticles = {
    productName: '',
    productDescription: '',
    imgUrl: '',
    productPrice: 0,
  };

  constructor(private fb: FormBuilder, private officeSvc: BackofficeService) {}

  ngOnInit() {
    this.form = this.fb.group({
      productName: this.fb.control('', [Validators.required]),
      productDescription: this.fb.control('', [Validators.required]),
      imgUrl: this.fb.control('', [Validators.required]),
      productPrice: this.fb.control('', [Validators.required]),
    });
    console.log(this.form);

    this.form.statusChanges.subscribe((status) => console.log(status));
  }

  submit(f: any) {
    this.articleData = f.value;
    console.log(this.articleData);
    this.officeSvc.upload(this.articleData).subscribe((data) => {
      console.log(data);
    });
    f.reset();
  }
}
