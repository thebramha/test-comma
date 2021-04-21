import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

/**
 * @title Basic Inputs
 */
@Component({
  selector: "app-component",
  styleUrls: ["app.component.css"],
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor(private _fb: FormBuilder) {}

  getData: any;
  result: any;
  ngOnInit(): void {
    this.getData = this._fb.group({
      one: [""],
      two: [""],
      three: [""]
    });
  }

  getValues() {
    return (
      this.getData.value["one"] +
      "," +
      this.getData.value["two"] +
      "," +
      this.getData.value["three"]
    );
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
