import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-outside-host-element',
  templateUrl: './outside-host-element.component.html',
  styleUrls: ['./outside-host-element.component.css']
})
export class OutsideHostElementComponent implements OnInit {

  @ViewChild('template', { static: true })
  template!: TemplateRef<NgTemplateOutlet>;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

}
