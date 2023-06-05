"use server";

import { revalidatePath } from "next/cache";

type Car = {
  id: number;
  name: string;
  brand: string;
  isAvailable: boolean;
};

const cars: Car[] = [];

export async function addCar(data: FormData) {
  const name = data.get("name") as string;
  const brand = data.get("brand") as string;
  const isAvailable = data.get("isAvailable") === "on";

  const lastCarId = cars.at(-1)?.id ?? 0;

  const id = lastCarId + 1;

  cars.push({
    id,
    name,
    brand,
    isAvailable,
  });

  revalidatePath("/cars");
  return id;
}

export async function getCars() {
  return Promise.resolve(cars);
}

export async function updateAvailability(id: number, isAvailable: boolean) {
  const car = cars.find((car) => car.id === id);

  if (car) {
    car.isAvailable = isAvailable;
  }

  revalidatePath("/cars");
}
