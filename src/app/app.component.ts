import { Component, OnInit, ViewChild} from '@angular/core';

import { CKEditorComponent } from 'ng2-ckeditor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'angular-ckeditor';
  ckeditorContent : string = "<b>CK Editor</b>";
  @ViewChild(CKEditorComponent) ckeditor!: CKEditorComponent;
  ngAfterViewChecked(){
    let editor = this.ckeditor.instance;
    editor.config.height= '400';
    editor.config.toolbarGroups = [
      {name: 'document',groups:['mode','document','doctools']},
      {name: 'clipboard',groups:['clipboard','undo']},
      {name: 'editing',groups:['find','selection','spellchecker','editing']},
      {name: 'paragraph',groups:['list','indent','blocks','align','bidi','paragraph']},
      {name: 'insert',groups:['insert']},
    ]
    editor.config.removeButtons = 'Source,Save,Templates,find,Replace,Scayt,SelectAll,Form,Radio';
  }
}
