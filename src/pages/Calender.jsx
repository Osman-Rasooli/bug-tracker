import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
const Calender = () => {
  return (
    <div>
      <header className="mt-12 md:mt-0">
        <p className="px-12 py-6 border-t-1 text-xl font-bold tracking-wider text-gray-500">
          Calendar
        </p>
      </header>
      <div className="p-2 md:px-10">
        <ScheduleComponent
          height="650px"
          eventSettings={{ dataSource: scheduleData }}
          selectedDate={new Date(2021, 0, 10)}
        >
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Calender;
