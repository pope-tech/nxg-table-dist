import { AfterContentInit, EventEmitter, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { DataTableColumnDirective } from '../../directives/column/column.directive';
import { DataTableRowComponent } from '../row/row.component';
import { DataTableParams } from '../../types/data-table-params.type';
import { RowCallback } from '../../types/row-callback.type';
import { DataTableTranslations } from '../../types/data-table-translations.type';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
export declare class DataTableComponent implements DataTableParams, OnInit, AfterContentInit, OnDestroy {
    private _items;
    private _itemCount;
    wrapperClass: any;
    items: any[];
    itemCount: number;
    columns: QueryList<DataTableColumnDirective>;
    rows: QueryList<DataTableRowComponent>;
    expandTemplate: TemplateRef<any>;
    title: string;
    showTitle: boolean;
    header: boolean;
    pagination: boolean;
    indexColumn: boolean;
    indexColumnHeader: string;
    rowColors: RowCallback;
    rowTooltip: RowCallback;
    selectColumn: boolean;
    multiSelect: boolean;
    substituteRows: boolean;
    expandableRows: boolean;
    labels: DataTableTranslations;
    selectOnRowClick: boolean;
    autoReload: boolean;
    showReloading: boolean;
    noDataMessage: string;
    pageLimits: number[];
    primaryColumn: string;
    reload: EventEmitter<{}>;
    rowClick: EventEmitter<{}>;
    rowDoubleClick: EventEmitter<{}>;
    headerClick: EventEmitter<{}>;
    cellClick: EventEmitter<{}>;
    indexColumnVisible: boolean;
    selectColumnVisible: boolean;
    expandColumnVisible: boolean;
    reloadNotification: string;
    paginationNotification: string;
    sortNotification: string;
    columnSelectorNotification: string;
    _displayParams: DataTableParams;
    subject: Subject<void>;
    subject$: Subscription;
    notifier: Subject<void>;
    notifier$: Subscription;
    selectedRow: DataTableRowComponent;
    selectedRows: DataTableRowComponent[];
    Math: any;
    id: string;
    private _selectAllCheckbox;
    private _resizeInProgress;
    resizeLimit: number;
    _reloading: boolean;
    reloading: boolean;
    private _sortBy;
    sortBy: string;
    private _sortAsc;
    sortAsc: boolean;
    private _offset;
    offset: number;
    private _limit;
    limit: number;
    page: number;
    readonly lastPage: number;
    sort(sortBy: string, asc: boolean): void;
    ngOnInit(): void;
    private _initDefaultValues();
    private _initDefaultClickEvents();
    reloadItems(): void;
    private _onReloadFinished();
    readonly displayParams: DataTableParams;
    _updateDisplayParams(): void;
    constructor();
    rowClicked(row: DataTableRowComponent, event: Event): void;
    rowDoubleClicked(row: DataTableRowComponent, event: Event): void;
    headerClicked(column: DataTableColumnDirective, event: Event): void;
    private cellClicked(column, row, event);
    private _getRemoteParameters();
    private sortColumn(column);
    readonly columnCount: number;
    getRowColor(item: any, index: number, row: DataTableRowComponent): string;
    selectAllCheckbox: boolean;
    private _onSelectAllChanged(value);
    onRowSelectChanged(row: DataTableRowComponent): void;
    readonly substituteItems: {}[];
    resizeColumnStart(event: MouseEvent, column: DataTableColumnDirective, columnElement: HTMLElement): void;
    private _isResizeInLimit(columnElement, dx);
    ngAfterContentInit(): void;
    _notify(): void;
    ngOnDestroy(): void;
}
