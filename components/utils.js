import { Active, DataRef, Over } from "@dnd-kit/core";
import { ColumnDragData } from "./BoardColumn";
import { TaskDragData } from "./TaskCard";

export function hasDraggableData(entry) {
  if (!entry) {
    return false;
  }

  const data = entry.data.current;

  if (data?.type === "Column" || data?.type === "Task") {
    return true;
  }

  return false;
}
