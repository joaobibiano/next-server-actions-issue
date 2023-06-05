"use client";

import { useTransition } from "react";
import { updateAvailability } from "../cars-database";

type AvailableCheckboxProps = {
  id: number;
  isAvailable: boolean;
};

export const AvailableCheckbox = ({
  id,
  isAvailable,
}: AvailableCheckboxProps) => {
  const [isPending, startTransition] = useTransition();

  return (
    <input
      type="checkbox"
      checked={isAvailable}
      onChange={() => {
        startTransition(async () => {
          await updateAvailability(id, !isAvailable);
        });
      }}
    />
  );
};
