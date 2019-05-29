import { User } from './../../models/user';
import { ApiService } from "./../../services/api.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "first_name",
    "last_name",
    "gender",
    "dob",
    "email",
    "phone",
    "website",
    "address",
    "status"
  ];
  // dataSource: MatTableDataSource<User>;
  dataSource: MatTableDataSource<User>;
  isLoad: boolean = false;

  allUser: User[];
  tableData = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("table") table: ElementRef;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isLoad = true;
    this.apiService.getUsers().subscribe(
      data => {
        
        this.isLoad = false;
        this.dataSource = new MatTableDataSource(data["result"]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
        this.isLoad = false;
      }
    );
  }

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
