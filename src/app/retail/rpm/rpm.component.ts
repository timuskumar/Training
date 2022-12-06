import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rpm',
  templateUrl: './rpm.component.html',
  styleUrls: ['./rpm.component.scss'],
})
export class RPMComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  navigateToRMS() {
    this.router.navigate(['./rms', '5'], { relativeTo: this.activatedRoute });
  }
}
