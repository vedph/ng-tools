import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

// https://medium.com/@tarik.nzl/making-use-of-dialogs-in-material-2-mddialog-7533d27df41

@Component({
  selector: 'ng-mat-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  public title: string;
  public prompt: string;
  public ok: string;
  public cancel: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {
    this.title = 'Confirmation';
    this.prompt = 'Confirm operation?';
    this.ok = 'yes';
    this.cancel = 'no';
  }
}
