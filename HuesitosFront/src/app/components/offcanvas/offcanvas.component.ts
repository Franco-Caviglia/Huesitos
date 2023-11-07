import { Component } from '@angular/core';


@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  timeOptions: string[] = [];
  ngOnInit() {
    this.generateTimeOptions();
  }

  generateTimeOptions() {
    for (let hour = 9; hour <= 17; hour++)  {
      for (let minutes = 0; minutes < 60; minutes += 30) {
        if (hour === 17 && minutes == 0) {
          break;
        }
        const time = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        this.timeOptions.push(time);
      }
    }
  }
}

