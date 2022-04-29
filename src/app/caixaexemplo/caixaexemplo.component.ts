import { Output, EventEmitter, Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixaexemplo',
  templateUrl: './caixaexemplo.component.html',
  styleUrls: ['./caixaexemplo.component.css']
})
export class CaixaexemploComponent implements OnInit {
  @Input() ph: String = "de fábrica";
  @Input() re: String = "";

  @Output() clicou = new EventEmitter<{ph: String, re: String}>();

  constructor() { }

  ngOnInit(): void {
  }

  clicouNoCampo() {
    this.clicou.emit({ph: this.ph, re: this.re});
  }
}
