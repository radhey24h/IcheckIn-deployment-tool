import { Component, OnInit } from '@angular/core';
import { ClusterService } from '@app/core/services/cluster.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ClusterDialogComponent } from '@app/shared/dialog/cluster-dialog/cluster-dialog.component';
import { Cluster } from '@app/shared/models/cluster.model';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss']
})
export class ClusterComponent implements OnInit {
  cluster: Cluster[];
  selectedElement: any;
  displayedColumns: string[] = ['Name'];
  dataSource: any = [];
  clickedItem = null;
  isXapFileChecked: false;
  isDatabaseScriptChecked: false;
  isDocumentationChecked: false;
  newItemId = 0;

  constructor(
    private clusterService: ClusterService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  clusterForm = this.fb.group(new Cluster());

  ngOnInit() {
    this.clusterForm.disable();
    this.clusterService.getAllMachines().subscribe(data => {
      this.cluster = data.clusterMachines;
    });

  }

  selectRow(element) {
    this.clusterForm.enable();
    this.clusterForm.reset();
    element.xapFile = JSON.parse(element.xapFile);
    element.databaseScript = JSON.parse(element.databaseScript);
    element.documentation = JSON.parse(element.documentation);
    this.clusterForm.patchValue(element);
    this.isXapFileChecked = element.xapFile;
    this.isDatabaseScriptChecked = element.databaseScript;
    this.isDocumentationChecked = element.documentation;
  }

  onClick(item) {
    this.clickedItem = item;
  }

  checkXapFile(data) {
    this.isXapFileChecked = JSON.parse(data);
  }

  checkDatabaseScript(data) {
    this.isDatabaseScriptChecked = JSON.parse(data);
  }

  checkDocumentation(data) {
    this.isDocumentationChecked = JSON.parse(data);
  }

  save(form) {
    console.log('save form', form.value);
    this.clusterService.saveCluster(form.value).subscribe((result) => {
      console.log('Save result', result);
    });
  }

  cancel() {
    this.clusterForm.reset();
    this.clusterForm.disable();
    this.clickedItem = '';
  }

  addNewServer() {
    this.clusterForm.reset();
    this.resetValues();
    this.clusterForm.enable();
    const newServer: Cluster = {
      id: this.newItemId++,
      databaseScript: false,
      documentation: false,
      ip: '0.0.0.0',
      name: 'New Machine',
      port: 80,
      xapFile: false
    };
    this.clusterForm.patchValue(newServer);
    this.cluster.unshift(newServer);
    this.clickedItem = newServer.id;
  }

  resetValues(): any {
    this.isXapFileChecked = false;
    this.isDatabaseScriptChecked = false;
    this.isDocumentationChecked = false;
  }

  delete(machineId) {
    console.log('Delete Form -- ', machineId);
    this.clusterService.deleteCluster(machineId).subscribe((result) => {
      console.log('delete result', result);
      // Swal.fire('', 'The machine has been succesfully removed.', 'success');
    });
  }

  openDialog(cluster, type): void {
    const dialogRef = this.dialog.open(ClusterDialogComponent, {
      data: {cluster, type}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // saveAlert(formValue) {
  //   Swal.fire({
  //     title: 'Question?',
  //     text: 'This will save all the cluster machines. Are you sure you want to proceed?',
  //     showCancelButton: true,
  //     confirmButtonText: 'Ok',
  //     // customClass: {
  //     //   confirmButton:'btn btn-success',
  //     //   cancelButton: 'btn '
  //     // }
  //   }).then(function(data) {
  //     console.log('alert data',data) ;
  //     //if save confirm
  //     if(data.value) {
  //     }
  //   });
  // }

}



