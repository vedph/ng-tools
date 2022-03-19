import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface Pair {
  id: string;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public objMap: any;
  public arrMap: Pair[];
  public key: string;

  public text: FormControl;
  public limit: FormControl;
  public form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    // maps
    this.objMap = {
      r: 'red',
      g: 'green',
      b: 'blue',
    };

    this.arrMap = [];
    this.arrMap.push({
      id: 'r',
      label: 'red',
    });
    this.arrMap.push({
      id: 'g',
      label: 'green',
    });
    this.arrMap.push({
      id: 'b',
      label: 'blue',
    });
    this.key = 'r';

    // form
    this.text = formBuilder.control(
      'This is a sample text, used to test the ellipsis pipe. ' +
      'You can try with different texts, or change the limit.'
    );
    this.limit = formBuilder.control(15);
    this.form = formBuilder.group({
      text: this.text,
      limit: this.limit
    });
  }
}
