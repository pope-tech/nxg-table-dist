export class DataTableResource {
    constructor(items) {
        this.items = items;
    }
    query(params, filter) {
        let result = [];
        if (filter) {
            result = this.items.filter(filter);
        }
        else {
            result = this.items.slice(); // shallow copy to use for sorting instead of changing the original
        }
        if (params.sortBy) {
            result.sort((a, b) => {
                if (typeof a[params.sortBy] === 'string') {
                    return a[params.sortBy].localeCompare(b[params.sortBy]);
                }
                else {
                    return a[params.sortBy] - b[params.sortBy];
                }
            });
            if (params.sortAsc === false) {
                result.reverse();
            }
        }
        if (params.offset !== undefined) {
            if (params.limit === undefined) {
                result = result.slice(params.offset, result.length);
            }
            else {
                result = result.slice(params.offset, params.offset + params.limit);
            }
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result));
        });
    }
    count() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.items.length));
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdG9vbHMvZGF0YS10YWJsZS1yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFlBQW9CLEtBQVU7UUFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO0lBQzlCLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBdUIsRUFBRSxNQUF3RDtRQUVyRixJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFDckIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsbUVBQW1FO1NBQ2pHO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFrQixFQUFFLENBQWtCLEVBQUUsRUFBRTtnQkFDckQsSUFBSSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUN4QyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztpQkFDekQ7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUM1QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7U0FDRjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckQ7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwRTtTQUNGO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNILE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFUYWJsZVBhcmFtc30gZnJvbSAnLi4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG5cblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVJlc291cmNlPFQ+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1zOiBUW10pIHtcbiAgfVxuXG4gIHF1ZXJ5KHBhcmFtczogRGF0YVRhYmxlUGFyYW1zLCBmaWx0ZXI/OiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgaXRlbXM6IFRbXSkgPT4gYm9vbGVhbik6IFByb21pc2U8VFtdPiB7XG5cbiAgICBsZXQgcmVzdWx0OiBUW10gPSBbXTtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLml0ZW1zLmZpbHRlcihmaWx0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLml0ZW1zLnNsaWNlKCk7IC8vIHNoYWxsb3cgY29weSB0byB1c2UgZm9yIHNvcnRpbmcgaW5zdGVhZCBvZiBjaGFuZ2luZyB0aGUgb3JpZ2luYWxcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnNvcnRCeSkge1xuICAgICAgcmVzdWx0LnNvcnQoKGE6IERhdGFUYWJsZVBhcmFtcywgYjogRGF0YVRhYmxlUGFyYW1zKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgYVtwYXJhbXMuc29ydEJ5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gYVtwYXJhbXMuc29ydEJ5XS5sb2NhbGVDb21wYXJlKGJbcGFyYW1zLnNvcnRCeV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBhW3BhcmFtcy5zb3J0QnldIC0gYltwYXJhbXMuc29ydEJ5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocGFyYW1zLnNvcnRBc2MgPT09IGZhbHNlKSB7XG4gICAgICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJhbXMub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwYXJhbXMubGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UocGFyYW1zLm9mZnNldCwgcmVzdWx0Lmxlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UocGFyYW1zLm9mZnNldCwgcGFyYW1zLm9mZnNldCArIHBhcmFtcy5saW1pdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShyZXN1bHQpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh0aGlzLml0ZW1zLmxlbmd0aCkpO1xuICAgIH0pO1xuXG4gIH1cbn1cbiJdfQ==