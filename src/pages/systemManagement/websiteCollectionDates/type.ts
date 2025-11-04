export interface WebsiteCollectionDatesResponse {
    success: boolean,
    message: string,
    data: WebsiteCollectionDatesResponseDto[]
}
export interface WebsiteCollectionDatesResponseDto {
    Account_Year?: number;
    Account_Year_To?: Date;
    Year_Aut?: number;
    data: WebsiteCollectionDatesResponsetwoDto[];
}
export interface WebsiteCollectionDatesResponsetwoDto {
    dummy_Key: number;
    to_Date?: Date;
    system_Year?: number;
    from_Date?: Date;
    jewish_Year?: string;
    year_Aut?: number;
}
