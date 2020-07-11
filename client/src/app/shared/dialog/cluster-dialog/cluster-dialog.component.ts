import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TargetService } from '@app/core/services/target.service';
import { Target } from '@app/shared/models/target.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './cluster-dialog.component.html',
  styleUrls: ['./cluster-dialog.component.scss']
})
export class ClusterDialogComponent {
  targetList: Target[] = [];
  clickedItem: any;
  dialogModel = new Target(null, '', '', '');
  initialId = 0;
  selectedItem: Target;
  isDisable = true;

  constructor(
    public dialogRef: MatDialogRef<ClusterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private targetService: TargetService
  ) {
    this.targetService
      .getTargetByMachineId(data.cluster.id, data.type)
      .subscribe((target: any) => {
        if (target) {
          if (target.length > 1) {
            this.targetList = target;
          } else {
            this.targetList.push(target);
          }
        }
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewTarget() {
    const newTarget = { id: this.initialId++, name: 'New Path', path: '', type: '' };
    this.targetList.push(newTarget);
    this.isDisable = false;
  }

  onClick(clusterItem) {
    this.isDisable = false;
    this.clickedItem = clusterItem.id;
    this.selectedItem = clusterItem;
    this.dialogModel.name = clusterItem.name;
    this.dialogModel.path = clusterItem.path;
  }

  save(data) {
    const saveItem = this.selectedItem;
    saveItem.name = data.name;
    saveItem.path = data.path;
    console.log('saveItem ', saveItem);
    this.targetService.saveTarget(saveItem).subscribe((result) => {
      console.log('Save result', result);
    });
  }

  delete(event) {
    const deleteItem = this.selectedItem;
    deleteItem.name = event.name;
    deleteItem.path = event.path;
    console.log('deleteItem ', deleteItem);
    this.targetService.deleteTarget(deleteItem.id).subscribe((result) => {
      console.log('Save result', result);
    });
  }

}
