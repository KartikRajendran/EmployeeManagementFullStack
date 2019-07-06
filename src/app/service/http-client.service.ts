import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getEmployees() {
    // const username = 'kartik';
    // const password = '1';

    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }


  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>('http://localhost:8080/employees' + '/' + employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>('http://localhost:8080/employees', employee);
  }
}
