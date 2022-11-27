export interface SearchModel
{
  pageNo: number;
  pageSize: number;
  dateFrom: Date ;
  dateTo: Date ;
}   
  
export class CommonSearchModel
{
  // public pageNo: number=0;
  // public pageSize: number=0;
  public searchText: string = "";
} 
