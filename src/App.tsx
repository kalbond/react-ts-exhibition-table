import React from "react";
import ExhibitionService from "./services/exhibitionService";
import MaterialTable from "material-table";

import "./App.css";
import { Exhibition } from "./model/model";

enum STATUS {
  CLOSED = "Closed",
  OPEN = "Open",
  CONFIRMED = "Confirmed"
}

const Exhibitions: React.FC<{}> = () => {
  // Call Service
  const exhibitionService = ExhibitionService();
  
  return (
    <div>
      {exhibitionService.status === "loading" && <div>Loading...</div>}
      {exhibitionService.status === "error" && (
        <div>Something went wrong. Please try again later.</div>
      )}
      {exhibitionService.status === "loaded" && (
        <div className="TableWrapper">
          <MaterialTable
            columns={[
              { 
                title: "Title",
                field: "title",
              },
              { 
                title: "Description",
                field: "short_description",
                render: (rowData: Exhibition) => <div className="TextWrap">{rowData.short_description}</div>,
              },
              { 
                title: "Is Featured",
                field: "is_featured",
              },
              { 
                title: "Gallery Title",
                field: "gallery_title",
              },
              { 
                title: "Type of Exhibition",
                field: "type",
              },
            ]}
            data={exhibitionService.payload}
            options={{
              sorting: true,
              pageSize: 30,
              rowStyle: (rowData) => {
                return  {backgroundColor: (rowData.status === STATUS.CLOSED) ? '#f4d5d5' : (rowData.status === STATUS.CONFIRMED) ? '#cdeac4' : 'white'}
              },
              searchFieldStyle: ({
                width: "100%",
              }),
              showTitle: false
            }}
            style={{
              fontFamily: "Roboto",
              fontSize: 14
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Exhibitions;
