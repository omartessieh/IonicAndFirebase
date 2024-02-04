import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firestore: Firestore) { }

  getEmployees(): Observable<Employee[]> {
    const EmployeesRef = collection(this.firestore, 'Employees');
    return collectionData(EmployeesRef, { idField: 'key' }) as Observable<Employee[]>;
  }

  getEmployeeById(key: any): Observable<Employee> {
    const employeeDocRef = doc(this.firestore, `Employees/${key}`);
    return docData(employeeDocRef, { idField: 'key' }) as Observable<Employee>;
  }

  addEmployee(employee: Employee) {
    const employeesRef = collection(this.firestore, 'Employees');
    return addDoc(employeesRef, employee);
  }

  deleteEmployee(employee: Employee) {
    const employeeDocRef = doc(this.firestore, `Employees/${employee.key}`);
    return deleteDoc(employeeDocRef);
  }

  updateEmployee(employee: Employee) {
    const employeeDocRef = doc(this.firestore, `Employees/${employee.key}`);
    return updateDoc(employeeDocRef, { title: employee.name, text: employee.email, mobile: employee.mobile, details: employee.details });
  }

}