import { Component, OnInit } from '@angular/core';
import { MyProfileService } from '../myProfile/my-profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  successMessage;
  errorMessage;
  userEmail = sessionStorage.getItem('userEmail')
  constructor(private myProfileService: MyProfileService) { }

  ngOnInit() {
    this.successMessage = this.errorMessage = null;
    this.myProfileService.getRegisterDetails(this.userEmail).subscribe(
      data => this.successMessage = data,
      error => this.errorMessage = error.error.message
    );
  }

}
