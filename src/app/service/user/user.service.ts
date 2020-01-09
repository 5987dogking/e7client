import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { LiffService } from '../liff/liff.service';
import { MatSnackBar } from '@angular/material';

export interface SchoolUserProfile extends LIFFUserProfile {
  phone: string;
  studentId: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  schoolUserProfile: SchoolUserProfile;
  userDoc: AngularFirestoreDocument;
  constructor(
    private db: AngularFirestore,
    private liffService: LiffService,
    private snackBar: MatSnackBar,
  ) { }

  userDataGet() {
    const profile: LIFFUserProfile = this.liffService.profile;
    const channelID = this.liffService.channelID;
    console.log(`/linebot/${channelID}/users`, channelID, profile);
    this.userDoc = this.db.collection(`/linebot/${channelID}/users`).doc(profile.userId);
    this.userDoc.get().subscribe(
      (v) => {
        console.log('v', v);
        if (v.exists === false) {
          this.schoolUserProfile = {
            ...profile,
            phone: '',
            studentId: '',
            name: profile.displayName,
          };
          this.userDoc.set(this.schoolUserProfile);
        } else {
          const schoolUserProfile: SchoolUserProfile = v.data() as SchoolUserProfile;
          this.schoolUserProfile = schoolUserProfile;
        }
      }
    );
  }

  userDataSave() {
    const channelID = this.liffService.channelID;
    const min = 50801001;
    const max = 50812057;
    const studentId = this.schoolUserProfile.studentId;
    if (Number(studentId) < min || Number(studentId) > max) {
      this.snackBar.open('學號超出範圍(' + min + '~' + max + ')', '', { duration: 2000 });
      return;
    }
    this.db.collection(`/linebot/${channelID}/users`, ref => ref.where('studentId', '==', studentId)).
      get().subscribe(
        (v) => {
          if (v.docs.length > 1) {
            this.snackBar.open('該學號已經存在!', '', { duration: 2000 });
          } else {
            this.userDoc.set(this.schoolUserProfile).then((result) => {
              this.snackBar.open('更新成功', '', { duration: 2000 });
            }).catch((err) => {

            });
          }
        },
      );
  }
}
