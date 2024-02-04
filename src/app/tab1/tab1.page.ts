import { Component } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import { AlertController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  employees: any[] = [];

  constructor(private EmployeeService: EmployeeService,private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.EmployeeService.getEmployees().subscribe(res => {
      console.log(res);
      this.employees = res;
    })
   }

   openEmployee(employee: any){

   }

  //  async openNote(note: any) {
  //   const modal = await this.modalCtrl.create({
  //     component: ModalPage,
  //     componentProps: { id: note.id },
  //     breakpoints: [0, 0.5, 0.8],
  //     initialBreakpoint: 0.6
  //   });
  //   modal.present();
  // }

  // async addNote() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Add Note',
  //     inputs: [
  //       {
  //         name: 'title',
  //         placeholder: 'My cool note',
  //         type: 'text'
  //       },
  //       {
  //         name: 'text',
  //         placeholder: 'Learn ionic',
  //         type: 'textarea'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       },
  //       {
  //         text: 'Add',
  //         handler: (res) => {
  //           this.dataService.addNote({ title: res.title, text: res.text });
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

}
