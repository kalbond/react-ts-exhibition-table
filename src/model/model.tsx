// This will be the main model. An array of tis type is what will be expected in the fetch.
export interface Exhibition {
    id: string;
    title: string;
    short_description: string;
    gallery_title: string;
    is_featured: string;
    type: string;
    status: string;
}

// Create a Service Union with different statuses for display and loading table.
export interface ServiceInit {
    status: "init";
}
export interface ServiceLoading {
    status: "loading";
}
export interface ServiceLoaded<T> {
    status: "loaded";
    payload: T;
}
export interface ServiceError {
    status: "error";
    error: Error;
}
export type Service<T> =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;
