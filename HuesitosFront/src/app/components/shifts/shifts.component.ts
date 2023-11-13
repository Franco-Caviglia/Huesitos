import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShiftApiResults } from 'src/app/models/board';
import { BoardService } from 'src/app/services/board';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent {
  
    shift$: Observable<ShiftApiResults[]>;

    constructor(boardService:BoardService) {
      console.log("Ah")
      this.shift$ = boardService.getShiftAll();
      
    }
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
  


