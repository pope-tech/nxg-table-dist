import { ModuleWithProviders } from '@angular/core';
import { DataTableTranslations } from './types/data-table-translations.type';
import { CellCallback } from './types/cell-callback.type';
import { RowCallback } from './types/row-callback.type';
import { DataTableResource } from './tools/data-table-resource';
import { DataTableParams } from './types/data-table-params.type';
import { DataTableComponent } from './components/table/table.component';
import { DataTableRowComponent } from './components/row/row.component';
import { DataTableColumnDirective } from './directives/column/column.directive';
import { DataTableHeaderComponent } from './components/header/header.component';
import { DataTablePaginationComponent } from './components/pagination/pagination.component';
export { DataTableComponent, DataTableColumnDirective, DataTableRowComponent, DataTablePaginationComponent, DataTableHeaderComponent, DataTableResource, DataTableParams, DataTableTranslations, CellCallback, RowCallback };
export declare class NgxTableModule {
    static forRoot(): ModuleWithProviders<NgxTableModule>;
}
