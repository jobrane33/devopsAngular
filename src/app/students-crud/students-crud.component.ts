import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students-crud',
  templateUrl: './students-crud.component.html',
  styleUrls: ['./students-crud.component.css']
})
export class StudentsCrudComponent implements OnInit {
  students: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents() {
    this.http.get<any[]>('http://192.168.50.4:7070/Foyer/etudiant/findAll').subscribe(
      (data) => {
        this.students = data.map((student) => ({
          ...student,
          dateNaissance: new Date(student.dateNaissance) 
        }));
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  editStudent(student: any) {
    console.log('Edit Student:', student);
  }

  deleteStudent(studentId: number) {
    this.http.delete(`http://192.168.50.4:7070/Foyer/etudiant/${studentId}`).subscribe(
      () => {
        console.log(`Student ${studentId} deleted successfully`);
        this.fetchStudents();
      },
      (error) => {
        console.error('Error deleting student:', error);
      }
    );
  }
}
