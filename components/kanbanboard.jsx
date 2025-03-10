"use client"
import { useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BoardColumn, BoardContainer } from "./BoardColumn";
import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  KeyboardSensor,
  TouchSensor,
  MouseSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { TaskCard } from "./TaskCard";
import { hasDraggableData } from "./utils";
import { coordinateGetter } from "./multipleContainersKeyboardPreset";
import { Chart08 } from "@/app/components/chat/chart";


const defaultCols = [
  {
    id: "todo",
    title: "Sourced",
  },
  {
    id: "in-progress",
    title: "Interview",
  },
  {
    id: "done",
    title: "Shortlisted",
  },
  {
    id: "offer",
    title: "Offer",
  },
];

const initialTasks = [
  {
    id: "task1",
    columnId: "offer",
    content: "Career",
    date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-blue-600",
    textcolor : "text-blue-600 m-0"
  },
  {
    id: "task2",
    columnId: "offer",
    content: "Vendor",
     date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-green-600",
    textcolor : "text-green-600 m-0"
  },
  {
    id: "task3",
    columnId: "done",
    content: "Vendor",
     date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-green-600",
    textcolor : "text-green-600 m-0"
  },
  {
    id: "task4",
    columnId: "in-progress",
    content: "Vendor",
     date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-green-600",
    textcolor : "text-green-600 m-0"
  },
  {
    id: "task5",
    columnId: "in-progress",
    content: "Refer",
    date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-gray-600",
    textcolor : "text-gray-600 m-0"
  },
  {
    id: "task6",
    columnId: "todo",
    content: "Vendor",
     date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-green-600",
    textcolor : "text-green-600 m-0"
  },
  {
    id: "task7",
    columnId: "todo",
    content: "Vendor",
     date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-green-600",
    textcolor : "text-green-600 m-0"
  },
  {
    id: "task8",
    columnId: "todo",
    content: "Vendor",
     date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-green-600",
    textcolor : "text-green-600 m-0"
  },
  {
    id: "task9",
    columnId: "todo",
    content: "Refer",
     date : "16th Aug 2024",
   link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-gray-600",
    textcolor : "text-gray-600 m-0"
  },
  {
    id: "task10",
    columnId: "todo",
    content: "Refer",
    date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-gray-600",
    textcolor : "text-gray-600 m-0"
  },
  {
    id: "task11",
    columnId: "todo",
    content: "Refer",
     date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-gray-600",
    textcolor : "text-gray-600 m-0"
  },
  {
    id: "task12",
    columnId: "todo",
    content: "Refer",
    date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-gray-600",
    textcolor : "text-gray-600 m-0"
  },
  {
    id: "task13",
    columnId: "todo",
    content: "Refer",
    date : "16th Aug 2024",
    link : "",
    color : "border-b-0 border-t-4 border-l-0 border-r-0 border-gray-600",
    textcolor : "text-gray-600 m-0",
  },
];

export default function KanbanBoard() {
  const [columns, setColumns] = useState(defaultCols);
  const pickedUpTaskColumn = useRef(null);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const [tasks, setTasks] = useState(initialTasks);

  const [activeColumn, setActiveColumn] = useState(null);

  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: coordinateGetter,
    })
  );

  function getDraggingTaskData(taskId, columnId) {
    const tasksInColumn = tasks.filter((task) => task.columnId === columnId);
    const taskPosition = tasksInColumn.findIndex((task) => task.id === taskId);
    const column = columns.find((col) => col.id === columnId);
    return {
      tasksInColumn,
      taskPosition,
      column,
    };
  }

  const announcements = {
    onDragStart({ active }) {
      if (!hasDraggableData(active)) return;
      if (active.data.current?.type === "Column") {
        const startColumnIdx = columnsId.findIndex((id) => id === active.id);
        const startColumn = columns[startColumnIdx];
        return `Picked up Column ${startColumn?.title} at position: ${
          startColumnIdx + 1
        } of ${columnsId.length}`;
      } else if (active.data.current?.type === "Task") {
        pickedUpTaskColumn.current = active.data.current.task.columnId;
        const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
          active.id,
          pickedUpTaskColumn.current
        );
        return `Picked up Task ${
          active.data.current.task.content
        } at position: ${taskPosition + 1} of ${
          tasksInColumn.length
        } in column ${column?.title}`;
      }
    },
    onDragOver({ active, over }) {
      if (!hasDraggableData(active) || !hasDraggableData(over)) return;

      if (
        active.data.current?.type === "Column" &&
        over.data.current?.type === "Column"
      ) {
        const overColumnIdx = columnsId.findIndex((id) => id === over.id);
        return `Column ${active.data.current.column.title} was moved over ${
          over.data.current.column.title
        } at position ${overColumnIdx + 1} of ${columnsId.length}`;
      } else if (
        active.data.current?.type === "Task" &&
        over.data.current?.type === "Task"
      ) {
        const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
          over.id,
          over.data.current.task.columnId
        );
        if (over.data.current.task.columnId !== pickedUpTaskColumn.current) {
          return `Task ${
            active.data.current.task.content
          } was moved over column ${column?.title} in position ${
            taskPosition + 1
          } of ${tasksInColumn.length}`;
        }
        return `Task was moved over position ${taskPosition + 1} of ${
          tasksInColumn.length
        } in column ${column?.title}`;
      }
    },
    onDragEnd({ active, over }) {
      if (!hasDraggableData(active) || !hasDraggableData(over)) {
        pickedUpTaskColumn.current = null;
        return;
      }
      if (
        active.data.current?.type === "Column" &&
        over.data.current?.type === "Column"
      ) {
        const overColumnPosition = columnsId.findIndex((id) => id === over.id);

        return `Column ${
          active.data.current.column.title
        } was dropped into position ${overColumnPosition + 1} of ${
          columnsId.length
        }`;
      } else if (
        active.data.current?.type === "Task" &&
        over.data.current?.type === "Task"
      ) {
        const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
          over.id,
          over.data.current.task.columnId
        );
        if (over.data.current.task.columnId !== pickedUpTaskColumn.current) {
          return `Task was dropped into column ${column?.title} in position ${
            taskPosition + 1
          } of ${tasksInColumn.length}`;
        }
        return `Task was dropped into position ${taskPosition + 1} of ${
          tasksInColumn.length
        } in column ${column?.title}`;
      }
      pickedUpTaskColumn.current = null;
    },
    onDragCancel({ active }) {
      pickedUpTaskColumn.current = null;
      if (!hasDraggableData(active)) return;
      return `Dragging ${active.data.current?.type} cancelled.`;
    },
  };

  return (
    <DndContext
      accessibility={{
        announcements,
      }}
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <BoardContainer>
          
        <SortableContext items={columnsId}>
          {columns.map((col) => (
          
            <BoardColumn
              key={col.id}
              column={col}
              tasks={tasks.filter((task) => task.columnId === col.id)}
            />
          ))}
        </SortableContext>
      </BoardContainer>

      {"document" in window &&
        createPortal(
          <DragOverlay>
            {activeColumn && (
              <BoardColumn
                isOverlay
                column={activeColumn}
                tasks={tasks.filter(
                  (task) => task.columnId === activeColumn.id
                )}
              />
            )}
            {activeTask && <TaskCard task={activeTask} isOverlay />}
          </DragOverlay>,
          document.body
        )}
    </DndContext>
  );

  function onDragStart(event) {
    if (!hasDraggableData(event.active)) return;
    const data = event.active.data.current;
    if (data?.type === "Column") {
      setActiveColumn(data.column);
      return;
    }

    if (data?.type === "Task") {
      setActiveTask(data.task);
      return;
    }
  }

  function onDragEnd(event) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (!hasDraggableData(active)) return;

    const activeData = active.data.current;

    if (activeId === overId) return;

    const isActiveAColumn = activeData?.type === "Column";
    if (!isActiveAColumn) return;

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    if (!hasDraggableData(active) || !hasDraggableData(over)) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    const isActiveATask = activeData?.type === "Task";
    const isOverATask = activeData?.type === "Task";

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);
        const activeTask = tasks[activeIndex];
        const overTask = tasks[overIndex];
        if (
          activeTask &&
          overTask &&
          activeTask.columnId !== overTask.columnId
        ) {
          activeTask.columnId = overTask.columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = overData?.type === "Column";

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const activeTask = tasks[activeIndex];
        if (activeTask) {
          activeTask.columnId = overId;
          return arrayMove(tasks, activeIndex, activeIndex);
        }
        return tasks;
      });
    }
  }
}
