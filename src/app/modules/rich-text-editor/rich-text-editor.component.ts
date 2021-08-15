import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuillConfiguration } from './quill-configuration';

@Component({
  selector: 'rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent implements OnInit {
  quillConfiguration = QuillConfiguration;
  @Input() control: FormControl

  editorStyle = {
    padding: 0
  }
  ngOnInit() {
    this.control = this.control ?? new FormControl()
  }

}
