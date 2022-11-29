import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
  patientName=""
  patientId=""
  address=""
  contactNo=""
  dateAppointment=""
  doctorName=""

  readValues=()=>
  {
  
  let data:any={"patientId":this.patientId,"patientName":this.patientName,"address":this.address,"contactNo":this.contactNo,"dateAppointment":this.dateAppointment,"doctorName":this.doctorName}
  console.log(data)
  }
}
