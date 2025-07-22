import { Component, OnInit } from '@angular/core';
import { ShortsService } from '../../services/shorts.service';
import { Short } from '../../models/short.model';

@Component({
  selector: 'app-shorts-list',
  templateUrl: './shorts-list.component.html',
  styleUrls: ['./shorts-list.component.css']
})
export class ShortsListComponent implements OnInit {
  shorts: Short[] = [];

  constructor(private shortsService: ShortsService) {}

  ngOnInit(): void {
    this.loadShorts();
  }

  loadShorts(): void {
    this.shortsService.getAllShorts().subscribe((data: Short[]) => {
      this.shorts = data;
    });
  }
}
