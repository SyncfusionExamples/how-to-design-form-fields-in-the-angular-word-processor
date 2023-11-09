import { Component, ViewChild } from '@angular/core';
import { DocumentEditorContainer } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  @ViewChild('documentEditor') editorObj !: DocumentEditorContainer;
  public onBtnClk(){
    this.editorObj.documentEditor.editor.insertFormField('Text');
  }

  public export(){
    console.log(this.editorObj.documentEditor.exportFormData());
  }

  public import(){
    let textFormFields = [
      {fieldName: 'Text1', value: 'Graham High'}, 
      {fieldName: 'Text2', value: 'June 6, 1990'},
      {fieldName: 'Text3', value: 'XXX'},
      {fieldName: 'Text4', value: '9433434343'}
    ];
    this.editorObj.documentEditor.importFormData(textFormFields);
  }

  public reset(){
    this.editorObj.documentEditor.resetFormFields();
  }

  public protection(){
    this.editorObj.documentEditor.editor.enforceProtection('syncfusion', 'FormFieldsOnly');
  }

  public removeProtection(){
    this.editorObj.documentEditor.editor.stopProtection('syncfusion');
  }
}
