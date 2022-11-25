import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/dummy";
const Kanban = () => {
  return (
    <div>
      <header className="mt-12 md:mt-0">
        <p className="px-12 py-6 border-t-1 text-xl font-bold tracking-wider text-gray-500">
          Kanban
        </p>
      </header>
      <div className="p-2 md:px-10">
        <KanbanComponent
          id="kanban"
          dataSource={kanbanData}
          cardSettings={{ contentField: "Summary", headerField: "Id" }}
          keyField="Status"
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  );
};

export default Kanban;
