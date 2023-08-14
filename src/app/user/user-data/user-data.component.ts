import { Component, OnInit } from '@angular/core';
import { LiffService } from 'src/app/service/liff/liff.service';
import { UserService } from 'src/app/service/user/user.service';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
declare let JOB: any;
declare let VConsole: any;
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  showCount = 0;
  // tslint:disable-next-line: variable-name
  pattern_StudentId = /^5\d{7}$/;
  // tslint:disable-next-line: variable-name
  pattern_Phone = /^09\d{8}$/;

  constructor(
    public liffService: LiffService,
    public userService: UserService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.JOBinit();
    this.getUserDataAndInit();
  }

  getUserDataAndInit() {
    this.userService.userDataGet();
  }

  showVConsole() {
    this.showCount++;
    if (this.showCount === 5) {
      const vConsole = new VConsole();
    }
    if (this.showCount > 7) {
      this.getUserDataAndInit();
    }
  }

  JOBinit() {
    JOB.Init();
    JOB.SetImageCallback((result) => {
      console.log('SetImageCallback', result);
      if (result.length !== 1 || !this.pattern_StudentId.test(result[0].Value)) {
        this.snackBar.open('解析失敗請重新拍攝或是選取照片！', '', { duration: 2000 });
      } else {
        this.userService.schoolUserProfile.studentId = result[0].Value;
      }
    });
  }

  imgSelect(eventFile) {
    const files = eventFile.target.files;
    if (files && files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        JOB.DecodeImage(fileReader.result);
      };
      fileReader.readAsDataURL(files[0]);
    }
  }

}
