import { UseApiQueryOptionsType } from "../types";
import { WebsiteCollectionDatesResponseDto } from "./type";

export const SystemServices = {
    getWebsiteCollectionDates1324: (

    ): UseApiQueryOptionsType => {
        return {
            url: `System/GetWebsiteCollectionDatesInfo`,
            method: 'GET'
        };
    }
};